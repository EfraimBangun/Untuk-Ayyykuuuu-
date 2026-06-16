// =========================================
// HAPPY BIRTHDAY AYYYKUUU ❤️
// PREMIUM CAKE SCRIPT
// =========================================

// ELEMENTS
const age =
document.querySelector(".age");
const blowBtn = document.getElementById("blowBtn");
const countdownBox = document.getElementById("countdownBox");
const countdownText = document.getElementById("countdownText");

const message = document.getElementById("message");
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

const petChat = document.getElementById("petChat");

const fortuneText =
document.getElementById("fortuneText");

const loveCount =
document.getElementById("loveCount");

const cake =
document.getElementById("cake");

// =========================================
// MUSIC
// =========================================

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML = "⏸️";

    }else{

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

});

// =========================================
// COUNTDOWN
// =========================================

blowBtn.addEventListener("click",()=>{

    startCountdown();

});

function startCountdown(){

    countdownBox.style.display="flex";

    let count = 3;

    countdownText.innerHTML = count;

    const timer = setInterval(()=>{

        count--;

        countdownText.innerHTML = count;

        if(count <= 0){

            clearInterval(timer);

            countdownText.innerHTML = "🎂";

            setTimeout(()=>{

                countdownBox.style.display="none";

                blowCandles();

            },1000);

        }

    },1000);

}

// =========================================
// BLOW CANDLES
// =========================================

function blowCandles(){

    const flames =
    document.querySelectorAll(".flame");

    flames.forEach(flame=>{

        createSmoke(flame);

        flame.remove();

    });

    cake.style.animation =
    "cakeShake .3s infinite";

    setTimeout(()=>{

        cake.style.animation =
        "cakeFloat 3s ease infinite";

    },2000);

    celebration();

}

// =========================================
// SMOKE
// =========================================

function createSmoke(element){

    const smoke =
    document.createElement("div");

    smoke.innerHTML = "☁️";

    smoke.style.position="fixed";

    smoke.style.left =
    element.getBoundingClientRect().left+"px";

    smoke.style.top =
    element.getBoundingClientRect().top+"px";

    smoke.style.fontSize="30px";

    smoke.style.zIndex="9999";

    document.body.appendChild(smoke);

    smoke.animate([

        {
            transform:'translateY(0)',
            opacity:1
        },

        {
            transform:'translateY(-80px)',
            opacity:0
        }

    ],{

        duration:2000

    });

    setTimeout(()=>{

        smoke.remove();

    },2000);

}

// =========================================
// CELEBRATION
// =========================================

function celebration(){
    age.style.display = "block";

    age.classList.add("show");

    message.style.display="block";

    giftBox.style.display="block";

    confetti({

        particleCount:300,

        spread:180,

        origin:{y:0.6}

    });

    let fireworks = 0;

    const fireworkInterval = setInterval(()=>{

        confetti({

            particleCount:150,

            spread:120,

            startVelocity:60,

            origin:{
                x:Math.random(),
                y:Math.random()*0.5
            }

        });

        fireworks++;

        if(fireworks >= 10){

            clearInterval(fireworkInterval);

        }

    },600);

}

// =========================================
// OPEN GIFT
// =========================================

const openGiftBtn =
document.getElementById("openGiftBtn");

openGiftBtn.addEventListener("click",()=>{

    giftMessage.style.display="block";

    confetti({

        particleCount:500,

        spread:360

    });

});

// =========================================
// RANDOM FORTUNE
// =========================================

const fortunes = [

    "🌸 Hari ini akan menjadi hari yang indah",

    "💖 Kamu lebih hebat dari yang kamu kira",

    "✨ Banyak kebahagiaan menunggumu",

    "🧸 Tetap jadi diri sendiri ya",

    "🌷 Senyummu membuat dunia lebih cerah",

    "🎂 Semoga semua impianmu tercapai",

    "❤️ Kamu pantas mendapatkan hal-hal baik",

    "🐰 Jangan lupa bahagia hari ini",

    "🐻 Kamu luar biasa",

    "🍓 Hari yang manis untuk orang yang manis"

];

function randomFortune(){

    fortuneText.innerHTML =

    fortunes[
        Math.floor(
            Math.random() *
            fortunes.length
        )
    ];

}

// =========================================
// LOVE JAR
// =========================================

let totalLove = 0;

function addLove(){

    totalLove++;

    loveCount.innerHTML =
    totalLove + " ❤️";

    createLoveBurst();

}

// =========================================
// LOVE BURST
// =========================================

function createLoveBurst(){

    for(let i=0;i<15;i++){

        const heart =
        document.createElement("div");

        heart.className="floating";

        heart.innerHTML="💖";

        heart.style.left=
        (window.innerWidth/2)+"px";

        heart.style.animationDuration=
        "3s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },3000);

    }

}

// =========================================
// FLOATING EMOJIS
// =========================================

const emojis = [

    "❤️",
    "💖",
    "💕",
    "🌸",
    "✨",
    "⭐",
    "🧸",
    "🐻",
    "🐰",
    "🎂",
    "🍰",
    "🍓"

];

function createFloatingEmoji(){

    const emoji =
    document.createElement("div");

    emoji.className="floating";

    emoji.innerHTML =

    emojis[
        Math.floor(
            Math.random() *
            emojis.length
        )
    ];

    emoji.style.left =
    Math.random()*100+"vw";

    emoji.style.animationDuration =
    (Math.random()*4+4)+"s";

    document.body.appendChild(emoji);

    setTimeout(()=>{

        emoji.remove();

    },8000);

}

setInterval(createFloatingEmoji,500);

// =========================================
// PET CHAT
// =========================================

const petMessages = [

    "🐻 Happy Birthday Ayyykuuu",

    "🐰 Semoga selalu bahagia",

    "🧸 Jangan lupa tersenyum",

    "🌸 Hari ini spesial",

    "✨ Kamu hebat banget",

    "💖 Kami ikut merayakan",

    "🎂 Tiup lilinnya ya",

    "🍓 Semoga harimu manis",

    "💕 Banyak cinta untukmu",

    "🌷 Tetap semangat"

];

setInterval(()=>{

    if(!petChat) return;

    petChat.innerHTML =

    petMessages[
        Math.floor(
            Math.random() *
            petMessages.length
        )
    ];

},5000);

// =========================================
// EXTRA HEART RAIN
// =========================================

setInterval(()=>{

    if(Math.random()>0.5){

        createFloatingEmoji();

    }

},1000);

// =========================================
// SECRET EASTER EGG
// DOUBLE CLICK TITLE
// =========================================

const title =
document.querySelector(".title");

if(title){

    title.addEventListener("dblclick",()=>{

        confetti({

            particleCount:400,

            spread:300

        });

        alert(
            "💖 Ayyykuuu adalah bintang hari ini ✨"
        );

    });

}

// =========================================
// CAKE SHAKE STYLE
// =========================================

const style =
document.createElement("style");

style.innerHTML = `

@keyframes cakeShake{

0%{
transform:
translateX(-50%)
rotate(-2deg);
}

50%{
transform:
translateX(-50%)
rotate(2deg);
}

100%{
transform:
translateX(-50%)
rotate(-2deg);
}

}

`;

document.head.appendChild(style);

// =========================================
// AUTO START FLOATING
// =========================================

for(let i=0;i<20;i++){

    setTimeout(()=>{

        createFloatingEmoji();

    },i*200);

}