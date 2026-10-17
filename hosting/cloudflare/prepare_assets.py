"""Stage only the public frame packets and the route probe for the mirror."""
import hashlib
import json
from pathlib import Path
import shutil

project = Path(__file__).resolve().parent
dist = project.parents[1] / 'dist'
public = project / 'public-v8'
files = []
for directory in ('frame-packs', 'preview-packs'):
    for source in sorted((dist / directory).rglob('*.orbf')):
        relative = source.relative_to(dist)
        checksum = hashlib.sha256(source.read_bytes()).hexdigest()
        target = public / 'packets' / (checksum + '.orbf')
        target.parent.mkdir(parents=True, exist_ok=True)
        if target.exists():
            assert hashlib.sha256(target.read_bytes()).hexdigest() == checksum
        else:
            shutil.copyfile(source, target)
        files.append({'source':relative.as_posix(),'bytes':source.stat().st_size,'sha256':checksum})
public.mkdir(exist_ok=True)
shutil.copyfile(dist / 'delivery-probe.bin', public / 'delivery-probe.bin')
(public / '_headers').write_text('''/*
  Access-Control-Allow-Origin: *
  Access-Control-Expose-Headers: Content-Length, Content-Range, ETag
  Content-Type: application/octet-stream
  X-Content-Type-Options: nosniff

/packets/*
  Cache-Control: public, max-age=31536000, immutable, no-transform

/delivery-probe.bin
  Cache-Control: no-store, no-transform
''', encoding='utf-8')
unique = {file['sha256']:file['bytes'] for file in files}
print(json.dumps({'packetReferences':len(files),'uniquePacketFiles':len(unique),'packetBytes':sum(unique.values()),'probeBytes':16384,'maxFileBytes':max(unique.values()),'publicDirectory':str(public)},indent=2))
