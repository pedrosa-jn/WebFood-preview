
const ticket=document.getElementById('ticket');let frame=0;
function drawLeading(elapsed=1300){const w=ticket.offsetWidth,h=ticket.offsetHeight,wave=elapsed<520?Math.sin(Math.min(1,elapsed/520)*Math.PI)*13:0;ticket.style.setProperty('--leading-bend',wave/13);const baseline=x=>5+wave*(1-Math.sin(Math.PI*x/w));let path=`M0 ${baseline(0)+3}`;for(let i=1;i<=100;i++){const x=w*i/100;path+=` L${x} ${baseline(x)+(i%2?-3:3)}`}ticket.style.clipPath=`path('${path} L${w} ${h} L0 ${h} Z')`;}
function play(){cancelAnimationFrame(frame);frame=0;ticket.classList.remove('is-playing');drawLeading(0);void ticket.offsetWidth;ticket.classList.add('is-playing');if(matchMedia('(prefers-reduced-motion:reduce)').matches){drawLeading();return}const start=performance.now();function tick(now){drawLeading(now-start);frame=now-start<1100?requestAnimationFrame(tick):0}frame=requestAnimationFrame(tick)}

document.getElementById('replay')?.addEventListener('click',play);
if(document.querySelector('.ParticipateScene')){
 const print=ticket.getAnimations().find(animation=>animation.animationName==='paper-feed');
 if(print){
  // Follow the CSS animation's clock so a late script never restarts the feed.
  const followPrint=()=>{
   const elapsed=print.currentTime;
   drawLeading(elapsed ?? 1300);
   frame=elapsed!==null && elapsed<520 ? requestAnimationFrame(followPrint) : 0;
  };
  frame=requestAnimationFrame(followPrint);
 }
}else document.fonts.ready.then(()=>requestAnimationFrame(play));
window.addEventListener('resize',()=>{if(!frame)drawLeading()});

const choices=[...document.querySelectorAll('[data-choice]')];function playArrow(el){el.classList.remove('arrow-playing');void el.offsetWidth;el.classList.add('arrow-playing')}choices.forEach(el=>{el.addEventListener('pointerenter',()=>playArrow(el));el.addEventListener('focus',()=>playArrow(el));el.addEventListener('click',()=>playArrow(el))});
