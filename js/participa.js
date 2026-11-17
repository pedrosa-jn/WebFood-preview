if(typeof renderizarMenu==='function')renderizarMenu(null);
// Fit the original paper as a single unit: no reflow or changes to print timing.
const paper=document.querySelector('.ParticipateScene .paper-elevation');
function fitParticipationPaper(){
 if(!paper)return;
 paper.style.zoom='1';
 if(innerWidth>700){
  const header=document.querySelector('.SiteHeader').getBoundingClientRect().height;
  const available=Math.max(320,innerHeight-header-24);
  const desiredWidth=innerWidth*.326;
  paper.style.zoom=String(Math.min(desiredWidth/360,available/paper.offsetHeight));
 }
}
document.fonts.ready.then(()=>requestAnimationFrame(fitParticipationPaper));
window.addEventListener('resize',fitParticipationPaper);
