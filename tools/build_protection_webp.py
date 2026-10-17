#!/usr/bin/env python3
"""Create exact-RGBA WebP derivatives without changing accepted PNG sources."""
import argparse
from io import BytesIO
import hashlib
import json
from pathlib import Path
import re

from PIL import Image


def sha(data):
    return hashlib.sha256(data).hexdigest()


def local_file(root, value):
    if not isinstance(value, str) or not value or re.search(r'[:?#%\\\x00-\x20]', value):
        raise ValueError('Invalid local asset path')
    target = (root / value).resolve()
    target.relative_to(root.resolve())
    return target


def create(dist, canonical=None, reuse_audit=None):
    manifest_bytes = (dist / 'manifest.json').read_bytes()
    manifest = json.loads(manifest_bytes)
    samples = {}
    if reuse_audit:
        audit = json.loads(reuse_audit.read_text(encoding='utf-8'))
        assert audit['summary']['allPixelsExact'], 'Audit contains nonexact derivatives'
        samples = {entry['source']: entry for entry in audit['protectionFiles']}
    entries, assets, original_assets = [], {}, {}
    for page in manifest['pages']:
        for panel in page.get('panels', []):
            original = panel['protectionOverlay']
            source = local_file(dist, original['source'])
            png = source.read_bytes()
            assert sha(png) == original['sha256'], 'Accepted protection PNG changed'
            with Image.open(BytesIO(png)) as image:
                rgba = image.convert('RGBA')
                assert rgba.size == (original['width'], original['height'])
                if original['source'] in samples:
                    sample = samples[original['source']]
                    assert sample['sourceSHA256'] == original['sha256']
                    # The optional work audit records workspace-relative sample paths.
                    candidate = (reuse_audit.parent.parent / sample['sample']).resolve()
                    webp = candidate.read_bytes()
                    assert sha(webp) == sample['webpSHA256']
                else:
                    output = BytesIO()
                    options = dict(format='WEBP', lossless=True, quality=100, method=6, exact=True)
                    for key in ('icc_profile', 'exif'):
                        if image.info.get(key):
                            options[key] = image.info[key]
                    rgba.save(output, **options)
                    webp = output.getvalue()
                with Image.open(BytesIO(webp)) as decoded:
                    assert decoded.format == 'WEBP' and decoded.size == rgba.size
                    assert decoded.convert('RGBA').tobytes() == rgba.tobytes(), 'RGBA pixels changed'
                checksum = sha(webp)
                name = f'publication-webp/protection-{checksum}.webp'
                entry = {
                    'panelId': panel['id'], 'sourcePageSha256': page['sha256'],
                    'mediaSha256': panel['actualMedia']['sha256'],
                    'originalSource': original['source'], 'originalSha256': original['sha256'],
                    'originalByteLength': len(png), 'width': rgba.width, 'height': rgba.height,
                    'source': name, 'sha256': checksum, 'byteLength': len(webp),
                    'rgbaSha256': sha(rgba.tobytes()),
                }
                entries.append(entry)
                assets[name] = webp
                original_assets[original['source']] = len(png)
                for target_root in [dist] + ([canonical] if canonical else []):
                    destination = local_file(target_root, name)
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    if destination.exists():
                        assert destination.read_bytes() == webp, 'Immutable derivative collision'
                    else:
                        destination.write_bytes(webp)
    config = {'schemaVersion': 1, 'encoding': 'webp-lossless-exact', 'coordinateSpace': 'source-panel', 'entries': entries}
    script = ('(() => {\n  "use strict";\n  const data = ' + json.dumps(config, ensure_ascii=False, separators=(',', ':'))
              + ';\n  data.entries.forEach(Object.freeze);\n  Object.freeze(data.entries);\n  window.COMIC_PROTECTION_RESOURCES = Object.freeze(data);\n})();\n').encode('utf-8')
    for target_root in [dist] + ([canonical] if canonical else []):
        (target_root / 'protection-resources.js').write_bytes(script)
    assert (dist / 'manifest.json').read_bytes() == manifest_bytes
    total_png = sum(original_assets.values())
    webp_total = sum(map(len, assets.values()))
    return {'schemaVersion': 1, 'encoding': config['encoding'], 'panels': len(entries), 'uniqueDerivatives': len(assets),
            'uniqueOriginalSources': len(original_assets), 'perSceneWebpBytes': sum(entry['byteLength'] for entry in entries),
            'sourcePNGBytes': total_png, 'webpBytes': webp_total, 'savedBytes': total_png-webp_total,
            'reductionPercent': round((1-webp_total/total_png)*100, 4), 'allRGBAPixelsExact': True,
            'resourceScriptSHA256': sha(script), 'resourceScriptBytes': len(script), 'entries': entries}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--dist', type=Path, default=Path(__file__).resolve().parents[1] / 'dist')
    parser.add_argument('--canonical', type=Path)
    parser.add_argument('--reuse-audit', type=Path)
    parser.add_argument('--report', type=Path)
    args = parser.parse_args()
    report = create(args.dist.resolve(strict=True), args.canonical.resolve(strict=True) if args.canonical else None,
                    args.reuse_audit.resolve(strict=True) if args.reuse_audit else None)
    if args.report:
        args.report.write_text(json.dumps(report, indent=2, ensure_ascii=False)+'\n', encoding='utf-8')
    print(json.dumps({key:value for key,value in report.items() if key!='entries'}, indent=2))


if __name__ == '__main__':
    main()
