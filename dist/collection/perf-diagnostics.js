/* Optional, local-only measurement UI. Activated solely by ?perf=1. */
(() => {
  'use strict';
  const state=window.__comicPerf;
  if (!state || new URLSearchParams(location.search).get('perf') !== '1') return;
  performance.setResourceTimingBufferSize(3000);
  const marks=new Map();let currentPage='',pageStarted=0,lastReport=null;
  const round=value=>Math.round(value*10)/10;
  function capture() {
    const page=document.getElementById('page-number')?.value || '1';
    if (page!==currentPage) {currentPage=page;pageStarted=performance.now();marks.clear();}
    const hosts=Array.from(document.querySelectorAll('#panel-layer > .panel-host')).filter(host=>host.dataset.backgroundOnly!=='true');
    const original=state.originals.filter(item=>String(item.page)===page).at(-1);
    const panels=hosts.map(host=>{
      const d=host.dataset,id=d.regionMediaId || d.sourcePanelId;
      const ready=d.interactionState==='ready' && d.previewReady==='true' && Number(d.previewLoaded)===Number(d.previewTotal) && Number(d.previewTotal)>0 && d.loadingFailed!=='true';
      const hd=d.interactionState==='ready' && Number(d.loadedFrames)===Number(d.totalFrames) && Number(d.totalFrames)>0 && d.loadingFailed!=='true';
      const prior=state.panelEvents.filter(event=>event.panel===id && (!original || event.at>=original.at));
      if (ready && !marks.has(id+':preview')) marks.set(id+':preview',prior.find(event=>event.previewReady && event.interactionState==='ready')?.at || performance.now());
      if (hd && !marks.has(id+':hd')) marks.set(id+':hd',prior.find(event=>event.loaded===event.total && event.total>0 && event.interactionState==='ready')?.at || performance.now());
      return {id,previewReady:ready,preview:`${d.previewLoaded || 0}/${d.previewTotal || 0}`,hd:`${d.loadedFrames || 0}/${d.totalFrames || 0}`,previewReadyMs:marks.has(id+':preview')?round(marks.get(id+':preview')):null,allHdReadyMs:marks.has(id+':hd')?round(marks.get(id+':hd')):null,error:d.loadingFailed==='true'};
    });
    const resources=performance.getEntriesByType('resource').filter(entry=>!entry.name.includes('perf-diagnostics.js')).map(entry=>{
      const url=new URL(entry.name);let kind='other';
      if (/\/pages\/page-\d+\.jpg$/.test(url.pathname))kind='original';
      else if(url.pathname.includes('/preview-packs/'))kind='preview';
      else if(url.pathname.includes('/frame-packs/')||url.pathname.includes('/packets/'))kind='hd';
      else if(url.pathname.endsWith('/reader.js'))kind='reader';
      return {kind,path:url.pathname,origin:url.origin,startMs:round(entry.startTime),durationMs:round(entry.duration),endMs:round(entry.responseEnd),encodedBytes:entry.encodedBodySize,transferBytes:entry.transferSize,detailLimited:url.origin!==location.origin && entry.responseStart===0,initiator:entry.initiatorType};
    }).filter(entry=>entry.kind!=='other');
    const image=document.getElementById('page-image');
    return {page:Number(page),measurement:'Actual browser timings in this visit; milliseconds since navigation. Cross-origin byte details can be unavailable. Cached requests may report zero transfer bytes.',originalVisibleMs:original?round(original.at):null,originalLoaded:!!(image?.complete && image?.naturalWidth),allPreviewsReady:panels.length>0 && panels.every(panel=>panel.previewReady),allHdReady:panels.length>0 && panels.every(panel=>panel.allHdReadyMs!==null),panels,requests:resources,observedAtMs:round(performance.now()),pageObservationStartedMs:round(pageStarted)};
  }
  function mount() {
    const box=document.createElement('details');box.id='comic-perf-panel';box.open=true;
    box.style.cssText='position:fixed;right:8px;bottom:8px;z-index:100000;width:min(360px,94vw);max-height:36vh;overflow:auto;border:1px solid #7d6592;border-radius:12px;padding:8px;background:#fffffff5;color:#332444;box-shadow:0 3px 14px #33244435;font:12px/1.4 system-ui,sans-serif';
    const summary=document.createElement('summary');summary.textContent='加载测速 · 仅本次显示';box.appendChild(summary);
    const note=document.createElement('p');note.style.margin='5px 0';note.textContent='当前浏览器实测，可收起后拖动漫画。关闭地址中的 perf=1 即可隐藏。数据不会上传。';box.appendChild(note);
    const pre=document.createElement('pre');pre.id='comic-perf-report';pre.style.cssText='white-space:pre-wrap;overflow-wrap:anywhere;margin:5px 0;font:10px/1.35 monospace';box.appendChild(pre);
    const copy=document.createElement('button');copy.type='button';copy.textContent='复制测速数据';
    copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(JSON.stringify(lastReport,null,2));copy.textContent='已复制';}catch(_){copy.textContent='请直接选中下方数据复制';}});box.insertBefore(copy,pre);
    document.body.appendChild(box);
    function update(){lastReport=capture();pre.textContent=JSON.stringify(lastReport,null,2);}
    update();setInterval(update,500);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
