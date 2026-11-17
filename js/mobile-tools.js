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
 tools.insertAdjacentHTML('afterbegin', '<svg width="0" height="0" aria-hidden="true" style="position:absolute"><defs><filter id="toolsMerge" filterUnits="userSpaceOnUse" x="-24" y="-180" width="102" height="260" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 22 -9" result="merge"/><feComposite in="SourceGraphic" in2="merge" operator="atop"/></filter></defs></svg><div class="MobileTools_Blob" aria-hidden="true"><i></i><i></i><i></i></div>');
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
 toggleButton.addEventListener('click',()=>mobile.matches ? expandTools(!tools.classList.contains('is-expanded')) : open());
 document.addEventListener('pointerdown',e=>{if(!tools.contains(e.target))expandTools(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&tools.classList.contains('is-expanded')){expandTools(false);toggleButton.focus({preventScroll:true});}});
 const panel = dialog.querySelector('.MobileSearch_Panel');
 const surface = dialog.querySelector('.MobileSearch_Surface');
 const content = dialog.querySelector('.MobileSearch_Content');
 const input = dialog.querySelector('input');
 const results = dialog.querySelector('.MobileSearch_Results');
 const status = dialog.querySelector('[role="status"]');
 const clear = dialog.querySelector('[data-search-clear]');
 const closeButton = dialog.querySelector('[data-search-close]');
 let columns = 1, moving = [], shellAnimation = null, contentAnimation = null;
 let closing = false, lock = null, origin = null, resultsAnimation = null, resultsVisible = false;
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
 const panelClip = (rect,element=surface) => {
  const bounds=element.getBoundingClientRect();
  return `inset(${rect.top-bounds.top}px ${bounds.right-rect.right}px ${bounds.bottom-rect.bottom}px ${rect.left-bounds.left}px round ${rect.width<=56?'27':'24'}px)`;
 };
 const openingIcon=document.createElement('div');openingIcon.className='MobileSearch_OpeningIcon';openingIcon.setAttribute('aria-hidden','true');openingIcon.innerHTML=toggleButton.querySelector('[data-tools-search]').outerHTML+'<span>¿Qué te apetece cocinar?</span>';openingIcon.hidden=true;dialog.append(openingIcon);
 let iconAnimation=null,retargetOpening=null;
 const destinationClip = () => panelClip(panel.getBoundingClientRect());
 const controlColor = () => getComputedStyle(tools).getPropertyValue('--tool-bg').trim() || 'rgb(139,0,0)';
 const sizeDialog = () => {
  dialog.style.setProperty('--search-height',`${window.visualViewport?.height || innerHeight}px`);
  dialog.style.setProperty('--search-top',`${window.visualViewport?.offsetTop || 0}px`);
  if(!dialog.open || closing)return;
  const target=destinationClip();
  if(shellAnimation?.playState==='running'){
   if(retargetOpening){retargetOpening();return;}
   iconAnimation?.cancel();openingIcon.hidden=true;
   const current=getComputedStyle(surface).clipPath;
   const color=getComputedStyle(surface).backgroundColor;
   shellAnimation.cancel();
   surface.style.clipPath=target;
   shellAnimation=surface.animate([{clipPath:current,backgroundColor:color},{clipPath:target,backgroundColor:'rgb(245,245,240)'}],{duration:280,easing:'cubic-bezier(.22,1,.36,1)'});
  }else surface.style.clipPath=target;
 };
 window.visualViewport?.addEventListener('resize',sizeDialog);
 window.visualViewport?.addEventListener('scroll',sizeDialog);
 window.addEventListener('resize',sizeDialog);
 const open = () => {
  if (dialog.open) return;
  origin=(mobile.matches ? searchButton : toggleButton).getBoundingClientRect();
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
  if (!reduced.matches) {
   const field=dialog.querySelector('form').getBoundingClientRect();
   const width=field.width;
   const startLeft=origin.right-width;
   const horizontal=width-54;
   const ease='cubic-bezier(.65,0,.25,1)';
   const duration=1000;
   // The field is an actual capsule. Its leading edge and lens travel together.
   Object.assign(openingIcon.style,{left:startLeft+'px',top:origin.top+'px',width:width+'px'});
   openingIcon.hidden=false;
   const lens=openingIcon.querySelector('svg');
   const copy=openingIcon.querySelector('span');
   lens.getAnimations().forEach(a=>a.cancel());copy.getAnimations().forEach(a=>a.cancel());
   lens.animate([
    {transform:`translateX(${horizontal}px)`,color:'#f5f5f0',offset:0,easing:ease},
    {transform:'translateX(0)',color:'#0a0c24',offset:.48},
    {transform:'translateX(0)',color:'#0a0c24',offset:1}
   ],{duration,fill:'forwards',easing:'linear'});
   copy.animate([{opacity:0},{opacity:0,offset:.48},{opacity:1,offset:.56},{opacity:1}],{duration,fill:'forwards'});
   iconAnimation?.cancel();
   const capsuleFrames=()=>[
    {clipPath:`inset(0 0 0 ${horizontal}px round 27px)`,transform:'translateY(0)',opacity:1,backgroundColor:'#0a0c24',offset:0,easing:ease},
    {clipPath:'inset(0 round 27px)',transform:'translateY(0)',opacity:1,backgroundColor:'#f5f5f0',offset:.48,easing:ease},
    {clipPath:'inset(0 round 27px)',transform:`translate(${dialog.querySelector('form').getBoundingClientRect().left-startLeft}px,${dialog.querySelector('form').getBoundingClientRect().top-origin.top}px)`,opacity:1,backgroundColor:'#f5f5f0',offset:.85},
    {clipPath:'inset(0 round 27px)',transform:`translate(${dialog.querySelector('form').getBoundingClientRect().left-startLeft}px,${dialog.querySelector('form').getBoundingClientRect().top-origin.top}px)`,opacity:0,backgroundColor:'#f5f5f0',offset:1}
   ];
   iconAnimation=openingIcon.animate(capsuleFrames(),{duration,easing:'linear',fill:'forwards'});
   const frames=()=>[
    {clipPath:panelClip(dialog.querySelector('form').getBoundingClientRect()),opacity:0,offset:0},
    {clipPath:panelClip(dialog.querySelector('form').getBoundingClientRect()),opacity:0,offset:.84},
    {clipPath:destinationClip(),opacity:1,offset:1}
   ];
   shellAnimation=surface.animate(frames(),{duration,easing:'linear'});
   const openingMotion=shellAnimation;
   retargetOpening=()=>{openingMotion.effect.setKeyframes(frames());iconAnimation?.effect.setKeyframes(capsuleFrames());};
   openingMotion.finished.then(()=>{if(shellAnimation===openingMotion){retargetOpening=null;surface.style.clipPath=destinationClip();openingIcon.hidden=true;}}).catch(()=>{});
   contentAnimation=content.animate([{opacity:0},{opacity:0,offset:.84},{opacity:1}],{duration,easing:'linear'});
  }
  input.focus({preventScroll:true});
 };
 const close = async (animate=true) => {
  if (!dialog.open || closing) return;
  closing=true;
  retargetOpening=null;
  iconAnimation?.cancel();openingIcon.hidden=true;
  origin=toggleButton.getBoundingClientRect();
  dialog.classList.add('is-closing');
  const currentClip=getComputedStyle(surface).clipPath;
  const currentColor=getComputedStyle(surface).backgroundColor;
  shellAnimation?.cancel();contentAnimation?.cancel();
  if (animate && !reduced.matches) {
   contentAnimation=content.animate([{opacity:getComputedStyle(content).opacity},{opacity:0}],{duration:120,fill:'forwards'});
   shellAnimation=surface.animate([
    {clipPath:currentClip,backgroundColor:currentColor},
    {clipPath:panelClip(origin),backgroundColor:controlColor()}
   ],{duration:420,easing:'cubic-bezier(.65,0,.35,1)',fill:'forwards'});
   await shellAnimation.finished.catch(()=>{});
  }
  input.blur();
  dialog.close();
  shellAnimation?.cancel();contentAnimation?.cancel();
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
 dialog.addEventListener('close',()=>{unlockBackground();searchButton.setAttribute('aria-expanded','false');toggleButton.setAttribute('aria-expanded','false');});
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
  toggleButton.setAttribute('aria-controls', mobile.matches ? 'MobileToolsOptions' : 'MobileSearch');
  if (mobile.matches) toggleButton.removeAttribute('aria-haspopup');
  else toggleButton.setAttribute('aria-haspopup','dialog');
 };
 mobile.addEventListener('change',()=>{close(false);adaptTools();});
 adaptTools();
 update();
 tools.hidden=false;
})();
