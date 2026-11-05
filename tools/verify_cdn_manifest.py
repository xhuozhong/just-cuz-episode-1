"""Require exact current-packet coverage before enabling the static mirror."""
import hashlib,json,re
from pathlib import Path

ORIGIN='https://just-cuz-episode-1-mirror.xhuozhong.workers.dev/'

def packet_summary(inventory):
    packets={}
    for row in inventory['files']:
        if not row['source'].startswith(('frame-packs/','preview-packs/')):continue
        checksum=row['sha256'];size=row['bytes']
        assert re.fullmatch('[a-f0-9]{64}',checksum) and isinstance(size,int) and 0<size<=25*1024*1024
        assert checksum not in packets or packets[checksum]==size
        packets[checksum]=size
    assert packets
    canonical=json.dumps(sorted(packets.items()),separators=(',',':')).encode()
    return {'uniquePackets':len(packets),'packetBytes':sum(packets.values()),
            'packetInventorySha256':hashlib.sha256(canonical).hexdigest()}

def verify(repo,inventory):
    proof=json.loads((Path(repo)/'docs/collection-cdn-deployment.json').read_bytes())
    assert proof['schemaVersion']==1 and proof['status']=='deployed-and-verified'
    assert proof['origin']==ORIGIN and proof['workerName']=='just-cuz-episode-1-mirror'
    assert re.fullmatch('[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}',proof['versionId'])
    assert proof['staticOnly'] is True and proof['retainedPreviousPackets'] is True
    assert proof['currentMedia']==packet_summary(inventory),'Mirror needs synchronization before publishing changed media'
    assert proof['cors']=='*' and proof['cacheControl']=='public, max-age=31536000, immutable, no-transform'
    packets={row['sha256']:row['bytes'] for row in inventory['files'] if row['source'].startswith(('frame-packs/','preview-packs/'))}
    checks=proof['remoteHeaderChecks']
    assert len(checks)==len(packets) and len({r['sha256'] for r in checks})==len(packets)
    for row in checks:
        assert row['httpStatus']==200 and row['sha256'] in packets
        assert row['contentType']=='application/octet-stream'
        # RFC 9110 permits HEAD to omit Content-Length. Absence is not a zero
        # length body and does not count as a full-body integrity observation.
        if row['bytes'] is not None:assert row['bytes']==packets[row['sha256']]
        assert row['cors']==proof['cors'] and row['cacheControl']==proof['cacheControl']
    assert len(proof['remoteBodyChecks'])>=4
    assert len({r['actualSha256'] for r in proof['remoteBodyChecks']})==len(proof['remoteBodyChecks'])
    for row in proof['remoteBodyChecks']:
        assert row['httpStatus']==200 and row['expectedSha256']==row['actualSha256']
        assert re.fullmatch('[a-f0-9]{64}',row['actualSha256'])
        assert row['expectedBytes']==row['actualBytes']>0
        assert row['actualBytes']==packets[row['actualSha256']]
    return ORIGIN

if __name__=='__main__':
    repo=Path(__file__).resolve().parents[1]
    print(verify(repo,json.loads((repo/'docs/collection-active-assets.json').read_bytes())))
