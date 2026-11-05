"""Keep unchanged frame URLs stable across reader-only publications."""
import hashlib, json, re
from pathlib import Path

REPOSITORY = 'xhuozhong/just-cuz-episode-1'

def media_rows(inventory):
    rows = [[r['source'], r['bytes'], r['sha256']] for r in inventory['files']
            if r['source'].startswith(('frame-packs/', 'preview-packs/'))
            or r['source'] == 'delivery-probe.bin']
    assert rows and len({r[0] for r in rows}) == len(rows)
    return sorted(rows)

def inventory_digest(inventory):
    return hashlib.sha256(json.dumps(media_rows(inventory), separators=(',', ':')).encode()).hexdigest()

def verify(repo, inventory):
    pin = json.loads((Path(repo)/'docs/collection-media-origin.json').read_bytes())
    assert pin['schemaVersion'] == 1 and pin['status'] == 'git-source-verified'
    assert pin['repository'] == REPOSITORY and pin['sourcePrefix'] == 'dist/collection/'
    assert re.fullmatch('[a-f0-9]{40}', pin['commit'])
    assert re.fullmatch('[a-f0-9]{40}', pin['remoteTreeSha'])
    assert pin['mediaPathCount'] == len(media_rows(inventory)) == pin['verifiedGitBlobCount']
    assert pin['mediaInventorySha256'] == inventory_digest(inventory), 'Changed media requires a newly verified source commit'
    return f"https://raw.githubusercontent.com/{REPOSITORY}/{pin['commit']}/dist/collection/"

if __name__ == '__main__':
    repo = Path(__file__).resolve().parents[1]
    print(verify(repo, json.loads((repo/'docs/collection-active-assets.json').read_bytes())))
