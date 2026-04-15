/* CURSOR (SAFE) */
const cursor=document.querySelector(".cursor");
if(cursor){
document.addEventListener("mousemove",e=>{
  cursor.style.left=e.clientX+"px";
  cursor.style.top=e.clientY+"px";
});
}

/* TYPING */
const words=["Web Developer","Python Learner","AI Enthusiast"];
let i=0,j=0,del=false;

function type(){
let el=document.getElementById("typing");
if(!el) return;

let cur=words[i];
el.textContent=cur.substring(0,j);

if(!del && j<cur.length){j++;}
else if(del && j>0){j--;}
else{
  del=!del;
  if(!del) i=(i+1)%words.length;
}

setTimeout(type,del?50:100);
}
type();

/* SCROLL */
function goProject(){
let sec=document.getElementById("projects");
if(sec){
sec.scrollIntoView({behavior:"smooth"});
}
}

/* 🎵 MUSIC FIX */
const music=document.getElementById("music");

if(music){
document.body.addEventListener("click",()=>{
  music.play().catch(()=>{}); // prevent error
},{once:true});
}

/* FADE */
const faders=document.querySelectorAll('.fade');
window.addEventListener('scroll',()=>{
faders.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add('show');
}
});
});

/* PARTICLES (RESPONSIVE FIX) */
const canvas=document.getElementById("particles");

if(canvas){
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

let particles=[];

for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*3,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x+=p.dx;
p.y+=p.dy;

ctx.fillStyle="#ff2e2e";
ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(animate);
}
animate();
}
