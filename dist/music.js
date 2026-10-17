(() => {
  'use strict';
  const audio = document.getElementById('background-music');
  const toggle = document.getElementById('music-toggle');
  const volume = document.getElementById('music-volume');
  const status = document.getElementById('music-status');
  if (!audio || !toggle || !volume || !status) return;
  const preferenceKey = 'just-cuz-episode1-music';
  const volumeKey = 'just-cuz-episode1-music-volume';
  let wanted = true, blocked = false, failed = false, starting = false;
  try {
    wanted = localStorage.getItem(preferenceKey) !== 'off';
    const saved = localStorage.getItem(volumeKey);
    if (saved !== null && Number.isFinite(Number(saved))) volume.value = String(Math.min(100, Math.max(0, Number(saved))));
  } catch (_) {}
  audio.loop = true;
  audio.volume = Number(volume.value) / 100;
  function remember(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  function render() {
    const playing = !audio.paused && !failed;
    toggle.textContent = playing ? '♫ 音乐已开启' : blocked ? '♫ 点击开启音乐' : '♫ 开启音乐';
    toggle.setAttribute('aria-label', playing ? '暂停背景音乐' : '开启背景音乐');
    toggle.setAttribute('aria-pressed', String(playing));
    status.textContent = failed ? '音乐暂时无法打开' : playing ? (audio.volume === 0 ? '音量为零' : '循环播放中') : blocked ? '点一下页面即可播放' : '音乐已暂停';
    volume.setAttribute('aria-valuetext', `${Math.round(audio.volume * 100)}%`);
  }
  async function start() {
    if (starting || failed || !wanted) return;
    starting = true;
    try {
      await audio.play();
      blocked = false;
    } catch (error) {
      blocked = error && error.name === 'NotAllowedError';
      failed = !blocked && !(error && error.name === 'AbortError');
    } finally { starting = false; render(); }
  }
  toggle.addEventListener('click', () => {
    if (!audio.paused) {
      wanted = false; blocked = false; audio.pause(); remember(preferenceKey, 'off'); render();
    } else {
      wanted = true; failed = false; remember(preferenceKey, 'on'); start();
    }
  });
  volume.addEventListener('input', () => {
    audio.volume = Number(volume.value) / 100;
    remember(volumeKey, volume.value);
    render();
  });
  function firstInteraction(event) {
    if (!event.isTrusted || event.target.closest('.music-controls') || !wanted || !blocked || failed) return;
    start();
  }
  // Audible autoplay can be denied by the browser. Retry only during a real reading gesture.
  document.addEventListener('pointerdown', firstInteraction, {capture:true});
  document.addEventListener('keydown', firstInteraction, {capture:true});
  audio.addEventListener('play', render);
  audio.addEventListener('pause', render);
  audio.addEventListener('volumechange', render);
  audio.addEventListener('error', () => { failed = true; blocked = false; render(); });
  render();
  if (wanted) start();
})();
