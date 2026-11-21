/* Category search on all screens; the mobile grid switch stays mobile-only. */
(() => {
 const grid = document.getElementById('Recetas');
 const tools = document.getElementById('MobileTools');
 const dialog = document.getElementById('MobileSearch');
 if (!grid || !tools || !dialog || !grid.dataset.categoria) return;
 const mobile = matchMedia('(max-width:700px)');
 const reduced = matchMedia('(prefers-reduced-motion:reduce)');
 const layoutButton = tools.querySelector('[data-layout-toggle]');
 const searchButton = tools.querySelector('[data-search-open]');
 const toggleButton = tools.querySelector('[data-tools-toggle]');
 const options = tools.querySelector('.MobileTools_Options');
 tools.insertAdjacentHTML('afterbegin', '<svg width="0" height="0" aria-hidden="true" style="position:absolute"><defs><filter id="toolsMerge" filterUnits="userSpaceOnUse" x="-24" y="-190" width="102" height="450" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -9" result="merge"/><feComposite in="SourceGraphic" in2="merge" operator="atop"/></filter></defs></svg><div class="MobileTools_Blob" aria-hidden="true"><i></i><i></i><i></i></div>');
 tools.querySelectorAll('[data-tools-search], [data-search-open] svg').forEach(svg=>{svg.innerHTML='<circle cx="10.75" cy="10.75" r="6.75"/><path d="m15.6 15.6 4.65 4.65"/>';svg.setAttribute('stroke-width','2');});
 const plus = toggleButton.querySelector('[data-tools-plus]');
 plus.innerHTML='<path d="m6 6 12 12M18 6 6 18"/>';
 const rects=[...layoutButton.querySelectorAll('rect')];

 let layoutRevision = 0;
 const expandTools = expanded => {
  tools.classList.toggle('is-expanded', expanded);
  if (!expanded && options.contains(document.activeElement)) toggleButton.focus({preventScroll:true});
  options.inert = !expanded;
  toggleButton.setAttribute('aria-expanded', String(mobile.matches ? expanded : dialog.open));
  toggleButton.setAttribute('aria-label', mobile.matches ? (expanded ? 'Cerrar opciones de recetas' : 'Buscar y cambiar vista') : 'Buscar una receta');
 };
 let suppressClickUntil = 0;
 toggleButton.addEventListener('click',e=>{
  if (performance.now() < suppressClickUntil) {e.preventDefault();return;}
  mobile.matches ? expandTools(!tools.classList.contains('is-expanded')) : open();
 });
 // Store a fraction of the available area, so rotation keeps the control reachable.
 const positionKey = 'recetas-tools-position-v1';
 let savedPosition = null, drag = null, dropAnimation = null;
 try {
  const value = JSON.parse(localStorage.getItem(positionKey));
  if (value && ['x','y'].every(k=>Number.isFinite(value[k]) && value[k]>=0 && value[k]<=1)) savedPosition=value;
 } catch {}
 const safeArea = document.createElement('div');
 safeArea.className='MobileTools_SafeArea';
 safeArea.setAttribute('aria-hidden','true');
 document.body.append(safeArea);
 const dragBounds = () => {
  const area=safeArea.getBoundingClientRect();
  const {left,top}=area;
  const right=Math.max(left,area.right-toggleButton.offsetWidth);
  const bottom=Math.max(top,area.bottom-toggleButton.offsetHeight);
  const minY=Math.min(bottom,top+area.height/2);
  return {left,top,right,bottom,minY};
 };
 const placeTools = (x,y,bounds=dragBounds()) => {
  x=Math.max(bounds.left,Math.min(bounds.right,x));
  y=Math.max(bounds.minY,Math.min(bounds.bottom,y));
  tools.style.setProperty('--tools-x',`${x}px`);
  tools.style.setProperty('--tools-y',`${y}px`);
  tools.classList.add('is-positioned');
  tools.classList.toggle('is-left',x<(bounds.left+bounds.right)/2);
  tools.classList.toggle('opens-down',y-bounds.top<144 && bounds.bottom-y>y-bounds.top);
  return {x,y};
 };
 const dockX = (x,bounds) => x < (bounds.left+bounds.right)/2 ? bounds.left : bounds.right;
 const rememberPosition = point => {
  const bounds=dragBounds();
  savedPosition={x:(point.x-bounds.left)/Math.max(1,bounds.right-bounds.left),y:(point.y-bounds.top)/Math.max(1,bounds.bottom-bounds.top)};
  try {localStorage.setItem(positionKey,JSON.stringify(savedPosition));} catch {}
 };
 let previousBounds;
 const restorePosition = () => {
  if (!mobile.matches) {
   previousBounds=null;
   if (drag) finishDrag({pointerId:drag.id},true);
   dropAnimation?.cancel();
   tools.classList.remove('is-positioned','is-left','opens-down');
   return;
  }
  if (dialog.open) return;
  const bounds=dragBounds();
  const unchanged=previousBounds && Object.keys(bounds).every(key=>bounds[key]===previousBounds[key]);
  previousBounds=bounds;
  if (unchanged) return;
  if (drag) finishDrag({pointerId:drag.id},true);
  dropAnimation?.cancel();
  if (!savedPosition) return;
  placeTools(savedPosition.x<.5 ? bounds.left : bounds.right,bounds.top+savedPosition.y*(bounds.bottom-bounds.top),bounds);
 };
 toggleButton.addEventListener('dragstart',e=>e.preventDefault());
 toggleButton.addEventListener('pointerdown',e=>{
  if (!mobile.matches || !e.isPrimary || e.button!==0) return;
  e.preventDefault();
  dropAnimation?.cancel();
  const rect=toggleButton.getBoundingClientRect();
  drag={id:e.pointerId,startX:e.clientX,startY:e.clientY,x:rect.left,y:rect.top,bounds:dragBounds(),moved:false,point:null};
  toggleButton.setPointerCapture(e.pointerId);
 });
 toggleButton.addEventListener('pointermove',e=>{
  if (!drag || e.pointerId!==drag.id) return;
  const dx=e.clientX-drag.startX,dy=e.clientY-drag.startY;
  if (!drag.moved && Math.hypot(dx,dy)<8) return;
  if (!drag.moved) {drag.moved=true;expandTools(false);tools.classList.add('is-dragging');}
  e.preventDefault();
  drag.point=placeTools(drag.x+dx,drag.y+dy,drag.bounds);
 });
 const finishDrag = (e,cancelled=false) => {
  if (!drag || e.pointerId!==drag.id) return;
  const finished=drag;drag=null;
  tools.classList.remove('is-dragging');
  if (finished.moved) {
   suppressClickUntil=performance.now()+350;
   if (cancelled) placeTools(finished.x,finished.y);
   else {
    const {point,bounds}=finished;
    const docked=placeTools(dockX(point.x,bounds),point.y,bounds);
    rememberPosition(docked);
    if (!reduced.matches) dropAnimation=tools.animate([
     {translate:`${point.x}px ${docked.y}px`,scale:'1.09'},
     {translate:`${docked.x}px ${docked.y}px`,scale:'.975',offset:.72},
     {translate:`${docked.x}px ${docked.y}px`,scale:'1'}
    ],{duration:340,easing:'cubic-bezier(.22,1,.36,1)'});
   }
  }
  if (toggleButton.hasPointerCapture(e.pointerId)) toggleButton.releasePointerCapture(e.pointerId);
 };
 toggleButton.addEventListener('pointerup',e=>finishDrag(e));
 toggleButton.addEventListener('pointercancel',e=>finishDrag(e,true));
 toggleButton.addEventListener('lostpointercapture',e=>finishDrag(e,true));
 // Keyboard users can reposition the optional control without affecting normal arrow keys.
 toggleButton.addEventListener('keydown',e=>{
  if (!mobile.matches || !e.shiftKey || !['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) return;
  e.preventDefault();expandTools(false);
  const rect=toggleButton.getBoundingClientRect();
  const bounds=dragBounds();
  const x=e.key==='ArrowLeft'?bounds.left:e.key==='ArrowRight'?bounds.right:dockX(rect.left,bounds);
  const point=placeTools(x,rect.top+(e.key==='ArrowDown'?16:e.key==='ArrowUp'?-16:0),bounds);
  rememberPosition(point);
 });
 window.addEventListener('resize',restorePosition);
 document.addEventListener('pointerdown',e=>{if(!tools.contains(e.target))expandTools(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&tools.classList.contains('is-expanded')){expandTools(false);toggleButton.focus({preventScroll:true});}});
 const stage = dialog.querySelector('.MobileSearch_Stage');
 const shade = dialog.querySelector('.MobileSearch_Shade');
 const panel = dialog.querySelector('.MobileSearch_Panel');
 const surface = dialog.querySelector('.MobileSearch_Surface');
 const content = dialog.querySelector('.MobileSearch_Content');
 const input = dialog.querySelector('input');
 const results = dialog.querySelector('.MobileSearch_Results');
 const status = dialog.querySelector('[role="status"]');
 const clear = dialog.querySelector('[data-search-clear]');
 const closeButton = dialog.querySelector('[data-search-close]');
 const field = dialog.querySelector('form');
 let columns = 1, moving = [], shellAnimation = null, contentAnimation = null;
 let openingDetails = [];
 let closing = false, lock = null, resultsAnimation = null, resultsVisible = false;
 const normalize = value => String(value || '').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
 const catalog = RECETAS.map(r => ({...r, match:normalize([r.titulo,r.autor].filter(Boolean).join(' '))}));
 const setColumns = value => {
  columns = value;
  grid.classList.toggle('Recetas--una-columna', columns === 1);
  layoutButton.classList.toggle('is-one-column', columns === 1);
  layoutButton.setAttribute('aria-pressed', String(columns === 1));
  layoutButton.setAttribute('aria-label', columns === 1 ? 'Cambiar a dos columnas' : 'Cambiar a una columna');
  rects.forEach((rect,i)=>{rect.style.x=(columns===1?4:(i%2?14:4))+'px';rect.style.y=(i<2?4:14)+'px';rect.style.width=(columns===1&&i%2===0?16:6)+'px';rect.style.height='6px';});
 };
 try { const saved = localStorage.getItem('recetas-columnas-v2'); if (saved === '1' || saved === '2') columns = Number(saved); } catch {}
 setColumns(columns);
 layoutButton.addEventListener('click', () => {
  if (!mobile.matches) return;
  const revision = ++layoutRevision;
  moving.forEach(a => a.cancel());
  const cards = [...grid.querySelectorAll(':scope > a')];
  const before = new Map(cards.map(el => [el, el.getBoundingClientRect()]));
  const headerBottom = document.querySelector('.SiteHeader')?.getBoundingClientRect().bottom || 0;
  const anchor = cards.find(el => before.get(el).bottom > headerBottom);
  const anchorTop = anchor && before.get(anchor).top;
  grid.classList.add('is-switching-grid');
  setColumns(columns === 2 ? 1 : 2);
  if (anchor) {
   const behavior = document.documentElement.style.scrollBehavior;
   document.documentElement.style.scrollBehavior = 'auto';
   window.scrollBy(0, anchor.getBoundingClientRect().top - anchorTop);
   document.documentElement.style.scrollBehavior = behavior;
  }
  const after = new Map(cards.map(el => [el, el.getBoundingClientRect()]));
  moving = [];
  for (const el of cards) {
   const end = after.get(el), start = before.get(el);
   if (end.bottom < 0 || end.top > innerHeight || !el.classList.contains('is-revealed')) continue;
   if (!reduced.matches && el.animate) moving.push(el.animate([
    {transform:`translate3d(${start.left-end.left}px,${start.top-end.top}px,0)`,clipPath:'inset(0 0 0 0 round 0px)'},
    {transform:'translate3d(0,0,0)',clipPath:'inset(0 0 0 0 round 0px)'}
   ],{duration:460,easing:'cubic-bezier(.22,1,.36,1)'}));
  }
  Promise.allSettled(moving.map(a=>a.finished)).then(()=>{if(revision===layoutRevision)grid.classList.remove('is-switching-grid');});
  try { localStorage.setItem('recetas-columnas-v2',String(columns)); } catch {}
 });
 const lockBackground = () => {
  const properties = ['position','top','left','right','width'];
  lock = {y:window.scrollY,styles:Object.fromEntries(properties.map(p=>[p,document.body.style[p]]))};
  Object.assign(document.body.style,{position:'fixed',top:`-${lock.y}px`,left:'0',right:'0',width:'100%'});
  document.body.classList.add('MobileSearch-open');
 };
 const unlockBackground = () => {
  if (!lock) return;
  Object.assign(document.body.style,lock.styles);
  const behavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior='auto';
  window.scrollTo(0,lock.y);
  document.documentElement.style.scrollBehavior=behavior;
  lock=null;
  document.body.classList.remove('MobileSearch-open');
 };
 // Reveal the surface through a moving aperture. Text never stretches with it.
 const panelClip = (rect,radius=rect.width<=60 ? rect.width/2 : 24) => {
  const bounds=surface.getBoundingClientRect();
  return `inset(${rect.top-bounds.top}px ${bounds.right-rect.right}px ${bounds.bottom-rect.bottom}px ${rect.left-bounds.left}px round ${radius}px)`;
 };
 let retargetOpening=null;
 const destinationClip = () => panelClip(panel.getBoundingClientRect());
 const controlColor = () => getComputedStyle(tools).getPropertyValue('--tool-bg').trim() || 'rgb(139,0,0)';
 const revealSearchCopy = delay => {
  openingDetails.push(...[dialog.querySelector('.MobileSearch_Top'),input,clear,status].map((element,index)=>element.animate([
   {opacity:0,translate:'0 8px'},
   {opacity:1,translate:'0 0'}
  ],{delay:delay+[0,55,55,135][index],duration:300,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'})));
 };
 const openDesktop = origin => {
  const target = field.getBoundingClientRect();
  const lens = field.querySelector('svg');
  const lensBounds = lens.getBoundingClientRect();
  const shiftX = origin.right - target.right;
  const shiftY = origin.top - target.top;
  const lensShift = origin.left + origin.width / 2 - lensBounds.left - lensBounds.width / 2 - shiftX;
  const start = `translate(${shiftX}px,${shiftY}px)`;
  const centered = `translateY(${shiftY}px)`;
  const capsule = panelClip({top:origin.top,right:target.right,bottom:origin.top+target.height,left:target.left},target.height/2);
  const build = 'cubic-bezier(.65,0,.25,1)';
  const rise = 'cubic-bezier(.22,.72,.28,1)';
  const timing = {duration:860};
  const phase = .48;
  const ink = controlColor();
  const paper = getComputedStyle(surface).backgroundColor;
  const border = getComputedStyle(field).borderColor;
  const lensColor = getComputedStyle(lens).color;

  // The actual field moves away from the button and stays centered for the rise.
  openingDetails = [
   field.animate([
    {transform:start,clipPath:`inset(0 0 0 ${target.width-origin.width}px round 30px)`,backgroundColor:ink,borderColor:ink,offset:0,easing:build},
    {transform:centered,clipPath:'inset(0 round 30px)',backgroundColor:paper,borderColor:border,offset:phase,easing:rise},
    {transform:'translateY(0)',clipPath:'inset(0 round 30px)',backgroundColor:paper,borderColor:border}
   ],timing),
   lens.animate([
    {transform:`translateX(${lensShift}px) scale(${27/lensBounds.width})`,color:paper,offset:0,easing:build},
    {transform:'none',color:lensColor,offset:phase},
    {transform:'none',color:lensColor}
   ],timing)
  ];
  openingDetails.push(results.animate([{opacity:0},{opacity:1}],{
   delay:timing.duration,duration:200,fill:'backwards'
  }));
  revealSearchCopy(timing.duration);
  shellAnimation=surface.animate([
   {clipPath:capsule,opacity:0,offset:0},
   {clipPath:capsule,opacity:0,offset:phase-.01},
   {clipPath:capsule,opacity:1,offset:phase,easing:rise},
   {clipPath:destinationClip(),opacity:1}
  ],timing);
  const openingMotion=shellAnimation;
  retargetOpening=()=>{
   openingDetails.forEach(animation=>{
    if (animation.effect.getTiming().delay===0) animation.finish();
   });
   openingMotion.finish();
   surface.style.clipPath=destinationClip();
  };
  openingMotion.finished.then(()=>{
   if(shellAnimation===openingMotion)retargetOpening=null;
  }).catch(()=>{});
 };
 const openMobile = origin => {
  const {left,top}=surface.getBoundingClientRect();
  const size=Math.min(origin.width,origin.height);
  const duration=440;
  dialog.style.setProperty('--search-origin-x',`${origin.left-left}px`);
  dialog.style.setProperty('--search-origin-y',`${origin.top-top}px`);
  dialog.style.setProperty('--search-origin-size',`${size}px`);
  const source='inset(var(--search-source-y) calc(100% - var(--search-origin-x) - var(--search-origin-size)) calc(100% - var(--search-source-y) - var(--search-origin-size)) var(--search-origin-x) round calc(var(--search-origin-size) / 2))';
  const destination='inset(var(--search-panel-top) var(--search-panel-right) calc(100% - var(--search-panel-top) - var(--search-panel-height)) var(--search-panel-left) round 24px)';
  // The clip's endpoints follow the visible viewport, even while the keyboard rises.
  shellAnimation=surface.animate([
   {clipPath:source,backgroundColor:controlColor()},
   {clipPath:destination,backgroundColor:getComputedStyle(surface).backgroundColor}
  ],{duration,easing:'cubic-bezier(.22,.8,.28,1)'});
  contentAnimation=content.animate([{opacity:0},{opacity:1}],{
   delay:duration-90,duration:140,easing:'ease-out',fill:'backwards'
  });
  revealSearchCopy(duration);
 };
 const sizeDialog = () => {
  dialog.style.setProperty('--search-height',`${window.visualViewport?.height || innerHeight}px`);
  dialog.style.setProperty('--search-top',`${window.visualViewport?.offsetTop || 0}px`);
  if(!dialog.open || closing)return;
  const target=destinationClip();
  surface.style.clipPath=target;
  if(shellAnimation?.playState==='running') retargetOpening?.();
 };
 window.visualViewport?.addEventListener('resize',sizeDialog);
 window.visualViewport?.addEventListener('scroll',sizeDialog);
 window.addEventListener('resize',sizeDialog);
 const open = () => {
  if (dialog.open) return;
  const origin=(mobile.matches ? searchButton : toggleButton).getBoundingClientRect();
  expandTools(false);
  lockBackground();
  closing=false;
  sizeDialog();
  dialog.classList.remove('is-closing');
  dialog.showModal();
  searchButton.setAttribute('aria-expanded','true');
  if (!mobile.matches) toggleButton.setAttribute('aria-expanded','true');
  shellAnimation?.cancel();contentAnimation?.cancel();
  surface.style.clipPath=destinationClip();
  if (!reduced.matches) (mobile.matches ? openMobile : openDesktop)(origin);
  // Keep focus in the tap handler so mobile browsers can show their keyboard.
  input.focus({preventScroll:true});
 };
 const close = async (animate=true) => {
  if (!dialog.open || closing) return;
  closing=true;
  retargetOpening=null;
  const shadeOpacity=getComputedStyle(shade).opacity;
  dialog.classList.add('is-closing');
  let fold, fadeShade;
  if (animate && !reduced.matches) {
   const stillOpening=shellAnimation?.playState==='running';
   [shellAnimation,contentAnimation,...openingDetails].forEach(animation=>{
    if (animation?.playState==='running') animation.pause();
   });
   const bounds=panel.getBoundingClientRect();
   const timing={duration:360,easing:'cubic-bezier(.65,0,.35,1)',fill:'forwards'};
   fold=stage.animate([
    {opacity:1,clipPath:stillOpening ? 'inset(0 round 24px)' : panelClip(bounds)},
    {opacity:0,clipPath:panelClip({top:bounds.top,right:bounds.right,bottom:bounds.top,left:bounds.left})}
   ],timing);
   fadeShade=shade.animate([{opacity:shadeOpacity},{opacity:0}],timing);
   await Promise.allSettled([fold.finished,fadeShade.finished]);
  }
  input.blur();
  dialog.close();
  fold?.cancel();
  fadeShade?.cancel();
  shellAnimation?.cancel();contentAnimation?.cancel();
  openingDetails.forEach(animation=>animation.cancel());
  openingDetails=[];
  unlockBackground();
  searchButton.setAttribute('aria-expanded','false');
  toggleButton.setAttribute('aria-expanded','false');
  toggleButton.focus({preventScroll:true});
  closing=false;
 };
 const update = () => {
  const query=normalize(input.value.trim());
  clear.hidden=!query;
  results.replaceChildren();
  if (!query) { resultsAnimation?.cancel(); status.textContent='Busca en todas las recetas del cuaderno.';resultsVisible=false;return; }
  const matches=catalog.filter(r=>r.match.includes(query));
  status.textContent=matches.length ? `${matches.length} ${matches.length===1?'receta encontrada':'recetas encontradas'}` : 'No encontramos recetas. Prueba con otro nombre.';
  for (const r of matches) {
   const a=document.createElement('a');a.className='MobileSearch_Result';a.href=`${urlCategoria(r.categoria)}#${encodeURIComponent(r.id)}`;a.dataset.recipeId=r.id;a.dataset.category=r.categoria;
   const title=document.createElement('span');title.textContent=r.titulo;title.className='MobileSearch_ResultTitle';
   const detail=document.createElement('span');detail.textContent=[r.autor,CATEGORIAS.find(c=>c.id===r.categoria)?.nombre].filter(Boolean).join(' · ');
   a.append(title,detail);results.append(a);
  }
  if (!resultsVisible && !reduced.matches) {
   resultsAnimation?.cancel();
   resultsAnimation=results.animate([{opacity:0,clipPath:'inset(0 0 100% 0)',transform:'translateY(-5px)'},{opacity:1,clipPath:'inset(0)',transform:'none'}],{duration:380,easing:'cubic-bezier(.22,1,.36,1)'});
  }
  resultsVisible=true;
 };
 searchButton.addEventListener('click',open);
 closeButton.addEventListener('click',()=>close());
 dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
 dialog.addEventListener('click',e=>{if(e.target===dialog)close();});
 dialog.addEventListener('close',()=>{unlockBackground();restorePosition();searchButton.setAttribute('aria-expanded','false');toggleButton.setAttribute('aria-expanded','false');});
 input.addEventListener('input',update);
 clear.addEventListener('click',()=>{input.value='';update();input.focus();});
 dialog.querySelector('form').addEventListener('submit',e=>{e.preventDefault();results.querySelector('a')?.click();});
 input.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();results.querySelector('a')?.focus();}});
 results.addEventListener('click',async e=>{
  const a=e.target.closest('a[data-recipe-id]');if(!a)return;
  e.preventDefault();
  const {recipeId,category}=a.dataset,href=a.href;
  await close(false);
  if(category===grid.dataset.categoria)grid.querySelector(`a[data-id="${CSS.escape(recipeId)}"]`)?.click();
  else window.location.href=href;
 });
 const adaptTools = () => {
  expandTools(false);
  restorePosition();
  toggleButton.title=mobile.matches ? 'Toca para abrir. Arrastra para mover. Con teclado: Mayús + flechas.' : 'Buscar una receta';
  toggleButton.setAttribute('aria-controls', mobile.matches ? 'MobileToolsOptions' : 'MobileSearch');
  if (mobile.matches) toggleButton.removeAttribute('aria-haspopup');
  else toggleButton.setAttribute('aria-haspopup','dialog');
 };
 mobile.addEventListener('change',()=>{close(false);adaptTools();});
 tools.hidden=false;
 adaptTools();
 update();
})();
