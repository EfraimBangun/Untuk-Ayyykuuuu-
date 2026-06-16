// ==========================================
// HAPPY BIRTHDAY AYYYKUUU ❤️
// PREMIUM SCRIPT 2026
// ==========================================

const startBtn = document.getElementById("startBtn");
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("mainContent");

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

const fortuneText = document.getElementById("fortuneText");
const loveCount = document.getElementById("loveCount");

// ==========================================
// OPEN WEBSITE
// ==========================================

startBtn.addEventListener("click", () => {

    loadingScreen.style.opacity = "0";

    setTimeout(() => {

        loadingScreen.style.display = "none";

        mainContent.style.display = "block";

        createWelcomeBurst();

    }, 800);

});

// ==========================================
// LETTER TEXT
// ==========================================

const surat = `

Hai Ayyykuuu ❤️

Selamat Ulang Tahun Ke-17 🎂✨

Hari ini adalah hari yang sangat spesial.

Karena hari ini dunia sedang merayakan
kehadiran seseorang yang sangat berarti.

Terima kasih karena sudah hadir.

Terima kasih untuk semua senyum,
perhatian,
dan kebahagiaan yang pernah kamu berikan.

Aku bangga padamu.

Aku bangga dengan semua perjuanganmu.

Di umur yang baru ini...

Semoga kamu selalu sehat 🌸

Semoga kamu selalu bahagia 💖

Semoga semua impianmu menjadi nyata ✨

Jangan terlalu keras pada dirimu sendiri yaa 🥺

Karena kamu sudah hebat.

Karena kamu sudah kuat.

Dan karena kamu pantas mendapatkan
semua hal baik di dunia ini ❤️

Happy Birthday Ayyykuuu 🎂💕

Aku Sayang Kamu ❤️
`;

let typingIndex = 0;

// ==========================================
// OPEN ENVELOPE
// ==========================================

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    createConfetti();

    setTimeout(() => {

        letter.classList.add("show");

        typeWriter();

    }, 1000);

}, { once:true });

// ==========================================
// TYPEWRITER
// ==========================================

function typeWriter(){

    if(typingIndex < surat.length){

        typingText.innerHTML =
        surat.substring(0, typingIndex + 1) +
        '<span class="cursor">|</span>';

        typingIndex++;

        setTimeout(typeWriter, 28);

    }

}

// ==========================================
// FLOATING EMOJI
// ==========================================

const emojis = [

    "❤️",
    "💖",
    "💕",
    "💗",
    "💘",
    "💝",
    "🌸",
    "🌷",
    "🌹",
    "✨",
    "⭐",
    "🧸",
    "🐻",
    "🐰",
    "🐱",
    "🎂",
    "🍓",
    "🍰"

];

function createFloatingEmoji(){

    const item = document.createElement("div");

    item.className = "floating";

    item.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];

    item.style.left =
    Math.random() * 100 + "vw";

    item.style.animationDuration =
    (Math.random() * 4 + 4) + "s";

    document.body.appendChild(item);

    setTimeout(() => {

        item.remove();

    }, 8000);

}

setInterval(createFloatingEmoji, 350);

// ==========================================
// CONFETTI
// ==========================================

function createConfetti(){

    const colors = [

        "#ff4f8b",
        "#ffc0cb",
        "#ffb6c1",
        "#ffd700",
        "#87cefa",
        "#ffffff"

    ];

    for(let i=0; i<120; i++){

        const confetti =
        document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
        Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

// ==========================================
// WELCOME BURST
// ==========================================

function createWelcomeBurst(){

    for(let i=0; i<60; i++){

        setTimeout(() => {

            createFloatingEmoji();

        }, i * 50);

    }

}

// ==========================================
// MUSIC
// ==========================================

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicBtn.innerHTML = "⏸️";

    }else{

        music.pause();

        musicBtn.innerHTML = "🎵";

    }

});

// ==========================================
// RANDOM MESSAGE
// ==========================================

const pesanList = [

    "🌸 Kamu cantik hari ini",
    "💖 Aku bangga padamu",
    "✨ Jangan lupa tersenyum",
    "🐻 Kamu spesial banget",
    "🎂 Hari ini harimu",
    "💕 Jangan sedih yaa",
    "🌷 Kamu hebat banget",
    "🍓 Kamu lucu hari ini",
    "🧸 Peluk virtual untuk kamu",
    "❤️ Aku sayang kamu"

];

function randomMessage(){

    fortuneText.innerHTML =
    pesanList[
        Math.floor(
            Math.random() *
            pesanList.length
        )
    ];

}

// ==========================================
// LOVE JAR
// ==========================================

let totalLove = 0;

function addLove(){

    totalLove++;

    loveCount.innerHTML =
    totalLove + " ❤️";

    createMiniLoveExplosion();

}

// ==========================================
// LOVE EXPLOSION
// ==========================================

function createMiniLoveExplosion(){

    for(let i=0; i<12; i++){

        const heart =
        document.createElement("div");

        heart.className =
        "floating";

        heart.innerHTML = "💖";

        heart.style.left =
        (window.innerWidth / 2) + "px";

        heart.style.bottom = "100px";

        heart.style.animationDuration =
        "2s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2000);

    }

}

// ==========================================
// BEAR MESSAGE
// ==========================================

const bearMessages = [

    "🐻 Aku ikut ngucapin yaa",
    "💕 Jangan lupa bahagia",
    "🌸 Senyum dong",
    "🧸 Hari ini spesial",
    "✨ Kamu hebat banget"

];

const petChat =
document.querySelector(".pet-chat");

setInterval(() => {

    if(!petChat) return;

    petChat.innerHTML =

    bearMessages[
        Math.floor(
            Math.random() *
            bearMessages.length
        )
    ];

}, 5000);

// ==========================================
// AUTO HEART RAIN
// ==========================================

setInterval(() => {

    if(Math.random() > 0.6){

        createFloatingEmoji();

    }

}, 1000);

// ==========================================
// SECRET EASTER EGG
// DOUBLE CLICK TITLE
// ==========================================

const title =
document.querySelector(".main-title");

if(title){

    title.addEventListener("dblclick", () => {

        alert(
            "🥺❤️ Aku Sayang Ayyykuuu Banyak Banget ❤️🥺"
        );

        createConfetti();

    });

}

// ==========================================
// CURSOR EFFECT
// ==========================================

document.addEventListener("mousemove", e => {

    if(Math.random() > 0.95){

        const sparkle =
        document.createElement("div");

        sparkle.className =
        "floating";

        sparkle.innerHTML = "✨";

        sparkle.style.left =
        e.pageX + "px";

        sparkle.style.top =
        e.pageY + "px";

        sparkle.style.animationDuration =
        "2s";

        document.body.appendChild(sparkle);

        setTimeout(() => {

            sparkle.remove();

        }, 2000);

    }

});