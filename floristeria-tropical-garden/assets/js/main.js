const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function sendWhatsApp(ev){
 ev.preventDefault();
 const occasion=document.getElementById('occasion').value;
 const budget=document.getElementById('budget').value;
 const style=document.getElementById('style').value || 'a definir';
 const msg=`Hola Tropical Garden, quiero hacer un encargo.\nOcasión: ${occasion}\nPresupuesto: ${budget}\nEstilo: ${style}\nFecha/entrega:`;
 window.open('https://wa.me/34868958061?text='+encodeURIComponent(msg),'_blank');
}
window.sendWhatsApp=sendWhatsApp;
