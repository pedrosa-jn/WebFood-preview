/* Google Apps Script transport: an opaque POST is NOT evidence of successful storage. */
(()=>{
 const config=()=>window.RECETARIO_SUBMISSIONS||{};
 const endpoint=()=>{const value=config().endpoint||'';return /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(value)?value:'';};
 const random=bytes=>Array.from(crypto.getRandomValues(new Uint8Array(bytes)),v=>v.toString(16).padStart(2,'0')).join('');
 const hash=async value=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value))),v=>v.toString(16).padStart(2,'0')).join('');
 function receipt(token){return new Promise((resolve,reject)=>{
  const callback='recetarioReceipt_'+random(16),script=document.createElement('script');let timer;
  const cleanup=()=>{clearTimeout(timer);script.remove();delete window[callback];};
  window[callback]=value=>{cleanup();resolve(value?.ok===true&&/^REC-[A-F0-9]{12}$/.test(value.reference||'')?value:null);};
  script.onerror=()=>{cleanup();reject(new Error('No se ha podido consultar la recepción.'));};
  timer=setTimeout(()=>{cleanup();reject(new Error('La confirmación está tardando demasiado.'));},12000);
  const url=new URL(endpoint());url.searchParams.set('token',token);url.searchParams.set('callback',callback);script.src=url.href;script.referrerPolicy='no-referrer';document.head.append(script);
 });}
 async function encodeImage(file){
  if(!file)return null;
  if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>5*1024*1024)throw new Error('Elige una imagen JPG, PNG o WebP de hasta 5 MB.');
  const bitmap=await createImageBitmap(file);
  try{
   const ratio=Math.min(1,1600/Math.max(bitmap.width,bitmap.height));const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*ratio));canvas.height=Math.max(1,Math.round(bitmap.height*ratio));const ctx=canvas.getContext('2d');ctx.fillStyle='#f5f5f0';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',.82));if(!blob||blob.size>2*1024*1024)throw new Error('La imagen sigue siendo demasiado grande. Prueba con otra más pequeña.');
   const bytes=new Uint8Array(await blob.arrayBuffer());let binary='';for(let i=0;i<bytes.length;i+=8192)binary+=String.fromCharCode(...bytes.subarray(i,i+8192));return {type:'image/jpeg',base64:btoa(binary)};
  }finally{bitmap.close();}
 }
 let pending=null;
 async function submit(kind,data,file){
  if(!ready())throw new Error('El envío todavía no está activado.');
  const image=await encodeImage(file),signature=await hash(JSON.stringify({kind,data,image}));const storageKey='recetario-pending-delivery-'+kind;
  if(!pending||pending.signature!==signature){let stored;try{stored=JSON.parse(localStorage.getItem(storageKey));}catch{}pending=stored?.signature===signature&&/^[a-f0-9]{64}$/.test(stored.token||'')?stored:{signature,token:random(32),startedAt:Date.now()-2500};try{localStorage.setItem(storageKey,JSON.stringify(pending));}catch{}}
  // Check an earlier uncertain attempt before uploading again (also after a reload).
  try{const previous=await receipt(pending.token);if(previous){try{localStorage.removeItem(storageKey);}catch{}return previous;}}catch{}
  if(Date.now()-pending.startedAt>86400000)throw new Error('Esta propuesta necesita comprobarse antes de reenviarla. Conserva tu borrador y contacta con el recetario.');
  const payload={version:1,kind,data,image,token:pending.token,startedAt:pending.startedAt,website:''};
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
  try{await fetch(endpoint(),{method:'POST',mode:'no-cors',credentials:'omit',referrerPolicy:'no-referrer',body:new URLSearchParams({payload:JSON.stringify(payload)}),signal:controller.signal});}catch{/* The server may still have accepted the request. Only the receipt decides. */}finally{clearTimeout(timeout);}
  for(let i=0;i<6;i++){try{const result=await receipt(pending.token);if(result){try{localStorage.removeItem(storageKey);}catch{}return result;}}catch{}await new Promise(resolve=>setTimeout(resolve,1800));}
  throw new Error('No se ha confirmado la recepción. Tu borrador sigue guardado. Puedes reintentar: se comprobará el envío anterior para evitar duplicados.');
 }
 function ready(){return config().enabled===true&&Boolean(endpoint())&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config().privacyContact||'');}
 window.RecetarioDelivery=Object.freeze({ready,submit});
})();
