(() => {
  'use strict';
  const layer = document.getElementById('panel-layer');
  if (!layer || window.ComicPanelLoading) return;
  const records = new Map(), panels = new Map();
  let queued = false, destroyed = false;
  function text(key, values = {}) {
    const selector = document.getElementById('reading-language');
    const language = window.ComicLocaleUI ? window.ComicLocaleUI.language : selector && selector.value || 'zh';
    const dictionary = window.COMIC_UI_STRINGS && (window.COMIC_UI_STRINGS[language] || window.COMIC_UI_STRINGS.en);
    const fallback = {loadScene:'这个画面',loadError:'加载暂时中断',loadPreview:'环绕预览加载中',loadHD:'高清画面加载中',loadOrbit:'环绕画面加载中',loadRetry:'请点击页面上方「重新准备」',loadFirst:'先准备全角度小预览，再补充高清',loadDrag:'可拖动试看',loadDragHD:'预览可拖动，高清加载中',loadLast:'正在准备最后的画面，请稍候',loadWait:'完成后拖动更流畅，请稍候',loadDescription:'{title}，{label} {percent}%，{hint}'};
    return String(dictionary && dictionary[key] || fallback[key] || key).replace(/\{(\w+)\}/g,(_,name) => values[name] == null ? '' : String(values[name]));
  }
  const positive = value => Number.isFinite(value) && value > 0;
  const validRect = (rect, width, height) => rect && [rect.x, rect.y, rect.width, rect.height].every(Number.isFinite)
    && rect.x >= 0 && rect.y >= 0 && positive(rect.width) && positive(rect.height)
    && rect.x + rect.width <= width && rect.y + rect.height <= height;
  for (const page of window.COMIC_BOOK && window.COMIC_BOOK.pages || []) {
    for (const panel of page.panels || []) {
      if (!panel || typeof panel.id !== 'string') continue;
      // Ambiguous IDs cannot safely supply an individual picture's geometry.
      if (panels.has(panel.id)) panels.set(panel.id, null);
      else panels.set(panel.id, {page, panel});
    }
  }
  function geometry(host) {
    const source = panels.get(host.dataset.sourcePanelId);
    if (!source) return null;
    const {page, panel} = source, bounds = panel.bounds;
    if (!positive(page.width) || !positive(page.height) || !validRect(bounds, page.width, page.height)) return null;
    let rect = {x:0, y:0, width:bounds.width, height:bounds.height};
    if (host.dataset.interactionRegion || host.dataset.interactionRect) {
      try { rect = JSON.parse(host.dataset.interactionRect); } catch (_) { return null; }
      if (!validRect(rect, bounds.width, bounds.height)) return null;
    }
    return {
      left:`${(bounds.x + rect.x + rect.width / 2) / page.width * 100}%`,
      top:`${(bounds.y + rect.y + rect.height / 2) / page.height * 100}%`,
      width:`calc(${rect.width / page.width * 100}% - 16px)`,
      // A tall page can be physically small even in a wide, short window.
      compact:rect.width / page.width < .4 || positive(layer.clientWidth) && rect.width / page.width * layer.clientWidth < 150
    };
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
    const interrupted = data.loadingFailed === 'true' && !(videoMode && data.interactionState === 'ready');
    // The player's ready state already verifies decode, protection and the full MP4 seek range.
    const complete = !interrupted && data.interactionState === 'ready' && (videoMode || positive(total) && loaded >= total);
    // One decoded row can make the player draggable, but only full preview coverage earns the quiet badge.
    const previewTotal = Number(data.previewTotal), previewLoaded = Number(data.previewLoaded || 0), previewFailed = Number(data.previewFailed || 0);
    const previewReady = data.previewReady === 'true' && data.interactionState === 'ready'
      && positive(previewTotal) && Number.isFinite(previewLoaded) && previewLoaded >= previewTotal && previewFailed === 0;
    const previewPhase = data.frameReady !== 'fallback' && Number(data.previewTotal) > 0 && Number(data.previewFailed || 0) === 0 && !loaded
      && (!previewReady || Number(data.previewLoaded || 0) < Number(data.previewTotal));
    let fraction = previewPhase ? Number(data.previewLoaded || 0) / Number(data.previewTotal) : positive(total) ? loaded / total : 0;
    if (videoMode && !previewPhase && (!loaded || data.frameReady === 'fallback')) fraction = videoFraction(record.video);
    const percent = complete ? 100 : Math.min(99, Math.max(0, Math.floor(fraction * 100)));
    const state = data.interactionState === 'error' || interrupted ? 'error' : complete ? 'ready' : 'loading';
    const quietPreview = state === 'loading' && previewReady;
    const title = text('loadScene');
    const label = text(state === 'error' ? 'loadError' : quietPreview ? 'loadDrag' : previewPhase ? 'loadPreview' : 'loadOrbit');
    const hint = text(state === 'error' ? 'loadRetry' : quietPreview ? 'loadDragHD' : previewPhase ? 'loadFirst' : percent === 99 ? 'loadLast' : 'loadWait');
    const description = text('loadDescription',{title,label,percent,hint});
    if (record.number.textContent !== `${percent}%`) record.number.textContent = `${percent}%`;
    if (record.label.textContent !== label) record.label.textContent = label;
    if (record.hint.textContent !== hint) record.hint.textContent = hint;
    if (record.badge.dataset.state !== state) record.badge.dataset.state = state;
    if (record.badge.dataset.previewUsable !== String(quietPreview)) record.badge.dataset.previewUsable = String(quietPreview);
    if (record.badge.getAttribute('aria-label') !== description) record.badge.setAttribute('aria-label', description);
    if (record.badge.title !== description) record.badge.title = description;
    if (record.badge.hidden !== complete) record.badge.hidden = complete;
  }
  function remove(record) {
    if (record.video) for (const event of ['progress', 'loadedmetadata', 'durationchange']) record.video.removeEventListener(event, queue);
    record.badge.remove();
  }
  function sync() {
    if (destroyed) return;
    const hosts = new Set(Array.from(layer.querySelectorAll('.panel-host')).filter(host => host.parentNode === layer && host.dataset.backgroundOnly !== 'true'));
    for (const [host, record] of records) if (!hosts.has(host)) { remove(record); records.delete(host); }
    for (const host of hosts) {
      const point = geometry(host);
      if (!point) { if (records.has(host)) { remove(records.get(host)); records.delete(host); } continue; }
      let record = records.get(host);
      if (!record) {
        const badge = document.createElement('output');
        badge.className = 'panel-loading-percent';
        badge.setAttribute('aria-live', 'off');
        badge.dataset.sourcePanelId = host.dataset.sourcePanelId;
        if (host.dataset.interactionRegion) badge.dataset.interactionRegion = host.dataset.interactionRegion;
        const label = document.createElement('span'), number = document.createElement('strong'), hint = document.createElement('span');
        label.className = 'panel-loading-label'; number.className = 'panel-loading-number'; hint.className = 'panel-loading-hint';
        badge.append(label, number, hint);
        const video = host.querySelector('.panel-video');
        record = {badge, video, label, number, hint}; records.set(host, record);
        if (video) for (const event of ['progress', 'loadedmetadata', 'durationchange']) video.addEventListener(event, queue);
        // A direct layer child stays visible while the source-bound player has opacity:0 or is clipped.
        layer.append(badge);
      }
      Object.assign(record.badge.style, {left:point.left, top:point.top, width:point.width});
      record.badge.dataset.compact = String(point.compact);
      update(host, record);
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
  layer.addEventListener('comic-panel-status', queue);
  document.addEventListener('comic-language-change', queue);
  const api = Object.freeze({refresh:queue, destroy() {
    destroyed = true; observer.disconnect(); if (resizeObserver) resizeObserver.disconnect(); layer.removeEventListener('comic-panel-status', queue); document.removeEventListener('comic-language-change', queue);
    for (const record of records.values()) remove(record);
    records.clear();
    if (window.ComicPanelLoading === api) delete window.ComicPanelLoading;
  }});
  window.ComicPanelLoading = api;
  queue();
})();
