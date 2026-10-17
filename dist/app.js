(() => {
  'use strict';
  const book = window.COMIC_BOOK;
  if (!book || !Array.isArray(book.pages) || !book.pages.length) return;
  const $ = id => document.getElementById(id);
  const image = $('page-image');
  const stage = $('page-stage');
  const viewport = $('page-viewport');
  const inner = $('viewport-inner');
  const panelLayer = $('panel-layer');
  const panelControls = $('panel-control-list');
  const pages = book.pages;
  const readingPositionKey = 'just-cuz-birthday-episode-content-v2-page';
  $('page-number').max = String(pages.length);
  let current = 1, loaded = false, loadToken = 0, imageLoader = null;
  let frameConfigController = null;
  let zoom = 1, fitting = true, fitScale = 1, players = [];
  const dialogs = new Map();
  const chapterOf = page => book.chapters.find(ch => page >= ch.start && page <= ch.end);

  book.chapters.forEach(ch => {
    const option = document.createElement('option');
    option.value = ch.start;
    option.textContent = `${ch.title} · ${ch.start}–${ch.end} 页`;
    $('chapter-select').append(option);
    const section = document.createElement('section');
    const grid = document.createElement('div'); grid.className = 'page-grid';
    for (let number = ch.start; number <= ch.end; number++) {
      const page = pages[number - 1];
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'page-thumb'; button.dataset.page = number;
      button.setAttribute('aria-label', `打开第 ${number} 页`);
      button.textContent = String(number);
      button.addEventListener('click', () => { $('directory-dialog').close(); showPage(number); });
      grid.append(button);
    }
    section.append(grid); $('directory-content').append(section);
  });

  function dialogOpen(dialog, opener) {
    dialogs.set(dialog, opener || document.activeElement);
    if (!dialog.open) dialog.showModal();
  }
  for (const id of ['directory-dialog', 'original-dialog', 'panel-sources-dialog']) {
    const dialog = $(id);
    dialog.addEventListener('close', () => {
      const opener = dialogs.get(dialog);
      if (opener && opener.isConnected) opener.focus();
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  }
  $('open-directory').addEventListener('click', () => {
    document.querySelectorAll('.page-thumb').forEach(button => {
      if (Number(button.dataset.page) === current) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    dialogOpen($('directory-dialog'), $('open-directory'));
    const selected = document.querySelector(`.page-thumb[data-page="${current}"]`);
    if (selected) { selected.scrollIntoView({block:'nearest'}); selected.focus({preventScroll:true}); }
  });
  $('close-directory').addEventListener('click', () => $('directory-dialog').close());
  $('close-original').addEventListener('click', () => $('original-dialog').close());
  $('close-panel-sources').addEventListener('click', () => $('panel-sources-dialog').close());
  $('original-button').addEventListener('click', () => {
    players.forEach(player => player.pause());
    const page = pages[current - 1];
    $('original-title').textContent = `第 ${current} 页完整原画`;
    $('original-image').src = page.source;
    $('original-image').alt = `Just Cuz 第 ${current} 页完整原画，无视频覆盖`;
    $('original-size').textContent = `${page.width} × ${page.height} · 完整原页`;
    $('original-download').href = page.source;
    $('original-download').download = `Just-Cuz-第${current}页.jpg`;
    dialogOpen($('original-dialog'), $('original-button'));
  });

  function verifiedPanelSources(page) {
    const sources = Array.isArray(page.panelSources) ? page.panelSources : [];
    const seen = new Set();
    return sources.filter(source => {
      if (!source || source.quality !== 'source-verified' || typeof source.id !== 'string' || !source.id.trim() || typeof source.title !== 'string' || !source.title.trim()) return false;
      if (!/^[a-f\d]{64}$/i.test(page.sha256 || '') || source.sourcePageSha256 !== page.sha256) return false;
      if (typeof source.source !== 'string' || !/^(?:[^:/?#\\%]+\/)*[^:/?#\\%]+\.(?:png|jpe?g|webp)$/i.test(source.source) || source.source.split('/').some(part => part === '.' || part === '..')) return false;
      const bounds = source.bounds;
      if (!bounds || ![bounds.x, bounds.y, bounds.width, bounds.height, source.width, source.height].every(Number.isInteger)) return false;
      if (bounds.x < 0 || bounds.y < 0 || bounds.width <= 0 || bounds.height <= 0 || bounds.x + bounds.width > page.width || bounds.y + bounds.height > page.height) return false;
      if (source.width !== bounds.width || source.height !== bounds.height || seen.has(source.id)) return false;
      seen.add(source.id);
      return true;
    });
  }
  function updatePanelSourcesButton(page) {
    const count = verifiedPanelSources(page).length;
    $('panel-sources-button').hidden = !loaded || !count;
    $('panel-sources-button').textContent = count ? `分格原画（${count}）` : '分格原画';
  }
  $('panel-sources-button').addEventListener('click', () => {
    const page = pages[current - 1];
    const sources = verifiedPanelSources(page);
    if (!loaded || !sources.length) return;
    players.forEach(player => player.pause());
    $('panel-sources-page').textContent = `第 ${current} 页 · ${sources.length} 格原画`;
    const gallery = $('panel-sources-gallery');
    gallery.replaceChildren();
    sources.forEach((source, index) => {
      const card = document.createElement('figure'); card.className = 'panel-source-card';
      const caption = document.createElement('figcaption'); caption.className = 'panel-source-caption';
      const title = document.createElement('strong'); title.textContent = source.title;
      const state = document.createElement('span'); state.textContent = '原画裁切';
      caption.append(title, state);
      const wrap = document.createElement('div'); wrap.className = 'panel-source-image-wrap';
      const crop = document.createElement('img');
      crop.width = source.width; crop.height = source.height; crop.decoding = 'async'; crop.draggable = false; crop.hidden = true;
      crop.alt = `Just Cuz · ${source.title} · 原图裁切`;
      const notice = document.createElement('p'); notice.className = 'panel-source-loading'; notice.setAttribute('role', 'status');
      const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = '重新打开'; retry.hidden = true;
      const footer = document.createElement('div'); footer.className = 'panel-source-footer';
      const pending = document.createElement('span'); const status = (page.panels || []).find(p => p.id === source.id); pending.textContent = status && status.quality === 'passed' ? '可以互动' : '保留完整原画';
      const save = document.createElement('a'); save.href = source.source; save.download = `Just-Cuz-第${current}页-第${index + 1}格.${source.source.split('.').pop().toLowerCase()}`; save.textContent = '保存分格原画'; save.hidden = true;
      footer.append(pending, save);
      function unavailable() {
        crop.hidden = true; save.hidden = true; notice.hidden = false; retry.hidden = false;
        notice.textContent = '这一格暂时没有打开，请重新尝试。';
      }
      function openCrop() {
        crop.hidden = true; save.hidden = true; retry.hidden = true; notice.hidden = false;
        notice.textContent = '正在打开原图裁切…';
        crop.src = source.source;
      }
      crop.onload = () => {
        if (crop.naturalWidth !== source.width || crop.naturalHeight !== source.height) { unavailable(); return; }
        crop.hidden = false; save.hidden = false; notice.hidden = true; retry.hidden = true;
      };
      crop.onerror = unavailable;
      retry.addEventListener('click', openCrop);
      wrap.append(crop, notice, retry); card.append(caption, wrap, footer); gallery.append(card);
      openCrop();
    });
    dialogOpen($('panel-sources-dialog'), $('panel-sources-button'));
  });

  function sizeStage() {
    const page = pages[current - 1];
    const availableW = Math.max(1, viewport.clientWidth - 28);
    const availableH = Math.max(1, viewport.clientHeight - 28);
    fitScale = Math.min(availableW / page.width, availableH / page.height);
    const scale = fitScale * zoom;
    const width = Math.max(1, Math.round(page.width * scale));
    const height = Math.max(1, Math.round(page.height * scale));
    stage.style.width = `${width}px`; stage.style.height = `${height}px`;
    inner.style.width = `${Math.max(viewport.clientWidth, width + 28)}px`;
    inner.style.height = `${Math.max(viewport.clientHeight, height + 28)}px`;
    $('zoom-level').textContent = fitting ? '适合整页' : `${Math.round(zoom * 100)}%`;
    $('zoom-out').disabled = zoom <= 1;
    $('zoom-in').disabled = zoom >= 5;
  }
  function setZoom(value, fit = false) {
    const oldX = (viewport.scrollLeft + viewport.clientWidth / 2) / Math.max(1, inner.offsetWidth);
    const oldY = (viewport.scrollTop + viewport.clientHeight / 2) / Math.max(1, inner.offsetHeight);
    zoom = Math.min(5, Math.max(1, value)); fitting = fit;
    sizeStage();
    if (fit) { viewport.scrollLeft = 0; viewport.scrollTop = 0; }
    else { viewport.scrollLeft = oldX * inner.offsetWidth - viewport.clientWidth / 2; viewport.scrollTop = oldY * inner.offsetHeight - viewport.clientHeight / 2; }
  }
  $('zoom-in').addEventListener('click', () => setZoom(zoom * 1.4));
  $('zoom-out').addEventListener('click', () => setZoom(zoom / 1.4, zoom / 1.4 <= 1));
  $('fit-page').addEventListener('click', () => setZoom(1, true));
  new ResizeObserver(() => sizeStage()).observe(viewport);

  let panelStatusQueued = false;
  function updatePanelStatus() {
    const hosts = Array.from(panelLayer.querySelectorAll('.panel-host')).filter(host => host.dataset.backgroundOnly !== 'true');
    const caption = $('page-caption'), retry = $('retry-interaction');
    if (!loaded || !hosts.length) return;
    if (retry) retry.hidden = true;
    const ready = hosts.filter(host => host.dataset.interactionState === 'ready').length;
    const failed = hosts.filter(host => host.dataset.interactionState === 'error').length;
    const pendingAngle = hosts.some(host => host.dataset.interactionState === 'ready' && host.dataset.anglePending === 'true');
    const warming = hosts.some(host => host.dataset.renderMode === 'frames' && Number(host.dataset.totalFrames) > Number(host.dataset.loadedFrames || 0));
    panelLayer.setAttribute('aria-busy', String(ready + failed < hosts.length));
    caption.dataset.state = failed ? 'error' : ready === hosts.length && !pendingAngle ? 'ready' : 'loading';
    if (failed) {
      caption.textContent = ready ? `${ready} 个画面可以拖动，其他画面请重新准备` : '互动暂未打开，原画仍可阅读';
      if (retry) retry.hidden = false;
    } else if (pendingAngle) caption.textContent = '正在打开这个角度…';
    else if (ready === hosts.length) caption.textContent = warming ? '可以拖动 · 其他角度继续准备' : '可以拖动 · 双击还原原画';
    else caption.textContent = ready ? `${ready} 个画面可以拖动，其余正在准备…` : '正在准备环绕画面，原画可以先读';
  }
  function queuePanelStatus() {
    if (panelStatusQueued) return;
    panelStatusQueued = true;
    Promise.resolve().then(() => { panelStatusQueued = false; updatePanelStatus(); });
  }
  panelLayer.addEventListener('comic-panel-status', queuePanelStatus);
  if ($('retry-interaction')) $('retry-interaction').addEventListener('click', () => showPage(current));

  function clearPlayers() {
    players.forEach(player => player.destroy()); players = []; panelLayer.replaceChildren(); panelControls.replaceChildren(); panelControls.hidden = true;
    $('reset-panels').hidden = true;
  }
  function mountPanels(page) {
    clearPlayers();
    const candidatePanels = Array.isArray(page.panels) ? page.panels : [];
    let interactionCount = 0;
    candidatePanels.forEach(panel => {
      if (!window.ComicPanelPlayer || !window.ComicPanelPlayer.displayable(panel, page)) return;
      const regions = window.ComicPanelPlayer.interactionRegions(panel, page);
      // A missing/mismatched explicit layout leaves the unchanged original visible.
      if (window.ComicPanelPlayer.requiresInteractionLayout(panel) && !regions.length) return;
      if (regions.length) {
        const needsFrontBackdrop = ['page-011-panel-01', 'page-014-panel-01', 'page-026-panel-01'].includes(panel.id);
        const activeChildren = new Set();
        const backdrop = needsFrontBackdrop ? window.ComicPanelPlayer.create(panel, page, panelLayer, panelControls, {backgroundOnly:true}) : null;
        if (backdrop) players.push(backdrop);
        regions.forEach(region => players.push(window.ComicPanelPlayer.create(panel, page, panelLayer, panelControls, {
          region,
          onActivity:backdrop ? active => {
            if (active) activeChildren.add(region.id); else activeChildren.delete(region.id);
            backdrop.setBackdropVisible(activeChildren.size > 0);
          } : undefined
        })));
        const fixedProtection = window.ComicPanelPlayer.createFixedProtectionOverlay(panel, page, panelLayer);
        if (fixedProtection) players.push(fixedProtection);
        interactionCount += regions.length;
      } else {
        players.push(window.ComicPanelPlayer.create(panel, page, panelLayer, panelControls));
        interactionCount++;
      }
    });
    candidatePanels.filter(panel => !window.ComicPanelPlayer.displayable(panel, page)).forEach(panel => {
      const row = document.createElement('div'); row.className = 'panel-controls pending-panel'; row.dataset.panelId = panel.id; row.dataset.quality = panel.quality;
      const title = document.createElement('strong'); title.textContent = `${panel.title} · 待制作`;
      const reason = document.createElement('span'); reason.textContent = panel.pendingReason || '等待通过逐格验收。'; row.append(title, reason); panelControls.append(row);
    });
    $('reset-panels').hidden = !players.length;
    $('reset-panels').textContent = '复位本页';
    panelControls.hidden = true; panelControls.inert = true; panelControls.setAttribute('aria-hidden', 'true');
    const done = candidatePanels.filter(p => p.quality === 'passed').length;
    const pendingPanel = candidatePanels.find(panel => !window.ComicPanelPlayer.displayable(panel, page));
    $('page-caption').textContent = interactionCount ? '拖动单格 · 双击还原视角' : pendingPanel && pendingPanel.pendingReason || '原画完整呈现';
    queuePanelStatus();
  }
  $('reset-panels').addEventListener('click', () => players.forEach(player => player.reset()));

  function showPage(number) {
    number = Math.trunc(Number(number));
    if (!Number.isFinite(number) || number < 1 || number > pages.length) return;
    current = number; loaded = false; const token = ++loadToken;
    if (frameConfigController) frameConfigController.abort();
    frameConfigController = new AbortController();
    const configSignal = frameConfigController.signal;
    if (imageLoader) { imageLoader.onload = null; imageLoader.onerror = null; imageLoader.removeAttribute('src'); }
    $('panel-sources-button').hidden = true;
    if ($('panel-sources-dialog').open) $('panel-sources-dialog').close();
    clearPlayers(); image.hidden = true;
    $('page-loading').hidden = false; $('page-error').hidden = true;
    $('page-number').value = current;
    $('current-page-label').textContent = `第 ${current} 页`;
    $('page-caption').textContent = '正在打开原页…';
    $('page-caption').dataset.state = 'loading';
    if ($('retry-interaction')) $('retry-interaction').hidden = true;
    $('page-progress').textContent = `第 ${current} / ${pages.length} 页`;
    $('prev-page').disabled = current <= 1; $('next-page').disabled = current >= pages.length;
    const chapter = chapterOf(current);
    if (chapter) $('chapter-select').value = chapter.start;
    zoom = 1; fitting = true; sizeStage(); viewport.scrollLeft = 0; viewport.scrollTop = 0;
    const page = pages[current - 1];
    // The small current-page configuration can travel alongside the high-priority
    // original image. No player or angle resource starts before the original is visible.
    const configReady = Promise.resolve().then(() => {
      if (token !== loadToken || configSignal.aborted) return null;
      if (!window.ComicPageFrames) throw new Error('Current page frame loader unavailable');
      return window.ComicPageFrames.ensure(page, configSignal);
    }).then(config => ({config}), error => ({error}));
    imageLoader = new Image();
    imageLoader.fetchPriority = 'high'; imageLoader.decoding = 'async';
    imageLoader.width = page.width; imageLoader.height = page.height;
    imageLoader.onload = () => {
      if (token !== loadToken) return;
      loaded = true; image.src = page.source; image.width = page.width; image.height = page.height;
      image.alt = `Just Cuz 第 ${current} 页完整原画`;
      image.hidden = false; $('page-loading').hidden = true;
      document.dispatchEvent(new CustomEvent('comic-page-original-ready', {detail:{readingPage:current, sourcePage:page.sourcePage, sourcePageSha256:page.sha256}}));
      $('page-caption').textContent = '正在准备本页互动，原画可以先读';
      panelLayer.setAttribute('aria-busy', 'true');
      configReady.then(result => {
        if (token !== loadToken || configSignal.aborted) return;
        if (result.error) throw result.error;
        if (result.config) mountPanels(page);
      }).catch(() => {
        if (token !== loadToken || configSignal.aborted) return;
        panelLayer.setAttribute('aria-busy', 'false');
        $('page-caption').dataset.state = 'error';
        $('page-caption').textContent = '互动暂未打开，原画仍可阅读。请重新准备。';
        if ($('retry-interaction')) $('retry-interaction').hidden = false;
      });
      updatePanelSourcesButton(page);
      try { localStorage.setItem(readingPositionKey, String(current)); } catch (_) {}
      try { history.replaceState(null, '', `#page=${current}`); } catch (_) {}
    };
    imageLoader.onerror = () => {
      if (token !== loadToken) return;
      frameConfigController.abort();
      $('page-loading').hidden = true; $('page-error').hidden = false;
      $('page-caption').textContent = '原页尚未打开';
    };
    imageLoader.src = page.source;
  }
  $('prev-page').addEventListener('click', () => showPage(current - 1));
  $('next-page').addEventListener('click', () => showPage(current + 1));
  $('page-jump').addEventListener('submit', event => {
    event.preventDefault(); const field = $('page-number');
    if (!field.reportValidity()) return;
    showPage(field.value);
  });
  $('chapter-select').addEventListener('change', event => showPage(event.target.value));
  $('retry-page').addEventListener('click', () => showPage(current));
  window.addEventListener('hashchange', () => {
    const match = location.hash.match(/^#page=(\d+)$/);
    if (match && Number(match[1]) !== current) showPage(Number(match[1]));
  });
  document.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || event.ctrlKey || event.altKey || event.metaKey || event.target.closest('input,select,textarea,button,.panel-host')) return;
    const actions = {ArrowLeft:() => showPage(current - 1), ArrowRight:() => showPage(current + 1), Home:() => showPage(1), End:() => showPage(pages.length), '+':() => setZoom(zoom * 1.4), '=':() => setZoom(zoom * 1.4), '-':() => setZoom(zoom / 1.4, zoom / 1.4 <= 1)};
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) players.forEach(player => player.pause()); });
  window.addEventListener('pagehide', () => players.forEach(player => player.pause()));
  $('book-count').textContent = `${pages.length} 页故事`;
  const verifiedSourceCount = Number.isInteger(book.verifiedSourcePanelCount) && book.verifiedSourcePanelCount >= 0 ? book.verifiedSourcePanelCount : pages.reduce((total, page) => total + verifiedPanelSources(page).length, 0);
  const sourcePanelTotal = Number.isInteger(book.primaryPanelCount) && book.primaryPanelCount > 0 ? book.primaryPanelCount : Number.isInteger(book.panelSourceInventoryTotal) && book.panelSourceInventoryTotal > 0 ? book.panelSourceInventoryTotal : null;
  $('source-panel-count').textContent = '独立拖动';
  const accepted = pages.reduce((total, page) => total + (page.panels || []).filter(panel => window.ComicPanelPlayer && window.ComicPanelPlayer.eligible(panel, page)).length, 0);
  const interactionTotal = pages.reduce((total, page) => total + (page.panels || []).reduce((count, panel) => {
    if (!window.ComicPanelPlayer || !window.ComicPanelPlayer.eligible(panel, page)) return count;
    return count + (window.ComicPanelPlayer.interactionRegions(panel, page).length || 1);
  }, 0), 0);
  $('dynamic-count').textContent = '双击还原';
  const complete = book.complete === true && accepted === sourcePanelTotal;
  document.querySelector('.stage-badge').textContent = complete ? '一起转转看！' : '一起读故事！';
  $('dynamic-note').textContent = '每个画面都可以单独转动，双击回到原画。其他方向的画面参照原画补绘。';
  let first = 1;
  const match = location.hash.match(/^#page=(\d+)$/);
  if (match) first = Number(match[1]);
  else {
    try {
      const saved = localStorage.getItem(readingPositionKey);
      // Previous reader counted the collection cover; retain the same source page.
      first = saved !== null ? Number(saved) || 1 : Math.max(1, (Number(localStorage.getItem('just-cuz-birthday-episode-page')) || 2) - 1);
    } catch (_) {}
  }
  showPage(Math.min(pages.length, Math.max(1, first)));
})();
