(() => {
  'use strict';
  const book = window.COMIC_BOOK;
  if (!book || !Array.isArray(book.pages) || !book.pages.length) return;
  const $ = id => document.getElementById(id);
  const image = $('page-image');
  const sourceCropHandles = new Set();
  let sourceCropGeneration = 0;
  function clearSourceCrops() {
    sourceCropGeneration++;
    sourceCropHandles.forEach(handle => handle.destroy()); sourceCropHandles.clear();
    const gallery = $('panel-sources-gallery'); if (gallery) gallery.replaceChildren();
  }
  const stage = $('page-stage');
  const viewport = $('page-viewport');
  const inner = $('viewport-inner');
  const panelLayer = $('panel-layer');
  const panelControls = $('panel-control-list');
  const pages = book.pages;
  const readingPositionKey = 'just-cuz-collection-source-order-v1-page';
  $('page-number').max = String(pages.length);
  let current = 1, loaded = false, loadToken = 0, imageLoader = null;
  let frameConfigController = null;
  let zoom = 1, fitting = true, fitScale = 1, players = [];
  const dialogs = new Map();
  const chapterOf = page => book.chapters.find(ch => page >= ch.start && page <= ch.end);

  // Optional adjacent-page bodies stay private until navigation. The normal
  // loaders revalidate every transferred body before publishing current state.
  function createInteractionWarmup() {
    let job = null, adopted = null;
    function discard() {
      if (job) job.controller.abort();
      job = null; adopted = null;
    }
    function valid(item) { return job === item && !item.controller.signal.aborted; }
    async function read(item, source, hash, length, media = false) {
      if (!valid(item)) throw new DOMException('Page changed', 'AbortError');
      const init = {signal:item.controller.signal, cache:'force-cache', priority:'low'};
      const response = media && window.ComicAssetDelivery?.fetch
        ? await window.ComicAssetDelivery.fetch(source, hash, init)
        : await fetch(`${source}?sha256=${hash}`, init);
      if (!response.ok || !response.body?.getReader) throw new Error('Optional next-page response unavailable');
      const reader = response.body.getReader(), bytes = new Uint8Array(length);
      let offset = 0, complete = false;
      try {
        for (;;) {
          const chunk = await reader.read();
          if (!valid(item)) throw new DOMException('Page changed', 'AbortError');
          if (chunk.done) break;
          if (offset + chunk.value.byteLength > length) throw new Error('Optional next-page body exceeds budget');
          bytes.set(chunk.value, offset); offset += chunk.value.byteLength;
        }
        if (!offset || media && offset !== length) throw new Error('Optional next-page body size mismatch');
        complete = true; return bytes.slice(0, offset).buffer;
      } finally {
        if (!complete) { try { await reader.cancel(); } catch (_) {} }
        reader.releaseLock();
      }
    }
    async function start(page) {
      discard();
      const modelRoute = window.ComicModelPacket?.(page.page);
      if (!modelRoute || !window.ComicPageModels?.inspect || !window.ComicPageFrames?.inspect || !window.OrbitFrameCache?.firstPreview) return;
      let frameRoute;
      try { frameRoute = window.ComicPageFrames.route(page); } catch (_) { return; }
      const item = {page, controller:new AbortController(), packets:new Map(), complete:false}; job = item;
      const modelSource = modelRoute.url.split('?')[0];
      try {
        const modelBytes = window.ComicPageModels.isReady(page) ? null
          : await read(item, modelSource, modelRoute.sha256, 100 * 1024);
        const model = modelBytes ? await window.ComicPageModels.inspect(page, modelBytes) : page;
        if (!valid(item)) return;
        const modelLength = modelBytes?.byteLength || 0;
        const frameBytes = await read(item, frameRoute.source, frameRoute.sha256, 100 * 1024 - modelLength);
        const config = await window.ComicPageFrames.inspect(model, frameBytes);
        if (!valid(item)) return;
        const preview = window.OrbitFrameCache.firstPreview(model, config, 350 * 1024);
        if (!preview || modelLength + frameBytes.byteLength + preview.pack.byteLength > 450 * 1024) { discard(); return; }
        const previewBytes = await read(item, preview.pack.source, preview.pack.sha256, preview.pack.byteLength, true);
        await window.OrbitFrameCache.verifyPreview(preview, previewBytes);
        if (!valid(item)) return;
        if (modelBytes) item.packets.set(modelSource + ':' + modelRoute.sha256, modelBytes);
        item.packets.set(frameRoute.source + ':' + frameRoute.sha256, frameBytes);
        item.packets.set(preview.pack.source + ':' + preview.pack.sha256, previewBytes);
        item.complete = true;
      } catch (_) { if (job === item) discard(); }
    }
    function take(page) {
      adopted = null;
      if (job?.complete && job.page.id === page.id && job.page.sha256 === page.sha256) adopted = job;
      if (job && job !== adopted) job.controller.abort();
      job = null;
    }
    function packet(page, source, hash) {
      if (!adopted || page && (adopted.page.id !== page.id || adopted.page.sha256 !== page.sha256)) return null;
      const key = source + ':' + hash.toLowerCase(), bytes = adopted.packets.get(key);
      adopted.packets.delete(key);
      return bytes || null;
    }
    const api = Object.freeze({packet, preview(source, hash) {
      const bytes = packet(null, source, hash);
      return bytes ? new Response(bytes, {status:200, headers:{'Content-Type':'application/octet-stream'}}) : null;
    }});
    window.ComicNextPageWarmup = api;
    return {start, take, discard, navigate() { if (job) job.controller.abort(); job = null; }};
  }
  const interactionWarmup = createInteractionWarmup();

  // A single optional original can follow a fully usable page on a reliable
  // fast link. A bounded verified preview may follow without starting a player.
  function createOriginalWarmup() {
    const connection = navigator.connection;
    let direction = 1, timer = null, entry = null, attempted = false, blocked = false;
    const stopTimer = () => { clearTimeout(timer); timer = null; };
    const discard = (keepInteraction = false) => {
      stopTimer();
      if (!keepInteraction) interactionWarmup.discard();
      if (!entry) return;
      entry.image.onload = null; entry.image.onerror = null;
      entry.image.removeAttribute('src'); entry = null;
    };
    function usablePage() {
      if (!loaded || document.visibilityState !== 'visible' || document.querySelector('dialog[open]') ||
          !connection || connection.saveData || connection.effectiveType !== '4g' ||
          !Number.isFinite(connection.downlink) || connection.downlink <= 2.25) return false;
      const hosts = [...panelLayer.querySelectorAll('.panel-host:not([data-background-only="true"])')];
      return hosts.length > 0 && hosts.every(({dataset:d}) =>
        d.interactionState === 'ready' && d.loadingFailed !== 'true' && d.anglePending !== 'true' &&
        (d.renderMode === 'video' || Number(d.totalFrames) > 0 && Number(d.loadedFrames) >= Number(d.totalFrames) ||
          d.previewReady === 'true' && Number(d.previewTotal) > 0 && Number(d.previewFailed) === 0 &&
          Number(d.previewLoaded) >= Number(d.previewTotal)));
    }
    function queue() {
      if (blocked || attempted || timer !== null || entry || !usablePage()) return;
      const token = loadToken;
      timer = setTimeout(() => {
        timer = null;
        if (token !== loadToken || blocked || attempted || !usablePage()) return;
        attempted = true;
        const page = pages[current + direction - 1];
        if (!page || !Number.isSafeInteger(page.bytes) || page.bytes < 1 || page.bytes > 512 * 1024) return;
        const artwork = window.ComicReadingArtwork?.(page.source, page.sha256) || page.source;
        const img = new Image(); img.decoding = 'async'; img.fetchPriority = 'low';
        img.width = page.width; img.height = page.height;
        const item = {page, artwork, image:img, failed:false}; entry = item;
        img.onload = () => {
          if (entry !== item) return;
          if (img.naturalWidth !== page.width || img.naturalHeight !== page.height) { item.failed = true; discard(); }
          else if (usablePage()) void interactionWarmup.start(page);
        };
        img.onerror = () => { if (entry === item) { item.failed = true; discard(); } };
        img.src = artwork;
      }, 1000);
    }
    function interrupt() { blocked = true; discard(); }
    panelLayer.addEventListener('pointerdown', event => {
      if (event.target.closest('.panel-host')) interrupt();
    }, {capture:true, passive:true});
    document.addEventListener('comic-page-previews-ready', queue);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== 'visible') discard(); else queue();
    });
    connection?.addEventListener?.('change', () => { discard(); if (usablePage()) queue(); });
    window.addEventListener('pagehide', interrupt);
    return Object.freeze({
      take(page, artwork) {
        stopTimer();
        interactionWarmup.take(page);
        const item = entry;
        if (item && !item.failed && item.page.id === page.id && item.page.sha256 === page.sha256 && item.artwork === artwork) {
          entry = null;
          item.image.onload = null; item.image.onerror = null;
          item.image.fetchPriority = 'high';
          return item.image;
        }
        discard(true); return null;
      },
      navigate(number) {
        discard(true); interactionWarmup.navigate();
        if (loadToken > 0 && number !== current) direction = Math.sign(number - current);
        attempted = false; blocked = false;
      }
    });
  }
  const originalWarmup = createOriginalWarmup();

  // The reading area owns touch gestures; mouse and keyboard retain the
  // existing panel controls. A pinch keeps its page point beneath the midpoint.
  function createPageGesture() {
    const touches = new Map();
    let locked = false, pinch = null, pan = null, ignoreClickUntil = 0;
    const point = event => ({x:event.clientX, y:event.clientY});
    const capture = id => { try { viewport.setPointerCapture(id); } catch (_) {} };
    function setLocked(value) {
      if (locked === value) return;
      locked = value;
      document.body.dataset.pageGesture = value ? 'pinch' : 'idle';
      document.dispatchEvent(new Event('comic-page-gesture-change'));
    }
    function geometry() {
      const [a,b] = [...touches.values()];
      return {x:(a.x + b.x) / 2, y:(a.y + b.y) / 2,
        distance:Math.max(1, Math.hypot(b.x - a.x, b.y - a.y))};
    }
    function beginPinch() {
      setLocked(true); pan = null; clearPageTurn();
      // pause cancels inertia and any pending manual HD selection before a
      // second pointer can replace the panel's first pointer.
      players.forEach(player => player.pause());
      const center = geometry(), rect = stage.getBoundingClientRect();
      pinch = {...center, zoom,
        anchorX:(center.x - rect.left) / Math.max(1, rect.width),
        anchorY:(center.y - rect.top) / Math.max(1, rect.height)};
      for (const id of touches.keys()) capture(id);
    }
    function consume(event) { event.preventDefault(); event.stopImmediatePropagation(); }
    function reset() {
      const ids = [...touches.keys()];
      touches.clear(); pinch = pan = null; setLocked(false);
      for (const id of ids) {
        try { if (viewport.hasPointerCapture(id)) viewport.releasePointerCapture(id); } catch (_) {}
      }
    }
    viewport.addEventListener('pointerdown', event => {
      if (event.pointerType !== 'touch' || !loaded || document.querySelector('dialog[open]')) return;
      touches.set(event.pointerId, point(event));
      if (touches.size >= 2) {
        if (!locked || touches.size === 2 && !pinch) beginPinch();
        else capture(event.pointerId);
        consume(event); return;
      }
      // Outside an orbitable panel, one finger still scrolls a zoomed page.
      if (!event.target.closest('.panel-host:not([data-background-only="true"])') || document.body.dataset.orbitInput === 'gyro') {
        pan = {id:event.pointerId, ...point(event), left:viewport.scrollLeft, top:viewport.scrollTop};
        capture(event.pointerId);
      }
    }, {capture:true, passive:false});
    window.addEventListener('pointermove', event => {
      if (event.pointerType !== 'touch' || !touches.has(event.pointerId)) return;
      touches.set(event.pointerId, point(event));
      if (locked) {
        if (touches.size === 2 && pinch) {
          const center = geometry();
          zoom = Math.max(1, Math.min(5, pinch.zoom * center.distance / pinch.distance));
          fitting = zoom <= 1; sizeStage();
          const rect = stage.getBoundingClientRect();
          viewport.scrollLeft += rect.left + pinch.anchorX * rect.width - center.x;
          viewport.scrollTop += rect.top + pinch.anchorY * rect.height - center.y;
        }
        consume(event);
      } else if (pan?.id === event.pointerId) {
        viewport.scrollLeft = pan.left - (event.clientX - pan.x);
        viewport.scrollTop = pan.top - (event.clientY - pan.y);
        event.preventDefault();
      }
    }, {capture:true, passive:false});
    function finish(event) {
      if (event.pointerType !== 'touch' || !touches.has(event.pointerId)) return;
      const wasLocked = locked;
      touches.delete(event.pointerId);
      if (pan?.id === event.pointerId) pan = null;
      if (wasLocked) {
        ignoreClickUntil = performance.now() + 350;
        // Do not hand the last finger back to panel orbit. A new one-finger
        // orbit may begin only after the whole multi-touch gesture has ended.
        pinch = touches.size === 2 ? {...geometry(), zoom,
          anchorX:0, anchorY:0} : null;
        if (pinch) {
          const rect = stage.getBoundingClientRect();
          pinch.anchorX = (pinch.x - rect.left) / Math.max(1, rect.width);
          pinch.anchorY = (pinch.y - rect.top) / Math.max(1, rect.height);
        }
        if (!touches.size) setLocked(false);
        consume(event);
      }
    }
    window.addEventListener('pointerup', finish, {capture:true, passive:false});
    window.addEventListener('pointercancel', finish, {capture:true, passive:false});
    // A lost capture is a cancellation, including browser interruption. A
    // pointer captured by a panel is deliberately transferred at pinch start.
    viewport.addEventListener('lostpointercapture', event => {
      if (event.target === viewport) finish(event);
    }, true);
    for (const type of ['click','dblclick']) viewport.addEventListener(type, event => {
      if (locked || performance.now() < ignoreClickUntil) consume(event);
    }, true);
    document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
    window.addEventListener('pagehide', reset);
    return Object.freeze({reset});
  }
  const pageGesture = createPageGesture();

  const directoryThumbnails = {2:'ui-assets/directory/page-002-5ea06412b259.webp',36:'ui-assets/directory/page-036-7940008d7245.webp',60:'ui-assets/directory/page-060-c01a4d9ddf0e.webp'};
  // A cached earlier HTML shell can load the current shared script URL.
  // Optional new controls must never prevent its existing reader from starting.
  if ($('share-page') && $('report-dialog') && $('share-dialog')) {
  const readerToolsText = (key, values = {}) => window.ComicLocaleUI?.t(key, values) || String({
    sharePage:'分享这一页',shareCopied:'本页链接已复制',shareCancelled:'已取消分享',copyLink:'复制链接',copyManual:'请选中下面的内容并复制',copySuccess:'已复制',reportTitle:'记录本页问题',reportNote:'这份记录留在你的浏览器里。复制后，可自行发送给制作方。',reportPage:'页码',reportLanguage:'语言',reportReady:'可互动画面',reportNetwork:'网络',reportCategory:'问题类型',reportDescription:'补充说明（选填）',reportLink:'本页链接',reportEmpty:'无',networkOnline:'在线',networkOffline:'离线',networkUnknown:'未提供连接类型',networkSaveData:'节省流量已开启',issueLoading:'加载速度',issueRotation:'转动与操作',issueText:'文字与翻译',issueOther:'其他',reportCopy:'复制问题记录'
  }[key] || key).replace(/\{(\w+)\}/g,(_,name)=>values[name] == null ? '' : String(values[name]));
  function currentPageURL() {
    const url = new URL(location.href);
    url.hash = `page=${current}`;
    url.searchParams.set('lang', $('reading-language').value);
    return url.href;
  }
  let toolsStatusTimer = null, statusKey = '';
  function toolsStatus(key) {
    statusKey = key;
    const output = $('reader-tool-status');
    output.hidden = !key;
    output.textContent = key ? readerToolsText(key) : '';
    clearTimeout(toolsStatusTimer);
    if (key) toolsStatusTimer = setTimeout(() => { output.hidden = true; statusKey = ''; }, 5000);
  }
  async function writeClipboard(value) {
    if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(value);
  }
  function readerToolsMessage(id, key) {
    $(id).dataset.messageKey = key;
    $(id).textContent = key ? readerToolsText(key) : '';
  }
  function manualShare(value) {
    $('share-link').value = value;
    readerToolsMessage('share-copy-status', 'copyManual');
    dialogOpen($('share-dialog'), $('share-page'));
    $('share-link').focus(); $('share-link').select();
  }
  async function copyPageLink(value) {
    try { await writeClipboard(value); toolsStatus('shareCopied'); }
    catch (_) { manualShare(value); }
  }
  $('share-page').addEventListener('click', async event => {
    if (!event.isTrusted) return;
    const url = currentPageURL();
    if (typeof navigator.share === 'function') {
      try {
        // Invoke before any await so the system share sheet keeps user activation.
        await navigator.share({title:'Just Cuz', url});
        return;
      } catch (error) {
        if (error?.name === 'AbortError') { toolsStatus('shareCancelled'); return; }
      }
    }
    await copyPageLink(url);
  });
  $('copy-share-link').addEventListener('click', async () => {
    try { await writeClipboard($('share-link').value); readerToolsMessage('share-copy-status', 'copySuccess'); }
    catch (_) {
      readerToolsMessage('share-copy-status', 'copyManual');
      $('share-link').focus(); $('share-link').select();
    }
  });
  $('close-share').addEventListener('click', () => $('share-dialog').close());
  const issueKeys = {loading:'issueLoading',rotation:'issueRotation',text:'issueText',other:'issueOther'};
  function reportText() {
    const hosts = [...panelLayer.querySelectorAll('.panel-host:not([data-background-only="true"])')];
    const count = hosts.filter(host => host.dataset.interactionState === 'ready').length;
    const language = $('reading-language').selectedOptions[0]?.textContent || $('reading-language').value;
    const connection = navigator.connection;
    const network = [readerToolsText(navigator.onLine === false ? 'networkOffline' : 'networkOnline'),
      connection?.effectiveType || readerToolsText('networkUnknown'),
      connection?.saveData ? readerToolsText('networkSaveData') : ''].filter(Boolean).join(' · ');
    const field = (key,value) => `${readerToolsText(key)}: ${value}`;
    return ['Just Cuz',field('reportPage',`${current} / ${pages.length}`),field('reportLanguage',language),
      field('reportCategory',readerToolsText(issueKeys[$('report-category').value] || 'issueOther')),
      field('reportDescription',$('report-description').value.trim() || readerToolsText('reportEmpty')),
      field('reportReady',`${count} / ${hosts.length}`),field('reportNetwork',network),field('reportLink',currentPageURL())].join('\n');
  }
  function refreshReaderTools() {
    if (statusKey) $('reader-tool-status').textContent = readerToolsText(statusKey);
    for (const id of ['share-copy-status','report-copy-status']) {
      const key = $(id).dataset.messageKey;
      if (key) $(id).textContent = readerToolsText(key);
    }
    if ($('report-dialog').open) {
      const value = reportText();
      if ($('report-preview').value !== value) $('report-preview').value = value;
    }
  }
  $('report-page').addEventListener('click', () => {
    $('report-category').value = 'loading'; $('report-description').value = '';
    readerToolsMessage('report-copy-status', '');
    $('report-preview').value = reportText();
    dialogOpen($('report-dialog'), $('report-page'));
    $('report-category').focus();
  });
  $('report-category').addEventListener('change', refreshReaderTools);
  $('report-description').addEventListener('input', refreshReaderTools);
  $('copy-report').addEventListener('click', async () => {
    const value = reportText(); $('report-preview').value = value;
    try { await writeClipboard(value); readerToolsMessage('report-copy-status', 'copySuccess'); }
    catch (_) {
      readerToolsMessage('report-copy-status', 'copyManual');
      $('report-preview').focus(); $('report-preview').select();
    }
  });
  $('close-report').addEventListener('click', () => $('report-dialog').close());
  window.ComicReaderTools = Object.freeze({refresh:refreshReaderTools});
  }

  // Chapter-local positions supplement the collection position and never override a URL.
  const chapterBookmarks = (() => {
    const key = ch => `just-cuz-collection-chapter-${ch.id}-page-v1`;
    const languages = ['zh','en','ja','ko','ru','fr'];
    const labels = {
      resume:['继续第 {n} 页','Continue · page {n}','{n} ページから再開','{n}페이지부터 계속','Продолжить · стр. {n}','Reprendre · page {n}'],
      start:['从头阅读','From the start','最初から読む','처음부터 읽기','С начала','Depuis le début'],
      quiet:['自动淡化工具','Fade tools while reading','読書中にツールを薄くする','읽는 동안 도구 흐리게','Приглушать инструменты при чтении','Estomper les outils pendant la lecture']
    };
    function text(name,n) {
      const lang = window.ComicLocaleUI?.language || $('reading-language')?.value || 'zh';
      return labels[name][Math.max(0,languages.indexOf(lang))].replace('{n}',String(n));
    }
    function saved(ch) {
      if (ch.id === 'collection-cover') return null;
      try { const raw = localStorage.getItem(key(ch)); const n = Number(raw); return raw !== null && Number.isInteger(n) && n >= ch.start && n <= ch.end ? n : null; } catch (_) { return null; }
    }
    function resume(ch) { return saved(ch) ?? ch.start; }
    function refresh() {
      for (const ch of book.chapters) {
        const card = document.querySelector(`.directory-story[data-chapter="${ch.id}"]`);
        const n = saved(ch), label = n === null ? text('start') : text('resume',n);
        if (card) {
          let note = card.querySelector('.chapter-continue');
          if (!note) { note = document.createElement('span'); note.className = 'chapter-continue'; card.append(note); }
          note.textContent = label;
          card.setAttribute('aria-label',`${card.querySelector('.directory-story-title')?.textContent || ch.title} · ${label}`);
        }
        const start = document.querySelector(`.chapter-from-start[data-chapter="${ch.id}"]`);
        if (start) start.textContent = text('start');
      }
      const control = $('automatic-quiet-tools');
      if (control) control.textContent = text('quiet');
    }
    document.addEventListener('comic-page-original-ready',event => {
      const n = Number(event.detail?.readingPage), ch = chapterOf(n), page = pages[n-1];
      // The application emits this only after the original has loaded successfully.
      if (!ch || ch.id === 'collection-cover' || !page || n !== current || event.detail.sourcePageSha256 !== page.sha256) return;
      try { localStorage.setItem(key(ch),String(n)); } catch (_) {}
      refresh();
    });
    window.ComicReadingDetails = Object.freeze({refresh});
    return {resume,refresh,text};
  })();


  book.chapters.forEach(ch => {
    if (directoryThumbnails[ch.start] && $('directory-story-cards')) {
      const card = document.createElement('button'); card.type = 'button';
      card.className = 'directory-story'; card.dataset.chapter = ch.id;
      card.dataset.start = String(ch.start);
      const cover = document.createElement('img'); cover.width = 96; cover.height = 120;
      cover.alt = ''; cover.decoding = 'async'; cover.fetchPriority = 'low';
      cover.dataset.thumbnailSource = directoryThumbnails[ch.start];
      const title = document.createElement('span'); title.className = 'directory-story-title'; title.textContent = ch.title;
      const range = document.createElement('span'); range.className = 'directory-story-range'; range.textContent = `${ch.start}–${ch.end}`;
      card.append(cover, title, range);
      card.addEventListener('click', () => { $('directory-dialog').close(); showPage(chapterBookmarks.resume(ch)); });
      const wrap = document.createElement('div'); wrap.className = 'directory-story-wrap';
      const start = document.createElement('button'); start.type = 'button'; start.className = 'chapter-from-start'; start.dataset.chapter = ch.id;
      start.addEventListener('click',() => { $('directory-dialog').close(); showPage(ch.start); });
      wrap.append(card,start); $('directory-story-cards').append(wrap);
    }
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
    const title = document.createElement('h3'); title.textContent = ch.title; section.append(title, grid); $('directory-content').append(section);
  });

  function dialogOpen(dialog, opener) {
    dialogs.set(dialog, opener || document.activeElement);
    if (!dialog.open) dialog.showModal();
  }
  for (const id of ['directory-dialog', 'original-dialog', 'panel-sources-dialog', 'book-about-dialog', 'share-dialog', 'report-dialog']) {
    const dialog = $(id);
    if (!dialog) continue;
    dialog.addEventListener('close', () => {
      if (id === 'panel-sources-dialog') clearSourceCrops();
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
    for (const cover of $('directory-story-cards')?.querySelectorAll('img[data-thumbnail-source]') || []) {
      if (!cover.getAttribute('src')) cover.src = cover.dataset.thumbnailSource;
    }
    for (const card of $('directory-story-cards')?.querySelectorAll('.directory-story') || []) {
      if (card.dataset.chapter === chapterOf(current)?.id) card.setAttribute('aria-current','location');
      else card.removeAttribute('aria-current');
    }
    document.querySelectorAll('.page-thumb').forEach(button => {
      if (Number(button.dataset.page) === current) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    dialogOpen($('directory-dialog'), $('open-directory'));
    const selected = document.querySelector(`.page-thumb[data-page="${current}"]`);
    const chapterCard = $('directory-story-cards')?.querySelector('.directory-story[aria-current="location"]');
    if (chapterCard) {
      $('directory-dialog').scrollTop = 0;
      chapterCard.focus({preventScroll:true});
    } else if (selected) { selected.scrollIntoView({block:'nearest'}); selected.focus({preventScroll:true}); }
  });
  $('close-directory').addEventListener('click', () => $('directory-dialog').close());
  $('close-original').addEventListener('click', () => $('original-dialog').close());
  $('book-about').addEventListener('click', () => dialogOpen($('book-about-dialog'), $('book-about')));
  $('close-book-about').addEventListener('click', () => $('book-about-dialog').close());
  function setFocusReading(value) {
    document.body.classList.toggle('reading-focus', value);
    $('focus-reading').setAttribute('aria-pressed', String(value));
    $('focus-reading').textContent = value ? '退出沉浸' : '沉浸阅读';
  }
  $('focus-reading').addEventListener('click', () => setFocusReading(!document.body.classList.contains('reading-focus')));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !document.querySelector('dialog[open]')) setFocusReading(false);
  });
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
    clearSourceCrops();
    const cropGeneration = sourceCropGeneration;
    sources.forEach((source, index) => {
      const card = document.createElement('figure'); card.className = 'panel-source-card';
      const caption = document.createElement('figcaption'); caption.className = 'panel-source-caption';
      const title = document.createElement('strong'); title.textContent = source.title;
      const state = document.createElement('span'); state.textContent = '原画裁切';
      caption.append(title, state);
      const wrap = document.createElement('div'); wrap.className = 'panel-source-image-wrap';
      const crop = document.createElement('img');
      let cropHandle = null;
      crop.width = source.width; crop.height = source.height; crop.decoding = 'async'; crop.draggable = false; crop.hidden = true;
      crop.alt = `Just Cuz · ${source.title} · 原图裁切`;
      const notice = document.createElement('p'); notice.className = 'panel-source-loading'; notice.setAttribute('role', 'status');
      const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = '重新打开'; retry.hidden = true;
      const footer = document.createElement('div'); footer.className = 'panel-source-footer';
      const pending = document.createElement('span'); const status = (page.panels || []).find(p => p.id === source.id); pending.textContent = status && ['passed','review-candidate'].includes(status.quality) ? '可以互动' : '保留完整原画';
      const save = document.createElement('a'); save.download = `Just-Cuz-第${current}页-第${index + 1}格.png`; save.textContent = '保存分格原画'; save.hidden = true;
      footer.append(pending, save);
      function unavailable() {
        crop.hidden = true; save.hidden = true; notice.hidden = false; retry.hidden = false;
        notice.textContent = '这一格暂时没有打开，请重新尝试。';
      }
      function openCrop() {
        crop.hidden = true; save.hidden = true; retry.hidden = true; notice.hidden = false;
        notice.textContent = '正在打开原图裁切…';
        if (cropHandle) { cropHandle.destroy(); sourceCropHandles.delete(cropHandle); }
        if (!window.ComicPagesOnly || !loaded || pages[current-1] !== page) { unavailable(); return; }
        cropHandle = window.ComicPagesOnly.createOriginalCrop(image, source.bounds, {
          onReady(url) {
            if (cropGeneration !== sourceCropGeneration || pages[current-1] !== page) return;
            save.href = url; crop.src = url;
          },
          onError() { if (cropGeneration === sourceCropGeneration) unavailable(); }
        });
        sourceCropHandles.add(cropHandle);
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
    const viewportW = viewport.clientWidth;
    const viewportH = viewport.clientHeight;
    const coverGutter = 32;
    const availableW = Math.max(1, viewportW - coverGutter);
    const availableH = Math.max(1, viewportH - coverGutter);
    fitScale = Math.min(availableW / page.width, availableH / page.height);
    const scale = fitScale * zoom;
    const width = Math.max(1, Math.round(page.width * scale));
    const height = Math.max(1, Math.round(page.height * scale));
    stage.style.width = `${width}px`; stage.style.height = `${height}px`;
    // Fit mode follows the viewport as translated controls/fonts reflow.
    // Fixed pixel extents are needed only for an intentionally zoomed page.
    inner.style.width = zoom <= 1 ? '100%' : `${Math.max(viewportW, width + coverGutter)}px`;
    inner.style.height = zoom <= 1 ? '100%' : `${Math.max(viewportH, height + coverGutter)}px`;
    $('zoom-level').textContent = fitting ? '适合整页' : `${Math.round(zoom * 100)}%`;
    $('zoom-out').disabled = zoom <= 1;
    $('zoom-in').disabled = zoom >= 5;
  }
  function setZoom(value, fit = false) {
    pageGesture.reset();
    clearPageTurn();
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
    const interrupted = hosts.some(host => host.dataset.loadingFailed === 'true');
    const pendingAngle = hosts.some(host => host.dataset.interactionState === 'ready' && host.dataset.anglePending === 'true');
    const demandOnly = window.OrbitFrameCache?.isDemandOnly();
    const warming = hosts.some(({dataset}) => {
      const fullPreview = dataset.previewReady === 'true' && Number(dataset.previewTotal) > 0
        && Number(dataset.previewLoaded) >= Number(dataset.previewTotal) && Number(dataset.previewFailed) === 0;
      return dataset.renderMode === 'frames' && Number(dataset.totalFrames) > Number(dataset.loadedFrames || 0)
        && !(demandOnly && fullPreview);
    });
    panelLayer.setAttribute('aria-busy', String(ready + failed < hosts.length));
    caption.dataset.state = failed || interrupted ? 'error' : ready === hosts.length && !pendingAngle ? 'ready' : 'loading';
    if (failed) {
      caption.textContent = ready ? `${ready} 个画面可以拖动，其他画面请重新准备` : '互动暂未打开，原画仍可阅读';
      if (retry) retry.hidden = false;
    } else if (interrupted) {
      caption.textContent = '部分环绕角度加载中断，原画和已打开的角度仍可查看。请重新准备。';
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
  document.addEventListener('comic-hd-budget-change', queuePanelStatus);
  if ($('retry-interaction')) $('retry-interaction').addEventListener('click', () => {
    window.ComicAssetDelivery?.retryFailed?.();
    // Recover only interrupted players. Healthy siblings keep their decoded
    // previews, selected angles and gesture state while that panel recovers.
    const recoveries = players.map(player => player.prepareFailedRetry?.()).filter(recover => typeof recover === 'function');
    // Dispose all interrupted consumers before replacing any shared frame store.
    recoveries.forEach(recover => recover());
    if (!recoveries.length && !panelLayer.querySelector('.panel-host')) showPage(current);
    else queuePanelStatus();
  });

  function clearPlayers() {
    window.OrbitFrameCache?.resetPageManualSelections?.();
    window.OrbitFrameCache?.setPagePreviewReady(false);
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
        const overrides = window.ComicPanelPlayer.regionMediaOverrides(panel,page) || [];
        const allIndependent = regions.every(region => overrides.some(item => item.region.id === region.id));
        // A page whose real paired scenes all have independent media no longer
        // downloads or reveals the obsolete parent-room backdrop.
        const sourceCloud=window.ComicPanelPlayer.sourceCloudPresentation(panel,page);
        const needsFrontBackdrop = !sourceCloud && !allIndependent && ['page-011-panel-01', 'page-014-panel-01', 'page-026-panel-01'].includes(panel.id);
        const activeChildren = new Set();
        const backdrop = needsFrontBackdrop ? window.ComicPanelPlayer.create(panel, page, panelLayer, panelControls, {backgroundOnly:true}) : null;
        if (backdrop) players.push(backdrop);
        regions.forEach(region => players.push(window.ComicPanelPlayer.create(overrides.find(item => item.region.id === region.id)?.panel || panel, page, panelLayer, panelControls, {
          region,
          onActivity:sourceCloud ? active=>window.ComicPanelPlayer.setSourceCloudActivity(panel,page,panelLayer,region.id,active) : backdrop && !overrides.some(item => item.region.id === region.id) ? active => {
            if (active) activeChildren.add(region.id); else activeChildren.delete(region.id);
            backdrop.setBackdropVisible(activeChildren.size > 0);
          } : undefined
        })));
        const fixedProtection = allIndependent && panel.id==='page-014-panel-01' ? null
          : window.ComicPanelPlayer.createFixedProtectionOverlay(panel, page, panelLayer);
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

  // This small paper tag is created by the runtime, including with cached HTML.
  // A pending page has no visible/accessible previous artwork under its number.
  let renderedPage = 0, navigationSnapshot = null;
  function createNavigationFeedback() {
    const style = document.createElement('style');
    style.id = 'reader-page-navigation-style';
    style.textContent = `
      #page-stage[data-navigation-state="loading"],#page-stage[data-navigation-state="error"] {
        background:var(--story-grain) left top / 160px 160px repeat,var(--binding-paper,#fffdf4);
      }
      #page-stage[data-navigation-state="loading"] > :is(#page-image,#panel-layer,#comic-translation-layer),
      #page-stage[data-navigation-state="error"] > :is(#page-image,#panel-layer,#comic-translation-layer) { visibility:hidden !important; }
      #page-navigation-feedback {
        position:absolute; z-index:15; top:17px; right:0; max-width:calc(100% - 24px);
        margin:0; padding:11px 17px 11px 19px; border:1px solid #ad966b; border-right:0;
        border-radius:6px 0 0 8px; background:var(--story-grain) left top / 90px 90px repeat,#fff0be;
        color:#4e432e; box-shadow:-2px 3px 0 #a28a5740;
        font-family:inherit; font-size:13px; font-weight:700; line-height:1.5;
        overflow-wrap:anywhere; pointer-events:none; transform-origin:left center;
      }
      #page-navigation-feedback:not([hidden]) { animation:book-target-tab 160ms ease-out both; }
      #page-navigation-feedback[hidden] { display:none !important; }
      @keyframes book-target-tab { from { transform:translateX(7px); } to { transform:translateX(0); } }
      @media(prefers-reduced-motion:reduce) { #page-navigation-feedback:not([hidden]) { animation:none; } }
    `;
    document.head.append(style);
    const tag = document.createElement('p');
    tag.id = 'page-navigation-feedback'; tag.hidden = true;
    tag.setAttribute('role','status'); tag.setAttribute('aria-live','polite'); tag.setAttribute('aria-atomic','true');
    stage.append(tag);
    const messages = {
      zh:['正在翻到第 {n} 页…','第 {n} 页尚未打开'],
      en:['Opening page {n}…','Page {n} could not open'],
      ja:['{n}ページを開いています…','{n}ページを開けませんでした'],
      ko:['{n}쪽을 여는 중…','{n}쪽을 열 수 없어요'],
      ru:['Открываем страницу {n}…','Страница {n} не открылась'],
      fr:['Ouverture de la page {n}…','La page {n} ne s’est pas ouverte']
    };
    let generation = 0, target = 0, phase = 'idle';
    function refresh(event) {
      if (phase === 'idle') return;
      const language = event?.detail?.language || window.ComicLocaleUI?.language || $('reading-language')?.value || 'zh';
      tag.textContent = (messages[language] || messages.en)[phase === 'error' ? 1 : 0].replace('{n}',target);
    }
    document.addEventListener('comic-language-change',refresh);
    return Object.freeze({
      begin(number, token, direction) {
        target = number; generation = token; phase = 'loading';
        stage.dataset.navigationState = phase; stage.dataset.targetPage = String(number);
        stage.dataset.navigationGeneration = String(token); stage.dataset.navigationDirection = direction;
        stage.setAttribute('aria-busy','true');
        refresh(); tag.hidden = false;
      },
      ready(token, number) {
        if (generation !== token) return;
        phase = 'idle'; tag.hidden = true; tag.textContent = '';
        stage.dataset.navigationState = 'ready'; stage.dataset.renderedPage = String(number);
        stage.removeAttribute('aria-busy');
      },
      error(token) {
        if (generation !== token) return;
        phase = 'error'; stage.dataset.navigationState = phase;
        stage.removeAttribute('aria-busy'); refresh(); tag.hidden = true;
      }
    });
  }
  const navigationFeedback = createNavigationFeedback();
  function cancelNavigationMotion() {
    clearPageTurn();
    navigationSnapshot?.remove(); navigationSnapshot = null;
  }
  window.addEventListener('resize',cancelNavigationMotion);
  window.matchMedia?.('(prefers-reduced-motion: reduce)').addEventListener?.('change',cancelNavigationMotion);

  let turningLeaf = null, turningHold = null, turningShadow = null, turningLettering = null, turnTimeout;

  function clearPageTurn() {
    clearTimeout(turnTimeout);
    if (turningLettering && turningLeaf?.contains(turningLettering)) stage.append(turningLettering);
    turningLeaf?.remove();
    turningHold?.remove();
    turningShadow?.remove();
    turningLeaf = turningHold = turningShadow = turningLettering = null;
  }

  function snapshotPage(source, copyLettering = true) {
    if (!source.complete || !source.naturalWidth) return null;
    const canvas = document.createElement('canvas');
    const scale = Math.min(window.devicePixelRatio || 1, 1.5, 750 / Math.max(1, stage.clientHeight));
    canvas.width = Math.max(1, Math.round(stage.clientWidth * scale));
    canvas.height = Math.max(1, Math.round(stage.clientHeight * scale));
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
    const sheet = document.createElement('div');
    sheet.className = 'book-turn-sheet';
    sheet.setAttribute('aria-hidden', 'true');
    sheet.inert = true;
    sheet.append(canvas);
    const lettering = copyLettering ? $('comic-translation-layer') : null;
    if (lettering && !lettering.hidden) {
      const copy = lettering.cloneNode(true);
      copy.removeAttribute('id');
      sheet.append(copy);
    }
    return sheet;
  }

  function capturePageTurn() {
    if (!loaded || image.hidden || zoom !== 1 || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return null;
    return snapshotPage(image);
  }

  function showPageTurn(previousSheet, direction, destinationImage) {
    if (!previousSheet || document.hidden || zoom !== 1 || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const back = direction === 'back';
    // Both actions share the same left binding. Going back unfolds the
    // destination leaf over the page we are leaving.
    const moving = back ? snapshotPage(destinationImage, false) : previousSheet;
    if (!moving) return;
    if (back) {
      turningHold = previousSheet;
      turningHold.classList.add('book-turn-hold');
      stage.append(turningHold);
      turningLettering = $('comic-translation-layer');
      if (turningLettering) moving.append(turningLettering);
    }
    const front = document.createElement('div');
    front.className = 'book-board-front';
    front.append(...moving.childNodes);
    const reverse = document.createElement('div');
    reverse.className = 'book-board-back';
    moving.append(front, reverse);
    for (const side of ['outer', 'top', 'bottom']) {
      const edge = document.createElement('div');
      edge.className = 'book-board-edge';
      edge.dataset.edge = side;
      moving.append(edge);
    }
    turningShadow = document.createElement('div');
    turningShadow.className = 'book-turn-shadow';
    turningShadow.dataset.direction = direction;
    turningShadow.setAttribute('aria-hidden', 'true');
    // Allow up to 11 px of projected overhang inside the 16 px book gutter.
    const depth = stage.clientWidth + 12;
    const perspective = Math.max(1800, depth * (1 + stage.clientHeight / 22));
    moving.style.setProperty('--board-perspective', perspective + 'px');
    turningLeaf = moving;
    moving.classList.add('book-turn-leaf');
    moving.dataset.direction = direction;
    const finish = event => {
      if ((!event || event.target === moving && !event.pseudoElement) && turningLeaf === moving) clearPageTurn();
    };
    moving.addEventListener('animationend', finish);
    moving.addEventListener('animationcancel', finish);
    stage.append(turningShadow, moving);
    turnTimeout = setTimeout(finish, 900);
  }

  function showPage(number) {
    number = Math.trunc(Number(number));
    if (!Number.isFinite(number) || number < 1 || number > pages.length) return;
    pageGesture.reset();
    clearPageTurn();
    const previousPage = current;
    const direction = number > (renderedPage || current) ? 'forward' : 'back';
    const previousSheet = number === renderedPage ? null : loaded ? capturePageTurn() : navigationSnapshot;
    navigationSnapshot = previousSheet;
    const page = pages[number - 1];
    window.ComicEarlySourceMasks?.cancelUnless(page.source, page.sha256);
    let artwork = window.ComicReadingArtwork?.(page.source,page.sha256) || page.source;
    const earlyReady = loadToken === 0 && window.ComicEarlyOriginal?.(page,artwork);
    if (typeof earlyReady === 'string') artwork = earlyReady;
    const warmedOriginal = originalWarmup.take(page, artwork);
    originalWarmup.navigate(number);
    current = number; loaded = false; const token = ++loadToken;
    navigationFeedback.begin(number, token, direction);
    document.dispatchEvent(new CustomEvent('comic-page-navigation-start', {detail:{pageIndex:number, previousPageIndex:previousPage, generation:token}}));
    if (frameConfigController) frameConfigController.abort();
    frameConfigController = new AbortController();
    const configSignal = frameConfigController.signal;
    if (imageLoader) { imageLoader.onload = null; imageLoader.onerror = null; imageLoader.removeAttribute('src'); }
    $('panel-sources-button').hidden = true;
    clearSourceCrops();
    if ($('panel-sources-dialog').open) $('panel-sources-dialog').close();
    clearPlayers(); image.hidden = !earlyReady;
    if ($('comic-translation-layer')) $('comic-translation-layer').hidden = true;
    $('page-loading').hidden = true; $('page-error').hidden = true;
    panelLayer.setAttribute('aria-busy', 'true');
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
    // The small current-page configuration can travel alongside the high-priority
    // original image. No player or angle resource starts before the original is visible.
    const modelReady = window.ComicPageModels?.ensure(page, configSignal);
    // The frame fetch and source model fetch may finish in either order.
    modelReady?.catch(() => {});
    const configReady = Promise.resolve().then(() => {
      if (token !== loadToken || configSignal.aborted) return null;
      if (!window.ComicPageFrames) throw new Error('Current page frame loader unavailable');
      return window.ComicPageFrames.ensure(page, configSignal, modelReady);
    }).then(config => ({config}), error => ({error}));
    let originalSettled = false;
    const originalReady = () => {
      if (token !== loadToken || configSignal.aborted || originalSettled) return;
      originalSettled = true;
      loaded = true; renderedPage = number;
      if (image.getAttribute('src') !== artwork) image.src = artwork;
      image.width = page.width; image.height = page.height;
      image.alt = `Just Cuz 第 ${current} 页完整原画`;
      image.hidden = false; $('page-loading').hidden = true;
      navigationFeedback.ready(token, number);
      document.dispatchEvent(new CustomEvent('comic-page-original-ready', {detail:{readingPage:current, sourcePage:page.sourcePage, sourcePageSha256:page.sha256}}));
      if (previousSheet === navigationSnapshot) showPageTurn(previousSheet, direction, imageLoader);
      navigationSnapshot = null;
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
      if (modelReady) modelReady.then(() => {
        if (token === loadToken && !configSignal.aborted) updatePanelSourcesButton(page);
      }).catch(() => {});
      else updatePanelSourcesButton(page);
      try { localStorage.setItem(readingPositionKey, String(current)); } catch (_) {}
      try { history.replaceState(null, '', `#page=${current}`); } catch (_) {}
    };
    if (earlyReady) {
      // Wait until the rest of the bundle has attached its page listeners.
      queueMicrotask(originalReady);
      return;
    }
    imageLoader = warmedOriginal || new Image();
    imageLoader.fetchPriority = 'high'; imageLoader.decoding = 'async';
    imageLoader.width = page.width; imageLoader.height = page.height;
    const failArtwork = () => {
      if (token !== loadToken || configSignal.aborted) return;
      if (artwork !== page.source) {
        artwork = page.source;
        imageLoader.src = artwork;
        return;
      }
      frameConfigController.abort();
      cancelNavigationMotion(); navigationFeedback.error(token);
      image.hidden = true; $('page-loading').hidden = true; $('page-error').hidden = false;
      panelLayer.setAttribute('aria-busy', 'false');
      $('page-caption').dataset.state = 'error';
      $('page-caption').textContent = '原页尚未打开';
    };
    imageLoader.onload = () => {
      if (token !== loadToken || configSignal.aborted) return;
      if (artwork !== page.source && (imageLoader.naturalWidth !== page.width || imageLoader.naturalHeight !== page.height)) {
        failArtwork();
        return;
      }
      originalReady();
    };
    imageLoader.onerror = failArtwork;
    if (warmedOriginal && imageLoader.complete) {
      if (imageLoader.naturalWidth === page.width && imageLoader.naturalHeight === page.height) queueMicrotask(originalReady);
      else failArtwork();
    } else if (!warmedOriginal) imageLoader.src = artwork;
  }
  $('prev-page').addEventListener('click', () => showPage(current - 1));
  $('next-page').addEventListener('click', () => showPage(current + 1));
  $('page-jump').addEventListener('submit', event => {
    event.preventDefault(); const field = $('page-number');
    if (!field.reportValidity()) return;
    showPage(field.value);
  });
  $('chapter-select').addEventListener('change', event => { const ch = book.chapters.find(ch => ch.start === Number(event.target.value)); if (ch) showPage(chapterBookmarks.resume(ch)); });
  $('retry-page').addEventListener('click', () => {
    window.ComicAssetDelivery?.retryFailed?.();
    showPage(current);
  });
  window.addEventListener('hashchange', () => {
    const match = location.hash.match(/^#page=(\d+)$/);
    if (match && Number(match[1]) !== current) showPage(Number(match[1]));
  });
  document.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || event.ctrlKey || event.altKey || event.metaKey || event.target.closest('input,select,textarea,button,.panel-host')) return;
    const actions = {ArrowLeft:() => showPage(current - 1), ArrowRight:() => showPage(current + 1), Home:() => showPage(1), End:() => showPage(pages.length), '+':() => setZoom(zoom * 1.4), '=':() => setZoom(zoom * 1.4), '-':() => setZoom(zoom / 1.4, zoom / 1.4 <= 1)};
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { players.forEach(player => player.pause()); cancelNavigationMotion(); } });
  window.addEventListener('pagehide', () => { players.forEach(player => player.pause()); cancelNavigationMotion(); clearSourceCrops(); if ($('panel-sources-dialog').open) $('panel-sources-dialog').close(); });
  $('book-count').textContent = `${pages.length} 页 · 含合集首页`;
  const verifiedSourceCount = Number.isInteger(book.verifiedSourcePanelCount) && book.verifiedSourcePanelCount >= 0 ? book.verifiedSourcePanelCount : pages.reduce((total, page) => total + verifiedPanelSources(page).length, 0);
  const sourcePanelTotal = Number.isInteger(book.primaryPanelCount) && book.primaryPanelCount > 0 ? book.primaryPanelCount : Number.isInteger(book.panelSourceInventoryTotal) && book.panelSourceInventoryTotal > 0 ? book.panelSourceInventoryTotal : null;
  $('source-panel-count').textContent = '独立拖动';
  const accepted = window.ComicPageModels ? book.verifiedDynamicPanelCount : pages.reduce((total, page) =>
    total + (page.panels || []).filter(panel => window.ComicPanelPlayer && window.ComicPanelPlayer.eligible(panel, page)).length, 0);
  $('dynamic-count').textContent = '双击还原';
  const complete = book.complete === true && accepted === sourcePanelTotal;
  document.querySelector('.stage-badge').textContent = complete ? '一起转转看！' : '一起读故事！';
  $('dynamic-note').textContent = '体验草稿：101 / 101 格已接入互动素材，画面仍在优化中。';
  let first = 1;
  const match = location.hash.match(/^#page=(\d+)$/);
  if (match) first = Number(match[1]);
  else {
    try {
      const saved = localStorage.getItem(readingPositionKey);
      // Each episode has an independent reading-position key.
      first = saved !== null ? Number(saved) || 1 : 1;
    } catch (_) {}
  }
  // Quiet chrome keeps its occupied space and all controls in the tab order.
  (() => {
    const storageKey = 'just-cuz-collection-quiet-tools-v1';
    const control = document.createElement('button'); control.id = 'automatic-quiet-tools'; control.type = 'button';
    $('focus-reading')?.after(control);
    let enabled = true, timer = null;
    const pointers = new Set();
    try { enabled = localStorage.getItem(storageKey) !== 'off'; } catch (_) {}
    function obstructed() {
      const active = document.activeElement;
      return !enabled || document.hidden || pointers.size > 0
        || !!document.querySelector('dialog[open],details.reader-tools[open]')
        || !image.getAttribute('src') || image.hidden || !$('page-loading').hidden || !$('page-error').hidden
        || $('page-caption').dataset.state !== 'ready' || panelLayer.getAttribute('aria-busy') === 'true'
        || !!active?.closest('.book-header,.reader-toolbar,.reader-actions,footer');
    }
    function arm() {
      clearTimeout(timer); timer = null;
      if (!obstructed()) timer = setTimeout(() => { timer = null; if (!obstructed()) document.body.classList.add('reading-tools-quiet'); },5000);
    }
    function wake() { document.body.classList.remove('reading-tools-quiet'); arm(); }
    function state() { control.setAttribute('aria-pressed',String(enabled)); chapterBookmarks.refresh(); wake(); }
    control.addEventListener('click',() => { enabled = !enabled; try {localStorage.setItem(storageKey,enabled ? 'on' : 'off');} catch (_) {} state(); });
    document.addEventListener('pointerdown',event => { pointers.add(event.pointerId); wake(); },{capture:true,passive:true});
    const finish = event => { pointers.delete(event.pointerId); wake(); };
    for (const name of ['pointerup','pointercancel','lostpointercapture']) document.addEventListener(name,finish,{capture:true,passive:true});
    for (const name of ['pointermove','keydown','focusin','focusout','wheel']) document.addEventListener(name,wake,{capture:true,passive:true});
    for (const name of ['comic-page-navigation-start','comic-page-original-ready','comic-page-previews-ready','comic-panel-status','visibilitychange']) document.addEventListener(name,wake);
    for (const details of document.querySelectorAll('details.reader-tools')) details.addEventListener('toggle',wake);
    const observer = new MutationObserver(wake);
    for (const [element,attributes] of [[panelLayer,['aria-busy']],[$('page-caption'),['data-state']],[$('page-error'),['hidden']],[$('page-loading'),['hidden']]]) {
      if (element) observer.observe(element,{attributes:true,attributeFilter:attributes});
    }
    for (const dialog of document.querySelectorAll('dialog')) observer.observe(dialog,{attributes:true,attributeFilter:['open']});
    window.addEventListener('pagehide',() => { clearTimeout(timer); timer = null; document.body.classList.remove('reading-tools-quiet'); pointers.clear(); });
    window.addEventListener('pageshow',wake);
    state();
  })();

  showPage(Math.min(pages.length, Math.max(1, first)));
})();
