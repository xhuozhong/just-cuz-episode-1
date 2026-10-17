#!/usr/bin/env python3
"""Build small angular previews from existing verified HD frame payloads."""
import argparse
from concurrent.futures import ThreadPoolExecutor
from io import BytesIO
import hashlib
import json
import math
from pathlib import Path
import struct
from PIL import Image

MAGIC = b'ORBF0001'
COUNT = 24
SAMPLE_ORDER = [0,12,6,18,3,15,9,21,1,13,7,19,4,16,10,22,2,14,8,20,5,17,11,23]
def sha(data): return hashlib.sha256(data).hexdigest()
def local(root, source):
    assert isinstance(source,str) and not any(c in source for c in ':?#%\\')
    path = (root/source).resolve()
    path.relative_to(root)
    return path
def process(dist, binding):
    entry, page, panel = binding
    indices = [math.floor(k*entry['frameCount']/COUNT+0.5) for k in SAMPLE_ORDER]
    assert len(set(indices)) == COUNT and all(0<=i<entry['frameCount'] for i in indices)
    wanted = set(indices)
    payloads = {}
    for pack in entry['packs']:
        data = local(dist,pack['source']).read_bytes()
        assert len(data)==pack['byteLength'] and sha(data)==pack['sha256']
        assert data[:8]==MAGIC
        count=struct.unpack_from('<I',data,8)[0]
        assert count==len(pack['indices'])
        offset=12+count*8
        for ordinal in range(count):
            index,length=struct.unpack_from('<II',data,12+ordinal*8)
            assert index==pack['indices'][ordinal] and length==pack['frameBytes'][ordinal]
            frame=data[offset:offset+length];offset+=length
            assert len(frame)==length and sha(frame)==pack['frameSha256'][ordinal]
            if index in wanted: payloads[index]=frame
        assert offset==len(data)
    assert set(payloads)==wanted
    scale=min(1,480/max(entry['width'],entry['height']))
    width=max(1,math.floor(entry['width']*scale+0.5));height=max(1,math.floor(entry['height']*scale+0.5))
    output=[]
    source_proofs=[]
    for index in indices:
        with Image.open(BytesIO(payloads[index])) as source:
            assert source.size==(entry['width'],entry['height']) and source.format=='WEBP'
            image=source.convert('RGB').resize((width,height),Image.Resampling.LANCZOS)
            stream=BytesIO();image.save(stream,format='WEBP',quality=65,method=5)
            frame=stream.getvalue()
        with Image.open(BytesIO(frame)) as decoded:
            assert decoded.format=='WEBP' and decoded.size==(width,height)
        output.append(frame)
        source_proofs.append({'index':index,'verifiedHDFrameSHA256':sha(payloads[index]),'previewSHA256':sha(frame)})
    data=MAGIC+struct.pack('<I',COUNT)+b''.join(struct.pack('<II',i,len(frame)) for i,frame in zip(indices,output))+b''.join(output)
    source=f"preview-packs/{entry['panelId']}-{entry['mediaSha256'][:12]}/000.orbf"
    pack={'source':source,'sha256':sha(data),'byteLength':len(data),'indices':indices,'frameBytes':list(map(len,output)),'frameSha256':list(map(sha,output))}
    preview={key:entry[key] for key in ('panelId','sourcePageSha256','mediaSha256','videoSource','frameCount','sourceWidth','sourceHeight','duration')}
    preview.update(width=width,height=height,indices=indices,pack=pack)
    target=local(dist,source);target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data)
    return preview,{'panelId':entry['panelId'],'sourcePage':page['sourcePage'],'previewBytes':len(data),'fullAngleBytes':sum(p['byteLength'] for p in entry['packs']),'width':width,'height':height,'frames':COUNT,'frameSourceProofs':source_proofs}
def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--dist',type=Path,default=Path(__file__).resolve().parents[1]/'dist')
    parser.add_argument('--canonical',type=Path)
    parser.add_argument('--report',type=Path)
    args=parser.parse_args();dist=args.dist.resolve(strict=True)
    config=json.loads((dist/'frame-sequences.json').read_bytes());book=json.loads((dist/'manifest.json').read_bytes())
    original_hashes={p:sha((dist/p).read_bytes()) for p in ('manifest.json','manifest.js','frame-sequences.json','frame-sequences.js')}
    bindings=[]
    for entry in config['entries']:
        matches=[(page,panel) for page in book['pages'] for panel in page['panels'] if panel['id']==entry['panelId']]
        assert len(matches)==1
        page,panel=matches[0]
        assert entry['mediaSha256']==panel['actualMedia']['sha256'] and entry['sourcePageSha256']==page['sha256']
        assert entry['videoSource']==panel['video'] and entry['frameCount']==panel['actualMedia']['frameCount']
        bindings.append((entry,page,panel))
    with ThreadPoolExecutor(max_workers=4) as pool: results=list(pool.map(lambda b:process(dist,b),bindings))
    data={'schemaVersion':1,'entries':[r[0] for r in results]}
    script=('(() => {\n  "use strict";\n  const data = '+json.dumps(data,separators=(',',':'))+';\n  const freeze = value => { if (value && typeof value === "object") { Object.values(value).forEach(freeze); Object.freeze(value); } return value; };\n  window.COMIC_PREVIEW_SEQUENCES = freeze(data);\n})();\n').encode()
    (dist/'preview-sequences.js').write_bytes(script)
    if args.canonical:
        canonical=args.canonical.resolve(strict=True)
        (canonical/'preview-sequences.js').write_bytes(script)
        for entry in data['entries']:
            source=entry['pack']['source'];target=local(canonical,source);target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(local(dist,source).read_bytes())
    for p,checksum in original_hashes.items():assert sha((dist/p).read_bytes())==checksum
    total=sum(r[1]['previewBytes'] for r in results);full=sum(r[1]['fullAngleBytes'] for r in results)
    report={'schemaVersion':1,'panels':len(results),'previewFramesPerPanel':COUNT,'totalPreviewFrames':len(results)*COUNT,'maxEdge':480,'quality':65,'previewBytes':total,'fullAngleBytes':full,'previewByteRatio':round(total/full,6),'source':'Only existing independently verified HD WebP frame payloads; no new views or image generation. Preview rescaling/recompression is lossy. Original static pages, HD packets and full frame counts remain unchanged.','scriptSha256':sha(script),'scriptBytes':len(script),'entries':[r[1] for r in results]}
    if args.report:args.report.write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({k:v for k,v in report.items() if k!='entries'},indent=2))
if __name__=='__main__':main()
