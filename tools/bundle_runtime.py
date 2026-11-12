#!/usr/bin/env python3
"""Bundle the reviewed classic scripts in their existing execution order."""
import argparse
import base64
import hashlib
import json
from pathlib import Path
import re

SOURCES = ('manifest.js', 'orbit-seek.js', 'orbit-inertia.js', 'frame-sequences.js',
           'preview-sequences.js', 'delivery-config.js', 'asset-delivery.js',
           'orbit-frame-cache.js', 'interaction-layouts.js', 'protection-resources.js', 'panel-player.js',
           'page-frame-loader.js', 'app.js', 'panel-loading.js', 'reader-decor.js', 'music.js')


def read_book_script(path):
    script = path.read_text(encoding='utf-8-sig').strip()
    prefix = 'window.COMIC_BOOK = '
    assert script.startswith(prefix) and script.endswith(';'), f'Invalid book script {path.name}'
    return json.loads(script[len(prefix):-1])


def runtime_manifest(dist):
    projection = dist / 'manifest-runtime.js'
    if not projection.is_file():
        return 'manifest.js'
    full = read_book_script(dist / 'manifest.js')
    shell = read_book_script(projection)
    assert full == json.loads((dist / 'manifest.json').read_bytes()), 'Canonical manifest differs'
    assert {**full, 'pages': shell['pages']} == shell, 'Projected book metadata differs'
    html = (dist / 'index.html').read_text(encoding='utf-8')
    match = re.search(r'const modelHashes = atob\("([A-Za-z0-9+/=]+)"\);', html)
    assert match, 'Model preload hash index missing'
    hashes = base64.b64decode(match[1], validate=True)
    assert len(hashes) == len(full['pages']) * 32, 'Model preload hash count differs'
    pin_source = re.search(r'const pinAuthority = (\{[^\r\n]+\});', html)
    pins = json.loads(pin_source[1]) if pin_source else {}
    consumed_pins = set()
    protection_groups = {}
    authority = dist / 'protection-resource-authority.json'
    if authority.is_file():
        route_table = json.loads(authority.read_bytes())
        assert route_table['schemaVersion'] == 1 and route_table['encoding'] == 'webp-lossless-exact'
        panel_ids = set()
        for row in route_table['entries']:
            panel_id = row['panelId']
            match = re.fullmatch(r'(page-\d{3})-panel-\d+(?:-[a-z0-9-]+)?', panel_id)
            assert match and panel_id not in panel_ids, f'Invalid protection resource {panel_id}'
            panel_ids.add(panel_id)
            protection_groups.setdefault(match[1], []).append(row)
    for index, (page, record) in enumerate(zip(full['pages'], shell['pages'], strict=True)):
        assert record == {**page, 'panels': [], 'panelSources': []}, f'Shell differs for {page["id"]}'
        assert page['id'] == f'page-{index + 1:03}', 'Unexpected model identity'
        digest = hashes[index * 32:(index + 1) * 32].hex()
        raw = (dist / 'book-models' / f'{page["id"]}-{digest[:12]}.json').read_bytes()
        assert hashlib.sha256(raw).hexdigest() == digest, f'Model checksum differs for {page["id"]}'
        packet = json.loads(raw)
        number = str(index + 1)
        if number in pins:
            pin = packet.pop('runtimePin', None)
            expected = pins[number]
            encoded = json.dumps(pin, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
            assert (isinstance(pin, dict) and pin.get('kind') == expected['kind']
                    and page['sha256'] == expected['source'] and hashlib.sha256(encoded).hexdigest() == expected['sha256']), (
                        f'Independent runtime pin differs for {page["id"]}')
            consumed_pins.add(number)
        rows = protection_groups.pop(page['id'], [])
        protection = packet.pop('protectionResources', None)
        expected = {'schemaVersion': 1, 'encoding': 'webp-lossless-exact', 'entries': rows} if rows else None
        assert protection == expected, f'Protection resource projection differs for {page["id"]}'
        assert all(row['sourcePageSha256'] == page['sha256'] for row in rows), f'Protection resources belong to a different page: {page["id"]}'
        assert packet == {'schemaVersion': 1, 'page': page}, f'Model differs for {page["id"]}'
    assert consumed_pins == pins.keys(), 'Unbound independent runtime pin'
    assert not protection_groups, 'Protection resources reference unknown pages'
    return projection.name

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
    manifest_source = runtime_manifest(dist)
    chunks = [b'/* Just Cuz reader: generated from the retained source files. */\n']
    for source in sources:
        data = (dist / (manifest_source if source == 'manifest.js' else source)).read_bytes()
        if data.startswith(b'\xef\xbb\xbf'):
            data = data[3:]
        if manifest_source != 'manifest.js':
            data = data.replace(b'\r\n', b'\n')
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
