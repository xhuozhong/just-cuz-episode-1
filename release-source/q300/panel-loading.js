(() => {
  'use strict';
  const layer = document.getElementById('panel-layer');
  if (!layer || window.ComicPanelLoading) return;
  const records = new Map(), panels = new Map(), draggedPanels = new Set();
  const phone = window.matchMedia('(max-width:650px)');
  // Ship with the reader so cached HTML and its older stylesheet receive the same small tabs.
  const paperStyle = document.createElement('style');
  paperStyle.id = 'comic-panel-loading-paper-style';
  paperStyle.textContent = `
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state]:not([hidden]) {
      position:absolute; left:var(--paper-x, var(--badge-right)); top:var(--paper-y, var(--badge-bottom)); width:max-content;
      max-width:min(var(--badge-width), 176px); min-width:0; min-height:0;
      transform:var(--paper-transform, translate(-100%,-100%)); display:flex; align-items:center; justify-items:initial;
      box-sizing:border-box; gap:5px; padding:4px 7px; opacity:1;
      border:1px solid #987c46; border-radius:8px 3px 3px 8px;
      color:#49371f; background:#fff3d9; box-shadow:0 1px 3px #4e351e35;
      text-align:left; font-weight:700; line-height:1.2; pointer-events:none;
    }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state]:not([hidden]) .panel-loading-label {
      display:block; min-width:0; overflow-wrap:anywhere; white-space:normal; overflow:visible;
      text-overflow:clip; color:inherit; font-size:11px; line-height:1.25; letter-spacing:0;
    }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state]:not([hidden]) .panel-loading-number {
      display:block; flex:none; color:#624416; font-size:12px; line-height:1.1;
      font-family:ui-monospace,Consolas,monospace; font-variant-numeric:tabular-nums;
      inline-size:var(--paper-number-width, auto); text-align:right; white-space:nowrap;
    }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state] .panel-loading-hint,
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state] .panel-loading-number[hidden] { display:none; }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state="ready"]:not([hidden]) {
      background:#fff6df; opacity:.9;
    }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state="ready"] .panel-loading-label { white-space:nowrap; }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state="ready"][data-symbol-only="true"]:not([hidden]) {
      padding:3px 5px; gap:0; border-radius:6px 2px 2px 6px;
    }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state="ready"][data-symbol-only="true"]:not([hidden]) .panel-loading-label { display:none; }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state]:not([hidden])::before { content:none; }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state="ready"]:not([hidden])::before {
      content:"↔" / ""; flex:none; font-size:12px; line-height:1;
    }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-state="error"]:not([hidden]) {
      color:#713d2e; border-color:#b5755e; background:#fff1e8;
    }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-tiny="true"][data-state="loading"]:not([hidden]) .panel-loading-label { display:none; }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][data-tiny="true"][data-state]:not([hidden]) { padding:3px 5px; gap:3px; }
    #panel-layer > output.panel-loading-percent[data-paper-tab="true"][hidden] { display:none; }
    #retry-interaction { min-width:44px; min-height:44px; }
  `;
  document.head.append(paperStyle);
  const panelKey = host => `${host.dataset.sourcePanelId}:${host.dataset.interactionRegion || ''}`;
  const setData = (element,key,value) => { if (element.dataset[key] !== value) element.dataset[key] = value; };
  const setStyle = (style,key,value) => { if (style.getPropertyValue(key) !== value) style.setProperty(key,value); };
  let queued = false, destroyed = false;
  function text(key, values = {}) {
    const selector = document.getElementById('reading-language');
    const language = window.ComicLocaleUI ? window.ComicLocaleUI.language : selector && selector.value || 'zh';
    const dictionary = window.COMIC_UI_STRINGS && (window.COMIC_UI_STRINGS[language] || window.COMIC_UI_STRINGS.en);
    const fallback = {loadScene:'这个画面',loadError:'加载暂时中断',loadPreview:'环绕预览加载中',loadHD:'高清画面加载中',loadOrbit:'环绕画面加载中',loadRetry:'请点击页面上方「重新准备」',loadFirst:'先准备全角度小预览，再补充高清',loadDrag:'可拖动试看',loadTab:'加载中',loadTry:'左右拖动看看',loadTryShort:'左右拖动看看',loadDragHD:'预览可拖动，高清加载中',loadLast:'正在准备最后的画面，请稍候',loadWait:'完成后拖动更流畅，请稍候',loadRecovering:'自动重试中',loadRecoveryHint:'正在重新准备，请稍候',loadDescription:'{title}，{label} {percent}%，{hint}'};
    return String(dictionary && dictionary[key] || fallback[key] || key).replace(/\{(\w+)\}/g,(_,name) => values[name] == null ? '' : String(values[name]));
  }
  const positive = value => Number.isFinite(value) && value > 0;
  const validRect = (rect, width, height) => rect && [rect.x, rect.y, rect.width, rect.height].every(Number.isFinite)
    && rect.x >= 0 && rect.y >= 0 && positive(rect.width) && positive(rect.height)
    && rect.x + rect.width <= width && rect.y + rect.height <= height;
  function registerPage(page) {
    for (const panel of page.panels || []) {
      if (!panel || typeof panel.id !== 'string') continue;
      // Ambiguous IDs cannot safely supply an individual picture's geometry.
      if (panels.has(panel.id)) panels.set(panel.id, null);
      else panels.set(panel.id, {page, panel});
    }
  }
  for (const page of window.COMIC_BOOK?.pages || []) registerPage(page);
  function registerCurrentModel(event) { registerPage(event.detail.page); }
  document.addEventListener('comic-page-model-ready', registerCurrentModel);
  const textAreas = new WeakMap();
  function captionBoxes(page) {
    if (!textAreas.has(page)) {
      const bookText = window.COMIC_BILINGUAL;
      const compact = bookText?.captionBoxes?.[page.sourcePage];
      const sheet = compact ? null : bookText?.pages?.find(row => row.sourcePageSha256 === page.sha256);
      const boxes = (compact ? compact.map(([x,y,width,height]) => ({x,y,width,height})) :
        (sheet?.regions || []).flatMap(row => [row.box, row.displayBox]))
        .filter(rect => validRect(rect, page.width, page.height)).sort((a,b) => b.y - a.y);
      textAreas.set(page, boxes);
    }
    return textAreas.get(page);
  }
  function geometry(host, layerWidth, layerHeight) {
    if (!positive(layerWidth) || !positive(layerHeight)) return null;
    const source = panels.get(host.dataset.sourcePanelId);
    if (!source) return null;
    const {page, panel} = source, bounds = panel.bounds;
    if (!positive(page.width) || !positive(page.height) || !validRect(bounds, page.width, page.height)) return null;
    let rect = {x:0, y:0, width:bounds.width, height:bounds.height};
    if (host.dataset.interactionRegion || host.dataset.interactionRect) {
      try { rect = JSON.parse(host.dataset.interactionRect); } catch (_) { return null; }
      if (!validRect(rect, bounds.width, bounds.height)) return null;
    }
    const scaleX = layerWidth / page.width, scaleY = layerHeight / page.height;
    const tiny = rect.width * scaleX < 86 || rect.height * scaleY < 40;
    const leftEdge = bounds.x + rect.x, topEdge = bounds.y + rect.y;
    const rightEdge = leftEdge + rect.width, bottomEdge = topEdge + rect.height;
    return {
      left:`${(bounds.x + rect.x + rect.width / 2) / page.width * 100}%`,
      top:`${(bounds.y + rect.y + rect.height / 2) / page.height * 100}%`,
      width:`calc(${rect.width / page.width * 100}% - 12px)`,
      right:`calc(${rightEdge / page.width * 100}% - 6px)`,
      bottom:`calc(${bottomEdge / page.height * 100}% - 6px)`,
      page, scaleX, scaleY,
      pageWidth:layerWidth, pageHeight:layerHeight,
      region:{x:leftEdge * scaleX,y:topEdge * scaleY,width:rect.width * scaleX,height:rect.height * scaleY},
      tiny,
      // A tall page can be physically small even in a wide, short window.
      compact:rect.width / page.width < .4 || positive(layerWidth) && rect.width * scaleX < 150
    };
  }
  // Conservative character/foreground bounds reviewed against these exact original pages.
  // Other pages still receive measured, caption-safe outer-edge placement.
  const foregroundAreas = {
    'd1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4':[[970,210,420,430],[1310,50,245,295],[805,550,215,380],[330,740,650,400],[90,940,265,180],[535,1110,330,400],[105,1350,485,325],[590,1580,340,380]],
    'd0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb':[[150,10,640,1180],[300,500,1040,830],[0,1320,750,660],[840,1010,735,970]],
    'd54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030':[[120,220,285,210],[75,330,340,120],[165,405,225,230],[185,615,190,130],[555,60,230,300],[465,335,255,220],[550,535,180,140],[585,650,410,515],[1180,470,250,640],[170,1080,450,655],[840,1330,665,335]]
  };
  const intersection = (a,b) => Math.max(0,Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x))
    * Math.max(0,Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y));
  const inflate = (rect,gap) => ({x:rect.x-gap,y:rect.y-gap,width:rect.width+gap*2,height:rect.height+gap*2});
  function placement(point,width,height,occupied,bookEdge = false) {
    const target = point.region;
    const region = bookEdge ? {x:0,y:0,width:point.pageWidth,height:point.pageHeight} : target;
    const gap = bookEdge ? 4 : Math.min(6,Math.max(2,Math.min(region.width,region.height)/12));
    const left = region.x + gap, top = region.y + gap;
    const right = region.x + region.width - gap - width, bottom = region.y + region.height - gap - height;
    if (right < left || bottom < top) return null;
    const toScreen = rect => ({x:rect.x*point.scaleX,y:rect.y*point.scaleY,width:rect.width*point.scaleX,height:rect.height*point.scaleY});
    const captions = captionBoxes(point.page).map(toScreen).map(rect=>inflate(rect,3));
    const foreground = (foregroundAreas[point.page.sha256] || []).map(([x,y,width,height])=>toScreen({x,y,width,height})).map(rect=>inflate(rect,3));
    const obstacles = [...captions,...foreground,...occupied.map(rect=>inflate(rect,3))];
    const clamp = (value,min,max) => Math.max(min,Math.min(max,value));
    const xs = bookEdge ? [target.x+target.width-width,target.x,target.x+(target.width-width)/2].map(x=>clamp(x,left,right)) : [right,left,(left+right)/2,left+(right-left)*.25,left+(right-left)*.75];
    const ys = bookEdge ? [target.y+target.height-height,target.y,target.y+(target.height-height)/2].map(y=>clamp(y,top,bottom)) : [bottom,top,(top+bottom)/2,top+(bottom-top)*.25,top+(bottom-top)*.75];
    for (const area of obstacles) {
      xs.push(clamp(area.x-width-1,left,right),clamp(area.x+area.width+1,left,right));
      ys.push(clamp(area.y-height-1,top,bottom),clamp(area.y+area.height+1,top,bottom));
    }
    const candidates = [];
    for (const x of xs) { candidates.push({x,y:bottom,width,height},{x,y:top,width,height}); }
    for (const y of ys) { candidates.push({x:right,y,width,height},{x:left,y,width,height}); }
    let best = null;
    for (let index=0;index<candidates.length;index++) {
      const box = candidates[index];
      const captionOverlap = captions.reduce((sum,area)=>sum+intersection(box,area),0);
      const foregroundOverlap = foreground.reduce((sum,area)=>sum+intersection(box,area),0);
      const occupiedOverlap = occupied.reduce((sum,area)=>sum+intersection(box,inflate(area,3)),0);
      const distance = bookEdge ? Math.hypot(Math.max(target.x-box.x-width,box.x-target.x-target.width,0),Math.max(target.y-box.y-height,box.y-target.y-target.height,0)) : 0;
      const score = captionOverlap*20 + foregroundOverlap*8 + occupiedOverlap*30 + distance*.01 + index*.001;
      if (!best || score < best.score) best = {...box,bookEdge,score,captionOverlap,foregroundOverlap,occupiedOverlap,safe:captionOverlap+foregroundOverlap+occupiedOverlap < .01};
    }
    return best;
  }
  function layoutBadge(record,point,occupied) {
    if (record.badge.hidden) { record.layoutKey = ''; return; }
    const badge = record.badge, ready = badge.dataset.state === 'ready';
    // Numeric cells reserve real font-relative ch units. Digits within one width bucket cannot resize the tab.
    const numberWidthBucket = record.number.textContent.replace(/[0-9]/g,'0');
    const language = window.ComicLocaleUI?.language || document.documentElement.lang;
    const key = [record.label.textContent,numberWidthBucket,badge.dataset.state,language,point.region.x,point.region.y,point.region.width,point.region.height,...occupied.flatMap(box=>[box.x,box.y,box.width,box.height])].join('|');
    if (record.layoutKey === key) { if (record.placed) occupied.push(record.placed); return; }
    setData(badge,'symbolOnly','false');
    // Measure the actual painted box, then remove the page's current zoom transform.
    const layerBox = layer.getBoundingClientRect();
    const zoomX = layerBox.width / layer.clientWidth || 1, zoomY = layerBox.height / layer.clientHeight || 1;
    const measure = () => { const box=badge.getBoundingClientRect(); return [Math.ceil(box.width/zoomX),Math.ceil(box.height/zoomY)]; };
    let [width,height] = measure();
    let selected = placement(point,width,height,occupied);
    const tooLarge = width*height > point.region.width*point.region.height*.12 || height > point.region.height*.22 || badge.scrollWidth > width+1;
    if (ready && (!selected?.safe || tooLarge)) {
      setData(badge,'symbolOnly','true');
      [width,height] = measure();
      selected = placement(point,width,height,occupied);
      if (!selected?.safe) {
        const edge = placement(point,width,height,occupied,true);
        if (edge?.safe || edge && (!selected || edge.score < selected.score)) selected = edge;
      }
    }
    if (!selected) selected = {x:point.region.x+2,y:point.region.y+2,width,height,safe:false};
    setStyle(badge.style,'--paper-x',`${selected.x}px`);
    setStyle(badge.style,'--paper-y',`${selected.y}px`);
    setStyle(badge.style,'--paper-transform','none');
    setData(badge,'placement',selected.safe ? 'clear-edge' : 'least-overlap-edge');
    setData(badge,'placementScope',selected.bookEdge ? 'book' : 'region');
    setData(badge,'placementOverlap',JSON.stringify([selected.captionOverlap||0,selected.foregroundOverlap||0,selected.occupiedOverlap||0]));
    setData(badge,'measuredWidth',String(width)); setData(badge,'measuredHeight',String(height));
    record.layoutKey = key; record.placed = selected; occupied.push(selected);
  }
  function videoFraction(video) {
    if (!video || !positive(video.duration)) return 0;
    let seconds = 0, lastEnd = 0;
    try {
      for (let i = 0; i < video.buffered.length; i++) {
        const start = Math.max(0, video.buffered.start(i), lastEnd);
        const end = Math.min(video.duration, video.buffered.end(i));
        if (Number.isFinite(start) && Number.isFinite(end) && end > start) seconds += end - start;
        if (Number.isFinite(end)) lastEnd = Math.max(lastEnd, end);
      }
    } catch (_) { return 0; }
    return Math.min(1, seconds / video.duration);
  }
  function update(host, record) {
    const data = host.dataset, loaded = Math.max(0, Number(data.loadedFrames) || 0), total = Number(data.totalFrames);
    const videoMode = data.renderMode === 'video';
    // One decoded row can make the player draggable. Only verified full preview coverage earns the invitation.
    const previewTotal = Number(data.previewTotal), previewLoaded = Number(data.previewLoaded || 0), previewFailed = Number(data.previewFailed || 0);
    const previewReady = data.frameReady !== 'fallback' && data.previewReady === 'true' && data.interactionState === 'ready'
      && positive(previewTotal) && Number.isFinite(previewLoaded) && previewLoaded >= previewTotal && previewFailed === 0;
    const interrupted = data.loadingFailed === 'true' && !previewReady && !(videoMode && data.interactionState === 'ready');
    // The player owns protected-image readiness and complete MP4 seek-range validation.
    const complete = !interrupted && data.interactionState === 'ready' && (videoMode || positive(total) && loaded >= total);
    const usable = previewReady || complete;
    const previewPhase = data.frameReady !== 'fallback' && positive(previewTotal) && previewFailed === 0;
    let fraction = previewPhase ? previewLoaded / previewTotal : positive(total) ? loaded / total : 0;
    if (videoMode && !previewPhase && (!loaded || data.frameReady === 'fallback')) fraction = videoFraction(record.video);
    const percent = usable ? 100 : Math.min(99, Math.max(0, Math.floor(fraction * 100)));
    const recovering = !usable && data.autoRecoveryState === 'retrying';
    const state = usable ? 'ready' : recovering ? 'loading' : data.interactionState === 'error' || interrupted ? 'error' : 'loading';
    const gyroReady = document.body.dataset.orbitInput === 'gyro' && usable;
    const title = text('loadScene');
    const label = text(state === 'error' ? 'loadError' : usable ? 'loadTryShort' : recovering ? 'loadRecovering' : 'loadTab');
    const hint = text(state === 'error' ? 'loadRetry' : recovering ? 'loadRecoveryHint' : previewPhase ? 'loadFirst' : percent === 99 ? 'loadLast' : 'loadWait');
    const description = usable ? text('loadTry') : state === 'error' ? `${title}，${label}。${hint}` : text('loadDescription',{title,label:text(recovering ? 'loadRecovering' : previewPhase ? 'loadPreview' : 'loadOrbit'),percent,hint});
    // Neither visible nor accessible text mixes quiet HD completion with preview preparation.
    const numberText = usable || state === 'error' ? '' : `${percent}%`;
    if (record.number.textContent !== numberText) record.number.textContent = numberText;
    if (record.number.hidden !== !numberText) record.number.hidden = !numberText;
    setStyle(record.number.style,'--paper-number-width',`${numberText.length}ch`);
    if (record.label.textContent !== label) record.label.textContent = label;
    if (record.hint.textContent !== (usable ? '' : hint)) record.hint.textContent = usable ? '' : hint;
    if (record.badge.dataset.state !== state) record.badge.dataset.state = state;
    if (record.badge.dataset.previewUsable !== String(previewReady)) record.badge.dataset.previewUsable = String(previewReady);
    setData(record.badge,'preparationPhase',usable ? 'ready' : recovering ? 'retrying' : state === 'error' ? 'error' : previewPhase ? 'preview' : 'media');
    if (record.badge.getAttribute('aria-label') !== description) record.badge.setAttribute('aria-label', description);
    if (record.badge.title !== description) record.badge.title = description;
    const hidden = usable && (gyroReady || draggedPanels.has(panelKey(host)));
    if (record.badge.hidden !== hidden) record.badge.hidden = hidden;
  }
  function remove(record) {
    if (record.video) for (const event of ['progress', 'loadedmetadata', 'durationchange']) record.video.removeEventListener(event, queue);
    record.badge.remove();
  }
  function sync() {
    if (destroyed) return;
    const hosts = new Set(Array.from(layer.querySelectorAll('.panel-host')).filter(host => host.parentNode === layer && host.dataset.backgroundOnly !== 'true'));
    // Chapter decorations are optional. All scene previews get their
    // network turn first, and the decoration remains steady while dragging.
    const canDecorate = hosts.size > 0 && Array.from(hosts).every(({dataset}) => {
      const previews = Number(dataset.previewTotal);
      return dataset.interactionState === 'error' || dataset.loadingFailed === 'true' ||
        (dataset.interactionState === 'ready' && (previews === 0 || dataset.renderMode === 'video' ||
          Number(dataset.previewFailed) > 0 || Number(dataset.loadedFrames) >= Number(dataset.totalFrames) ||
          (dataset.previewReady === 'true' && Number(dataset.previewLoaded) >= previews)));
    });
    window.OrbitFrameCache?.setPagePreviewReady(canDecorate);
    const alreadyReady = document.body.classList.contains('chapter-art-ready');
    document.body.classList.toggle('chapter-art-ready', canDecorate);
    if (canDecorate && !alreadyReady) document.dispatchEvent(new Event('comic-page-previews-ready'));
    for (const [host, record] of records) if (!hosts.has(host)) { remove(record); records.delete(host); }
    const layerWidth = layer.clientWidth, layerHeight = layer.clientHeight, occupied = [];
    for (const host of hosts) {
      const point = geometry(host, layerWidth, layerHeight);
      if (!point) { if (records.has(host)) { remove(records.get(host)); records.delete(host); } continue; }
      let record = records.get(host);
      if (!record) {
        const badge = document.createElement('output');
        badge.className = 'panel-loading-percent';
        badge.dataset.paperTab = 'true';
        badge.setAttribute('aria-live', 'off');
        badge.dataset.sourcePanelId = host.dataset.sourcePanelId;
        if (host.dataset.interactionRegion) badge.dataset.interactionRegion = host.dataset.interactionRegion;
        const label = document.createElement('span'), number = document.createElement('strong'), hint = document.createElement('span');
        label.className = 'panel-loading-label'; number.className = 'panel-loading-number'; hint.className = 'panel-loading-hint';
        badge.append(label, number, hint);
        const video = host.querySelector('video.panel-video');
        record = {badge, video, label, number, hint}; records.set(host, record);
        if (video) for (const event of ['progress', 'loadedmetadata', 'durationchange']) video.addEventListener(event, queue);
        // A direct layer child stays visible while the source-bound player has opacity:0 or is clipped.
        layer.append(badge);
      }
      const style = record.badge.style;
      setStyle(style,'--badge-center-x', point.left);
      setStyle(style,'--badge-center-y', point.top);
      setStyle(style,'--badge-width', point.width);
      setStyle(style,'--badge-right', point.right);
      setStyle(style,'--badge-bottom', point.bottom);
      setData(record.badge,'compact',String(point.compact));
      setData(record.badge,'tiny',String(point.tiny));
      update(host, record);
      layoutBadge(record,point,occupied);
    }
  }
  function queue() {
    if (queued || destroyed) return;
    queued = true;
    Promise.resolve().then(() => { queued = false; sync(); });
  }
  const observer = new MutationObserver(changes => {
    // Only host insertion/removal schedules work. Our own output nodes cannot cause an observer loop.
    if (changes.some(change => [...change.addedNodes, ...change.removedNodes].some(node => node.nodeType === 1 && node.classList.contains('panel-host')))) queue();
  });
  observer.observe(layer, {childList:true});
  const resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(queue) : null;
  if (resizeObserver) resizeObserver.observe(layer);
  function rememberDrag(event) {
    if (event.target.parentNode !== layer || !event.target.classList.contains('panel-host')) return;
    const key = panelKey(event.target);
    if (draggedPanels.has(key)) return;
    draggedPanels.add(key);
    queue();
  }
  layer.addEventListener('comic-panel-status', queue);
  layer.addEventListener('comic-panel-dragged', rememberDrag);
  phone.addEventListener('change', queue);
  document.addEventListener('comic-orbit-input-change', queue);
  document.addEventListener('comic-hd-budget-change', queue);
  document.addEventListener('comic-language-change', queue);
  function refreshMeasurements() { for (const record of records.values()) record.layoutKey = ''; queue(); }
  document.fonts?.addEventListener('loadingdone',refreshMeasurements);
  document.fonts?.ready.then(refreshMeasurements);
  const api = Object.freeze({refresh:queue, destroy() {
    destroyed = true; observer.disconnect(); if (resizeObserver) resizeObserver.disconnect(); layer.removeEventListener('comic-panel-status', queue); document.removeEventListener('comic-language-change', queue);
    layer.removeEventListener('comic-panel-dragged', rememberDrag);
    phone.removeEventListener('change', queue);
    document.removeEventListener('comic-orbit-input-change', queue);
    document.removeEventListener('comic-hd-budget-change', queue);
    document.removeEventListener('comic-page-model-ready', registerCurrentModel);
    document.fonts?.removeEventListener('loadingdone',refreshMeasurements);
    for (const record of records.values()) remove(record);
    paperStyle.remove();
    records.clear();
    if (window.ComicPanelLoading === api) delete window.ComicPanelLoading;
  }});
  window.ComicPanelLoading = api;
  queue();
})();
