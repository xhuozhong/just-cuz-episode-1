"""Publish only the complete, reviewed Pages file map without rebundling media."""
import argparse
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import shutil
import urllib.request

REPO = Path(__file__).resolve().parents[1]


def digest(raw):
    return hashlib.sha256(raw).hexdigest()


def safe(root, name):
    relative = PurePosixPath(name)
    assert name and not relative.is_absolute() and '..' not in relative.parts and '\\' not in name, name
    result = root.joinpath(*relative.parts)
    assert result.resolve().is_relative_to(root.resolve()) and not result.is_symlink(), name
    return result


def check_remote_assets(spec):
    assert spec['assetBase'] == 'https://xhuozhong.github.io/just-cuz-orbit-assets/'
    for name, expected in spec['externalAssets'].items():
        safe(Path('/immutable-assets'), name)
        url = spec['assetBase'] + name
        request = urllib.request.Request(url, headers={'Accept-Encoding': 'identity', 'User-Agent': 'JustCuz-verified-pages-build'})
        with urllib.request.urlopen(request, timeout=45) as response:
            raw = response.read()
            assert response.status == 200 and len(raw) == expected['bytes'] and digest(raw) == expected['sha256'], name
        end = min(len(raw), 65536) - 1
        request = urllib.request.Request(url, headers={'Range': f'bytes=0-{end}', 'Accept-Encoding': 'identity', 'User-Agent': 'JustCuz-verified-pages-build'})
        with urllib.request.urlopen(request, timeout=45) as response:
            assert response.status == 206 and response.headers['Content-Range'] == f'bytes 0-{end}/{len(raw)}', name
            assert response.read() == raw[:end + 1], name
    return len(spec['externalAssets'])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=REPO / 'dist')
    parser.add_argument('--output', type=Path, default=REPO / '_site')
    parser.add_argument('--verify-only', action='store_true')
    parser.add_argument('--skip-remote-assets', action='store_true', help='Local prepublication verification only; the deployment workflow never passes this flag')
    args = parser.parse_args()
    spec_raw = (REPO / 'docs/pages-release-manifest.json').read_bytes()
    spec = json.loads(spec_raw)
    assert spec['schemaVersion'] == 1 and spec['candidate'] == 'Q297-clean-panel-controls'
    source = args.source.resolve(strict=True)
    records = spec['files']
    assert records and sum(row['bytes'] for row in records.values()) < spec['maxSiteBytes'] == 1_000_000_000
    for name, expected in records.items():
        raw = safe(source, name).read_bytes()
        assert len(raw) == expected['bytes'] and digest(raw) == expected['sha256'], 'Unreviewed source: ' + name
    remote_count = 0 if args.skip_remote_assets else check_remote_assets(spec)
    if not args.verify_only:
        output = args.output.resolve()
        assert output.is_relative_to(REPO) and output != REPO and not output.is_relative_to(REPO / 'dist')
        assert not output.exists() or not any(output.iterdir()), 'Output must be a fresh empty directory'
        output.mkdir(parents=True, exist_ok=True)
        for name, expected in records.items():
            origin, target = safe(source, name), safe(output, name)
            target.parent.mkdir(parents=True, exist_ok=True)
            try:
                os.link(origin, target)
            except OSError:
                shutil.copyfile(origin, target)
            raw = target.read_bytes()
            assert len(raw) == expected['bytes'] and digest(raw) == expected['sha256'], name
        actual = {p.relative_to(output).as_posix() for p in output.rglob('*') if p.is_file()}
        assert actual == set(records), 'Unreviewed artifact paths'
    print(json.dumps({'candidate': spec['candidate'], 'files': len(records), 'siteBytes': sum(row['bytes'] for row in records.values()), 'manifestSHA256': digest(spec_raw), 'remoteAssetPayloadsVerified': remote_count, 'exactReviewedArtifact': True, 'historicalGitPathsDeleted': 0}))


if __name__ == '__main__':
    main()
