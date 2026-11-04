(() => {
  'use strict';
  const audio=document.getElementById('background-music'),toggle=document.getElementById('music-toggle'),volume=document.getElementById('music-volume'),status=document.getElementById('music-status');
  if(!audio||!toggle||!volume||!status)return;
  let track=0,wanted=true,blocked=false,failed=false,attempt=0,pendingWanted=null,pendingVolume=null;
  const key=suffix=>`just-cuz-collection-music-${track}-${suffix}`;
  function remember(k,v){try{localStorage.setItem(k,v);}catch(_){}}
  function render(){if(!track){toggle.textContent='♫ 开启音乐';toggle.setAttribute('aria-pressed',String(wanted));toggle.setAttribute('aria-label',wanted?'暂停背景音乐':'开启背景音乐');status.textContent=wanted?'正在准备音乐':'音乐已暂停';return;}const playing=!audio.paused&&!failed;toggle.textContent=playing?'♫ 音乐已开启':blocked?'♫ 点击开启音乐':'♫ 开启音乐';toggle.setAttribute('aria-pressed',String(playing));toggle.setAttribute('aria-label',playing?'暂停背景音乐':'开启背景音乐');status.textContent=failed?'音乐暂时无法打开':playing?'循环播放中':blocked?'点一下页面即可播放':'音乐已暂停';}
  async function start(){if(!track||!wanted||failed)return;const token=++attempt;try{await audio.play();if(token===attempt)blocked=false;}catch(error){if(token!==attempt)return;blocked=error.name==='NotAllowedError';failed=!blocked&&error.name!=='AbortError';}if(token===attempt)render();}
  function select(sourcePage){const next=sourcePage>=60?3:sourcePage>=36?2:1;if(next===track)return;const first=!track;++attempt;audio.pause();track=next;wanted=true;blocked=false;failed=false;let level=30;try{wanted=localStorage.getItem(key('enabled'))!=='off';const saved=localStorage.getItem(key('volume'));if(saved!==null&&Number.isFinite(Number(saved)))level=Math.max(0,Math.min(100,Number(saved)));}catch(_){}if(first&&pendingWanted!==null){wanted=pendingWanted;remember(key('enabled'),wanted?'on':'off');}if(first&&pendingVolume!==null){level=pendingVolume;remember(key('volume'),String(level));}pendingWanted=null;pendingVolume=null;volume.value=String(level);audio.volume=level/100;audio.src=`audio/episode-0${track}-background-web.m4a`;audio.loop=true;audio.load();render();if(wanted)start();}
  document.addEventListener('comic-page-original-ready',event=>select(event.detail.sourcePage));
  toggle.addEventListener('click',()=>{if(!track){pendingWanted=wanted=!wanted;render();return;}if(!audio.paused){wanted=false;++attempt;audio.pause();remember(key('enabled'),'off');render();}else{wanted=true;failed=false;remember(key('enabled'),'on');start();}});
  volume.addEventListener('input',()=>{audio.volume=Number(volume.value)/100;if(!track){pendingVolume=Number(volume.value);return;}remember(key('volume'),volume.value);});
  function gesture(event){if(event.isTrusted&&!event.target.closest('.music-controls')&&wanted&&blocked&&!failed)start();}
  document.addEventListener('pointerdown',gesture,{passive:true});document.addEventListener('keydown',gesture);
  for(const event of ['play','pause','volumechange'])audio.addEventListener(event,render);
  audio.addEventListener('error',()=>{failed=true;blocked=false;render();});
  // The reader resolves hash/saved position and confirms its original image first.
  // Waiting for that event avoids fetching or playing a guessed episode track.
  render();
})();
