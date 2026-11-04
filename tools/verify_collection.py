#!/usr/bin/env python3
"""Verify the complete 85-page collection source tree before Pages publication.

No dependency install, image synthesis or transcoding. Verify every selected file,
current page/media binding, full ORBF payload row, source dimensions and bundle.
Historical quality records are retained without promoting them to acceptance.
"""
import argparse, hashlib, json, math, re, struct, subprocess, sys
from pathlib import Path, PurePosixPath

REPO=Path(__file__).resolve().parents[1]
DELIVERY_SHA='828320d60cddf1e32fb93e012d0948a6317c2e0ebdf556364e0a53216a662c42'
Q34_SOURCE_PINS={
    'protection-resources.js':('f1625813d14e0023d9bdcef133dc1f627a2fa7a24a7441c534620e87969c9376','bfa0bcc0ed448b927e64b9a6609b9748aa52bb7754b2840d1e5bb14e4250e361'),
    'reader.js':('76a522f6421c7cf802932b07883b190b7a465242d5573977a4eeb92b5f324eb1','e3d47feded164c45a9d1763609399ef073f13b9bced15b57dad57ae35cf53081'),
    'index.html':('b6fb07fca043c1af98ce0edec09a4e2c6bac75f7005c7a839d258129550c2679','146b13eeaaa2191b3ab65be8b16f75cb5afdb956925c5452a875c04a219fcb5a')
}

Q38_PROOF_SHA='6a0559822b081c36e08156450e7770a23fc973a6473f3063936ae595d6adfca6'
Q34_PROOF_SHA='7fd1524944aefb4abb59993a6ff69fc0490957a3a87cfb5cdf15e4d7f3e8de92'
Q39_PROOF_SHA='dd75f5e5d25f22e45e3d9250a38e47adf142c5b5e019567d397409fc79fb8ca8'
Q38_PUBLICATION_PINS={'app.js': ('9114173cc78cc17d82a484d98301c3b053a3863c42a83c10e8603d38601e38ff', '8b3fe1f75fccd9308b2d313bb8c765ade6637c23f5a5cfefd785dd3ccbb44bba'), 'asset-delivery.js': ('7d94d2961d668ef0344f859a6671e8c8ed7f5310ba7d9981b6bd8ae0b47a5c79', '828320d60cddf1e32fb93e012d0948a6317c2e0ebdf556364e0a53216a662c42'), 'music.js': ('9d10189283c17b709ca24d5b25408bea4a8b678ec2d2e23320e7e3af904ab626', '0df8466a3af6666d0673ae9c28764ee699f4cd61028f1edd75b5432ed6b759a7'), 'reader.js': ('f529aa36318e91f080b6214f1765d2238f35991056f4f90ff35d2520988af143', 'f40a79e7d014685647bdf09535ebc808ccdaef09ce6691e3b63eb2ccb1636f90'), 'index.html': ('b529a1acca6b009f322dcd343261fba76a6167b7acdc30863377acdb64421b53', 'ca961eca3c31266dcf91dd99b53168b7485c0caa1d649ea31d908af78be7e89e')}

def digest(data):return hashlib.sha256(data).hexdigest()

def safe(root,source):
    assert isinstance(source,str) and source and not re.search(r'[\\?#%:\x00-\x20]',source),source
    parts=PurePosixPath(source).parts
    assert not PurePosixPath(source).is_absolute() and '..' not in parts,source
    result=root.joinpath(*parts)
    assert result.resolve().is_relative_to(root.resolve()),source
    return result

def js_data(file):
    text=file.read_text(encoding='utf-8-sig')
    for match in re.finditer(r'\{',text):
        try:return json.JSONDecoder().raw_decode(text[match.start():])[0]
        except json.JSONDecodeError:pass
    raise AssertionError('No JSON data object: '+str(file))

def webp_dimensions(data):
    assert len(data)>=30 and data[:4]==b'RIFF' and data[8:12]==b'WEBP'
    assert struct.unpack_from('<I',data,4)[0]+8==len(data)
    kind=data[12:16]
    if kind==b'VP8 ':
        assert data[23:26]==b'\x9d\x01\x2a'
        return struct.unpack_from('<H',data,26)[0]&0x3fff,struct.unpack_from('<H',data,28)[0]&0x3fff
    if kind==b'VP8L':
        assert data[20]==47
        bits=struct.unpack_from('<I',data,21)[0]
        return (bits&0x3fff)+1,((bits>>14)&0x3fff)+1
    assert kind==b'VP8X'
    return int.from_bytes(data[24:27],'little')+1,int.from_bytes(data[27:30],'little')+1

def pack_check(dist,pack,dimensions,inventory):
    assert pack['source'] in inventory
    packet=safe(dist,pack['source']).read_bytes()
    assert len(packet)==pack['byteLength'] and digest(packet)==pack['sha256'],pack['source']
    assert packet[:8]==b'ORBF0001'
    count=struct.unpack_from('<I',packet,8)[0]
    assert count==len(pack['indices'])==len(pack['frameBytes'])==len(pack['frameSha256'])
    assert len(set(pack['indices']))==count
    offset=12+8*count
    for row,index in enumerate(pack['indices']):
        actual,length=struct.unpack_from('<II',packet,12+8*row)
        assert actual==index and length==pack['frameBytes'][row]
        payload=packet[offset:offset+length];offset+=length
        assert len(payload)==length and digest(payload)==pack['frameSha256'][row],pack['source']+':'+str(index)
        assert webp_dimensions(payload)==dimensions,pack['source']+':dimensions'
    assert offset==len(packet)
    return count,len(packet)

def aspect_check(entry,panel,page):
    media=panel['actualMedia'];mapping=entry.get('frameMapping');declared=panel.get('frameCacheMapping')
    if mapping is None and declared is None:
        assert abs((entry['width']/entry['height'])/(media['width']/media['height'])-1)<=.003
        return
    assert mapping and declared and mapping==declared
    assert panel['quality']=='review-candidate' and mapping['mode']=='uniform-contain-nearest-edge'
    assert mapping['panelId']==panel['id'] and mapping['sourcePageSha256']==page['sha256']
    assert mapping['mediaSha256']==media['sha256'] and mapping['sourceCropSha256']==panel['sourceCropSha256']
    assert abs((entry['width']/entry['height'])/(panel['bounds']['width']/panel['bounds']['height'])-1)<=.003
    scale=min(entry['width']/media['width'],entry['height']/media['height'])
    width=math.floor(media['width']*scale+.5);height=math.floor(media['height']*scale+.5)
    assert mapping['width']==entry['width'] and mapping['height']==entry['height']
    assert mapping['resizedWidth']==width and mapping['resizedHeight']==height
    assert mapping['offsetX']==(entry['width']-width)//2 and mapping['offsetY']==(entry['height']-height)//2
    assert (entry['width']*entry['height']-width*height)/(entry['width']*entry['height'])<=.1

def protection_check(dist,inventory,files,media):
    """Verify only the reviewed Q34 flag and byte-identical active dependencies.

    The retained proof records a local full RGBA decode comparison. This check
    verifies its exact encoded files, current bindings and original PNG fallback;
    it does not mislabel a header/hash check as a new image decode comparison.
    """
    updates=inventory.get('reviewedSourceUpdates',[])
    assert [row['id'] for row in updates]==['Q34-lossless-protection-delivery','Q38-loading-retry-and-deferred-music']
    update=updates[0]
    assert update['onlyMissingEncodingFlagChangesMappings'] is True
    assert update['publicationOverrideAllowlistUnchanged'] is True
    changes={row['source']:row for row in update['approvedSourceChanges']}
    assert len(changes)==3 and set(changes)==set(Q34_SOURCE_PINS)
    for source,(old,new) in Q34_SOURCE_PINS.items():
        change=changes[source];record=files[source]
        assert change['previousSourceSha256']==old and change['sourceSha256']==new
        assert record.get('sourceSha256',record['sha256'])==new
        assert record.get('sourceBytes',record['bytes'])==change['sourceBytes']
        if source in Q38_PUBLICATION_PINS:
            # Q34's exact historical proof is preserved; Q38 alone advances its
            # two derived publication files through a separately pinned chain.
            old_public,new_public=Q38_PUBLICATION_PINS[source]
            assert change['publicationSha256']==old_public and record['sha256']==new_public
            chain={row['source']:row for row in updates[1]['approvedPublicationChanges']}[source]
            assert chain['previousPublicationBytes']==change['publicationBytes']
            assert chain['publicationBytes']==record['bytes']
        else:
            assert record['sha256']==change['publicationSha256'] and record['bytes']==change['publicationBytes']
    raw=(dist/'protection-resources.js').read_bytes()
    flag=b'"schemaVersion":1,"encoding":"webp-lossless-exact",'
    assert raw.count(flag)==1
    assert digest(raw.replace(flag,b'"schemaVersion":1,',1))==Q34_SOURCE_PINS['protection-resources.js'][0], 'Unreviewed mapping change'
    config=js_data(dist/'protection-resources.js')
    assert config['schemaVersion']==1 and config['encoding']=='webp-lossless-exact'
    entries={entry['panelId']:entry for entry in config['entries']}
    assert len(entries)==len(config['entries'])==63
    proof_raw=(REPO/'docs/collection-lossless-protection-q34.json').read_bytes()
    assert digest(proof_raw)==Q34_PROOF_SHA, 'Historical Q34 proof changed'
    proof=json.loads(proof_raw)
    assert proof['approvedSourceChanges']==update['approvedSourceChanges']
    assert proof['encoding']==config['encoding'] and proof['all63SourceMappingsRGBAExact'] is True
    assert proof['originalPngFallbackRetained'] is True and proof['stalePage85MappingStillRejected'] is True
    rows={row['panelId']:row for row in proof['activeRows']}
    assert len(rows)==len(proof['activeRows'])==proof['activeBindings']==62
    active=set();webps=set();pngs=set()
    for identifier,entry in entries.items():
        page,panel,_=media[identifier];spec=panel.get('protectionOverlay',{})
        bound=(entry['sourcePageSha256']==page['sha256'] and entry['mediaSha256']==panel['actualMedia']['sha256']
            and entry['originalSource']==spec.get('source') and entry['originalSha256']==spec.get('sha256')
            and entry['width']==spec.get('width') and entry['height']==spec.get('height'))
        if not bound:
            assert identifier=='page-085-panel-01' and identifier not in rows
            assert spec['source']=='draft-publication/priority085-native-1f0354ecc93f.png'
            assert files[spec['source']]['sha256']==spec['sha256']=='ee27b1095cbada7ff478d8f9a3964cbadaac87f560eb61418c672a1a4e2dc29d'
            assert entry['source'] not in files,'Stale page-85 derivative must remain excluded'
            continue
        active.add(identifier);row=rows[identifier]
        assert spec['sourcePageSha256']==page['sha256'] and spec['coordinateSpace']=='source-panel'
        assert spec['width']==panel['bounds']['width'] and spec['height']==panel['bounds']['height']
        assert not panel.get('rotationPresentation',{}).get('hidePrintedText',False)
        assert re.fullmatch(r'publication-webp/[a-z\d][a-z\d._-]*\.webp',entry['source'],re.I)
        assert entry['source'].endswith('-'+entry['sha256']+'.webp')
        assert re.fullmatch(r'[a-f0-9]{64}',entry['rgbaSha256'])
        assert row['originalSource']==entry['originalSource'] and row['source']==entry['source']
        assert row['pngSHA256']==entry['originalSha256'] and row['webpSHA256']==entry['sha256']
        assert row['rgbaSHA256']==entry['rgbaSha256'] and row['dimensions']==[entry['width'],entry['height']]
        assert row['pngByteLength']==entry['originalByteLength'] and row['webpByteLength']==entry['byteLength']
        for source,size,sha in ((row['originalSource'],row['pngByteLength'],row['pngSHA256']),(row['source'],row['webpByteLength'],row['webpSHA256'])):
            assert files[source]['sha256']==sha and files[source]['bytes']==size
        png=safe(dist,row['originalSource']).read_bytes();webp=safe(dist,row['source']).read_bytes()
        assert png[:8]==b'\x89PNG\r\n\x1a\n' and png[12:16]==b'IHDR'
        assert struct.unpack_from('>II',png,16)==tuple(row['dimensions'])==webp_dimensions(webp)
        webps.add(row['source']);pngs.add(row['originalSource'])
    assert active==set(rows) and len(webps)==proof['activeUniqueWebpFiles']==59
    assert set(update['addedByteIdenticalDependencies'])==webps and len(update['addedByteIdenticalDependencies'])==59
    assert {source for source in files if source.startswith('publication-webp/')}==webps
    png_bytes=sum(files[source]['bytes'] for source in pngs);webp_bytes=sum(files[source]['bytes'] for source in webps)
    assert png_bytes==proof['savings']['pngUniqueURLBytes']==38749824
    assert webp_bytes==proof['savings']['webpUniqueURLBytes']==23745144
    assert png_bytes-webp_bytes==proof['savings']['savedUniqueURLBytes']==15004680
    return {'bindings':len(active),'uniqueWebpFiles':len(webps),'webpBytes':webp_bytes,'pngFallbacks':len(pngs),'savedProtectionBytes':png_bytes-webp_bytes,'localRGBAProofRetained':True,'ciDecodedRGBA':False,'stalePage85MappingRejected':True}

def loading_update_check(dist,inventory,files,advance):
    """Verify the exact Q38 patch, the 20 retained sources and unchanged assets."""
    raw=(REPO/'docs/collection-loading-q38.json').read_bytes()
    assert digest(raw)==Q38_PROOF_SHA, 'Unreviewed Q38 proof change'
    proof=json.loads(raw)
    updates=inventory['reviewedSourceUpdates']
    assert [row['id'] for row in updates]==['Q34-lossless-protection-delivery','Q38-loading-retry-and-deferred-music']
    update=updates[1]
    assert update['approvedPublicationChanges']==proof['approvedPublicationChanges']
    assert update['addedByteIdenticalDependencies']==[]
    assert update['publicationOverrideAllowlistUnchanged'] is True and update['sourceOriginPinsRetained'] is True
    changes={row['source']:row for row in proof['approvedPublicationChanges']}
    assert len(changes)==5 and set(changes)==set(Q38_PUBLICATION_PINS)
    for source,(old,new) in Q38_PUBLICATION_PINS.items():
        row=changes[source];record=files[source]
        assert row['previousPublicationSha256']==old and row['publicationSha256']==new
        assert record['sha256']==new and record['bytes']==row['publicationBytes']
        historical_bytes_check(dist,source,new,row['publicationBytes'],advance)
        # Existing source-origin pins describe the prior D input. Do not silently
        # rewrite them to the publication output or weaken Q34 provenance.
        if 'sourceSha256' in record:
            assert record['sourceSha256']==row['retainedSourceOriginSha256']
            assert record['sourceBytes']==row['retainedSourceOriginBytes']
    pins=proof['bundleSourcePins']
    assert len(pins)==proof['bundleSourceCount']==20
    assert len({row['source'] for row in pins})==20
    for row in pins:
        historical_bytes_check(dist,row['source'],row['sha256'],row['bytes'],advance)
    unchanged=[{'source':r['source'],'bytes':r['bytes'],'sha256':r['sha256']} for r in inventory['files'] if r['source'] not in changes]
    assert len(unchanged)==proof['unchangedActiveFiles']
    assert digest(json.dumps(unchanged,separators=(',',':'),sort_keys=True).encode())==proof['unchangedActiveInventorySha256'], 'Non-Q38 active assets changed'
    assert digest((REPO/'docs/collection-lossless-protection-q34.json').read_bytes())==proof['retainedQ34ProofSha256']==Q34_PROOF_SHA
    return {'id':proof['id'],'changedRuntimeFiles':len(changes),'sourcePins':len(pins),'unchangedActiveFiles':len(unchanged),'historicalQ34ProofExact':True}

def historical_bytes_check(dist,source,old_sha,old_bytes,advance):
    """Only the pinned Q39 patch may advance a byte pin in the frozen Q38 proof."""
    data=(dist/source).read_bytes()
    if source in advance:
        row=advance[source]
        assert row['previousPublicationSha256']==old_sha and row['previousPublicationBytes']==old_bytes
        assert digest(data)==row['publicationSha256'] and len(data)==row['publicationBytes']
    else:
        assert digest(data)==old_sha and len(data)==old_bytes

def preview_metadata_check(dist,inventory,files):
    raw=(REPO/'docs/collection-preview-metadata-q39.json').read_bytes()
    assert digest(raw)==Q39_PROOF_SHA,'Unreviewed Q39 proof change'
    proof=json.loads(raw)
    baseline_raw=(REPO/'docs/collection-q38-baseline-inventory.json').read_bytes()
    assert digest(baseline_raw)==proof['baselineInventorySha256'],'Historical Q38 inventory changed'
    baseline=json.loads(baseline_raw);old_files={r['source']:r for r in baseline['files']}
    assert len(files)==len(old_files)==len(baseline['files'])==1171 and set(files)==set(old_files)
    assert proof['retainedQ38ProofSha256']==Q38_PROOF_SHA==digest((REPO/'docs/collection-loading-q38.json').read_bytes())
    assert proof['retainedQ34ProofSha256']==Q34_PROOF_SHA==digest((REPO/'docs/collection-lossless-protection-q34.json').read_bytes())
    assert proof['baselinePreviewSha256']==old_files['preview-sequences.js']['sha256']==digest((REPO/'docs/collection-q38-preview-sequences.js').read_bytes())
    assert inventory['reviewedSourceUpdates'][:-1]==baseline['reviewedSourceUpdates']
    update=inventory['reviewedSourceUpdates'][-1]
    assert update['id']==proof['id']=='Q39-current-page-preview-metadata'
    assert update['approvedPublicationChanges']==proof['approvedPublicationChanges'] and update['addedByteIdenticalDependencies']==[]
    assert update['publicationOverrideAllowlistUnchanged'] is True and update['sourceOriginPinsRetained'] is True
    expected={'frame-sequences.js','preview-sequences.js','page-frame-loader.js','orbit-frame-cache.js','reader.js','index.html'}|{f'frame-config/page-{n:03d}.json' for n in range(1,86)}
    changes={r['source']:r for r in proof['approvedPublicationChanges']}
    assert len(changes)==len(proof['approvedPublicationChanges'])==91 and set(changes)==expected
    for source,old in old_files.items():
        expected_record=dict(old)
        if source in changes:
            row=changes[source]
            assert row['previousPublicationSha256']==old['sha256'] and row['previousPublicationBytes']==old['bytes']
            expected_record.update(sha256=row['publicationSha256'],bytes=row['publicationBytes'])
            assert old['sha256']!=row['publicationSha256']
        assert files[source]==expected_record,'Unreviewed record/origin change: '+source
    pins=proof['bundleSourcePins'];previous_pins=json.loads((REPO/'docs/collection-loading-q38.json').read_bytes())['bundleSourcePins']
    assert len(pins)==proof['bundleSourceCount']==20 and {r['source'] for r in pins}=={r['source'] for r in previous_pins}
    for row in pins:
        data=(dist/row['source']).read_bytes()
        assert digest(data)==row['sha256'] and len(data)==row['bytes']
    initial=js_data(dist/'preview-sequences.js')
    assert initial=={'schemaVersion':1,'delivery':'page-frame-config','entries':[]}
    assert proof['scope']=={'pages':85,'previewEntries':110,'anglesPerPreview':24,'initialPreviewEntries':0,'additionalMetadataRequests':0,'originalsFramesVideosAudioCssLayoutsUnchanged':True,'stageOnly':True}
    return {'id':proof['id'],'changedActiveFiles':len(changes),'initialPreviewEntries':0,'previewEntriesCoLoaded':110,'anglesPerPreview':24,'additionalMetadataRequests':0,'unchangedActiveFiles':len(files)-len(changes),'historicalQ38AndQ34ProofsExact':True},baseline,changes

def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--dist',type=Path,default=REPO/'dist/collection');parser.add_argument('--inventory',type=Path,default=REPO/'docs/collection-active-assets.json');args=parser.parse_args()
    dist=args.dist.resolve(strict=True);inventory=json.loads(args.inventory.read_text(encoding='utf-8-sig'))
    files={record['source']:record for record in inventory['files']}
    assert len(files)==len(inventory['files']) and not inventory['missing'] and not inventory['hashMismatches']
    assert 'productionDirectory' not in inventory,'Do not publish local absolute workspace paths'
    overrides={entry['source']:entry for entry in inventory.get('publicationOverrides',[])}
    if overrides:
        assert set(overrides)=={'asset-delivery.js','delivery-config.js','reader.js','index.html','perf-diagnostics.js'}
        for source,override in overrides.items():
            assert files[source]['sha256']==override['publishedSha256'] and files[source]['bytes']==override['publishedBytes']
            if override['sourceSha256'] is not None:assert files[source]['sourceSha256']==override['sourceSha256']
        assert files['asset-delivery.js']['sha256']==DELIVERY_SHA
        assert (dist/'perf-diagnostics.js').read_bytes()==(REPO/'tools/perf-diagnostics.js').read_bytes()
        source_index=(REPO/'docs/collection-source-index.html').read_bytes()
        assert digest(source_index)==overrides['index.html']['sourceSha256']
        bootstrap=(REPO/'tools/perf-bootstrap.html').read_text(encoding='utf-8').replace('__PERF_SHA__',files['perf-diagnostics.js']['sha256'][:12])
        expected_index=re.sub(r'reader\.js\?[^"\s]+','reader.js?v=public33-'+files['reader.js']['sha256'][:12],source_index.decode('utf-8')).replace('<head>','<head>\n'+bootstrap,1)
        assert (dist/'index.html').read_bytes().decode('utf-8')==expected_index,'Unreviewed index mutation'
        config=js_data(dist/'delivery-config.js')
        assert config=={'schemaVersion':1,'mirrors':[],'probe':{'source':'delivery-probe.bin','byteLength':16384,'sha256':files['delivery-probe.bin']['sha256']}}
    metadata_update,baseline,advance=preview_metadata_check(dist,inventory,files)
    baseline_files={record['source']:record for record in baseline['files']}
    loading_update=loading_update_check(dist,baseline,baseline_files,advance)
    total=0
    for source,record in files.items():
        data=safe(dist,source).read_bytes();total+=len(data)
        assert len(data)==record['bytes'] and digest(data)==record['sha256'],'Inventory mismatch: '+source
        assert len(data)<100*1024*1024,'Git individual-file limit: '+source
    assert total==inventory['totalBytes']
    book=js_data(dist/'manifest.js');assert book==json.loads((dist/'manifest.json').read_text(encoding='utf-8-sig'))
    assert len(book['pages'])==85 and book.get('complete') is False
    pages={page['id']:page for page in book['pages']};assert len(pages)==85
    media={panel['id']:(page,panel,None) for page in book['pages'] for panel in page['panels']}
    layouts=js_data(dist/'interaction-layouts.js')
    for item in layouts.get('regionMediaOverrides',[]):
        binding=item['binding'];child=item['model'];page,parent,_=media[binding['parentPanelId']]
        assert binding['childPanelId']==child['id'] and binding['sourcePageSha256']==page['sha256']
        assert child['regionMediaOverride']['parentPanelId']==parent['id'] and child['id'] not in media
        media[child['id']]=(page,child,binding)
    for number,page in enumerate(book['pages'],1):
        assert page['source']==f'pages/page-{number:03d}.jpg' and digest(safe(dist,page['source']).read_bytes())==page['sha256']
        for source in page.get('panelSources',[]):assert source['source'] in files
    for episode in (1,2,3):assert f'audio/episode-0{episode}-background-web.m4a' in files
    protection=protection_check(dist,baseline,baseline_files,media)
    index=js_data(dist/'frame-sequences.js');assert index['schemaVersion']==1 and len(index['pages'])==85
    sequences={};preview_entries=[];hd_frames=hd_bytes=hd_packs=0
    original_preview=js_data(REPO/'docs/collection-q38-preview-sequences.js')
    original_previews={entry['panelId']:entry for entry in original_preview['entries']}
    assert len(original_previews)==len(original_preview['entries'])==110
    canonical=json.loads((dist/'frame-sequences.json').read_text(encoding='utf-8-sig'))
    canonical_entries={entry['panelId']:entry for entry in canonical['entries']}
    for page_entry in index['pages']:
        source=page_entry['source'];raw=safe(dist,source).read_bytes()
        assert digest(raw)==page_entry['sha256'] and source in files
        page=pages[Path(source).stem];assert page_entry['sourcePageSha256']==page['sha256']
        config=json.loads(raw);assert config['schemaVersion']==1
        assert config['pageId']==page['id'] and config['sourcePageSha256']==page['sha256']
        previews=config['previews'];assert previews['schemaVersion']==1 and previews['pageId']==page['id'] and previews['sourcePageSha256']==page['sha256']
        assert len(previews['entries'])==len(config['entries'])
        assert {entry['panelId'] for entry in previews['entries']}=={entry['panelId'] for entry in config['entries']}
        for preview_entry in previews['entries']:
            assert preview_entry==original_previews[preview_entry['panelId']],'Preview metadata changed during sharding'
            assert len(preview_entry['indices'])==24
        preview_entries.extend(previews['entries'])
        for entry in config['entries']:
            identifier=entry['panelId'];assert identifier not in sequences and entry==canonical_entries[identifier]
            bound_page,panel,binding=media[identifier];actual=panel['actualMedia']
            assert bound_page['id']==page['id'] and entry['sourcePageSha256']==page['sha256']
            assert entry['mediaSha256']==actual['sha256'] and entry['videoSource']==panel['video'] and panel['video'] in files
            assert files[panel['video']]['sha256']==actual['sha256']
            assert entry['frameCount']==actual['frameCount']==len(entry['frames']) and entry['duration']==actual['duration']
            assert entry['sourceWidth']==actual['width'] and entry['sourceHeight']==actual['height']
            assert entry.get('regionMediaOverrideBinding')==binding
            aspect_check(entry,panel,page)
            covered=set()
            for pack in entry['packs']:
                assert not covered.intersection(pack['indices']);covered.update(pack['indices'])
                count,size=pack_check(dist,pack,(entry['width'],entry['height']),files);hd_frames+=count;hd_bytes+=size;hd_packs+=1
            assert covered==set(range(entry['frameCount']))
            sequences[identifier]=entry
    assert set(sequences)==set(canonical_entries)
    preview={'schemaVersion':1,'entries':preview_entries};assert len(preview_entries)==110
    seen=set();preview_frames=preview_bytes=0
    for entry in preview['entries']:
        identifier=entry['panelId'];assert identifier not in seen;seen.add(identifier)
        sequence=sequences[identifier];page,panel,binding=media[identifier]
        for key in ('sourcePageSha256','mediaSha256','videoSource','frameCount','sourceWidth','sourceHeight','duration'):assert entry[key]==sequence[key],identifier+':'+key
        assert entry.get('regionMediaOverrideBinding')==binding
        assert 0<entry['width']<=sequence['width'] and 0<entry['height']<=sequence['height'] and max(entry['width'],entry['height'])<=480
        assert abs((entry['width']/entry['height'])/(sequence['width']/sequence['height'])-1)<=.006
        indices=entry['indices'];count=len(indices);assert count in (24,32) and entry['pack']['indices']==indices
        assert set(indices)=={math.floor(k*sequence['frameCount']/count+.5)%sequence['frameCount'] for k in range(count)}
        actual,size=pack_check(dist,entry['pack'],(entry['width'],entry['height']),files);preview_frames+=actual;preview_bytes+=size
    assert seen==set(sequences)
    subprocess.run([sys.executable,str(REPO/'tools/bundle_runtime.py'),'--dist',str(dist),'--verify'],check=True)
    report={'verified':True,'loadingUpdate':loading_update,'files':len(files),'bytes':total,'pages':85,'allThreeAudioTracks':True,'boundMedia':len(media),'sequences':len(sequences),'hdPacks':hd_packs,'hdFrames':hd_frames,'hdBytes':hd_bytes,'previewPacks':len(seen),'previewFrames':preview_frames,'previewBytes':preview_bytes,'allSelectedFilesSHA256Verified':True,'allPackRowsSHA256AndDimensionsVerified':True,'formalWholeBookQualityAccepted':False}
    report['losslessProtection']=protection
    report['previewMetadata']=metadata_update
    print(json.dumps(report))

if __name__=='__main__':main()
