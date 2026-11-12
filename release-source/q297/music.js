(() => {
  'use strict';
  const audio=document.getElementById('background-music'),toggle=document.getElementById('music-toggle'),volume=document.getElementById('music-volume'),status=document.getElementById('music-status');
  if(!audio||!toggle||!volume||!status)return;
  let track=0,loadedTrack=0,wanted=true,blocked=false,failed=false,attempt=0,deferred=null,transition=0,frame=0,level=.3;
  const key=suffix=>`just-cuz-collection-music-${track}-${suffix}`;
  function remember(k,v){try{localStorage.setItem(k,v);}catch(_){}}
  function render(){const playing=wanted&&!audio.paused&&!failed;toggle.textContent=playing?'♫ 音乐已开启':blocked?'♫ 点击开启音乐':'♫ 开启音乐';toggle.setAttribute('aria-pressed',String(playing));toggle.setAttribute('aria-label',playing?'暂停背景音乐':'开启背景音乐');status.textContent=failed?'音乐暂时无法打开':playing?'循环播放中':blocked?'点一下页面即可播放':'音乐已暂停';}
  function clearDeferred(){clearTimeout(deferred);deferred=null;}
  function cancelFade(){++transition;cancelAnimationFrame(frame);frame=0;++attempt;}
  function fade(from,to,duration,token,done){
    const started=performance.now();
    function step(now){
      if(token!==transition)return;
      const progress=Math.min(1,Math.max(0,(now-started)/duration));
      audio.volume=Math.max(0,Math.min(1,from+(to-from)*progress));
      if(progress<1)frame=requestAnimationFrame(step);else{frame=0;done?.();}
    }
    frame=requestAnimationFrame(step);
  }
  async function start(fadeIn=false){
    clearDeferred();
    if(!wanted||failed)return;
    const token=++attempt,version=transition;
    if(loadedTrack!==track){audio.pause();audio.src=`audio/episode-0${track}-background-web.m4a`;loadedTrack=track;}
    audio.loop=true;audio.volume=fadeIn?0:level;
    try{
      await audio.play();
      if(token!==attempt||version!==transition)return;
      blocked=false;
      if(fadeIn)fade(audio.volume,level,320,version);
    }catch(error){
      if(token!==attempt||version!==transition)return;
      blocked=error.name==='NotAllowedError';failed=!blocked&&error.name!=='AbortError';audio.volume=level;
    }
    if(token===attempt&&version===transition)render();
  }
  function select(sourcePage){
    const next=sourcePage>=60?3:sourcePage>=36?2:1;
    if(next===track)return;
    const playing=!audio.paused;
    clearDeferred();cancelFade();
    track=next;wanted=true;blocked=false;failed=false;
    let savedLevel=30;
    try{
      wanted=localStorage.getItem(key('enabled'))!=='off';
      const saved=localStorage.getItem(key('volume'));
      if(saved!==null&&Number.isFinite(Number(saved)))savedLevel=Math.max(0,Math.min(100,Number(saved)));
    }catch(_){}
    volume.value=String(savedLevel);level=savedLevel/100;
    const version=transition;
    if(playing){
      // One audio node: the previous chapter becomes silent before the next source is set.
      fade(audio.volume,0,240,version,()=>{audio.pause();if(wanted)start(true);else{audio.volume=level;render();}});
    }else{
      audio.volume=level;
      if(wanted)deferred=setTimeout(()=>start(),8000);
    }
    render();
  }
  document.addEventListener('comic-page-previews-ready',()=>{if(deferred!==null)start();});
  document.addEventListener('comic-page-original-ready',event=>select(event.detail.sourcePage));
  toggle.addEventListener('click',()=>{
    const pause=wanted&&!audio.paused;
    clearDeferred();cancelFade();
    if(pause){wanted=false;blocked=false;audio.pause();audio.volume=level;remember(key('enabled'),'off');render();}
    else{wanted=true;failed=false;remember(key('enabled'),'on');start();}
  });
  volume.addEventListener('input',()=>{
    const playing=!audio.paused;cancelFade();
    level=Math.max(0,Math.min(1,Number(volume.value)/100));audio.volume=level;remember(key('volume'),volume.value);
    if(playing&&wanted&&loadedTrack!==track)start();
    else if(!wanted)audio.pause();
  });
  function gesture(event){if(event.isTrusted&&!event.target.closest('.music-controls')&&wanted&&(blocked||deferred!==null)&&!failed)start();}
  document.addEventListener('pointerdown',gesture,{passive:true});document.addEventListener('keydown',gesture);
  for(const event of ['play','pause','volumechange'])audio.addEventListener(event,render);
  audio.addEventListener('error',()=>{if(loadedTrack===track){failed=true;blocked=false;cancelFade();render();}});
  window.addEventListener('pagehide',()=>{clearDeferred();cancelFade();audio.pause();});
  select(Number((location.hash.match(/^#page=(\d+)$/)||[])[1])||1);
})();
