(() => {
 const preview=document.getElementById('menu-preview');
 const panel=document.getElementById('demo-panel');
 const toggle=document.querySelector('.DemoToggle');
 const play=document.getElementById('play-menu');
 const status=document.getElementById('menu-status');
 const names={curtain:'Cortina editorial',rows:'Renglones coordinados',side:'Hoja lateral'};
 let open=false,revision=0;
 document.querySelector('.DemoRows').innerHTML=CATEGORIAS.map((c,i)=>`<li class="DemoRow" style="--i:${i}"><a href="./categoria.html?c=${encodeURIComponent(c.id)}&rev=pulse-tools-20261113"><span class="number">${String(i+1).padStart(2,'0')}</span><span>${c.nombre}</span></a></li>`).join('');
 const setOpen=value=>{
  open=value;preview.classList.toggle('is-open',open);panel.inert=!open;
  panel.setAttribute('aria-hidden',String(!open));toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Cerrar ejemplo de menú':'Abrir ejemplo de menú');
  play.textContent=open?'Cerrar ejemplo':'Abrir ejemplo';
  status.textContent=`${names[preview.dataset.mode]} · ${open?'entrada':'salida'}.`;
 };
 const replay=mode=>{
  const current=++revision;preview.classList.add('is-resetting');setOpen(false);panel.scrollTop=0;
  preview.dataset.mode=mode;
  preview.scrollIntoView({block:'start',behavior:'auto'});
  document.querySelectorAll('.choice').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));
  requestAnimationFrame(()=>requestAnimationFrame(()=>{if(current!==revision)return;preview.classList.remove('is-resetting');setOpen(true);}));
 };
 document.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',()=>replay(b.dataset.mode)));
 toggle.addEventListener('click',()=>{revision++;preview.classList.remove('is-resetting');setOpen(!open);});
 play.addEventListener('click',()=>{revision++;preview.classList.remove('is-resetting');setOpen(!open);});
 document.getElementById('replay-menu').addEventListener('click',()=>replay(preview.dataset.mode));
 preview.addEventListener('keydown',e=>{if(e.key==='Escape'&&open){setOpen(false);toggle.focus({preventScroll:true});}});
 // Measured vector reconstruction: positions, contour height and opacity from all 95 GIF frames.
 const stage=document.getElementById('scroll-reconstruction');
 const dot=document.getElementById('measured-dot');
 const rim=document.getElementById('measured-rim');
 const fill=document.getElementById('measured-fill');
 const original=document.querySelector('.scroll-grid figure:first-child img');
 const pauseButton=document.getElementById('pause-scroll');
 const scrollStatus=document.getElementById('scroll-status');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let data=null,start=performance.now(),frame=0,visible=false,paused=false,elapsed=0;
 const paint=phase=>{
  if(!data)return;
  const i=Math.floor(phase/20)%data.frames.length,j=(i+1)%data.frames.length;
  const t=(phase%20)/20,a=data.frames[i],b=data.frames[j];
  const mix=key=>a[key]+(b[key]-a[key])*t;
  for(const el of [rim,fill]){
   el.setAttribute('x',mix('x'));el.setAttribute('y',mix('y'));
   el.setAttribute('width',mix('width'));el.setAttribute('height',mix('height'));
   el.setAttribute('rx',mix('width')/2);
  }
  dot.setAttribute('cx',mix('cx'));dot.setAttribute('cy',mix('cy'));dot.setAttribute('opacity',mix('opacity'));
 };
 const tick=now=>{
  frame=0;if(!data||!visible||paused||reduced.matches||document.hidden)return;
  elapsed=(now-start)%data.duration;paint(elapsed);frame=requestAnimationFrame(tick);
 };
 const resume=()=>{if(!frame&&visible&&!paused&&!reduced.matches&&!document.hidden){start=performance.now()-elapsed;frame=requestAnimationFrame(tick);}};
 const stop=()=>{if(frame)cancelAnimationFrame(frame);frame=0;};
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)resume();else stop();},{threshold:.1}).observe(stage);
 fetch('./data/scroll-reference-motion.json?v=menu-examples-20261113').then(r=>{if(!r.ok)throw Error('motion');return r.json();}).then(value=>{
  data=value;paint(0);scrollStatus.textContent='Ciclo de 1,9 s: descenso, compresión del contorno y recuperación. Sin texto en la reconstrucción.';
  if(reduced.matches)scrollStatus.textContent+=' Tu preferencia de movimiento reducido mantiene un fotograma estático.';
  resume();
 }).catch(()=>{scrollStatus.textContent='No se han podido cargar los datos de movimiento. Recarga la página para volver a intentarlo.';});
 pauseButton.addEventListener('click',()=>{paused=!paused;pauseButton.setAttribute('aria-pressed',String(paused));pauseButton.textContent=paused?'Reanudar reconstrucción':'Pausar reconstrucción';if(paused)stop();else resume();});
 document.getElementById('toggle-scroll-grid').addEventListener('click',e=>{const active=stage.classList.toggle('grid');e.currentTarget.setAttribute('aria-pressed',String(active));e.currentTarget.textContent=active?'Ver fondo de la referencia':'Ver sobre nuestra cuadrícula';});
 document.getElementById('restart-scroll').addEventListener('click',()=>{
  if(!data)return;stop();elapsed=0;paint(0);paused=false;pauseButton.setAttribute('aria-pressed','false');pauseButton.textContent='Pausar reconstrucción';
  original.onload=()=>{elapsed=0;start=performance.now();resume();original.onload=null;};
  original.onerror=()=>{scrollStatus.textContent='La referencia no se ha podido recargar; la reconstrucción sigue disponible.';resume();original.onerror=null;};
  original.src=`https://i.pinimg.com/originals/6e/a4/9e/6ea49e2026792d1fa2726bcc75cefce2.gif?replay=${Date.now()}`;
 });
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else resume();});
 reduced.addEventListener('change',()=>{if(reduced.matches){stop();paint(0);}else resume();});
})();
