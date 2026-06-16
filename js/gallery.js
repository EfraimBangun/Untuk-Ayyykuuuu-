/* ===================================
   GALLERY.JS
   Cute Birthday Gallery Premium
=================================== */

const photos =
document.querySelectorAll(".photo img");

const photoCards =
document.querySelectorAll(".photo");

const lightbox =
document.getElementById("lightbox");

const preview =
document.getElementById("preview");

const closeBtn =
document.getElementById("closeBtn");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const slideBtn =
document.getElementById("slideBtn");

const music =
document.getElementById("galleryMusic");

let current = 0;
let slideshow = null;

/* ==========================
LIGHTBOX
========================== */

photos.forEach((img,index)=>{

img.addEventListener("click",()=>{

current=index;

showImage();

lightbox.style.display="flex";

});

});

function showImage(){

preview.src =
photos[current].src;

}

nextBtn.addEventListener("click",()=>{

current++;

if(current >= photos.length){

current = 0;

}

showImage();

});

prevBtn.addEventListener("click",()=>{

current--;

if(current < 0){

current = photos.length - 1;

}

showImage();

});

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

stopSlideShow();

});

lightbox.addEventListener("click",(e)=>{

if(e.target === lightbox){

lightbox.style.display="none";

stopSlideShow();

}

});

/* ==========================
SLIDESHOW
========================== */

slideBtn.addEventListener("click",()=>{

if(slideshow){

stopSlideShow();

}else{

startSlideShow();

}

});

function startSlideShow(){

slideBtn.innerHTML =
"⏸️ Pause";

slideshow = setInterval(()=>{

current++;

if(current >= photos.length){

current = 0;

}

showImage();

},2500);

}

function stopSlideShow(){

clearInterval(slideshow);

slideshow = null;

slideBtn.innerHTML =
"▶️ Slideshow";

}

/* ==========================
KEYBOARD CONTROL
========================== */

document.addEventListener("keydown",(e)=>{

if(lightbox.style.display === "flex"){

if(e.key === "ArrowRight"){

nextBtn.click();

}

if(e.key === "ArrowLeft"){

prevBtn.click();

}

if(e.key === "Escape"){

closeBtn.click();

}

}

});

/* ==========================
FLOATING HEARTS
========================== */

const heartEmoji = [

"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"🌸",
"🎀"

];

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML =
heartEmoji[
Math.floor(
Math.random() *
heartEmoji.length
)
];

heart.style.position =
"fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top =
"110vh";

heart.style.fontSize =
(Math.random()*20+20)+"px";

heart.style.zIndex =
"999";

heart.style.pointerEvents =
"none";

heart.style.opacity =
Math.random()*0.5 + 0.5;

heart.style.transition =
"transform 8s linear, opacity 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform =
`translateY(-120vh)
translateX(${Math.random()*200-100}px)
rotate(720deg)`;

heart.style.opacity = "0";

},100);

setTimeout(()=>{

heart.remove();

},8500);

}

setInterval(createHeart,500);

/* ==========================
FLOATING SPARKLES
========================== */

const sparkleEmoji = [

"✨",
"⭐",
"🌟"

];

function createSparkle(){

const sparkle =
document.createElement("div");

sparkle.innerHTML =
sparkleEmoji[
Math.floor(
Math.random() *
sparkleEmoji.length
)
];

sparkle.style.position =
"fixed";

sparkle.style.left =
Math.random()*100+"vw";

sparkle.style.top =
Math.random()*100+"vh";

sparkle.style.fontSize =
(Math.random()*12+12)+"px";

sparkle.style.pointerEvents =
"none";

sparkle.style.opacity =
"0";

sparkle.style.zIndex =
"1";

document.body.appendChild(sparkle);

sparkle.animate([

{
opacity:0,
transform:"scale(0)"
},

{
opacity:1,
transform:"scale(1.5)"
},

{
opacity:0,
transform:"scale(0)"
}

],{

duration:2500

});

setTimeout(()=>{

sparkle.remove();

},2500);

}

setInterval(createSparkle,700);

/* ==========================
SCROLL ANIMATION
========================== */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:
"translateY(80px)"
},

{
opacity:1,
transform:
"translateY(0)"
}

],{

duration:1000,
fill:"forwards"

});

}

});

},{
threshold:.15
});

photoCards.forEach(card=>{

observer.observe(card);

});

/* ==========================
AUTO MUSIC
========================== */

document.addEventListener("click",()=>{

if(music){

music.play()
.catch(()=>{});

}

},{
once:true
});

/* ==========================
PHOTO COUNTER
========================== */

const counter =
document.querySelector(".memory-counter");

if(counter){

counter.innerHTML =
`💖 ${photos.length} Foto • Ribuan Kenangan • Satu Kamu`;

}

/* ==========================
TITLE EFFECT
========================== */

const title =
document.querySelector(".header h1");

if(title){

const original =
title.textContent;

title.textContent = "";

let i = 0;

function typing(){

if(i < original.length){

title.textContent +=
original.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

}

/* ==========================
PARALLAX
========================== */

window.addEventListener("mousemove",(e)=>{

const x =
(e.clientX /
window.innerWidth - .5) * 20;

const y =
(e.clientY /
window.innerHeight - .5) * 20;

document.querySelectorAll(".sticker")
.forEach(sticker=>{

sticker.style.transform =
`translate(${x}px,${y}px)`;

});

});

/* ==========================
CONFETTI EFFECT
========================== */

function createConfetti(){

for(let i=0;i<80;i++){

const confetti =
document.createElement("div");

confetti.innerHTML =
["💖","💕","❤️","✨","🌸"]
[Math.floor(Math.random()*5)];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100+"vw";

confetti.style.top =
"-50px";

confetti.style.fontSize =
(Math.random()*15+15)+"px";

confetti.style.pointerEvents =
"none";

confetti.style.zIndex =
"9999";

document.body.appendChild(confetti);

confetti.animate([

{
transform:
"translateY(0)"
},

{
transform:
`translateY(${window.innerHeight+100}px)
rotate(720deg)`
}

],{

duration:
Math.random()*4000+4000

});

setTimeout(()=>{

confetti.remove();

},8000);

}

}

window.addEventListener("load",()=>{

setTimeout(()=>{

createConfetti();

},1000);

});

/* ==========================
WELCOME MESSAGE
========================== */

window.addEventListener("load",()=>{

console.log(
"❤️ Gallery Loaded Successfully ❤️"
);

});