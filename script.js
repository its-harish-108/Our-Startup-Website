const $=s=>document.querySelector(s),R=matchMedia("(prefers-reduced-motion:reduce)").matches;
const P=[
{n:"Spice Route",d:"Restaurant ordering app with a live menu, cart and table booking.",t:["Menu","Cart","Booking"],c:["#ff7a2f","#ffc371","#1c0f0a","#fff1e6"],k:"",m:["Menu","Offers","Book"],h:"Taste the route.",s:"Fresh food, ordered in three taps.",a:"Order now",f:[["🍛","Live menu","Browse dishes by category."],["🛵","Fast delivery","Track every order."],["📅","Book a table","Reserve in seconds."]]},
{n:"FitPulse",d:"Fitness dashboard that tracks workouts, goals and daily streaks.",t:["Dashboard","Charts","Goals"],c:["#39ff88","#00d4ff","#07120e","#e8fff3"],k:"sq",m:["Workouts","Plans","Pricing"],h:"Train smarter.",s:"Workouts, goals and streaks in one place.",a:"Start free",f:[["📈","Live stats","Charts that update as you move."],["🎯","Goals","Set targets and hit them."],["🔥","Streaks","Stay consistent every day."]]},
{n:"ShopNest",d:"Modern online store with smart search, cart and quick checkout.",t:["Store","Search","Checkout"],c:["#ff4f81","#ffa6c1","#fff7fa","#2a1020"],k:"center",m:["Shop","Sale","Cart"],h:"Find things you'll love.",s:"Curated products, delivered to your door.",a:"Shop now",f:[["🔍","Smart search","Find any product fast."],["🛒","Easy cart","Edit your order anytime."],["💳","Quick checkout","Pay in a few taps."]]},
{n:"FolioX",d:"Bold portfolio site for designers and agencies who want to stand out.",t:["Portfolio","Gallery","Motion"],c:["#f5d90a","#ff9f1c","#0e0e0e","#f4f4f0"],k:"bold",m:["Work","About","Contact"],h:"Work that speaks.",s:"A portfolio that makes first impressions count.",a:"See work",f:[["🖼️","Gallery","Show your best pieces."],["✍️","Case studies","Tell the story behind each one."],["📬","Get in touch","Let clients reach you easily."]]}];
const demo=p=>{const[a,b,g,f]=p.c;return`<div class="d ${p.k}" style="--da:${a};--db:${b};--dbg:${g};--dfg:${f}"><div class="dn"><b>${p.n}</b>${p.m.map(x=>`<span>${x}</span>`).join("")}</div><div class="dh"><div><h3>${p.h}</h3><p>${p.s}</p><a>${p.a}</a></div><div class="dv"></div></div><div class="df">${p.f.map(x=>`<div><em>${x[0]}</em><b>${x[1]}</b><p>${x[2]}</p></div>`).join("")}</div></div>`};
$("#pj").innerHTML=P.map((p,i)=>`<article class="pn" style="background:linear-gradient(135deg,${p.c[0]},${p.c[1]});animation-delay:${i%2*.15}s"><div class="pv"><span></span><span></span><span></span></div><h3>${p.n}</h3><p>${p.d}</p><div class="tg">${p.t.map(t=>`<i>${t}</i>`).join("")}</div><button class="btn s" data-i="${i}">Open demo</button></article>`).join("");
const ov=$("#ov"),dm=$("#dm"),cl=()=>{ov.classList.remove("on");document.body.style.overflow=""};
$("#pj").onclick=e=>{const b=e.target.closest("button");if(!b)return;const p=P[b.dataset.i];dm.innerHTML=demo(p);$("#url").textContent="harekrishna.demo/"+p.n.toLowerCase();dm.scrollTop=0;ov.classList.add("on");document.body.style.overflow="hidden"};
$("#x").onclick=cl;ov.onclick=e=>{if(e.target===ov)cl()};addEventListener("keydown",e=>{if(e.key=="Escape")cl()});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll(".pn").forEach(e=>io.observe(e));
addEventListener("scroll",()=>$("#nav").classList.toggle("sc",scrollY>30),{passive:true});
$("#mb").onclick=()=>$("#menu").classList.toggle("open");$("#menu").onclick=()=>$("#menu").classList.remove("open");
const cv=$("#cv"),cx=cv.getContext("2d");let W,H,ps=[],col="91,61,245",mx=-999,my=-999;
const sc=()=>{col=getComputedStyle(document.documentElement).getPropertyValue("--p").trim()};
$("#th").onclick=()=>{const h=document.documentElement,c=h.dataset.theme||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");h.dataset.theme=c=="dark"?"light":"dark";sc()};
matchMedia("(prefers-color-scheme:dark)").addEventListener("change",sc);sc();
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;ps=Array.from({length:Math.min(80,W/16|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:Math.random()-.5,vy:Math.random()-.5}))}
function fr(){cx.clearRect(0,0,W,H);for(const p of ps){p.x+=p.vx*.5;p.y+=p.vy*.5;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const d=Math.hypot(p.x-mx,p.y-my);if(d<140){p.x+=(p.x-mx)/d*1.3;p.y+=(p.y-my)/d*1.3}cx.fillStyle=`rgba(${col},.7)`;cx.beginPath();cx.arc(p.x,p.y,1.8,0,6.3);cx.fill()}
for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){const d=Math.hypot(ps[i].x-ps[j].x,ps[i].y-ps[j].y);if(d<130){cx.strokeStyle=`rgba(${col},${.28*(1-d/130)})`;cx.beginPath();cx.moveTo(ps[i].x,ps[i].y);cx.lineTo(ps[j].x,ps[j].y);cx.stroke()}}
if(!R)requestAnimationFrame(fr)}
rs();fr();addEventListener("resize",rs);
const hr=$("#tilt");addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;if(!R)hr.style.transform=`translate(${(e.clientX/innerWidth-.5)*-26}px,${(e.clientY/innerHeight-.5)*-26}px)`});
const wd=["web apps","dashboards","online stores","startup MVPs"],ty=$("#ty");let wi=0,ci=0,dl=false;
function tp(){const w=wd[wi];ty.textContent=w.slice(0,ci);if(!dl){if(ci<w.length){ci++;return setTimeout(tp,90)}dl=true;return setTimeout(tp,1500)}if(ci>0){ci--;return setTimeout(tp,45)}dl=false;wi=(wi+1)%wd.length;setTimeout(tp,300)}
if(!R)setTimeout(tp,1400);
