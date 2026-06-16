const startBtn =
document.getElementById("startBtn");

const loading =
document.getElementById("loading-screen");

const content =
document.getElementById("main-content");

const music =
document.getElementById("bgMusic");

/* ===================== */
/* OPEN WEBSITE */
/* ===================== */

if(startBtn){

startBtn.addEventListener("click",()=>{

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

content.style.display="block";

content.style.opacity="0";

setTimeout(()=>{

content.style.transition=
"opacity 1.5s ease";

content.style.opacity="1";

},50);

},800);

music?.play().catch(()=>{});

launchConfetti();

});

}

/* ===================== */
/* CONFETTI */
/* ===================== */

function launchConfetti(){

if(typeof confetti==="undefined")
return;

confetti({
particleCount:150,
spread:120,
origin:{y:0.7}
});

setTimeout(()=>{

confetti({
particleCount:120,
spread:180,
origin:{x:0.2,y:0.6}
});

},400);

setTimeout(()=>{

confetti({
particleCount:120,
spread:180,
origin:{x:0.8,y:0.6}
});

},800);

setTimeout(()=>{

confetti({
particleCount:250,
spread:360,
origin:{y:0.5}
});

},1200);

}

/* ===================== */
/* FLOATING ITEMS */
/* ===================== */

const cuteItems=[

"❤️",
"💖",
"💕",
"💗",
"💘",
"🌸",
"✨",
"🎀",
"🧸",
"🎈"

];

function createFloatingItem(){

const item=
document.createElement("div");

item.className=
"floating-heart";

item.innerHTML=
cuteItems[
Math.floor(
Math.random()*
cuteItems.length
)
];

item.style.left=
Math.random()*100+"vw";

item.style.fontSize=
(Math.random()*25+18)+"px";

item.style.animationDuration=
(Math.random()*5+4)+"s";

item.style.opacity=
Math.random()*0.5+0.4;

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},10000);

}

setInterval(
createFloatingItem,
350
);

/* ===================== */
/* INITIAL EFFECT */
/* ===================== */

window.addEventListener("load",()=>{

for(let i=0;i<25;i++){

setTimeout(()=>{

createFloatingItem();

},i*100);

}

});

/* ===================== */
/* STICKERS */
/* ===================== */

function createSticker(){

const stickers=[

"🧸",
"🌸",
"🎀",
"💖",
"✨"

];

const sticker=
document.createElement("div");

sticker.className=
"sticker";

sticker.innerHTML=
stickers[
Math.floor(
Math.random()*
stickers.length
)
];

sticker.style.left=
Math.random()*95+"vw";

sticker.style.top=
Math.random()*95+"vh";

sticker.style.fontSize=
(Math.random()*20+30)+"px";

document.body.appendChild(sticker);

}

for(let i=0;i<8;i++){

createSticker();

}

/* ===================== */
/* SPARKLES */
/* ===================== */

function createSparkle(){

const sparkle=
document.createElement("div");

sparkle.className=
"sparkle";

sparkle.innerHTML=
Math.random()>0.5
? "✨"
: "⭐";

sparkle.style.left=
Math.random()*100+"vw";

sparkle.style.fontSize=
(Math.random()*15+12)+"px";

sparkle.style.animationDuration=
(Math.random()*8+5)+"s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},12000);

}

setInterval(
createSparkle,
700
);

/* ===================== */
/* PHOTO CLICK EFFECT */
/* ===================== */

document.querySelectorAll(".photo img")
.forEach(img=>{

img.addEventListener("click",()=>{

if(typeof confetti==="undefined")
return;

confetti({

particleCount:80,
spread:90,
origin:{y:0.7}

});

});

});

/* ===================== */
/* MUSIC AUTO PAUSE */
/* ===================== */
