/* A single-level desktop photo viewer. It leaves recipe layout and scroll untouched. */
(() => {
 const recipe = document.getElementById('ModalReceta');
 const photo = document.getElementById('ModalImg');
 const area = photo?.closest('.ModalReceta_Imagen');
 if (!recipe || !photo || !area) return;
 const desktop = matchMedia('(min-width:701px)');
 const reduced = matchMedia('(prefers-reduced-motion:reduce)');
 const trigger = document.createElement('button');
 trigger.type = 'button';
 trigger.className = 'RecipePhotoTrigger';
 trigger.setAttribute('aria-label','Ampliar imagen de la receta');
 trigger.setAttribute('aria-haspopup','dialog');
 trigger.setAttribute('aria-controls','RecipePhotoZoom');
 trigger.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></svg>';
 area.append(trigger);
 const viewer = document.createElement('dialog');
 viewer.id = 'RecipePhotoZoom';
 viewer.className = 'RecipePhotoZoom';
 viewer.setAttribute('aria-labelledby','RecipePhotoZoomTitle');
 viewer.innerHTML = '<header class="RecipePhotoZoom_Header"><p id="RecipePhotoZoomTitle"></p><button type="button" aria-label="Cerrar imagen ampliada"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></header>';
 document.body.append(viewer);
 const enlarged = document.createElement('img');
 enlarged.className = 'RecipePhotoZoom_Image';
 const closeButton = viewer.querySelector('button');
 let opening = false, closing = false, motion = null;
 const close = async (animate = true) => {
  if (!viewer.open || closing) return;
  closing = true;
  motion?.cancel();
  if (animate && !reduced.matches) {
   viewer.classList.add('is-closing');
   motion = enlarged.animate([{opacity:1,transform:'none'},{opacity:0,transform:'translateY(6px) scale(.985)'}],{duration:190,easing:'cubic-bezier(.4,0,1,1)',fill:'forwards'});
   await motion.finished.catch(()=>{});
  }
  viewer.close();
  motion?.cancel();
  viewer.classList.remove('is-closing');
  closing = false;
  if (desktop.matches && recipe.classList.contains('activo')) trigger.focus({preventScroll:true});
 };
 trigger.addEventListener('click', async () => {
  if (!desktop.matches || opening || viewer.open || area.classList.contains('is-placeholder') || !photo.getAttribute('src')) return;
  opening = true;
  enlarged.src = photo.currentSrc || photo.src;
  enlarged.alt = photo.alt;
  viewer.querySelector('p').textContent = document.querySelector('#ModalTitulo > span')?.textContent || 'Imagen de la receta';
  try { await enlarged.decode(); } catch { opening = false; return; }
  opening = false;
  if (!desktop.matches || !recipe.classList.contains('activo')) return;
  viewer.append(enlarged);
  viewer.showModal();
  closeButton.focus({preventScroll:true});
  if (!reduced.matches) motion = enlarged.animate([{opacity:0,transform:'translateY(8px) scale(.985)'},{opacity:1,transform:'none'}],{duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
 });
 closeButton.addEventListener('click',()=>close());
 viewer.addEventListener('click',event=>{if(event.target===viewer)close();});
 viewer.addEventListener('cancel',event=>{event.preventDefault();close();});
 desktop.addEventListener('change',()=>{if(!desktop.matches)close(false);});
})();
