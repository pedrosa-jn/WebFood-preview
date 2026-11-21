// Fit the original paper as a single unit: no reflow or changes to print timing.
const paper=document.querySelector('.ParticipateScene .paper-elevation');
function fitParticipationPaper(){
 if(!paper)return;
 if(innerWidth>700){
  paper.style.zoom='1';
  const header=document.querySelector('.SiteHeader').getBoundingClientRect().height;
  const available=Math.max(320,innerHeight-header-24);
  const desiredWidth=innerWidth*.326;
  paper.style.zoom=String(Math.min(desiredWidth/360,available/paper.offsetHeight));
 }else if(paper.style.zoom){
  paper.style.removeProperty('zoom');
 }
}
fitParticipationPaper();
window.addEventListener('resize',fitParticipationPaper);
