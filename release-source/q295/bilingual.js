/* Isolated Q51 helper. It does not install itself into the comic reader. */
(() => {
  'use strict';
  const NS='http://www.w3.org/2000/svg',details=new WeakMap();let counter=0;
  const finite=(n,min,max)=>Number.isFinite(n)&&n>=min&&n<=max;
  const point=(p,w,h)=>Array.isArray(p)&&p.length===2&&finite(p[0],-w,2*w)&&finite(p[1],-h,2*h);
  const make=name=>document.createElementNS(NS,name);
  function pathLength(start,control,end){
    let total=0,previous=start;
    for(let i=1;i<=80;i++){
      const t=i/80,q=[(1-t)**2*start[0]+2*(1-t)*t*control[0]+t*t*end[0],(1-t)**2*start[1]+2*(1-t)*t*control[1]+t*t*end[1]];
      total+=Math.hypot(q[0]-previous[0],q[1]-previous[1]);previous=q;
    }
    return total;
  }
  function create(fit,content){
    const layout=fit&&fit.layout,box=fit&&fit.box;
    if(!layout||!box||!finite(box.width,1,10000)||!finite(box.height,1,10000)||typeof content!=='string'||!['arc','rotated-line'].includes(layout.type))return null;
    const w=box.width,h=box.height;
    if(layout.type==='arc'&&(!point(layout.start,w,h)||!point(layout.control,w,h)||!point(layout.end,w,h)))return null;
    if(layout.type==='rotated-line'&&(!point(layout.center,w,h)||!finite(layout.rotation,-180,180)))return null;
    const svg=make('svg'),text=make('text');svg.classList.add('comic-translation','comic-translation-sourcefit','comic-translation-shaped');
    svg.setAttribute('viewBox',`0 0 ${w} ${h}`);svg.setAttribute('width','100%');svg.setAttribute('height','100%');svg.setAttribute('aria-label',content);svg.dataset.letteringLayout=layout.type;
    Object.assign(svg.style,{position:'absolute',inset:'0',width:'100%',height:'100%',zIndex:'1',display:'block',overflow:'hidden',pointerEvents:'none',background:'transparent',border:'0',padding:'0',boxShadow:'none',fontSize:(fit.fontSize||64)+'px'});
    text.setAttribute('fill',/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(fit.color||'')?fit.color:'#101014');text.setAttribute('text-anchor','middle');text.style.fontFamily='inherit';text.style.fontWeight=String(fit.fontWeight||400);text.style.fontSize='inherit';
    let path=null,available;
    if(layout.type==='arc'){
      const defs=make('defs');path=make('path');const id='comic-q51-lettering-arc-'+(++counter);
      path.setAttribute('id',id);path.setAttribute('d',`M ${layout.start[0]} ${layout.start[1]} Q ${layout.control[0]} ${layout.control[1]} ${layout.end[0]} ${layout.end[1]}`);defs.append(path);svg.append(defs);
      const textPath=make('textPath');textPath.setAttribute('href','#'+id);textPath.setAttribute('startOffset','50%');textPath.textContent=content.replace(/\s*\n\s*/g,' ');text.append(textPath);
      available=pathLength(layout.start,layout.control,layout.end)*.94;
    }else{
      const [cx,cy]=layout.center;text.setAttribute('x',String(cx));text.setAttribute('y',String(cy));text.setAttribute('dominant-baseline','central');text.setAttribute('transform',`rotate(${layout.rotation} ${cx} ${cy})`);text.textContent=content.replace(/\s*\n\s*/g,' ');available=Math.max(w,h)*.9;
    }
    if(finite(layout.availableLength,10,Math.hypot(w,h)*2))available=Math.min(available,layout.availableLength);
    svg.append(text);details.set(svg,{text,path,available});return svg;
  }
  function fit(svg,max,min=20){
    const info=details.get(svg);if(!info)return false;
    max=finite(max,1,1000)?max:64;min=finite(min,1,max)?min:Math.min(20,max);
    let size=max,length=0;svg.style.fontSize=size+'px';
    const measure=()=>{try{return Number(info.text.getComputedTextLength());}catch(_){return 0;}};
    length=measure();
    if(!Number.isFinite(length)||length<=0){svg.dataset.textFits='pending-font-or-layout';return true;}
    while(size>min&&length>info.available){size=Math.max(min,size-1);svg.style.fontSize=size+'px';length=measure();}
    svg.dataset.fittedFontSize=String(size);svg.dataset.textFits=String(length<=info.available+1);svg.dataset.measuredTextLength=String(length);svg.dataset.availableTextLength=String(info.available);return true;
  }
  window.ComicSourcefitLayout=Object.freeze({create,fit,isLayoutElement:element=>details.has(element)});
})();

/* Source-bound OCR/translation layer. Original pages and orbit media stay intact. */
(() => {
  'use strict';
  const book=window.COMIC_BOOK, data=window.COMIC_BILINGUAL, locales=window.COMIC_LOCALES;
  const stage=document.getElementById('page-stage'), image=document.getElementById('page-image');
  const selector=document.getElementById('reading-language');
  const supported=['zh','en','ja','ko','ru','fr'];
  const tags={zh:'zh-CN',en:'en',ja:'ja',ko:'ko',ru:'ru',fr:'fr'};
  const textLabels={zh:'译文',en:'Text',ja:'本文',ko:'본문',ru:'Текст',fr:'Texte'};
  const textTitles={zh:n=>`第 ${n} 页 · 原文与译文`,en:n=>`Page ${n} · Story text`,ja:n=>`${n}ページ · 本文と原文`,ko:n=>`${n}쪽 · 본문과 원문`,ru:n=>`Страница ${n} · Текст и оригинал`,fr:n=>`Page ${n} · Texte et original`};
  const q97EnglishFooterPin=Object.freeze({"panelId":"page-078-panel-01","sourcePageSha256":"5eda866e5e8b7b23aa44756753f7d1de17145aec4d4caca39250b4485d6619ba","mediaSha256":"5c733921a058180fe2e5fb981ace0c8480787c1c8c0653417fa09cfe46974866","proofSha256":"e8dc7593d0eed36b07cbd424888a36e8b0a9e09b71bb4ce46e017a753aa1acd5","glyphSha256":"3c7d2504e713955d3e0b65923d7fb57545ac22bfc05a2fa4c80811e776219dfd","source":"publication/p078-text-04-q97-English-glyphs-3c7d2504e713.png"});
  // P78 upper footer uses the existing persistent title image; conditional top ink stays independent.
  function EnglishLayerSpec(policy,model) {
    if (!policy.separateEnglishRole) return model?.rotationLetteringOverlay;
    const p=q97EnglishFooterPin,spec=policy.separateEnglishRole==='title' && model?.id===p.panelId ? model.rotationTitleOverlay : null;
    return spec && model.candidateSourceAudit?.proofSha256===p.proofSha256 && policy.sourcePageSha256===p.sourcePageSha256 && model.actualMedia?.sha256===p.mediaSha256 && policy.englishGlyphSha256===p.glyphSha256 && spec.sha256===p.glyphSha256 && spec.source===p.source && spec.kind==='source-footer-lettering' && spec.sourcePageSha256===p.sourcePageSha256 && spec.mediaSha256===p.mediaSha256 && spec.frameCount===300 && spec.coordinateSpace==='source-panel' && spec.width===1600 && spec.height===945 ? spec : null;
  }
  const translationRequests = new Map();
  const failedTranslations = new Set();
  function fetchTranslation(next) {
    const locale = locales.locales[next];
    if (!locale?.translationAsset || locale.translations) return Promise.resolve();
    if (translationRequests.has(next)) return translationRequests.get(next);
    const {source, sha256} = locale.translationAsset;
    const pending = (async () => {
      if (!/^[a-f0-9]{64}$/.test(sha256) || source !== `locale-assets/${next}-${sha256.slice(0, 12)}.json`)
        throw new Error('Invalid translation route');
      const response = await fetch(source, {cache:failedTranslations.has(next) ? 'reload' : 'force-cache', priority:'low'});
      if (!response.ok) throw new Error('Translation response failed');
      const bytes = await response.arrayBuffer();
      if (bytes.byteLength < 10 || bytes.byteLength > 131072) throw new Error('Invalid translation size');
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      const actual = Array.from(new Uint8Array(digest), n => n.toString(16).padStart(2,'0')).join('');
      if (actual !== sha256) throw new Error('Translation checksum mismatch');
      const packet = JSON.parse(new TextDecoder('utf-8', {fatal:true}).decode(bytes));
      if (packet.schemaVersion !== 1 || packet.language !== next || packet.sourceDigest !== locales.sourceDigest
        || !packet.translations || Array.isArray(packet.translations) || typeof packet.translations !== 'object'
        || Object.keys(packet.translations).length !== locale.translationAsset.entries
        || !Object.entries(packet.translations).every(([id, value]) => /^p\d{3}-[a-z0-9-]+$/.test(id) && typeof value === 'string'))
        throw new Error('Invalid translation data');
      locale.translations = Object.freeze(packet.translations);
      failedTranslations.delete(next);
    })().catch(error => {
      failedTranslations.add(next);
      throw error;
    }).finally(() => translationRequests.delete(next));
    translationRequests.set(next, pending);
    return pending;
  }
  function translated(region){
    if(region.strategy==='brand'||region.preserveOriginalBrand||language==='en')return region.english;
    return language==='zh'?region.zh:(locales.locales[language]?.translations?.[region.id]||region.english);
  }
  function formattedTranslation(region,fit){
    const text=translated(region),lines=fit&&fit.lineBreaks&&fit.lineBreaks[language];
    // A reviewed line plan may change whitespace only, never story content.
    if(Array.isArray(lines)&&lines.length&&lines.every(s=>typeof s==='string')){
      const candidate=lines.join('\n'),compact=s=>s.replace(/\s/gu,'');
      if(compact(candidate)===compact(text))return candidate;
    }
    return text;
  }
  // Only these source-reviewed P8/P20 caption scopes may follow virtual hosts.
  const virtualCaptionScopePins=Object.freeze({"page-008-panel-01":{"sourcePageSha256":"cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d","sourceCropSha256":"b78f3bd42da66d56545e11b30cc1b9dd1fd793bdad646f8a244482b5378fc169","mediaSha256":"77772485322ed5680949e311cd0c976eb97944f496409fa61440911445874075","overlaySha256":"14c4b68fd01575874ed28ae4452012d1138f38e422f56c19c09e4b36c22664c7","englishGlyphSha256":"5816487a330f04810887303a1958bdf9855d1ece1fe818537615b6b1430b7110","producerLayoutEvidence":{"file":"qa/public-acceptance/page-008-panel-01-bounds.json","sha256":"f33ce52c5ccc3005d468f1d19b638671f42309faa2f76bf7660a7b675f7ade8e"},"regions":[{"id":"gasp","title":"惊讶","artworkRect":{"x":1,"y":16,"width":469,"height":834}},{"id":"stomp","title":"跺脚","artworkRect":{"x":548,"y":451,"width":672,"height":804}},{"id":"cry","title":"哭喊","artworkRect":{"x":681,"y":1311,"width":885,"height":482}}],"captions":{"p008-narration-01":{"virtualRegionId":"gasp","box":{"x":60,"y":118,"width":445,"height":78}},"p008-narration-02":{"virtualRegionId":"stomp","box":{"x":686,"y":507,"width":280,"height":139}},"p008-narration-03":{"virtualRegionId":"cry","box":{"x":907,"y":1212,"width":508,"height":65}},"p008-speech-04":{"virtualRegionId":null,"box":{"x":193,"y":1800,"width":1233,"height":77}}},"proofSource":"qa/q118/p008-virtual-caption-scope-proof.json","proofSha256":"0ee941ced7ab4cac01797c4bba86772d487f0960337305c12702db07b50c958b"},"page-020-panel-01":{"sourcePageSha256":"3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d","sourceCropSha256":"cecf5fddda96489b28abaebece0701a1ca949e78818496022d4217ab68486cb3","mediaSha256":"21096c30727631c76795dd268eaa25b8899d6500e513bde64ebccda29834d938","overlaySha256":"5869ef3fc759d7c3970245c3573ca78600dccd4c70d588a0c8c353d065452973","englishGlyphSha256":"f47a36e1a0296c34d67e9d6fbd472b0e6dc0f2e996514b256227e1d44e806977","producerLayoutEvidence":{"file":"qa/public-acceptance/page-020-panel-01-bounds.json","sha256":"bf938775a178ba7a22e79fc6af7ca148edbc565c45b038e9c48487a7a64c6f97"},"regions":[{"id":"gasp","title":"雨中惊讶","artworkRect":{"x":110,"y":190,"width":385,"height":608}},{"id":"stomp","title":"雨中跺脚","artworkRect":{"x":804,"y":347,"width":518,"height":593}},{"id":"lying","title":"雨中倒地哭喊","artworkRect":{"x":24,"y":1038,"width":827,"height":574}},{"id":"kneel","title":"仰头呼喊","artworkRect":{"x":1037,"y":1197,"width":461,"height":516}}],"captions":{"p020-narration-01":{"virtualRegionId":"gasp","box":{"x":91,"y":119,"width":445,"height":77}},"p020-narration-02":{"virtualRegionId":"stomp","box":{"x":937,"y":266,"width":279,"height":138}},"p020-narration-03":{"virtualRegionId":"lying","box":{"x":150,"y":925,"width":508,"height":66}},"p020-narration-04":{"virtualRegionId":"kneel","box":{"x":1016,"y":1090,"width":507,"height":126}},"p020-speech-05":{"virtualRegionId":null,"box":{"x":288,"y":1776,"width":1017,"height":169}}},"proofSource":"qa/q118/p020-virtual-caption-scope-proof.json","proofSha256":"8489fa5f6c4915997294b47c28d69289d37f29b3b4dcd10ea1d48fe86330bff6"}});
  const virtualCaptionScopes=new WeakMap();
  const sameVirtualRect=(a,b)=>!!a&&!!b&&['x','y','width','height'].every(k=>a[k]===b[k]);
  const p026StaticCaptionIds=Object.freeze({"p026-text-01":{"x":384,"y":71,"width":814,"height":66},"p026-text-02-line1":{"x":139,"y":132,"width":1310,"height":58},"p026-text-02-line2":{"x":131,"y":188,"width":1318,"height":57},"p026-text-02-line3":{"x":617,"y":244,"width":356,"height":47},"p026-text-05":{"x":139,"y":1753,"width":1310,"height":183}});
  function p026StaticCaptionScope(policy,model,source,caption){
    const p=window.ComicPanelPlayer?.sourceCloudPresentation(model,source),box=p026StaticCaptionIds[caption.id];
    if(!p)return false;
    if(!box)return !['staticOutsideSourceCloudProofSource','staticOutsideSourceCloudProofSha256','virtualRegionId','virtualRegionScope','virtualRegionProofSource','virtualRegionProofSha256'].some(k=>Object.prototype.hasOwnProperty.call(policy,k));
    if(!sameVirtualRect(caption.box,box)||policy.regionId!=null||!policy.separateEnglishLayer||policy.hideWhenActive||policy.hiddenNativeFrameRanges.length||policy.staticOutsideSourceCloudProofSource!==p.proofSource||policy.staticOutsideSourceCloudProofSha256!==p.proofSha256)return false;
    if(p.actualRegions.some(q=>{const r=q.artworkRect,b=caption.box;return b.x<r.x+r.width&&r.x<b.x+b.width&&b.y<r.y+r.height&&r.y<b.y+b.height;}))return false;
    virtualCaptionScopes.set(policy,{mode:'static-outside-regions',regionId:null,box:caption.box});return true;
  }
  function p026DecorationTranslationHidden(region){
    const model=window.COMIC_BOOK?.pages?.find(p=>p.sourcePage===26)?.panels?.[0],source=window.COMIC_BOOK?.pages?.find(p=>p.sourcePage===26);
    return current?.sourcePage===26&&!!window.ComicPanelPlayer?.sourceCloudPresentation(model,source)&&['p026-text-03','p026-text-04'].includes(region.id)&&region.strategy==='note'&&!region.sourceFit;
  }
  // Q129 P33 source-static captions. Q118/P26 branches stay unchanged.
  function p033StaticCaptionScope(policy,model,source,caption){
    const p=window.ComicPanelPlayer?.sourceScenePresentation(model,source);if(!p)return false;
    const expected=p.captions[caption.id];
    if(!expected)return !['staticOutsideSceneProofSource','staticOutsideSceneProofSha256'].some(k=>Object.prototype.hasOwnProperty.call(policy,k));
    if(!sameVirtualRect(caption.box,expected.box)||!caption.sourceFit||caption.sourceFit.patch!==expected.patch||caption.sourceFit.patchSha256!==expected.patchSHA256||policy.regionId!=null||!policy.separateEnglishLayer||policy.hideWhenActive||policy.hiddenNativeFrameRanges.length||policy.staticOutsideSceneProofSource!==p.proofSource||policy.staticOutsideSceneProofSha256!==p.proofSHA256)return false;
    virtualCaptionScopes.set(policy,{mode:'static-outside-regions',regionId:null,box:caption.box,p033SourceStatic:true});return true;
  }
  function virtualCaptionScope(policy,model,source,caption){
    if(model?.id==='page-033-panel-01')return p033StaticCaptionScope(policy,model,source,caption);
    if(model?.id==='page-026-panel-01')return p026StaticCaptionScope(policy,model,source,caption);
    const fields=['virtualRegionId','virtualRegionScope','virtualRegionProofSource','virtualRegionProofSha256'];
    const pin=virtualCaptionScopePins[model?.id],expected=pin?.captions?.[caption.id];
    if(!expected)return !fields.some(k=>Object.prototype.hasOwnProperty.call(policy,k));
    if(!policy.separateEnglishLayer || model.regionMediaOverride || policy.regionId!=null
      || policy.hideWhenActive || policy.hiddenNativeFrameRanges.length
      || policy.virtualRegionId!==expected.virtualRegionId
      || policy.virtualRegionScope!==(expected.virtualRegionId===null?'static-outside-regions':'region')
      || policy.virtualRegionProofSource!==pin.proofSource || policy.virtualRegionProofSha256!==pin.proofSha256
      || source.sha256!==pin.sourcePageSha256 || model.sourceCropSha256!==pin.sourceCropSha256
      || model.actualMedia?.sha256!==pin.mediaSha256 || model.protectionOverlay?.sha256!==pin.overlaySha256
      || EnglishLayerSpec(policy,model)?.sha256!==pin.englishGlyphSha256
      || !sameVirtualRect(caption.box,expected.box))return false;
    const config=window.COMIC_INTERACTION_LAYOUTS,matches=config?.layouts?.filter(q=>q?.panelId===model.id);
    if(!matches || matches.length!==1 || !matches[0].producerLayoutEvidence?.some(e=>e.file===pin.producerLayoutEvidence.file&&e.sha256===pin.producerLayoutEvidence.sha256))return false;
    const actual=window.ComicPanelPlayer?.interactionRegions(model,source);
    if(!Array.isArray(actual)||actual.length!==pin.regions.length||!actual.every((q,i)=>q.id===pin.regions[i].id&&sameVirtualRect(q.artworkRect,pin.regions[i].artworkRect)))return false;
    const region=actual.find(q=>q.id===expected.virtualRegionId),box=caption.box;
    if(expected.virtualRegionId!==null&&!region)return false;
    if(expected.virtualRegionId===null&&actual.some(q=>{const r=q.artworkRect;return box.x<r.x+r.width&&r.x<box.x+box.width&&box.y<r.y+r.height&&r.y<box.y+box.height;}))return false;
    virtualCaptionScopes.set(policy,{mode:policy.virtualRegionScope,regionId:expected.virtualRegionId,box,rect:region?.artworkRect});return true;
  }
  function virtualErasureClip(scope){
    const b=scope.box,r=scope.rect;if(!r)return '';
    const l=Math.max(0,r.x-b.x),t=Math.max(0,r.y-b.y),right=Math.min(b.width,r.x+r.width-b.x),bottom=Math.min(b.height,r.y+r.height-b.y);
    if(right<=l||bottom<=t)return '';
    if(l===0&&t===0&&right===b.width&&bottom===b.height)return 'inset(0px 0px 100% 0px)';
    // Keep the existing ink erasure outside the active window; cut only its overlap.
    return `polygon(evenodd, 0px 0px, ${b.width}px 0px, ${b.width}px ${b.height}px, 0px ${b.height}px, 0px 0px, ${l}px ${t}px, ${l}px ${bottom}px, ${right}px ${bottom}px, ${right}px ${t}px, ${l}px ${t}px, 0px 0px)`;
  }

  const textButton=document.getElementById('bilingual-read'), dialog=document.getElementById('bilingual-dialog');
  if (!book || !data || data.schemaVersion!==1 || !locales || locales.schemaVersion!==1 || !stage || !selector || !dialog) return;
  const byPage=new Map();
  function validateSheet(page) {
    const source=book.pages[page.sourcePage-1];
    if (!source || source.sourcePage!==page.sourcePage || source.sha256!==page.sourcePageSha256 ||
      source.width!==page.width || source.height!==page.height || !Array.isArray(page.regions)) return false;
    const models=source.panels.flatMap(p=>[p,...(p.regionMediaOverrides||[]).map(r=>r.model)]);
    const validPolicies=(page.regions||[]).every(r=>{
      const p=r.interactionPolicy;if(!p)return true;const model=models.find(m=>m.id===p.panelId);
      return !!model && p.sourcePageSha256===source.sha256 && (!p.mediaSha256 || p.mediaSha256===model.actualMedia?.sha256) && (p.regionId||null)===(model.regionMediaOverride?.regionId||null) && Array.isArray(p.hiddenNativeFrameRanges) && virtualCaptionScope(p,model,source,r) && (!p.separateEnglishLayer || (EnglishLayerSpec(p,model)?.translationAwareSeparateLayer===true && p.englishGlyphSha256===EnglishLayerSpec(p,model).sha256));
    });
    return validPolicies;
  }
  let language='zh', current=null, version=0, raf=0;
  try { const q=new URL(location.href).searchParams.get('lang'), saved=localStorage.getItem('just-cuz-reading-language'); language=supported.includes(q) ? q : supported.includes(saved) ? saved : 'zh'; } catch (_) {}
  const initialLanguage = language;
  if (locales.locales[language]?.translationAsset) language = 'en';
  const layer=document.createElement('div'); layer.id='comic-translation-layer'; layer.className='comic-translation-layer'; layer.lang='zh-CN'; stage.append(layer);
  const sr=document.createElement('div');sr.className='sr-only';sr.id='comic-readable-text';stage.append(sr);
  const rectOK=(r,p)=>r && ['x','y','width','height'].every(k=>Number.isFinite(r[k])) && r.x>=0 && r.y>=0 && r.width>0 && r.height>0 && r.x+r.width<=p.width && r.y+r.height<=p.height;
  const elements=[];
  function fitText(element,max,min=24) {
    if(!max)return;if(window.ComicSourcefitLayout?.fit(element,max,min))return;
    let size=max;element.style.fontSize=size+'px';
    while (size>min && (element.scrollHeight>element.clientHeight+1 || element.scrollWidth>element.clientWidth+1)) { size=Math.max(min,size-1);element.style.fontSize=size+'px'; }
    element.dataset.fittedFontSize=String(size);
    element.dataset.textFits=String(element.scrollHeight<=element.clientHeight+1 && element.scrollWidth<=element.clientWidth+1);
  }
  function sizeLayer() {
    if (!current) return;
    const width=stage.clientWidth,height=stage.clientHeight,s=Math.min(width/current.width,height/current.height);
    Object.assign(layer.style,{width:current.width+'px',height:current.height+'px',left:(width-current.width*s)/2+'px',top:(height-current.height*s)/2+'px',transform:`scale(${s})`});
  }
  function openText() {
    if (!current) return;
    if (!(current.transcript||current.regions).length) {if(dialog.open)dialog.close();return;}
    const body=document.getElementById('bilingual-text-content'); body.replaceChildren();
    document.getElementById('bilingual-text-title').textContent=textTitles[language](current.sourcePage);
    for (const region of (current.transcript||current.regions)) {
      if (!region.english || !region.zh) continue;
      const row=document.createElement('section'), cn=document.createElement('p'), en=document.createElement('p');
      cn.className='bilingual-copy-localized';cn.lang=tags[language];cn.textContent=translated(region);
      en.className='bilingual-copy-en';en.lang='en';en.textContent=region.english;
      row.append(cn);if(language!=='en'&&cn.textContent!==region.english)row.append(en);body.append(row);
    }
    if (!dialog.open) dialog.showModal();
  }
  function updateLanguageUI() {
    selector.value=requestedLanguage || language;document.documentElement.lang=tags[language];layer.lang=tags[language];
    textButton.textContent=textLabels[language];textButton.setAttribute('aria-label',textTitles[language](current?.sourcePage||''));
    stage.dataset.readingLanguage=language;layer.hidden=language==='en'||!current||image.hidden;
    if (current) sr.textContent=(current.transcript||current.regions).map(translated).filter(Boolean).join('\n');
    if (dialog.open) openText();
  }
  function updateInteractionText() {
    if (!current) return;
    const allHosts=Array.from(document.querySelectorAll('.panel-host'));
    for (const item of elements) {
      let visible=true,orbiting=false;
      if (item.policy) {
        const hosts=allHosts.filter(h=>h.dataset.backgroundOnly!=='true' && (h.dataset.regionMediaId||h.dataset.sourcePanelId)===item.policy.panelId && (!item.policy.regionId || h.dataset.interactionRegion===item.policy.regionId));
        const virtual=virtualCaptionScopes.get(item.policy);
        const active=virtual?.mode==='static-outside-regions'?null:hosts.find(h=>h.style.opacity==='1'&&(!virtual||h.dataset.interactionRegion===virtual.regionId));
        if(item.patch)item.patch.style.clipPath=active&&language!=='en'&&virtual?.mode==='region'?virtualErasureClip(virtual):'';
        if (item.policy.separateEnglishLayer) {
          const visibility=language!=='en'||virtual?.p033SourceStatic===true?'hidden':'';
          for(const host of hosts){const english=host.querySelector(item.policy.separateEnglishRole==='title'?'.panel-rotation-title':'.panel-rotation-lettering');if(english){english.classList.add('panel-bilingual-separate-lettering');if(english.style.visibility!==visibility)english.style.visibility=visibility;}}
          orbiting=!!active && language!=='en';
        }
        if (active && language!=='en') {
          const index=Number(active.dataset.frameIndex);
          if (item.policy.hideWhenActive) visible=false;
          else if (Number.isSafeInteger(index)) visible=!item.policy.hiddenNativeFrameRanges.some(r=>index>=r[0] && index<=r[1]);
        }
      }
      item.element.classList.toggle('comic-translation-on-orbit',orbiting);
      item.element.hidden=!visible;
    }
  }
  function scheduleInteraction() { if (raf) return;raf=requestAnimationFrame(()=>{raf=0;updateInteractionText();}); }
  function showPage(sourcePage) {
    const next=byPage.get(Number(sourcePage));current=next||null;const ticket=++version;elements.length=0;layer.replaceChildren();
    const deferred=[];
    textButton.disabled=!current||!(current.transcript||current.regions).length;
    if (!current) {
      layer.hidden=true;
      delete layer.dataset.sourcePage;
      delete layer.dataset.sourcePageSha256;
      sr.textContent='';
      return;
    }
    layer.dataset.sourcePage=String(current.sourcePage);layer.dataset.sourcePageSha256=current.sourcePageSha256;
    for (const region of current.regions) {
      if (!rectOK(region.box,current) || !translated(region) || region.strategy==='brand' || region.preserveOriginalBrand) continue;
      // A patch changes only source English ink. Its alpha is zero elsewhere.
      // Never reveal translated lettering before its English-removal patch loads.
      if(p026DecorationTranslationHidden(region))continue;
      const fit=region.sourceFit;
      if (fit && fit.enabled!==false && fit.schemaVersion===1 && fit.sourcePageSha256===current.sourcePageSha256 && rectOK(fit.box,current) && ['x','y','width','height'].every(k=>fit.box[k]===region.box[k]) && /^[a-f0-9]{64}$/.test(fit.patchSha256||'') && /^source-fit-assets\/[a-z0-9-]+-glyph-only\.png$/.test(fit.patch)) {
        const b=fit.box,group=document.createElement('div'),patch=document.createElement('img'),shaped=window.ComicSourcefitLayout?.create(fit,formattedTranslation(region,fit)),element=shaped||document.createElement('div');
        group.className='comic-sourcefit-region';group.dataset.translationId=region.id;group.dataset.sourcePageSha256=fit.sourcePageSha256;
        const virtual=virtualCaptionScopes.get(region.interactionPolicy);if(virtual)group.dataset.virtualCaptionScope=virtual.mode;
        Object.assign(group.style,{left:b.x+'px',top:b.y+'px',width:b.width+'px',height:b.height+'px',visibility:'hidden'});
        patch.className='comic-sourcefit-erasure';patch.alt='';patch.setAttribute('aria-hidden','true');patch.draggable=false;
        const pageNumber=current.sourcePage;
        const failed=reason=>{if(ticket!==version)return;group.style.visibility='hidden';group.dataset.patchError=reason;document.dispatchEvent(new CustomEvent('comic-lettering-patch-error',{detail:{sourcePage:pageNumber,id:region.id,patch:fit.patch,reason}}));};
        patch.onload=async()=>{
          if(ticket!==version)return;
          try{
            // onload alone does not guarantee that the first paint is decoded.
            if(typeof patch.decode==='function')await patch.decode();
            if(ticket!==version)return;
            if(patch.naturalWidth!==b.width||patch.naturalHeight!==b.height){failed('patch-dimensions');return;}
            group.dataset.patchReady='true';group.style.visibility='visible';scheduleInteraction();
          }catch(_){failed('patch-decode');}
        };
        patch.onerror=()=>failed('patch-load');
        element.setAttribute('class','comic-translation comic-translation-sourcefit'+(shaped?' comic-translation-shaped':''));element.dataset.translationId=region.id;element.setAttribute('lang',tags[language]);if(!shaped)element.textContent=formattedTranslation(region,fit);element.setAttribute('aria-label',translated(region));
        const align=['left','center','right'].includes(fit.align)?fit.align:'center';
        Object.assign(element.style,{inset:'0',width:'100%',height:'100%',color:fit.color,textAlign:align,justifyContent:align==='left'?'flex-start':align==='right'?'flex-end':'center',lineHeight:String(fit.lineHeight||1.13),fontWeight:String(fit.fontWeight||600)});
        if(Number.isFinite(fit.textStrokePx)&&fit.textStrokePx>=0&&fit.textStrokePx<=10&&/^#[a-f0-9]{6}$/i.test(fit.textStrokeColor||'')){element.style.webkitTextStroke=fit.textStrokePx+'px '+fit.textStrokeColor;element.style.paintOrder='stroke fill';}
        if(Number.isFinite(fit.rotation)&&Math.abs(fit.rotation)<=180)element.style.transform=`rotate(${fit.rotation}deg)`;
        group.append(patch,element);layer.append(group);
        elements.push({element:group,patch,policy:region.interactionPolicy||null,max:0,min:0});
        elements.push({element,policy:region.interactionPolicy||null,max:fit.fontSize*(locales.locales[language]?.fontScale||1),min:Math.min(fit.minFontSize||20,20)});
        if(language!=='en')patch.src=fit.patch+'?v='+fit.patchSha256.slice(0,12);
        continue;
      }
      // Preserve the existing visible translation until its clean plate is reviewed.
      deferred.push({id:region.id,reason:'legacy-visible-pending-clean-plate'});
      for (const erase of (region.eraseBoxes||[])) {
        if (!rectOK(erase.box,current) || !Array.isArray(erase.rgb) || erase.rgb.length!==3) continue;
        const patch=document.createElement('div'),q=erase.box;patch.className='comic-translation-erasure';patch.setAttribute('aria-hidden','true');
        Object.assign(patch.style,{left:q.x+'px',top:q.y+'px',width:q.width+'px',height:q.height+'px',background:`rgb(${erase.rgb.join(',')})`});
        layer.append(patch);elements.push({element:patch,policy:region.interactionPolicy||null,max:0,min:0});
      }
      const b=region.displayBox||region.box, element=document.createElement('div');element.className='comic-translation comic-translation-legacy '+(region.strategy==='replace'?'comic-translation-replace':'comic-translation-note');
      element.dataset.translationId=region.id;element.lang=tags[language];element.textContent=translated(region);
      Object.assign(element.style,{left:b.x+'px',top:b.y+'px',width:b.width+'px',height:b.height+'px',textAlign:region.align||'center'});
      if (region.strategy==='replace') element.style.background=`rgb(${region.background.rgb.join(',')})`;
      element.setAttribute('aria-label',translated(region));layer.append(element);elements.push({element,policy:region.interactionPolicy||null,max:(region.fontSize||64)*(locales.locales[language]?.fontScale||1),min:Math.min(region.minFontSize||26,language==='zh'?24:20)});
    }
    layer.dataset.deferredRegionCount=String(deferred.length);
    layer.dataset.letteringState=deferred.length?'partial-sourcefit':'sourcefit-candidate';
    document.dispatchEvent(new CustomEvent('comic-lettering-deferred',{detail:{sourcePage:current.sourcePage,language,regions:deferred}}));
    sizeLayer();updateLanguageUI();
    for (const item of elements) fitText(item.element,item.max,item.min);
    if (language!=='en' && document.fonts) document.fonts.load(`64px "${locales.locales[language]?.fontFamily||'Just Cuz Bilingual'}"`,elements.map(i=>i.element.textContent).join('')).then(()=>{
      if (ticket!==version) return;for (const item of elements) fitText(item.element,item.max,item.min);scheduleInteraction();
    }).catch(()=>{});
    updateInteractionText();
    if (dialog.open) openText();
  }
  let languageTicket = 0;
  let requestedLanguage = null;
  const translationStatus = document.createElement('span');
  translationStatus.id = 'translation-load-status';
  translationStatus.className = 'sr-only';
  translationStatus.setAttribute('role', 'status');
  selector.after(translationStatus);
  selector.setAttribute('aria-describedby', translationStatus.id);
  const translationMessages = {
    zh:['正在加载所选语言。','暂时无法加载所选语言，可重新选择重试。'],
    en:['Loading the selected language.','The selected language could not load. Select it again to retry.'],
    ja:['選んだ言語を読み込んでいます。','言語を読み込めませんでした。もう一度選択してください。'],
    ko:['선택한 언어를 불러오는 중입니다.','언어를 불러올 수 없습니다. 다시 선택해 주세요.'],
    ru:['Загружается выбранный язык.','Не удалось загрузить язык. Выберите его ещё раз.'],
    fr:['Chargement de la langue choisie.','Impossible de charger cette langue. Sélectionnez-la de nouveau.']
  };
  async function setLanguage(next, persist = true) {
    if (!supported.includes(next)) return;
    const ticket = ++languageTicket;
    requestedLanguage = next;
    const download = locales.locales[next]?.translationAsset && !locales.locales[next].translations;
    translationStatus.textContent = download ? translationMessages[language][0] : '';
    selector.toggleAttribute('data-language-pending', Boolean(download));
    try {
      if (download) await fetchTranslation(next);
    } catch (_) {
      if (ticket !== languageTicket) return;
      requestedLanguage = null;
      selector.value = language;
      selector.removeAttribute('data-language-pending');
      translationStatus.textContent = translationMessages[language][1];
      return;
    }
    if (ticket !== languageTicket) return;
    requestedLanguage = null;
    selector.removeAttribute('data-language-pending');
    translationStatus.textContent = '';
    language = next;
    if (current) showPage(current.sourcePage); else updateLanguageUI();
    sizeLayer();
    for (const item of elements) fitText(item.element,item.max,item.min);
    updateInteractionText();
    if (persist) {
      try {localStorage.setItem('just-cuz-reading-language',language);const u=new URL(location.href);u.searchParams.set('lang',language);history.replaceState(null,'',u.href);} catch (_) {}
    }
    document.dispatchEvent(new CustomEvent('comic-language-change',{detail:{language,sourcePage:current&&current.sourcePage}}));
  }
  const pageButton = document.getElementById('page-number');
  let letteringNumber = 0, letteringJob = null, letteringFailed = false;
  const letteringError = {
    zh:'本页译文暂未打开，点击译文重试。', en:'Story text could not load. Select Text to retry.',
    ja:'本文を読み込めませんでした。本文を選択して再試行してください。',
    ko:'본문을 읽을 수 없습니다. 본문을 눌러 다시 시도해 주세요.',
    ru:'Текст страницы не загрузился. Нажмите «Текст», чтобы повторить.',
    fr:'Le texte de cette page est indisponible. Sélectionnez Texte pour réessayer.'
  };

  async function readLettering(number, signal, reload) {
    const route = window.ComicLetteringPacket?.(number);
    if (!route || !window.crypto?.subtle) throw new Error('Page lettering route unavailable');
    const response = await fetch(route.url,{signal,cache:reload ? 'reload' : 'force-cache',priority:'low'});
    if (!response.ok) throw new Error('Page lettering HTTP error');
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength<10 || bytes.byteLength>32768) throw new Error('Invalid page lettering size');
    const digest = await crypto.subtle.digest('SHA-256',bytes);
    const checksum = Array.from(new Uint8Array(digest),byte=>byte.toString(16).padStart(2,'0')).join('');
    if (checksum!==route.sha256 || signal.aborted) throw new Error('Page lettering checksum mismatch');
    const packet = JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
    if (window.ComicPageModels) await window.ComicPageModels.ensure(book.pages[number-1], signal);
    if (signal.aborted || packet.schemaVersion!==1 || packet.page?.sourcePage!==number || !validateSheet(packet.page))
      throw new Error('Page lettering does not match the original');
    return packet.page;
  }

  function requestPage(sourcePage, open = false) {
    const number = Number(sourcePage);
    if (!Number.isSafeInteger(number) || number<1 || number>data.pages.length) return;
    if (letteringJob?.number===number) return;
    letteringJob?.controller.abort();
    letteringJob=null;
    letteringNumber=number;
    letteringFailed=false;
    showPage(number);
    if (current) { if (open) openText(); return; }
    const controller=new AbortController(), signal=controller.signal;
    const job={number,controller};
    letteringJob=job;
    const present=()=>letteringJob===job && !signal.aborted && Number(pageButton.value)===number && !image.hidden;
    void readLettering(number,signal,open).catch(error=>{
      if (signal.aborted) throw error;
      return readLettering(number,signal,true);
    }).then(sheet=>{
      if (!present()) return;
      byPage.set(number,sheet);
      data.pages[number-1]=sheet;
      showPage(number);
      if (open) openText();
    }).catch(()=>{
      if (!present()) return;
      letteringFailed=true;
      sr.textContent=letteringError[language];
      textButton.disabled=false;
    }).finally(()=>{if(letteringJob===job)letteringJob=null;});
  }
  selector.addEventListener('change',()=>setLanguage(selector.value));
  textButton.addEventListener('click',()=>{
    if (current) openText();
    else if (letteringFailed && Number(pageButton.value)===letteringNumber) requestPage(letteringNumber,true);
  });
  document.getElementById('close-bilingual').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  document.addEventListener('comic-page-original-ready',e=>requestPage(e.detail.sourcePage));
  document.addEventListener('comic-panel-status',scheduleInteraction);
  new ResizeObserver(sizeLayer).observe(stage);
  new MutationObserver(scheduleInteraction).observe(document.getElementById('panel-layer'),{subtree:true,attributes:true,attributeFilter:['data-frame-index','style']});
  // Never leave another page's translated text above the next page while it loads.
  new MutationObserver(()=>{if(image.hidden){layer.hidden=true;textButton.disabled=true;sr.textContent='';}}).observe(image,{attributes:true,attributeFilter:['hidden']});
  updateLanguageUI();
  if (image.complete && image.naturalWidth && !image.hidden) requestPage(Number(pageButton.value));
  if (initialLanguage !== language) { selector.value = initialLanguage; void setLanguage(initialLanguage, false); }
  document.dispatchEvent(new CustomEvent('comic-language-change',{detail:{language,sourcePage:current&&current.sourcePage}}));
})();
