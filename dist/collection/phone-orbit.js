(() => {
  'use strict';
  const button = document.getElementById('orbit-input');
  const status = document.getElementById('orbit-input-status');
  const layer = document.getElementById('panel-layer');
  if (!button || !status || !layer) return;

  const mobile = matchMedia('(pointer:coarse) and (max-width:1024px)');
  const strings = {
    zh:['手机转动','切回触控','正在等待手机方向数据…','转动手机 · 本页一起转','无法读取手机方向，已切回触控','未授予手机方向权限，已切回触控'],
    en:['Turn phone','Switch to touch','Waiting for phone orientation…','Turn your phone to rotate this page','Orientation unavailable. Touch is active.','Orientation permission denied. Touch is active.'],
    ja:['端末で回す','タッチに戻す','端末の向きを取得中…','端末を回すと全コマが回転','向きを取得できません。タッチに戻しました。','向きの許可がありません。タッチに戻しました。'],
    ko:['휴대폰으로 회전','터치로 전환','휴대폰 방향을 확인 중…','휴대폰을 돌리면 이 페이지가 회전해요','방향 정보를 읽을 수 없어 터치로 전환했어요','방향 권한이 없어 터치로 전환했어요'],
    ru:['Поворот телефона','Вернуться к касанию','Ожидание ориентации телефона…','Поворачивайте телефон, чтобы вращать кадры','Датчик недоступен. Включён сенсорный режим.','Доступ к датчику запрещён. Включён сенсорный режим.'],
    fr:['Tourner le téléphone','Revenir au tactile','Attente de l’orientation du téléphone…','Tournez le téléphone pour faire pivoter les cases','Orientation indisponible. Mode tactile activé.','Autorisation refusée. Mode tactile activé.'],
  };
  let mode = 'touch', reason = null, attempt = 0, timeout = 0;
  let epoch = 0, sample = null, pending = 0, frame = 0, lastDraw = 0;
  let listening = false, dialogOpen = false;

  function render() {
    const language = window.ComicLocaleUI?.language || document.getElementById('reading-language')?.value || 'zh';
    const text = strings[language] || strings.en;
    const active = mode === 'gyro';
    button.hidden = !mobile.matches;
    button.textContent = text[active || mode === 'waiting' ? 1 : 0];
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-busy', String(mode === 'waiting'));
    status.hidden = !mobile.matches || (mode === 'touch' && reason === null);
    status.textContent = mode === 'waiting' ? text[2] : active ? text[3] : reason === null ? '' : text[reason];
    const input = active ? 'gyro' : 'touch';
    if (document.body.dataset.orbitInput !== input) {
      document.body.dataset.orbitInput = input;
      document.dispatchEvent(new Event('comic-orbit-input-change'));
    }
  }

  function rebase() {
    epoch++;
    sample = null;
    pending = 0;
    lastDraw = 0;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  }

  function stop(message = null) {
    attempt++;
    if (listening) window.removeEventListener('deviceorientation', orientation);
    listening = false;
    clearTimeout(timeout);
    rebase();
    mode = 'touch';
    reason = message;
    render();
  }

  function heading({alpha,beta,gamma}) {
    if (!Number.isFinite(alpha)) return null;
    if (!Number.isFinite(beta) || !Number.isFinite(gamma)) return {angle:alpha, flat:true};
    const rad = Math.PI / 180, a = alpha * rad, b = beta * rad, g = gamma * rad;
    // The screen normal's horizontal projection is invariant to rolling the phone in its own plane.
    const x = Math.cos(a) * Math.sin(g) + Math.sin(a) * Math.sin(b) * Math.cos(g);
    const y = Math.sin(a) * Math.sin(g) - Math.cos(a) * Math.sin(b) * Math.cos(g);
    const flat = Math.hypot(x, y) < (sample?.flat ? .32 : .20);
    return {angle:flat ? alpha : Math.atan2(x, -y) / rad, flat};
  }

  function dispatch(delta) {
    const input = {epoch, delta};
    for (const host of layer.querySelectorAll('.panel-host[data-interaction-state="ready"]:not([data-background-only="true"])')) {
      host.dispatchEvent(new CustomEvent('comic-phone-angle', {detail:input}));
    }
  }

  function draw(now) {
    frame = 0;
    if (mode !== 'gyro' || document.hidden || dialogOpen) { pending = 0; return; }
    if (now - lastDraw < 40) { frame = requestAnimationFrame(draw); return; }
    if (Math.abs(pending) < .18) { pending = 0; return; }
    lastDraw = now;
    const delta = Math.abs(pending) < .38 ? pending : pending * .56;
    pending -= delta;
    dispatch(delta);
    if (Math.abs(pending) >= .18) frame = requestAnimationFrame(draw);
  }

  function orientation(event) {
    if (document.hidden || dialogOpen) return;
    const next = heading(event);
    if (!next) return;
    if (mode === 'waiting') {
      clearTimeout(timeout);
      mode = 'gyro';
      render();
      dispatch(0);
    }
    if (mode !== 'gyro') return;
    const previous = sample;
    sample = next;
    if (!previous || next.flat !== previous.flat) return;
    const degrees = ((next.angle - previous.angle + 540) % 360) - 180;
    if (Math.abs(degrees) > 55) return;
    pending += degrees * .42;
    if (!frame && Math.abs(pending) >= .18) frame = requestAnimationFrame(draw);
  }

  button.addEventListener('click', async () => {
    if (mode !== 'touch') { stop(); return; }
    const sensor = window.DeviceOrientationEvent;
    if (!window.isSecureContext || !sensor) { stop(4); return; }
    const request = ++attempt;
    mode = 'waiting';
    reason = null;
    rebase();
    render();
    try {
      if (typeof sensor.requestPermission === 'function' && await sensor.requestPermission() !== 'granted') {
        if (request === attempt) stop(5);
        return;
      }
    } catch (_) { if (request === attempt) stop(5); return; }
    if (request !== attempt) return;
    listening = true;
    window.addEventListener('deviceorientation', orientation);
    timeout = setTimeout(() => { if (mode === 'waiting') stop(4); }, 2800);
  });

  function syncDialog() {
    const open = !!document.querySelector('dialog[open]');
    if (open === dialogOpen) return;
    dialogOpen = open;
    rebase();
  }
  const dialogs = new MutationObserver(syncDialog);
  for (const dialog of document.querySelectorAll('dialog')) dialogs.observe(dialog, {attributes:true,attributeFilter:['open']});
  document.addEventListener('comic-page-original-ready', rebase);
  document.addEventListener('visibilitychange', rebase);
  document.addEventListener('comic-language-change', render);
  window.addEventListener('orientationchange', rebase);
  screen.orientation?.addEventListener('change', rebase);
  window.addEventListener('pagehide', () => stop());
  mobile.addEventListener('change', () => { if (!mobile.matches) stop(); else render(); });
  render();
})();
