#!/usr/bin/env python3
"""Copy verified collection assets, then build a bounded GitHub Pages artifact.

Existing episode-one dist files are never deleted or overwritten. Collection HD
packs use a verified content-addressed static mirror, with the immutable Git
media-source commit as a backup. Changed media requires refreshed mirror and
source-commit proofs; reader-only releases keep both packet URL sets stable.
"""
import argparse, hashlib, json, os, re, shutil, subprocess, sys
from pathlib import Path, PurePosixPath

REPO = Path(__file__).resolve().parents[1]
COLLECTION = REPO / 'dist/collection'
INVENTORY = REPO / 'docs/collection-active-assets.json'
DELIVERY_SHA = '7d94d2961d668ef0344f859a6671e8c8ed7f5310ba7d9981b6bd8ae0b47a5c79'
ADAPTIVE_DELIVERY_SHA = '4f26e4aefa02471e3010197e27cce71166b06471c8ed967f72cff4da4e207bd3'
OVERRIDE_FILES = {'asset-delivery.js','delivery-config.js','reader.js','index.html','perf-diagnostics.js'}

def digest(data): return hashlib.sha256(data).hexdigest()

def safe(root, source):
    value = PurePosixPath(source)
    assert not value.is_absolute() and '..' not in value.parts and '\\' not in source
    result = root.joinpath(*value.parts)
    assert result.resolve().is_relative_to(root.resolve()), source
    return result

def copy_source(args):
    source = args.source.resolve(strict=True)
    inventory = json.loads(args.inventory.read_text(encoding='utf-8-sig'))
    assert not inventory['missing'] and not inventory['hashMismatches']
    installed = json.loads(INVENTORY.read_text(encoding='utf-8')) if INVENTORY.exists() else {}
    overrides = {entry['source']:entry for entry in installed.get('publicationOverrides',[])}
    assert set(overrides).issubset(OVERRIDE_FILES)
    if overrides:
        pinned={record['source']:record for record in installed['files']}
        for record in inventory['files']:
            prior=pinned[record['source']]
            assert record['sha256']==prior.get('sourceSha256',prior['sha256']), 'Source changed after publication review: '+record['source']
    copied = reused = total = 0
    COLLECTION.mkdir(parents=True, exist_ok=True)
    for record in inventory['files']:
        origin = safe(source,record['source']); data = origin.read_bytes()
        assert len(data)==record['bytes'] and digest(data)==record['sha256'], 'Source changed: '+record['source']
        target=safe(COLLECTION,record['source']); total+=len(data)
        if record['source'] in overrides:
            override=overrides[record['source']]
            assert record['sha256']==override['sourceSha256'], 'Approved source for override changed: '+record['source']
            assert target.is_file() and digest(target.read_bytes())==override['publishedSha256']
            reused+=1;continue
        if target.is_file() and target.stat().st_size==len(data) and digest(target.read_bytes())==record['sha256']:
            reused+=1; continue
        target.parent.mkdir(parents=True,exist_ok=True)
        target.write_bytes(data); copied+=1
    if overrides:
        # Do not replace publication-specific source pins with the local-delivery inventory.
        print(json.dumps({'copiedFiles':copied,'reusedFiles':reused,'publicationOverridesPreserved':True}));return
    inventory.pop('productionDirectory',None)
    inventory['publication']={'prefix':'collection/','sourceFilesUnchanged':True,'retainedExistingEpisodeOne':True,'copiedFiles':copied,'reusedFiles':reused}
    INVENTORY.parent.mkdir(parents=True,exist_ok=True)
    INVENTORY.write_text(json.dumps(inventory,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    report={'copiedFiles':copied,'reusedFiles':reused,'totalFiles':len(inventory['files']),'totalBytes':total,'destination':'dist/collection','existingEpisodeOneUntouched':True}
    (REPO/'docs/collection-copy-report.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(report))

def prepare_publication(args):
    candidate=args.delivery_candidate.read_bytes()
    assert digest(candidate)==DELIVERY_SHA,'Delivery candidate differs from reviewed SHA'
    inventory=json.loads(INVENTORY.read_text(encoding='utf-8'))
    assert not inventory.get('publicationOverrides'),'Publication overrides already prepared'
    records={record['source']:record for record in inventory['files']}
    for source in ('asset-delivery.js','delivery-config.js','reader.js','index.html'):
        assert digest((COLLECTION/source).read_bytes())==records[source]['sha256'],source
    base_index=(COLLECTION/'index.html').read_bytes()
    (REPO/'docs/collection-source-index.html').write_bytes(base_index)
    (COLLECTION/'asset-delivery.js').write_bytes(candidate)
    config={'schemaVersion':1,'mirrors':[],'probe':{'source':'delivery-probe.bin','byteLength':16384,'sha256':digest((COLLECTION/'delivery-probe.bin').read_bytes())}}
    config_bytes=('window.COMIC_DELIVERY_CONFIG = Object.freeze('+json.dumps(config,separators=(',',':'))+');\n').encode('utf-8')
    assert digest(config_bytes)==records['delivery-config.js']['sha256'],'Retain the normal local-delivery configuration exactly'
    (COLLECTION/'delivery-config.js').write_bytes(config_bytes)
    shutil.copy2(REPO/'tools/perf-diagnostics.js',COLLECTION/'perf-diagnostics.js')
    subprocess.run([sys.executable,str(REPO/'tools/bundle_runtime.py'),'--dist',str(COLLECTION)],check=True)
    index=base_index.decode('utf-8')
    index=re.sub(r'reader\.js\?[^"\s]+','reader.js?v=public33-'+digest((COLLECTION/'reader.js').read_bytes())[:12],index)
    bootstrap=(REPO/'tools/perf-bootstrap.html').read_text(encoding='utf-8').replace('__PERF_SHA__',digest((COLLECTION/'perf-diagnostics.js').read_bytes())[:12])
    index=index.replace('<head>','<head>\n'+bootstrap,1)
    (COLLECTION/'index.html').write_bytes(index.encode('utf-8'))
    overrides=[]
    for source in sorted(OVERRIDE_FILES):
        data=(COLLECTION/source).read_bytes();old=records.get(source)
        overrides.append({'source':source,'sourceSha256':old['sha256'] if old else None,'sourceBytes':old['bytes'] if old else 0,'publishedSha256':digest(data),'publishedBytes':len(data),'reason':{'asset-delivery.js':'Root-reviewed external HD routing; preview remains local','delivery-config.js':'Local configuration retained exactly; CI alone pins external raw HD','reader.js':'Deterministic rebundle of retained reviewed sources','index.html':'Derived reader version and perf=1 opt-in bootstrap only','perf-diagnostics.js':'Optional browser-local diagnostic module; no telemetry'}[source]})
        if old:old.update(sourceSha256=old['sha256'],sourceBytes=old['bytes'],sha256=digest(data),bytes=len(data))
        else:records[source]={'source':source,'bytes':len(data),'sha256':digest(data),'groups':['optional-diagnostics'],'reasons':['Only requested when perf=1']}
    files=sorted(records.values(),key=lambda record:record['source']);groups={}
    for record in files:
        group=record['groups'][0];groups.setdefault(group,{'files':0,'bytes':0});groups[group]['files']+=1;groups[group]['bytes']+=record['bytes']
    inventory.pop('productionDirectory',None)
    inventory.update(files=files,totalFiles=len(files),totalBytes=sum(record['bytes'] for record in files),groups=groups,publicationOverrides=overrides,largestFiles=sorted(files,key=lambda record:record['bytes'],reverse=True)[:20])
    inventory['totalMiB']=inventory['totalBytes']/1048576
    inventory['publication']={'prefix':'collection/','sourceAssetsUnchangedExceptExplicitRuntimeOverrides':True,'retainedExistingEpisodeOne':True,'portablePathsOnly':True}
    INVENTORY.write_text(json.dumps(inventory,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    copy_report=json.loads((REPO/'docs/collection-copy-report.json').read_text(encoding='utf-8'));copy_report['destination']='dist/collection'
    (REPO/'docs/collection-copy-report.json').write_text(json.dumps(copy_report,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({'publicationPrepared':True,'files':len(files),'bytes':inventory['totalBytes'],'explicitOverrides':overrides}))

def build_site(args):
    assert re.fullmatch(r'[0-9a-f]{40}',args.commit), 'Use the immutable checkout commit SHA'
    subprocess.run([sys.executable,str(REPO/'tools/verify_collection.py')],check=True)
    inventory=json.loads(INVENTORY.read_text(encoding='utf-8'))
    from verify_cdn_manifest import verify as verify_cdn
    mirror=verify_cdn(REPO,inventory)
    from verify_media_origin import verify as verify_media_origin
    github_media=verify_media_origin(REPO,inventory)
    # This build-only route selector is bundled in place of the historical
    # delivery module. Its exact reviewed bytes are separate from unchanged
    # source-media inventory and recorded in the publication receipt.
    adaptive=(REPO/'tools/adaptive-asset-delivery.js').read_bytes()
    assert digest(adaptive)==ADAPTIVE_DELIVERY_SHA,'Adaptive delivery differs from reviewed source'
    output=args.output.resolve()
    assert output.is_relative_to(REPO) and output!=REPO and not output.is_relative_to(REPO/'dist')
    assert not output.exists() or not any(output.iterdir()), 'Output must be a fresh empty directory'
    target=output/'collection'; target.mkdir(parents=True,exist_ok=True)
    total=0;count=0
    for record in inventory['files']:
        if record['source'].startswith('frame-packs/'):continue
        origin=safe(COLLECTION,record['source']); destination=safe(target,record['source'])
        destination.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(origin,destination);total+=record['bytes'];count+=1
    config={
        'schemaVersion':1,'externalHd':True,
        'mirrors':[mirror,github_media],
        'probe':{'source':'delivery-probe.bin','byteLength':16384,'sha256':digest((target/'delivery-probe.bin').read_bytes())}
    }
    (target/'delivery-config.js').write_text('window.COMIC_DELIVERY_CONFIG = Object.freeze('+json.dumps(config,separators=(',',':'))+');\n',encoding='utf-8',newline='\n')
    (target/'asset-delivery.js').write_bytes(adaptive)
    subprocess.run([sys.executable,str(REPO/'tools/bundle_runtime.py'),'--dist',str(target)],check=True)
    index=(target/'index.html').read_text(encoding='utf-8')
    reader_sha=digest((target/'reader.js').read_bytes())
    index=re.sub(r'reader\.js\?[^"\s]+','reader.js?v=public33-'+reader_sha[:12],index)
    if args.with_perf and 'id="comic-performance-opt-in"' not in index:
        perf_source=REPO/'tools/perf-diagnostics.js'
        assert perf_source.is_file(), 'Reviewed diagnostic source is required'
        shutil.copy2(perf_source,target/'perf-diagnostics.js')
        bootstrap=(REPO/'tools/perf-bootstrap.html').read_text(encoding='utf-8').replace('__PERF_SHA__',digest((target/'perf-diagnostics.js').read_bytes())[:12])
        index=index.replace('<head>','<head>\n'+bootstrap,1)
    (target/'index.html').write_text(index,encoding='utf-8',newline='\n')
    for record in inventory['files']:
        if record['source']=='asset-delivery.js':
            assert digest(safe(target,record['source']).read_bytes())==ADAPTIVE_DELIVERY_SHA
            continue
        if record['source'].startswith('frame-packs/') or record['source'] in {'delivery-config.js','reader.js','index.html'}:continue
        assert digest(safe(target,record['source']).read_bytes())==record['sha256'],'Artifact changed: '+record['source']
    subprocess.run([sys.executable,str(REPO/'tools/bundle_runtime.py'),'--dist',str(target),'--verify'],check=True)
    redirect='''<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Just Cuz · 魔法故事书</title><script>location.replace('collection/'+location.search+location.hash);</script><body><p><a href="collection/">打开 Just Cuz 三集互动漫画</a></p></body></html>\n'''
    (output/'index.html').write_text(redirect,encoding='utf-8',newline='\n');(output/'.nojekyll').touch()
    actual=sum(p.stat().st_size for p in output.rglob('*') if p.is_file())
    assert actual<1_000_000_000, 'Published site exceeds conservative decimal 1 GB budget'
    assert not (target/'frame-packs').exists()
    report={'commit':args.commit,'filesCopied':count,'siteBytes':actual,'externalHdPackCount':inventory['groups']['hd-frame-packs']['files'],'externalHdBytes':inventory['groups']['hd-frame-packs']['bytes'],'readerSha256':reader_sha,'diagnosticsOptIn':'id="comic-performance-opt-in"' in index,'publicPrefix':'collection/','siteDirectory':str(output.relative_to(REPO))}
    report['assetDelivery']={'source':'tools/adaptive-asset-delivery.js','sha256':ADAPTIVE_DELIVERY_SHA,'selection':'verified-16KiB-probe','probeWaitLimitMs':1200,'mirrors':config['mirrors'],'originalSourceInventoryRetained':True,'stableMediaSource':True,'mediaOriginProofSha256':digest((REPO/'docs/collection-media-origin.json').read_bytes())}
    (output/'collection-release.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8',newline='\n')
    print(json.dumps(report))

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__);sub=parser.add_subparsers(dest='action',required=True)
    copy=sub.add_parser('copy');copy.add_argument('--source',type=Path,required=True);copy.add_argument('--inventory',type=Path,required=True)
    prepare=sub.add_parser('prepare');prepare.add_argument('--delivery-candidate',type=Path,required=True)
    build=sub.add_parser('build');build.add_argument('--commit',default=os.environ.get('GITHUB_SHA',''));build.add_argument('--output',type=Path,default=REPO/'_site');build.add_argument('--with-perf',action='store_true')
    args=parser.parse_args();{'copy':copy_source,'prepare':prepare_publication,'build':build_site}[args.action](args)
