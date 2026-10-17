(() => {
  'use strict';
  const SHA = /^[a-f0-9]{64}$/i;
  const passed = value => value && value.status === 'passed' && Array.isArray(value.evidence) && value.evidence.length > 0;
  const positive = value => Number.isFinite(value) && value > 0;
  const localPath = value => typeof value === 'string' && !/^(?:[a-z]+:|[\\/])|(?:^|[\\/])\.\.(?:[\\/]|$)/i.test(value) && value.length > 0;
  function rectValid(rect, width, height) {
    return rect && Number.isFinite(rect.x) && Number.isFinite(rect.y) && rect.x >= 0 && rect.y >= 0 && positive(rect.width) && positive(rect.height) && rect.x + rect.width <= width && rect.y + rect.height <= height;
  }
  function taskIdentified(panel, page, verification, media) {
    const task = panel.task;
    if (!task) return false;
    if (task.identityKind !== 'provider-output-asset') return !!task.id;
    const receipt = verification.taskOutput || {};
    // A real output asset identifies its provider media; it is not a fabricated job ID.
    // The reviewed media record binds that original file to the final five-second file.
    return task.id === null && Number.isSafeInteger(task.outputAssetId) && task.outputAssetId > 0
      && SHA.test(task.outputMediaSha256 || '') && passed(receipt)
      && receipt.outputAssetId === task.outputAssetId && receipt.outputMediaSha256 === task.outputMediaSha256
      && receipt.sourcePageSha256 === page.sha256
      && verification.media.sourceMediaSha256 === task.outputMediaSha256
      && verification.media.mediaSha256 === media.sha256;
  }
  function legacyEligible(panel, page) {
    if (!panel || panel.quality !== 'passed' || panel.method !== 'lora' || !localPath(panel.video)) return false;
    const v = panel.verification || {}, media = panel.actualMedia || {}, mapping = panel.contentMapping || {};
    if (![v.weightLoad, v.media, v.spatial, v.bounds, v.textProtection, mapping].every(passed)) return false;
    if (v.bounds.sourcePageSha256 !== page.sha256 || v.spatial.sourcePageSha256 !== page.sha256 || v.textProtection.sourcePageSha256 !== page.sha256) return false;
    if (!panel.weight || !SHA.test(panel.weight.sha256 || '') || !SHA.test(media.sha256 || '') || !taskIdentified(panel, page, v, media)) return false;
    if (!positive(media.width) || !positive(media.height) || !positive(media.frameCount) || !positive(media.fps) || !positive(media.duration)) return false;
    if (Math.abs(media.duration - 5) > .02 || !rectValid(panel.bounds, page.width, page.height) || !rectValid(mapping.videoRect, media.width, media.height)) return false;
    const b = panel.bounds, r = mapping.videoRect;
    if (Math.abs((b.width / b.height) / (r.width / r.height) - 1) > .003) return false;
    if (panel.mask && panel.protectionOverlay) return false;
    if (panel.protectionOverlay) {
      const overlay = panel.protectionOverlay;
      return localPath(overlay.source) && /\.png$/i.test(overlay.source) && !/%/.test(overlay.source) && overlay.coordinateSpace === 'source-panel'
        && Number.isInteger(overlay.width) && Number.isInteger(overlay.height) && overlay.width === b.width && overlay.height === b.height
        && SHA.test(overlay.sha256 || '') && overlay.sourcePageSha256 === page.sha256
        && passed(v.mask) && v.mask.sourcePageSha256 === page.sha256 && v.mask.maskSha256 === overlay.sha256;
    }
    if (panel.mask) return localPath(panel.mask) && passed(v.mask) && v.mask.sourcePageSha256 === page.sha256;
    return v.textProtection.originalTextOverlap === false && v.textProtection.originalFrameOverlap === false;
  }
  function sourceBound(panel, page) {
    if (!panel || !localPath(panel.video) || !rectValid(panel.bounds, page.width, page.height)) return false;
    const m = panel.actualMedia || {}, overlay = panel.protectionOverlay || {};
    const mapping = panel.contentMapping || {};
    if (mapping.artworkRect && (!rectValid(mapping.artworkRect, panel.bounds.width, panel.bounds.height)
      || mapping.sourcePageSha256 !== page.sha256 || !Array.isArray(mapping.backgroundColor)
      || mapping.backgroundColor.length !== 3 || !mapping.backgroundColor.every(x => Number.isInteger(x) && x >= 0 && x <= 255))) return false;
    return [m.width, m.height, m.frameCount, m.fps, m.duration].every(positive) && SHA.test(m.sha256 || '')
      && localPath(overlay.source) && overlay.coordinateSpace === 'source-panel'
      && overlay.width === panel.bounds.width && overlay.height === panel.bounds.height
      && overlay.sourcePageSha256 === page.sha256 && SHA.test(overlay.sha256 || '');
  }
  function eligible(panel, page) {
    if (legacyEligible(panel, page)) return true;
    if (!sourceBound(panel, page) || panel.quality !== 'passed') return false;
    const v = panel.verification || {};
    return [v.media, v.spatial, v.bounds, v.textProtection, v.runtime].every(passed)
      && [v.media, v.spatial, v.bounds, v.textProtection, v.runtime].every(x => x.sourcePageSha256 === page.sha256 && x.mediaSha256 === panel.actualMedia.sha256);
  }
  function displayable(panel, page) {
    if (eligible(panel, page)) return true;
    if (!sourceBound(panel, page)) return false;
    if (panel.quality === 'review-candidate') {
      const a = panel.candidateSourceAudit || {};
      return a.status === 'passed-source-pixels-only' && a.sourcePageSha256 === page.sha256 && a.overlaySha256 === panel.protectionOverlay.sha256;
    }
    if (panel.quality === 'reused-await-runtime') {
      const a = panel.retimingAudit || {};
      return a.status === 'passed-frame-identical-retiming' && a.mediaSha256 === panel.actualMedia.sha256 && a.sourcePageSha256 === page.sha256;
    }
    return false;
  }
  const regionTitles = Object.freeze({upper:'上方派送邀请', middle:'中间派送邀请', lower:'下方派送邀请', gasp:'两人惊讶的一幕', stomp:'Mandy跺脚，Bernie的反应', cry:'Mandy哭喊，Bernie的反应', 'bicycle-memory':'骑车回忆', 'cake-memory':'蛋糕回忆', 'rain-memory':'雨中帐篷回忆', 'thoughtful-mandy':'Mandy 想一想'});
  const externalLayoutPanelIds = new Set(['page-008-panel-01', 'page-020-panel-01']);
  const requiresInteractionLayout = panel => !!panel && externalLayoutPanelIds.has(panel.id);
  function externalInteractionLayout(panel, page) {
    const config = window.COMIC_INTERACTION_LAYOUTS;
    if (!config || config.schemaVersion !== 1 || config.coordinateSpace !== 'source-panel' || !Array.isArray(config.layouts)) return null;
    const matches = config.layouts.filter(item => item && item.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0], v = entry.verification, overlay = panel.protectionOverlay;
    const evidenceBound = items => Array.isArray(items) && items.length > 0 && items.every(item => item && localPath(item.file) && SHA.test(item.sha256 || ''));
    if (entry.coordinateSpace !== 'source-panel' || entry.sourcePageSha256 !== page.sha256
      || entry.sourcePanelSha256 !== panel.sourceCropSha256 || entry.mediaSha256 !== panel.actualMedia.sha256
      || entry.videoSource !== panel.video || entry.overlaySha256 !== overlay.sha256
      || !entry.sourceBounds || !['x','y','width','height'].every(key => entry.sourceBounds[key] === panel.bounds[key])
      || !passed(v) || v.sourcePageSha256 !== page.sha256 || v.mediaSha256 !== panel.actualMedia.sha256
      || v.overlaySha256 !== overlay.sha256 || !evidenceBound(v.evidence) || !evidenceBound(entry.producerLayoutEvidence)
      || !entry.producerLayoutEvidence.every(item => panel.verification.bounds.evidence.includes(item.file))) return null;
    return entry;
  }
  function interactionRegions(panel, page) {
    const bounds = panel && panel.verification && panel.verification.bounds;
    const external = eligible(panel, page) && requiresInteractionLayout(panel);
    const layout = external ? externalInteractionLayout(panel, page) : bounds && bounds.layout;
    if (!eligible(panel, page) || !passed(bounds) || bounds.sourcePageSha256 !== page.sha256
      || bounds.mediaSha256 !== panel.actualMedia.sha256 || !layout || layout.sourcePageSha256 !== page.sha256
      || !Array.isArray(external ? layout.regions : layout.subsceneRectangles)) return [];
    const regions = external ? layout.regions : layout.subsceneRectangles;
    if (regions.length < 2 || regions.length > 12) return [];
    const ids = new Set();
    for (const region of regions) {
      if (!region || typeof region.id !== 'string' || !/^[a-z0-9][a-z0-9_-]{0,63}$/i.test(region.id)
        || ids.has(region.id) || !rectValid(region.artworkRect, panel.bounds.width, panel.bounds.height)
        || external && (typeof region.title !== 'string' || !region.title.trim() || region.title.length > 80)) return [];
      ids.add(region.id);
    }
    for (let i = 0; i < regions.length; i++) {
      const a = regions[i].artworkRect;
      for (let j = i + 1; j < regions.length; j++) {
        const b = regions[j].artworkRect;
        if (a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height) return [];
      }
    }
    return regions.map(region => Object.freeze({id:region.id, title:external ? region.title : regionTitles[region.id] || '独立小画面', artworkRect:Object.freeze({...region.artworkRect})}))
      .sort((a, b) => a.artworkRect.y - b.artworkRect.y || a.artworkRect.x - b.artworkRect.x);
  }
  function createFixedProtectionOverlay(panel, page, layer) {
    if (!sourceBound(panel, page)) return null;
    const spec = panel.protectionOverlay, b = panel.bounds;
    const image = document.createElement('img');
    image.className = 'panel-protection-overlay'; image.alt = ''; image.draggable = false; image.setAttribute('aria-hidden', 'true');
    image.dataset.fixedSourceProtection = panel.id; image.width = spec.width; image.height = spec.height;
    Object.assign(image.style, {inset:'auto', left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`, zIndex:'2', opacity:'0'});
    image.onload = () => { if (image.naturalWidth === spec.width && image.naturalHeight === spec.height) image.style.opacity = '1'; else image.remove(); };
    image.onerror = () => image.remove(); layer.append(image); image.src = spec.source;
    return {pause() {}, reset() {}, destroy() { image.onload = null; image.onerror = null; image.remove(); }};
  }
  function create(panel, page, layer, controlsContainer, options = {}) {
    const backgroundOnly = options.backgroundOnly === true;
    const region = options.region ? interactionRegions(panel, page).find(item => item.id === options.region.id) : null;
    if (options.region && !region) throw new Error('Interaction region is not bound to the accepted source layout');
    const title = region ? `${panel.title || '漫画片段'} · ${region.title}` : panel.title || '漫画片段';
    const host = document.createElement('div'); host.className = 'panel-host is-fallback'; host.tabIndex = 0;
    host.style.opacity = '0';
    host.dataset.sourcePanelId = panel.id;
    if (region) { host.dataset.interactionRegion = region.id; host.dataset.interactionRect = JSON.stringify(region.artworkRect); }
    host.setAttribute('role', backgroundOnly ? 'presentation' : 'group');
    if (backgroundOnly) { host.dataset.backgroundOnly = 'true'; host.tabIndex = -1; host.style.pointerEvents = 'none'; host.setAttribute('aria-hidden', 'true'); }
    else host.setAttribute('aria-label', `${title}，左右拖动只转动这个小画面，双击或按 Home 还原原画`);
    const b = panel.bounds, r = panel.contentMapping.videoRect, m = panel.actualMedia;
    Object.assign(host.style, {left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`});
    if (region) {
      const q = region.artworkRect;
      // Keep the accepted full-panel video geometry; only this source-bound window receives input and is visible.
      host.style.clipPath = `inset(${q.y / b.height * 100}% ${(b.width - q.x - q.width) / b.width * 100}% ${(b.height - q.y - q.height) / b.height * 100}% ${q.x / b.width * 100}%)`;
    }
    const video = document.createElement('video'); video.className = 'panel-video'; video.muted = true; video.defaultMuted = true; video.playsInline = true; video.preload = 'auto';
    video.src = panel.video; video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1; video.controls = false; video.dataset.sourcePanelId = panel.id;
    if (region) video.dataset.interactionRegion = region.id;
    if (backgroundOnly) video.dataset.backgroundOnly = 'true';
    Object.assign(video.style, {width:'100%', height:'100%', left:'0', top:'0', objectFit:'contain'});
    const artworkRect = panel.contentMapping.artworkRect;
    if (artworkRect) {
      const matte = document.createElement('div'); matte.className = 'panel-video-matte'; matte.setAttribute('aria-hidden', 'true');
      matte.style.background = `rgb(${panel.contentMapping.backgroundColor.join(',')})`; host.append(matte);
      Object.assign(video.style, {left:`${artworkRect.x / b.width * 100}%`, top:`${artworkRect.y / b.height * 100}%`, width:`${artworkRect.width / b.width * 100}%`, height:`${artworkRect.height / b.height * 100}%`});
    }
    // The mask is expressed in video coordinates. Its transparent parts expose printed text in the unchanged original page below.
    if (panel.mask) { video.style.maskImage = `url("${panel.mask.replace(/"/g, '%22')}")`; video.style.webkitMaskImage = video.style.maskImage; video.style.maskSize = '100% 100%'; video.style.webkitMaskSize = '100% 100%'; video.style.maskMode = 'alpha'; video.style.maskRepeat = 'no-repeat'; video.style.webkitMaskRepeat = 'no-repeat'; }
    const overlaySpec = panel.protectionOverlay;
    let overlayImage = null;
    host.append(video);
    if (overlaySpec) {
      overlayImage = document.createElement('img'); overlayImage.className = 'panel-protection-overlay'; overlayImage.alt = ''; overlayImage.draggable = false; overlayImage.hidden = true;
      overlayImage.width = overlaySpec.width; overlayImage.height = overlaySpec.height; overlayImage.setAttribute('aria-hidden', 'true'); host.append(overlayImage);
    }
    layer.append(host);
    const row = document.createElement('div'); row.className = 'panel-controls';
    const label = document.createElement('strong'); label.textContent = `${title}${panel.quality === 'review-candidate' ? ' · 候选待验收' : panel.quality === 'reused-await-runtime' ? ' · 原验收媒体，四秒复核中' : ''}`; row.dataset.panelId = panel.id; row.dataset.sourcePanelId = panel.id; row.dataset.quality = panel.quality;
    if (region) row.dataset.interactionRegion = region.id;
    const play = document.createElement('button'); play.type = 'button'; play.textContent = '播放';
    const resetButton = document.createElement('button'); resetButton.type = 'button'; resetButton.textContent = '复位';
    const slider = document.createElement('input'); slider.type = 'range'; slider.min = '0'; slider.max = '100'; slider.step = '.1'; slider.value = '0'; slider.setAttribute('aria-label', `${title}视频进度`);
    const progress = document.createElement('output'); progress.textContent = '0%';
    const notice = document.createElement('span'); notice.className = 'panel-notice'; notice.textContent = '正在打开视频…';
    const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = '重新打开'; retry.hidden = true;
    row.append(label, play, resetButton, slider, progress, retry, notice);
    if (!backgroundOnly) controlsContainer.append(row);
    let disposed = false, metadata = false, decoded = false, loadFailed = false, seekFailed = false;
    let backdropVisible = false, reportedActivity = false;
    let desired = null, issued = null, inFlight = false, timer = null, loadTimer = null, dragging = null, motion = null;
    let frameRenderer = null, frameMode = false, frameFailed = false, frameTime = 0, frameTargetPercent = null, frameRequestedAt = 0;
    let framePlaybackBlocked = false;
    let frameDraws = 0, frameChanges = 0, lastFrameIndex = -1, frameLatencyTotal = 0, frameLatencySamples = 0;
    let seekIssuedAt = 0, seekLatencyTotal = 0, seekCompletions = 0;
    let maskReady = !panel.mask && !overlaySpec, protectionLoader = null, protectionAttempt = 0, protectionTimer = null;
    function displayTime() { return frameMode ? frameTime : video.currentTime; }
    function ranges() { const result = []; try { for (let i = 0; i < video.seekable.length; i++) result.push([video.seekable.start(i), video.seekable.end(i)]); } catch (_) {} return result; }
    function seekReady() { return metadata && decoded && maskReady && !loadFailed && !seekFailed && (frameMode && !frameFailed && frameRenderer && frameRenderer.ready || window.OrbitSeek.hasFullSeekRange(ranges(), video.duration)); }
    function updateActual() {
      // At rest, expose the byte-identical original page below; only the chosen moving view covers it.
      const ready = !disposed && metadata && decoded && maskReady && !loadFailed;
      const actualTime = displayTime();
      const active = !backgroundOnly && ready && (actualTime > .002 || !video.paused);
      host.style.opacity = ready && (backgroundOnly ? backdropVisible && video.paused && actualTime === 0 : active) ? '1' : '0';
      video.style.visibility = frameMode ? 'hidden' : '';
      if (frameRenderer) frameRenderer.canvas.hidden = !frameMode;
      host.dataset.renderMode = frameMode ? 'frames' : 'video';
      host.dataset.displayTime = String(actualTime);
      if (!backgroundOnly && active !== reportedActivity) {
        reportedActivity = active;
        if (typeof options.onActivity === 'function') options.onActivity(active);
      }
      const value = Number.isFinite(video.duration) && video.duration > 0 ? Math.max(0, Math.min(100, actualTime / video.duration * 100)) : 0;
      slider.value = String(value); progress.textContent = `${value.toFixed(1)}%`;
      slider.setAttribute('aria-valuetext', `${actualTime.toFixed(2)} 秒，共 ${(video.duration || 0).toFixed(2)} 秒`);
      play.textContent = video.paused ? '播放' : '暂停';
    }
    function updateAvailability() {
      if (disposed) return;
      const usable = metadata && decoded && maskReady && !loadFailed;
      host.classList.toggle('is-fallback', !usable);
      play.disabled = !usable; resetButton.disabled = !usable; slider.disabled = !usable || !seekReady();
      host.tabIndex = !backgroundOnly && usable && seekReady() ? 0 : -1;
      updateActual();
      if (!usable || seekFailed) return;
      if (!seekReady()) notice.textContent = '当前浏览器尚不能拖动这段视频。可播放，或用本地预览入口重新打开。';
      else notice.textContent = '';
      retry.hidden = true;
      if (seekReady() && desired !== null && !inFlight) issueSeek();
    }
    function mediaPause() { video.pause(); updateActual(); }
    function cancelMotion() {
      if (motion) motion.cancel(); dragging = null;
      if (!frameFailed && frameRenderer) {
        const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : m.duration;
        frameTargetPercent = Math.max(0, Math.min(100, displayTime() / duration * 100));
        frameRequestedAt = 0;
        frameRenderer.setPercent(frameTargetPercent);
      }
    }
    function pause(clearQueued = true) { cancelMotion(); if (clearQueued) desired = null; mediaPause(); }
    function fail(message, loading = false) {
      pause(false); if (loading) loadFailed = true; else seekFailed = true;
      inFlight = false; clearTimeout(timer); clearTimeout(loadTimer); clearTimeout(protectionTimer);
      notice.textContent = message; retry.hidden = false; updateAvailability(); updateActual();
    }
    function loadingSlow(message) {
      // A slow network is not a failed asset. Keep the original visible until
      // the existing decode and protection checks actually finish.
      if (disposed || loadFailed) return;
      notice.textContent = message; retry.hidden = false; updateAvailability();
    }
    function issueSeek() {
      if (disposed || inFlight || desired === null || !seekReady()) return;
      const target = desired;
      if (!window.OrbitSeek.canSeekTo(ranges(), video.duration, target)) return;
      desired = null; issued = target;
      if (Math.abs(video.currentTime - target) < .002 && !video.seeking) { issued = null; if (frameFailed) frameMode = false; updateActual(); return; }
      inFlight = true;
      timer = setTimeout(() => {
        if (disposed || !inFlight) return;
        if (desired === null) desired = issued;
        fail('这次定位尚未完成，进度显示的是实际位置。可重新打开后继续。');
      }, 3000);
      try { seekIssuedAt = performance.now(); video.currentTime = target; }
      catch (_) { if (desired === null) desired = issued; fail('暂时无法定位，已保留最后选择的进度。请重新打开。'); }
    }
    function requestPercent(percent) {
      if (backgroundOnly) return;
      mediaPause();
      if (!metadata || !decoded || loadFailed) return;
      frameTargetPercent = Math.max(0, Math.min(100, Number(percent)));
      framePlaybackBlocked = false;
      if (frameRenderer && !frameFailed) {
        frameRequestedAt = performance.now(); frameRenderer.setPercent(frameTargetPercent);
        if (frameMode && frameRenderer.ready) { desired = null; updateActual(); return; }
      }
      const end = Math.max(0, video.duration - .001);
      desired = Math.max(0, Math.min(end, Number(percent) / 100 * video.duration));
      updateActual(); issueSeek();
    }
    function reset() { cancelMotion(); requestPercent(0); }
    function setBackdropVisible(visible) {
      if (!backgroundOnly || disposed) return;
      backdropVisible = visible === true;
      video.pause();
      // This is an accepted front-layout backdrop, never a second linked orbit.
      if (video.currentTime !== 0) video.currentTime = 0;
      if (frameRenderer && !frameFailed) frameRenderer.reset();
      updateActual();
    }
    function loadProtection() {
      clearTimeout(protectionTimer);
      const attempt = ++protectionAttempt;
      maskReady = !panel.mask && !overlaySpec;
      if (overlayImage) overlayImage.hidden = true;
      if (maskReady) return;
      if (panel.mask && (!window.CSS || !(window.CSS.supports('mask-image', 'url("mask.png")') || window.CSS.supports('-webkit-mask-image', 'url("mask.png")')))) {
        fail('当前浏览器无法显示文字保护层，已保留原画。', true); return;
      }
      const source = overlaySpec ? overlaySpec.source : panel.mask;
      const expectedWidth = overlaySpec ? overlaySpec.width : m.width;
      const expectedHeight = overlaySpec ? overlaySpec.height : m.height;
      const protection = overlayImage || new Image(); protectionLoader = protection;
      protection.onload = () => {
        if (disposed || attempt !== protectionAttempt) return;
        clearTimeout(protectionTimer);
        if (protection.naturalWidth !== expectedWidth || protection.naturalHeight !== expectedHeight) { fail('保护层与原画不一致，已保留原画。', true); return; }
        if (overlayImage) overlayImage.hidden = false;
        maskReady = true; updateAvailability();
      };
      protection.onerror = () => { if (!disposed && attempt === protectionAttempt) fail('文字与格框保护层未打开，已保留原画。请重新打开。', true); };
      protectionTimer = setTimeout(() => { if (!disposed && attempt === protectionAttempt) loadingSlow('文字与格框保护层仍在加载，原画可继续阅读。'); }, 15000);
      protection.src = source;
    }
    function startLoad() {
      clearTimeout(loadTimer); clearTimeout(timer); pause();
      metadata = false; decoded = false; loadFailed = false; seekFailed = false; inFlight = false; issued = null;
      notice.textContent = '正在打开视频…'; retry.hidden = true;
      loadProtection(); updateAvailability();
      if (loadFailed) return;
      loadTimer = setTimeout(() => loadingSlow('视频仍在加载，原画可继续阅读。'), 15000);
      video.load();
    }
    video.addEventListener('loadedmetadata', () => {
      if (disposed) return;
      if (!Number.isFinite(video.duration) || Math.abs(video.duration - m.duration) > .04 || video.videoWidth !== m.width || video.videoHeight !== m.height) {
        fail('这段文件与验收记录不一致，已保留原画。', true); return;
      }
      metadata = true; updateAvailability();
    });
    video.addEventListener('loadeddata', () => { if (!disposed && !loadFailed) { decoded = true; clearTimeout(loadTimer); updateAvailability(); updateActual(); } });
    for (const event of ['progress', 'canplay', 'durationchange']) video.addEventListener(event, updateAvailability);
    video.addEventListener('seeked', () => {
      if (disposed) return;
      const expected = issued;
      clearTimeout(timer); inFlight = false; issued = null;
      if (expected !== null) {
        seekCompletions++; seekLatencyTotal += Math.max(0, performance.now() - seekIssuedAt);
        host.dataset.seekCompletions = String(seekCompletions);
        host.dataset.seekLatencyMean = String(seekLatencyTotal / seekCompletions);
      }
      if (frameFailed) frameMode = false;
      updateActual();
      if (expected !== null && Math.abs(video.currentTime - expected) > .08) {
        if (desired === null) desired = expected;
        fail('视频没有到达所选位置，进度显示的是实际位置。请重新打开。'); return;
      }
      issueSeek();
    });
    if (window.OrbitFrameCache && new URLSearchParams(location.search).get('frames') !== 'off') {
      frameRenderer = window.OrbitFrameCache.create(panel, page, {
        onReady() {
          if (disposed || frameFailed || framePlaybackBlocked || !frameRenderer) return;
          host.dataset.frameReady = 'true';
          frameRenderer.setPercent(backgroundOnly ? 0 : frameTargetPercent !== null ? frameTargetPercent : (Number.isFinite(video.duration) && video.duration > 0 ? video.currentTime / video.duration * 100 : 0));
        },
        onFrame(actual) {
          if (disposed || frameFailed || framePlaybackBlocked || !video.paused) return;
          if (!frameMode) { desired = null; issued = null; inFlight = false; clearTimeout(timer); }
          frameMode = true; frameTime = actual.currentTime;
          frameDraws++; if (actual.index !== lastFrameIndex) frameChanges++;
          lastFrameIndex = actual.index;
          host.dataset.frameIndex = String(actual.index); host.dataset.frameDraws = String(frameDraws); host.dataset.frameChanges = String(frameChanges);
          if (frameRequestedAt) {
            const latency = Math.max(0, performance.now() - frameRequestedAt);
            frameLatencyTotal += latency; frameLatencySamples++;
            host.dataset.frameLatencyLast = String(latency); host.dataset.frameLatencyMean = String(frameLatencyTotal / frameLatencySamples);
            frameRequestedAt = 0;
          }
          updateAvailability(); updateActual();
        },
        onError() {
          if (disposed) return;
          frameFailed = true; host.dataset.frameReady = 'fallback';
          if (framePlaybackBlocked) { frameMode = false; updateActual(); return; }
          // Keep the last real canvas view until the matching video frame is decoded.
          if (metadata && decoded) { desired = backgroundOnly ? 0 : frameTargetPercent !== null ? Math.min(video.duration - .001, frameTargetPercent / 100 * video.duration) : frameTime; issueSeek(); }
          else { frameMode = false; updateActual(); }
        }
      });
      if (frameRenderer) {
        const canvas = frameRenderer.canvas;
        canvas.className = 'panel-video panel-frame-canvas'; canvas.style.cssText = video.style.cssText; canvas.hidden = true;
        host.insertBefore(canvas, video);
      }
    }
    video.addEventListener('timeupdate', updateActual);
    for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, updateActual);
    video.addEventListener('error', () => { if (!disposed) fail('这段视频暂时无法读取，已保留原画。请检查文件后重新打开。', true); });
    if (!backgroundOnly) {
    host.dataset.motionState = 'idle';
    if (window.OrbitInertia && typeof window.OrbitInertia.create === 'function') {
      motion = window.OrbitInertia.create({onChange:requestPercent, onState:state => { host.dataset.motionState = state; }});
    }
    play.addEventListener('click', () => {
      if (!video.paused) pause();
      else { const at = displayTime(); cancelMotion(); desired = null; clearTimeout(timer); inFlight = false; issued = null; framePlaybackBlocked = true; frameMode = false; video.currentTime = at; updateActual(); video.play().catch(() => { notice.textContent = '暂时无法播放，请重新打开。'; retry.hidden = false; }); }
    });
    resetButton.addEventListener('click', reset);
    host.addEventListener('dblclick', event => { event.preventDefault(); reset(); });
    slider.addEventListener('input', () => { cancelMotion(); requestPercent(slider.value); });
    retry.addEventListener('click', startLoad);
    host.addEventListener('pointerdown', event => {
      if (!seekReady() || (event.pointerType === 'mouse' && event.button !== 0)) return;
      const width = host.getBoundingClientRect().width * (region ? region.artworkRect.width / b.width : 1);
      pause(); dragging = {id:event.pointerId, x:event.clientX, width, percent:displayTime() / video.duration * 100}; host.setPointerCapture(event.pointerId);
      if (motion) motion.begin(dragging.percent, event.clientX, performance.now());
    });
    host.addEventListener('pointermove', event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      if (motion) motion.move(event.clientX, dragging.width, performance.now());
      else requestPercent(dragging.percent + (event.clientX - dragging.x) / Math.max(1, dragging.width) * 100);
    });
    host.addEventListener('pointerup', event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      dragging = null;
      if (motion) motion.end(performance.now());
    });
    for (const event of ['pointercancel', 'lostpointercapture']) host.addEventListener(event, event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      cancelMotion();
    });
    host.addEventListener('keydown', event => {
      if (!seekReady()) return;
      const actual = displayTime() / video.duration * 100;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); cancelMotion(); requestPercent(actual + (event.key === 'ArrowLeft' ? -2 : 2)); }
      else if (event.key === 'Home') { event.preventDefault(); reset(); }
    });
    }
    let observer = null;
    if ('IntersectionObserver' in window) { observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }); observer.observe(host); }
    startLoad();
    return {pause, reset, setBackdropVisible, destroy() { disposed = true; protectionAttempt++; if (motion) motion.destroy(); if (frameRenderer) frameRenderer.destroy(); dragging = null; video.pause(); updateActual(); clearTimeout(timer); clearTimeout(loadTimer); clearTimeout(protectionTimer); if (protectionLoader) { protectionLoader.onload = null; protectionLoader.onerror = null; } if (observer) observer.disconnect(); video.removeAttribute('src'); video.load(); host.remove(); row.remove(); }};
  }
  window.ComicPanelPlayer = Object.freeze({eligible, displayable, requiresInteractionLayout, interactionRegions, createFixedProtectionOverlay, create});
})();
