#!/usr/bin/env python3
"""Verify the shipped preview packets and media bindings without dependencies."""
import hashlib
import json
import math
from pathlib import Path
import struct

dist=Path(__file__).resolve().parents[1]/'dist'
book=json.loads((dist/'manifest.json').read_bytes())
source=(dist/'preview-sequences.js').read_text(encoding='utf-8')
start=source.index('const data = ')+len('const data = ')
data=json.loads(source[start:source.index(';\n',start)])
assert data['schemaVersion']==1
panels={panel['id']:(page,panel) for page in book['pages'] for panel in page['panels']}
assert len(data['entries'])==len(panels)
seen=set();total=0;frames=0
for entry in data['entries']:
    identifier=entry['panelId'];assert identifier not in seen;seen.add(identifier)
    page,panel=panels[identifier];media=panel['actualMedia']
    assert entry['sourcePageSha256']==page['sha256'] and entry['mediaSha256']==media['sha256']
    assert entry['videoSource']==panel['video'] and entry['frameCount']==media['frameCount']
    assert entry['sourceWidth']==media['width'] and entry['sourceHeight']==media['height'] and entry['duration']==media['duration']
    width,height=entry['width'],entry['height'];assert 0<width<=480 and 0<height<=480
    assert abs((width/height)/(media['width']/media['height'])-1)<.003
    indices=entry['indices'];count=len(indices);assert count in (24,32) and len(set(indices))==count
    assert sorted(indices)==sorted(math.floor(k*media['frameCount']/count+.5) for k in range(count))
    pack=entry['pack'];assert pack['indices']==indices and len(pack['frameBytes'])==len(pack['frameSha256'])==count
    relative=Path(pack['source']);assert relative.parts[0]=='preview-packs' and relative.suffix=='.orbf' and '..' not in relative.parts and not relative.is_absolute()
    packet=(dist/relative).read_bytes();assert len(packet)==pack['byteLength'] and hashlib.sha256(packet).hexdigest()==pack['sha256']
    assert packet[:8]==b'ORBF0001' and struct.unpack_from('<I',packet,8)[0]==count
    offset=12+8*count
    for row,index in enumerate(indices):
        actual,length=struct.unpack_from('<II',packet,12+row*8);assert actual==index and length==pack['frameBytes'][row]
        payload=packet[offset:offset+length];offset+=length
        assert hashlib.sha256(payload).hexdigest()==pack['frameSha256'][row]
        assert payload[:4]==b'RIFF' and payload[8:12]==b'WEBP' and struct.unpack_from('<I',payload,4)[0]+8==length
        kind=payload[12:16]
        if kind==b'VP8 ':
            assert payload[23:26]==b'\x9d\x01\x2a'
            actual_size=(struct.unpack_from('<H',payload,26)[0]&0x3fff,struct.unpack_from('<H',payload,28)[0]&0x3fff)
        elif kind==b'VP8L':
            assert payload[20]==47;bits=struct.unpack_from('<I',payload,21)[0]
            actual_size=((bits&0x3fff)+1,((bits>>14)&0x3fff)+1)
        else:
            assert kind==b'VP8X'
            actual_size=(int.from_bytes(payload[24:27],'little')+1,int.from_bytes(payload[27:30],'little')+1)
        assert actual_size==(width,height)
    assert offset==len(packet)
    total+=len(packet);frames+=count
print(json.dumps({'verified':True,'panels':len(seen),'previewFrames':frames,'bytes':total}))
