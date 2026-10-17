#!/usr/bin/env python3
"""Package existing WebP bytes without transcoding; standard library only.

Generate four interleaved ORBF0001 packs per sequence, then verify every split
payload against its original. --replace deletes only verified, config-referenced
WebP files inside dist/frames. --verify is read-only and also works after removal.
--streaming adds per-frame lengths/SHA256 and orders each pack near frame zero
first. Existing, fully verified packs can supply original payloads in memory.
"""

import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import re
import struct
import sys
import tempfile


MAGIC = b"ORBF0001"
PACK_COUNT = 4
JS_PREFIX = "window.COMIC_FRAME_SEQUENCES = Object.freeze("
SHA256 = re.compile(r"[0-9a-f]{64}\Z")
PANEL_ID = re.compile(r"[A-Za-z0-9][A-Za-z0-9_-]{0,127}\Z")


def require(condition, message):
    if not condition:
        raise ValueError(message)


def digest(data):
    return hashlib.sha256(data).hexdigest()


def bound_path(dist, value, directory, suffix):
    require(isinstance(value, str) and value, "Empty resource path")
    require(not re.search(r"[\\?#%:]", value), f"Unsafe path: {value}")
    parts = PurePosixPath(value).parts
    require(len(parts) >= 2 and parts[0] == directory, f"Wrong resource root: {value}")
    require(all(part not in ("", ".", "..") for part in value.split("/")), f"Unsafe path: {value}")
    require(value.endswith(suffix), f"Unexpected resource extension: {value}")
    candidate = dist.joinpath(*parts)
    # Reject symlink components even when they happen to resolve inside dist.
    require(candidate.resolve() == candidate, f"Symlink resource path: {value}")
    require(candidate.is_relative_to(dist / directory), f"Resource escapes root: {value}")
    return candidate


def check_webp(data, source):
    require(len(data) >= 12 and data[:4] == b"RIFF" and data[8:12] == b"WEBP", f"Not WebP: {source}")
    require(struct.unpack_from("<I", data, 4)[0] + 8 == len(data), f"Invalid WebP byte length: {source}")


def load_config(dist):
    json_path, js_path = dist / "frame-sequences.json", dist / "frame-sequences.js"
    require(not json_path.is_symlink() and not js_path.is_symlink(), "Config cannot be a symlink")
    config = json.loads(json_path.read_text(encoding="utf-8-sig"))
    js = js_path.read_text(encoding="utf-8-sig").strip()
    require(js.startswith(JS_PREFIX) and js.endswith(");"), "Unexpected frame-sequences.js wrapper")
    require(json.loads(js[len(JS_PREFIX):-2]) == config, "JSON and JS configs disagree")
    require(config.get("schemaVersion") == 1, "Expected existing schemaVersion 1")
    require(isinstance(config.get("entries"), list) and config["entries"], "No sequences")
    panel_ids, sources = set(), set()
    for entry in config["entries"]:
        panel = entry.get("panelId")
        require(isinstance(panel, str) and PANEL_ID.fullmatch(panel), "Invalid panelId")
        require(panel not in panel_ids, f"Duplicate panelId: {panel}")
        panel_ids.add(panel)
        require(isinstance(entry.get("mediaSha256"), str) and SHA256.fullmatch(entry["mediaSha256"]), f"Invalid media SHA: {panel}")
        require(type(entry.get("frameCount")) is int and entry["frameCount"] > 0, f"Invalid frame count: {panel}")
        require(isinstance(entry.get("frames"), list) and len(entry["frames"]) == entry["frameCount"], f"Wrong frame list: {panel}")
        for source in entry["frames"]:
            bound_path(dist, source, "frames", ".webp")
            require(source not in sources, f"Duplicate source frame: {source}")
            sources.add(source)
    return config


def pack_source(entry, ordinal):
    return f"frame-packs/{entry['panelId']}-{entry['mediaSha256'][:12]}/{ordinal:03d}.orbf"


def pack_indices(entry, ordinal, streaming=False):
    indices = list(range(ordinal, entry["frameCount"], PACK_COUNT))
    if streaming:
        indices.sort(key=lambda index: (min(index, entry["frameCount"] - index), index))
    return indices


def atomic_write(path, data, dist):
    require(path.is_relative_to(dist) and path.resolve() == path, f"Unsafe output: {path}")
    path.parent.mkdir(parents=True, exist_ok=True)
    require(path.parent.resolve() == path.parent, f"Symlink output directory: {path.parent}")
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(mode="wb", prefix=path.name + ".", suffix=".packing-tmp", dir=path.parent, delete=False) as handle:
            temporary = Path(handle.name)
            handle.write(data)
        temporary.replace(path)
    finally:
        if temporary is not None and temporary.exists():
            temporary.unlink()


def generate_entry(dist, entry, recovered=None, streaming=False):
    records = []
    for ordinal in range(PACK_COUNT):
        indices = pack_indices(entry, ordinal, streaming)
        payloads = []
        for index in indices:
            source = entry["frames"][index]
            data = recovered[index] if recovered is not None else bound_path(dist, source, "frames", ".webp").read_bytes()
            check_webp(data, source)
            require(len(data) <= 0xFFFFFFFF, f"Frame too large: {source}")
            payloads.append(data)
        table = b"".join(struct.pack("<II", index, len(data)) for index, data in zip(indices, payloads))
        blob = MAGIC + struct.pack("<I", len(indices)) + table + b"".join(payloads)
        source = pack_source(entry, ordinal)
        atomic_write(bound_path(dist, source, "frame-packs", ".orbf"), blob, dist)
        records.append({"source": source, "sha256": digest(blob), "byteLength": len(blob), "indices": indices,
                        "frameBytes": [len(data) for data in payloads],
                        "frameSha256": [digest(data) for data in payloads]})
    entry["packs"] = records


def read_entry(dist, entry, original_frames=None, require_streaming=False):
    """Validate complete old/new packs before exposing any recovered payload."""
    packs = entry.get("packs")
    require(isinstance(packs, list) and len(packs) == PACK_COUNT, f"Expected four packs: {entry['panelId']}")
    recovered, proofs, pack_bytes, reference_count = {}, {}, 0, 0
    for ordinal, record in enumerate(packs):
        source = pack_source(entry, ordinal)
        require(record.get("source") == source, f"Unexpected pack path: {entry['panelId']}")
        indices = record.get("indices")
        ascending, angular = pack_indices(entry, ordinal), pack_indices(entry, ordinal, True)
        require(isinstance(indices, list) and all(type(index) is int for index in indices), f"Invalid pack indices: {source}")
        require(indices == angular if require_streaming else indices in (ascending, angular), f"Wrong pack index coverage/order: {source}")
        has_metadata = "frameBytes" in record or "frameSha256" in record
        require(not require_streaming or has_metadata, f"Missing streaming frame metadata: {source}")
        if has_metadata:
            lengths, hashes = record.get("frameBytes"), record.get("frameSha256")
            require(isinstance(lengths, list) and len(lengths) == len(indices) and all(type(value) is int and value > 0 for value in lengths), f"Invalid frameBytes: {source}")
            require(isinstance(hashes, list) and len(hashes) == len(indices) and all(isinstance(value, str) and SHA256.fullmatch(value) for value in hashes), f"Invalid frameSha256: {source}")
        require(isinstance(record.get("sha256"), str) and SHA256.fullmatch(record["sha256"]), f"Invalid pack SHA: {source}")
        blob = bound_path(dist, source, "frame-packs", ".orbf").read_bytes()
        require(type(record.get("byteLength")) is int and record["byteLength"] == len(blob), f"Wrong pack byteLength: {source}")
        require(digest(blob) == record["sha256"], f"Pack SHA mismatch: {source}")
        require(len(blob) >= 12 and blob[:8] == MAGIC, f"Wrong pack magic: {source}")
        count = struct.unpack_from("<I", blob, 8)[0]
        require(count == len(indices), f"Wrong pack frame count: {source}")
        offset = 12 + count * 8
        require(offset <= len(blob), f"Truncated pack table: {source}")
        for item, expected_index in enumerate(indices):
            index, length = struct.unpack_from("<II", blob, 12 + item * 8)
            require(index == expected_index and index not in recovered and length > 0 and offset + length <= len(blob), f"Invalid pack row: {source}")
            payload = blob[offset:offset + length]
            original = entry["frames"][index]
            check_webp(payload, original)
            payload_sha = digest(payload)
            if has_metadata:
                require(length == lengths[item] and payload_sha == hashes[item], f"Frame metadata mismatch: {original}")
            original_path = bound_path(dist, original, "frames", ".webp")
            if original_path.exists():
                require(original_path.is_file(), f"Not a source file: {original}")
                require(payload == original_path.read_bytes(), f"Split frame differs from original: {original}")
                proofs[original] = payload_sha
            if original_frames is not None:
                reference = original_frames.joinpath(*PurePosixPath(original).parts[1:])
                require(reference.resolve() == reference and reference.is_relative_to(original_frames), f"Unsafe reference: {original}")
                require(reference.is_file() and payload == reference.read_bytes(), f"Split frame differs from reference cache: {original}")
                reference_count += 1
            recovered[index] = payload
            offset += length
        require(offset == len(blob), f"Trailing pack payload: {source}")
        pack_bytes += len(blob)
    require(sorted(recovered) == list(range(entry["frameCount"])), f"Incomplete or duplicate coverage: {entry['panelId']}")
    return recovered, proofs, pack_bytes, reference_count


def verify(dist, config, original_frames=None, require_streaming=False):
    proofs, pack_bytes, payload_bytes, frame_count, reference_count = {}, 0, 0, 0, 0
    for entry in config["entries"]:
        recovered, entry_proofs, size, compared = read_entry(dist, entry, original_frames, require_streaming)
        proofs.update(entry_proofs)
        pack_bytes += size
        payload_bytes += sum(len(data) for data in recovered.values())
        frame_count += len(recovered)
        reference_count += compared
    return {"sequences": len(config["entries"]), "packs": len(config["entries"]) * PACK_COUNT,
            "frames": frame_count, "originalFramesCompared": len(proofs), "referenceFramesCompared": reference_count,
            "payloadBytes": payload_bytes, "packBytes": pack_bytes,
            "packOverheadBytes": pack_bytes - payload_bytes}, proofs


def remove_verified_sources(dist, proofs):
    frames_root = dist / "frames"
    require(frames_root.is_absolute() and frames_root.resolve() == frames_root, "Unsafe frames directory")
    removed = 0
    for source, expected_sha in sorted(proofs.items()):
        path = bound_path(dist, source, "frames", ".webp")
        require(path.is_absolute() and path.is_relative_to(frames_root) and path != frames_root, f"Unsafe deletion: {path}")
        require(path.is_file() and not path.is_symlink(), f"Unsafe deletion target: {path}")
        require(digest(path.read_bytes()) == expected_sha, f"Source changed after verification: {source}")
        path.unlink()  # Deliberately no recursive deletion or directory cleanup.
        removed += 1
    return removed


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dist", type=Path, default=Path(__file__).resolve().parents[1] / "dist")
    parser.add_argument("--replace", action="store_true", help="Delete only config-referenced originals after complete pack verification")
    parser.add_argument("--verify", action="store_true", help="Read-only verification of existing packs and any remaining originals")
    parser.add_argument("--streaming", action="store_true", help="Add frame lengths/SHA256 and order each pack by distance from frame zero")
    parser.add_argument("--original-frames", type=Path, help="Optional retained original frames directory for byte-for-byte verification")
    args = parser.parse_args()
    require(not (args.verify and args.replace), "--verify cannot be combined with --replace")
    dist = args.dist.resolve(strict=True)
    require(dist.is_dir() and dist.is_absolute(), "Expected an absolute dist directory")
    config = load_config(dist)
    original_frames = args.original_frames.resolve(strict=True) if args.original_frames is not None else None
    require(original_frames is None or original_frames.is_dir(), "Expected a retained original frames directory")
    if not args.verify:
        plans = []
        # Check every input pack before overwriting any pack. Legacy ascending
        # packs are accepted here, but their hash/table/WebP bytes must all pass.
        for entry in config["entries"]:
            present = [bound_path(dist, source, "frames", ".webp").is_file() for source in entry["frames"]]
            require(all(present) or "packs" in entry, f"Originals missing and no existing packs: {entry['panelId']}")
            if "packs" in entry:
                read_entry(dist, entry, original_frames)
            plans.append((entry, all(present)))
        for entry, complete_sources in plans:
            ready = "packs" in entry and all(record.get("indices") == pack_indices(entry, ordinal, args.streaming)
                         and "frameBytes" in record and "frameSha256" in record for ordinal, record in enumerate(entry["packs"]))
            if ready:
                continue
            recovered = None if complete_sources else read_entry(dist, entry, original_frames)[0]
            generate_entry(dist, entry, recovered, args.streaming)
        # Verify every pack and every available original before config writes/deletion.
        verify(dist, config, original_frames, args.streaming)
        serialized = json.dumps(config, ensure_ascii=False, indent=2)
        atomic_write(dist / "frame-sequences.json", (serialized + "\n").encode("utf-8"), dist)
        atomic_write(dist / "frame-sequences.js", (JS_PREFIX + serialized + ");\n").encode("utf-8"), dist)
        config = load_config(dist)
    summary, proofs = verify(dist, config, original_frames, args.streaming)
    summary["removedOriginalFrames"] = remove_verified_sources(dist, proofs) if args.replace else 0
    if args.replace:
        verify(dist, config, original_frames, args.streaming)
    summary.update(verified=True, streaming=args.streaming, mode="verify" if args.verify else "replace" if args.replace else "generate", dist=str(dist))
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, KeyError, TypeError, struct.error) as error:
        print(f"Frame packaging failed: {error}", file=sys.stderr)
        sys.exit(1)
