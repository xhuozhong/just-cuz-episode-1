#!/usr/bin/env python3
"""Bundle the reviewed classic scripts in their existing execution order."""
import argparse
import hashlib
import json
from pathlib import Path

SOURCES = ('manifest.js', 'orbit-seek.js', 'orbit-inertia.js', 'frame-sequences.js',
           'orbit-frame-cache.js', 'interaction-layouts.js', 'protection-resources.js', 'panel-player.js',
           'page-frame-loader.js', 'app.js', 'panel-loading.js', 'reader-decor.js', 'music.js')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--dist', type=Path, default=Path(__file__).resolve().parents[1] / 'dist')
    parser.add_argument('--verify', action='store_true')
    args = parser.parse_args()
    dist = args.dist.resolve(strict=True)
    chunks = [b'/* Just Cuz reader: generated from the retained source files. */\n']
    for source in SOURCES:
        data = (dist / source).read_bytes()
        if data.startswith(b'\xef\xbb\xbf'):
            data = data[3:]
        chunks.append(b';\n/* ' + source.encode('ascii') + b' */\n' + data + b'\n')
    result = b''.join(chunks)
    output = dist / 'reader.js'
    if args.verify:
        assert output.read_bytes() == result, 'Bundle differs from its retained sources'
    else:
        output.write_bytes(result)
    print(json.dumps({'verified': True, 'sourceCount': len(SOURCES), 'bytes': len(result),
                      'sha256': hashlib.sha256(result).hexdigest()}))

if __name__ == '__main__':
    main()
