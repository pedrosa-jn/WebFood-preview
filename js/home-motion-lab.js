(() => {
 const list=document.getElementById('HomeMotionCategories');
 const buttons=[...document.querySelectorAll('[data-mode]')];
 const slow=document.getElementById('HomeMotionSlow');
 const status=document.getElementById('HomeMotionStatus');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 let mode=new URLSearchParams(location.search).get('mode')==='ink'?'ink':'vertical';
 let observer=null,animations=[],seen=new Set(),generation=0;
 for(const [index,category] of CATEGORIAS.entries()){
  const a=document.createElement('a');a.className='CAT_Box';a.href=`./categoria.html?c=${encodeURIComponent(category.id)}`;
  const number=document.createElement('span');number.className='CAT_Number CAT_Index';number.textContent=String(index+1).padStart(2,'0');
  const clip=document.createElement('span');clip.className='CAT_Title HomeMotion_Clip';
  const title=document.createElement('span');title.className='HomeMotion_Word';title.textContent=category.nombre;clip.append(title);
  const description=document.createElement('span');description.className='CAT_Number CAT_Description';description.textContent=category.descripcion;
  const arrow=document.createElementNS('http://www.w3.org/2000/svg','svg');arrow.classList.add('CAT_Arrow');arrow.setAttribute('viewBox','0 0 24 24');arrow.setAttribute('width','18');arrow.setAttribute('height','18');arrow.setAttribute('aria-hidden','true');arrow.setAttribute('fill','none');arrow.setAttribute('stroke','currentColor');arrow.setAttribute('stroke-width','1.5');
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M5 12h14m-6-6 6 6-6 6');arrow.append(path);
  a.append(number,clip,description,arrow);list.append(a);
 }
 const rows=[...list.children];
 const animateRow=(row,delay)=>{
  if(seen.has(row))return;
  seen.add(row);row.classList.add('is-presented');
  if(reduced.matches||!row.animate)return;
  const rate=slow.checked?2.4:1;
  const title=row.querySelector('.HomeMotion_Word');
  const frames=mode==='vertical'
   ? [{transform:'translateY(112%)'},{transform:'translateY(0)'}]
   : [{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0 0 0)'}];
  animations.push(title.animate(frames,{duration:620*rate,delay:delay*rate,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'}));
  for(const element of row.querySelectorAll('.CAT_Index,.CAT_Description,.CAT_Arrow')){
   animations.push(element.animate([{opacity:0,transform:'translateY(4px)'},{opacity:1,transform:'translateY(0)'}],{duration:420*rate,delay:(delay+75)*rate,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'}));
  }
 };
 const play=()=>{
  generation++;
  observer?.disconnect();animations.forEach(a=>a.cancel());animations=[];seen=new Set();
  rows.forEach(row=>row.classList.remove('is-presented'));
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mode===mode)));
  status.textContent=reduced.matches?'Movimiento reducido activado: las categorías se muestran directamente.':mode==='vertical'?'Los títulos emergen desde abajo; números y descripciones los acompañan.':'La tinta se revela de izquierda a derecha sobre los títulos, colocados en su posición final.';
  if(reduced.matches||!('IntersectionObserver'in window)){rows.forEach(row=>{row.classList.add('is-presented');seen.add(row)});return;}
  list.classList.add('HomeMotion_Ready');
  const round=generation;
  observer=new IntersectionObserver(entries=>{
   if(round!==generation)return;
   const entering=entries.filter(e=>e.isIntersecting&&!seen.has(e.target)).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
   entering.forEach((entry,i)=>{animateRow(entry.target,Math.min(i*55,220));observer.unobserve(entry.target)});
  },{threshold:.15,rootMargin:'0px 0px -24px 0px'});
  rows.forEach(row=>observer.observe(row));
 };
 const replay=()=>{
  const controls=document.querySelector('.HomeMotionLab_Controls');
  const top=list.getBoundingClientRect().top+window.scrollY-controls.offsetHeight-63-10;
  window.scrollTo({top:Math.max(0,top),behavior:'instant'});play();
 };
 buttons.forEach(button=>button.addEventListener('click',()=>{
  mode=button.dataset.mode;
  const url=new URL(location.href);url.searchParams.set('mode',mode);history.replaceState(null,'',url);
  replay();
 }));
 document.getElementById('HomeMotionReplay').addEventListener('click',replay);
 slow.addEventListener('change',replay);
 reduced.addEventListener('change',play);
 list.addEventListener('focusin',e=>{
  const row=e.target.closest('.CAT_Box');if(!row)return;
  for(const animation of animations){if(row.contains(animation.effect?.target))animation.finish();}
  row.classList.add('is-presented');seen.add(row);observer?.unobserve(row);
 });
 document.fonts.ready.then(play);
})();
