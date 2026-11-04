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
  function translated(region){
    if(region.strategy==='brand'||region.preserveOriginalBrand||language==='en')return region.english;
    return language==='zh'?region.zh:(locales.locales[language]?.translations?.[region.id]||region.english);
  }
  const textButton=document.getElementById('bilingual-read'), dialog=document.getElementById('bilingual-dialog');
  if (!book || !data || data.schemaVersion!==1 || !locales || locales.schemaVersion!==1 || !stage || !selector || !dialog) return;
  const byPage=new Map();
  for (const page of data.pages || []) {
    const source=book.pages.find(p=>p.sourcePage===page.sourcePage);
    if (!source || source.sha256!==page.sourcePageSha256 || source.width!==page.width || source.height!==page.height || byPage.has(page.sourcePage)) continue;
    const models=source.panels.flatMap(p=>[p,...(p.regionMediaOverrides||[]).map(r=>r.model)]);
    const validPolicies=(page.regions||[]).every(r=>{
      const p=r.interactionPolicy;if(!p)return true;const model=models.find(m=>m.id===p.panelId);
      return !!model && p.sourcePageSha256===source.sha256 && (!p.mediaSha256 || p.mediaSha256===model.actualMedia?.sha256) && (p.regionId||null)===(model.regionMediaOverride?.regionId||null) && Array.isArray(p.hiddenNativeFrameRanges) && (!p.separateEnglishLayer || (model.rotationLetteringOverlay?.translationAwareSeparateLayer===true && p.englishGlyphSha256===model.rotationLetteringOverlay.sha256));
    });
    if (!validPolicies) continue;
    byPage.set(page.sourcePage,page);
  }
  let language='zh', current=null, version=0, raf=0;
  try { const q=new URL(location.href).searchParams.get('lang'), saved=localStorage.getItem('just-cuz-reading-language'); language=supported.includes(q) ? q : supported.includes(saved) ? saved : 'zh'; } catch (_) {}
  const layer=document.createElement('div'); layer.id='comic-translation-layer'; layer.className='comic-translation-layer'; layer.lang='zh-CN'; stage.append(layer);
  const sr=document.createElement('div');sr.className='sr-only';sr.id='comic-readable-text';stage.append(sr);
  const rectOK=(r,p)=>r && ['x','y','width','height'].every(k=>Number.isFinite(r[k])) && r.x>=0 && r.y>=0 && r.width>0 && r.height>0 && r.x+r.width<=p.width && r.y+r.height<=p.height;
  const elements=[];
  function fitText(element,max,min=24) {
    if(!max)return;
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
    selector.value=language;document.documentElement.lang=tags[language];layer.lang=tags[language];
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
        const active=hosts.find(h=>h.style.opacity==='1');
        if (item.policy.separateEnglishLayer) {
          const visibility=language!=='en'?'hidden':'';
          for(const host of hosts){const english=host.querySelector('.panel-rotation-lettering');if(english){english.classList.add('panel-bilingual-separate-lettering');if(english.style.visibility!==visibility)english.style.visibility=visibility;}}
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
    textButton.disabled=!current||!(current.transcript||current.regions).length;
    if (!current) { layer.hidden=true;sr.textContent='';return; }
    layer.dataset.sourcePage=String(current.sourcePage);layer.dataset.sourcePageSha256=current.sourcePageSha256;
    for (const region of current.regions) {
      if (!rectOK(region.displayBox||region.box,current) || !translated(region) || region.strategy==='brand' || region.preserveOriginalBrand) continue;
      for (const erase of (region.eraseBoxes||[])) {
        if (!rectOK(erase.box,current) || !Array.isArray(erase.rgb) || erase.rgb.length!==3) continue;
        const patch=document.createElement('div'),q=erase.box;patch.className='comic-translation-erasure';patch.setAttribute('aria-hidden','true');
        Object.assign(patch.style,{left:q.x+'px',top:q.y+'px',width:q.width+'px',height:q.height+'px',background:`rgb(${erase.rgb.join(',')})`});
        layer.append(patch);elements.push({element:patch,policy:region.interactionPolicy||null,max:0,min:0});
      }
      const b=region.displayBox||region.box, element=document.createElement('div');element.className='comic-translation '+(region.strategy==='replace'?'comic-translation-replace':'comic-translation-note');
      element.dataset.translationId=region.id;element.lang=tags[language];element.textContent=translated(region);
      Object.assign(element.style,{left:b.x+'px',top:b.y+'px',width:b.width+'px',height:b.height+'px',textAlign:region.align||'center'});
      if (region.strategy==='replace') element.style.background=`rgb(${region.background.rgb.join(',')})`;
      element.setAttribute('aria-label',translated(region));layer.append(element);elements.push({element,policy:region.interactionPolicy||null,max:(region.fontSize||64)*(locales.locales[language]?.fontScale||1),min:Math.min(region.minFontSize||26,language==='zh'?24:20)});
    }
    sizeLayer();updateLanguageUI();
    for (const item of elements) fitText(item.element,item.max,item.min);
    if (document.fonts) document.fonts.load(`64px "${locales.locales[language]?.fontFamily||'Just Cuz Bilingual'}"`,elements.map(i=>i.element.textContent).join('')).then(()=>{
      if (ticket!==version) return;for (const item of elements) fitText(item.element,item.max,item.min);scheduleInteraction();
    }).catch(()=>{});
    updateInteractionText();
    if (dialog.open) openText();
  }
  function setLanguage(next) {
    if (!supported.includes(next)) return;language=next;if(current)showPage(current.sourcePage);else updateLanguageUI();sizeLayer();
    for (const item of elements) fitText(item.element,item.max,item.min);
    updateInteractionText();
    try {localStorage.setItem('just-cuz-reading-language',language);const u=new URL(location.href);u.searchParams.set('lang',language);history.replaceState(null,'',u.href);} catch (_) {}
    document.dispatchEvent(new CustomEvent('comic-language-change',{detail:{language,sourcePage:current&&current.sourcePage}}));
  }
  selector.addEventListener('change',()=>setLanguage(selector.value));
  textButton.addEventListener('click',openText);
  document.getElementById('close-bilingual').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  document.addEventListener('comic-page-original-ready',e=>showPage(e.detail.sourcePage));
  document.addEventListener('comic-panel-status',scheduleInteraction);
  new ResizeObserver(sizeLayer).observe(stage);
  new MutationObserver(scheduleInteraction).observe(document.getElementById('panel-layer'),{subtree:true,attributes:true,attributeFilter:['data-frame-index','style']});
  // Never leave another page's translated text above the next page while it loads.
  new MutationObserver(()=>{if(image.hidden){layer.hidden=true;textButton.disabled=true;sr.textContent='';}}).observe(image,{attributes:true,attributeFilter:['hidden']});
  updateLanguageUI();
  if (image.complete && image.naturalWidth && !image.hidden) showPage(Number(document.getElementById('page-number').value));
  document.dispatchEvent(new CustomEvent('comic-language-change',{detail:{language,sourcePage:current&&current.sourcePage}}));
})();
