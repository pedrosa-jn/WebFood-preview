/* Mobile category tools. Existing recipe modals remain the source of recipe behavior. */
(() => {
 const grid = document.getElementById('Recetas');
 const tools = document.getElementById('MobileTools');
 const dialog = document.getElementById('MobileSearch');
 if (!grid || !tools || !dialog || !grid.dataset.categoria) return;
 const mobile = matchMedia('(max-width:700px)');
 const reduced = matchMedia('(prefers-reduced-motion:reduce)');
 const layoutButton = tools.querySelector('[data-layout-toggle]');
 const searchButton = tools.querySelector('[data-search-open]');
 const panel = dialog.querySelector('.MobileSearch_Panel');
 const surface = dialog.querySelector('.MobileSearch_Surface');
 const content = dialog.querySelector('.MobileSearch_Content');
 const input = dialog.querySelector('input');
 const results = dialog.querySelector('.MobileSearch_Results');
 const status = dialog.querySelector('[role="status"]');
 const clear = dialog.querySelector('[data-search-clear]');
 const closeButton = dialog.querySelector('[data-search-close]');
 let columns = 2, moving = [], shellAnimation = null, contentAnimation = null;
 let closing = false, lock = null, origin = null, resultsAnimation = null, resultsVisible = false;
 const normalize = value => String(value || '').toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
 const catalog = RECETAS.map(r => ({...r, match:normalize([r.titulo,r.autor].filter(Boolean).join(' '))}));
 const setColumns = value => {
  columns = value;
  grid.classList.toggle('Recetas--una-columna', columns === 1);
  layoutButton.classList.toggle('is-one-column', columns === 1);
  layoutButton.setAttribute('aria-pressed', String(columns === 1));
  layoutButton.setAttribute('aria-label', columns === 1 ? 'Cambiar a dos columnas' : 'Cambiar a una columna');
 };
 try { if (localStorage.getItem('recetas-columnas') === '1') columns = 1; } catch {}
 setColumns(columns);
 layoutButton.addEventListener('click', () => {
  if (!mobile.matches) return;
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
  Promise.allSettled(moving.map(a=>a.finished)).then(()=>grid.classList.remove('is-switching-grid'));
  try { localStorage.setItem('recetas-columnas',String(columns)); } catch {}
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
 const sizeDialog = () => {
  if (closing) return;
  dialog.style.setProperty('--search-height',`${window.visualViewport?.height || innerHeight}px`);
  dialog.style.setProperty('--search-top',`${window.visualViewport?.offsetTop || 0}px`);
 };
 window.visualViewport?.addEventListener('resize',sizeDialog);
 window.visualViewport?.addEventListener('scroll',sizeDialog);
 const originTransform = () => {
  const r=panel.getBoundingClientRect();
  return `translate(${origin.left-r.left}px,${origin.top-r.top}px) scale(${origin.width/r.width},${origin.height/r.height})`;
 };
 const open = () => {
  if (!mobile.matches || dialog.open) return;
  origin=searchButton.getBoundingClientRect();
  lockBackground();
  sizeDialog();
  dialog.classList.remove('is-closing');
  dialog.showModal();
  searchButton.setAttribute('aria-expanded','true');
  closing=false;
  input.focus({preventScroll:true});
  shellAnimation?.cancel();contentAnimation?.cancel();
  if (!reduced.matches) {
   shellAnimation=surface.animate([{transform:originTransform(),borderRadius:'50%',backgroundColor:'rgb(139,0,0)'},{transform:'none',borderRadius:'24px',backgroundColor:'rgb(245,245,240)'}],{duration:460,easing:'cubic-bezier(.22,1,.36,1)'});
   contentAnimation=content.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:300,delay:90,fill:'backwards',easing:'cubic-bezier(.22,1,.36,1)'});
  }
 };
 const close = async (animate=true) => {
  if (!dialog.open || closing) return;
  closing=true;
  dialog.classList.add('is-closing');
  input.blur();
  shellAnimation?.cancel();contentAnimation?.cancel();
  if (animate && !reduced.matches) {
   contentAnimation=content.animate([{opacity:1},{opacity:0}],{duration:130,fill:'forwards'});
   shellAnimation=surface.animate([{transform:'none',borderRadius:'24px',backgroundColor:'rgb(245,245,240)'},{transform:originTransform(),borderRadius:'50%',backgroundColor:'rgb(139,0,0)'}],{duration:300,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'});
   await shellAnimation.finished.catch(()=>{});
  }
  dialog.close();
  shellAnimation?.cancel();contentAnimation?.cancel();
  unlockBackground();
  searchButton.setAttribute('aria-expanded','false');
  searchButton.focus({preventScroll:true});
  closing=false;
 };
 const update = () => {
  const query=normalize(input.value.trim());
  clear.hidden=!query;
  results.replaceChildren();
  if (!query) { status.textContent='Busca en todas las recetas del cuaderno.';resultsVisible=false;return; }
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
 dialog.addEventListener('close',()=>{unlockBackground();searchButton.setAttribute('aria-expanded','false');});
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
 mobile.addEventListener('change',()=>{if(!mobile.matches)close(false);});
 update();
 tools.hidden=false;
})();
