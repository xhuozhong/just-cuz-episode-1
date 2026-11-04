#!/usr/bin/env python3
"""Bundle the reviewed classic scripts in their existing execution order."""
import argparse
import hashlib
import json
from pathlib import Path

SOURCES = ('manifest.js', 'orbit-seek.js', 'orbit-inertia.js', 'frame-sequences.js',
           'preview-sequences.js', 'delivery-config.js', 'asset-delivery.js',
           'orbit-frame-cache.js', 'interaction-layouts.js', 'protection-resources.js', 'panel-player.js',
           'page-frame-loader.js', 'app.js', 'panel-loading.js', 'reader-decor.js', 'music.js')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--dist', type=Path, default=Path(__file__).resolve().parents[1] / 'dist')
    parser.add_argument('--verify', action='store_true')
    args = parser.parse_args()
    dist = args.dist.resolve(strict=True)
    bilingual_sources = ('bilingual-data.js', 'bilingual.js')
    bilingual_present = [(dist / name).is_file() for name in bilingual_sources]
    assert not any(bilingual_present) or all(bilingual_present), 'Bilingual runtime/data must be present together'
    locale_sources = ('locale-data.js', 'locale-ui.js')
    locale_present = [(dist / name).is_file() for name in locale_sources]
    assert not any(locale_present) or all(locale_present), 'Locale data and interface must be present together'
    assert not any(locale_present) or all(bilingual_present), 'Localized overlays require their source-bound text data'
    if all(bilingual_present):
        sources = SOURCES + ('bilingual-data.js',) + (locale_sources if all(locale_present) else ()) + ('bilingual.js',)
    else:
        sources = SOURCES
    chunks = [b'/* Just Cuz reader: generated from the retained source files. */\n']
    for source in sources:
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
    print(json.dumps({'verified': True, 'sourceCount': len(sources), 'bytes': len(result),
                      'sha256': hashlib.sha256(result).hexdigest()}))

if __name__ == '__main__':
    main()
