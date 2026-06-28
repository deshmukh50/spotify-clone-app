const audioPlayer = document.getElementById("audioPlayer");

const playerImage = document.getElementById("playerImage");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");

const playPauseBtn = document.getElementById("playPauseBtn");
const volumeRange = document.getElementById("volumeRange");

const songs = {

    7: {
        title: "Bairan",
        artist: "Banjaare",
        image: "bairan song trending.jpg",
        file: "Bairan - Bairan (128 kbps).mp3"
    },

    8: {
        title: "Jab Talak",
        artist: "Arijit Singh",
        image: "trending song.jpg",
        file: "Jab Talak Cocktail 2 128 Kbps.mp3"
    },

    9: {
        title: "Sheesha",
        artist: "Mitta Ror, Swara Verma",
        image: "sheesha trending song.jpg",
        file: "Sheesha (Aakhya Mai Aakh Ghali Jo Bairan) - Sheesha (Aakhya Mai Aakh Ghali Jo Bairan) (128 kbps).mp3"
    },

    10: {
        title: "Sadi Sun",
        artist: "Harsh Nussi",
        image: "Sadi-Sun-Punjabi song.jpg",
        file: "Sadi Sun Harsh Nussi 128 Kbps.mp3"
    },

    11: {
        title: "Jaiye sajna",
        artist: "Satinder Sartaaj,Jasmine Sandlas,Shashwat Sachdev",
        image: "trending song2.jpg",
        file: "Jaiye Sajana Dhurandhar The Revenge 128 Kbps.mp3"
    },

     25: {
        title: "Phir Milenge chalte chalte",
        artist: "Salim-Sulaiman, Soun Nigma, Jaideep Sahni",
        image: "phir milenge chalte chalte.jpg",
        file: "Phir Milenge Chalte Chalte Rab Ne Bana Di Jodi 128 Kbps.mp3"
    },

    26: {
        title: "Dil ka jo hal hai",
        artist: "Abhijeet, Shreya Ghoshal",
        image: "dil kaa jo hal hai.jpg",
        file: "Dil Kaa Jo Haal Hai Besharam 128 Kbps.mp3"
    },

    27: {
        title: "Hey Shona",
        artist: "Vishal-Shekhar, Shaan, Javed Akhtar, Sunidhi Chauhan",
        image: "hey shona.jpg",
        file: "Hey Shona Ta Ra Rum Pum 128 Kbps.mp3"
    },

    28:{
        title:"Masakali",
        artist:"Prasoon Joshi, A.R. Rahman, Mohit Chauhan",
        image:"masakali.jpg",
        file:"Masakali Delhi 6 128 Kbps.mp3"
    },

    29: {
        title: "Ye Ishq Hai",
        artist: "Pritam, Shreya Ghoshal, Irshad Kamil",
        image: "ye ishq hai.jpg",
        file: "Ye Ishq Hai Jab We Met 128 Kbps.mp3"
    },

    30: {
        title: "Om Namo Bhagavate Vasudevaya",
        artist: "Saurabh Mittal, Twinkle Mittal",
        image: "om namo bhagavate vasudevaya.jpeg",
        file: "Om Namo Bhagavate Vasudevaya Mahavatar Narsimha 128 Kbps.mp3"
    },

    31: {
        title: "Mere Kanha",
        artist: "Jaya Kishori, Jubin Nautiyal",
        image: "devotional mere kanha.jpg",
        file: "Mere Kanha Jaya Kishori 128 Kbps.mp3"
    },

    32: {
        title: "Ganjana Maharaj Bavani",
        artist: "Swapnil Bandodkar",
        image: "ganjana maharaj bavani.webp",
        file: "Gajanan-Maharaj-Bavani.mp3"
    },

    33: {
        title: "Meri Maa Ke Barabar Koi Nahi",
        artist: "Jubin Nautiyal",
        image: "Meri-Maa-Ke-Barabar-Koi-Nahi-Hindi-2021-20220307121001-500x500.jpg",
        file: "Meri Maa Ke Barabar Koi Nahi Jubin Nautiyal 128 Kbps.mp3"
    },

    34: {
        title: "Ram Siya Ram",
        artist: "Sachet Tandon, Parama Tandon",
        image: "Ram-Siya-Ram-From-Adipurush-Hindi-2023-20230530192919-500x500.jpg",
        file: "Ram Siya Ram Adipurush 128 Kbps.mp3"
    },

    36: {
        title: "Shaky shaky",
        artist: "Sanju Rathod, Isha Malviya",
        image: "Shaky-Marathi-2025.jpg",
        file: "Shaky shaky.mp3"
    },

    37: {
        title: "Man Dhavtay Tuzya Magh",
        artist: "Radhika Bhide",
        image: "man dhavtay tuzya magh.jpg",
        file: "Mann Dhaavataya - 128 Kbps.mp3"
    },

    38: {
        title: "Jhumka",
        artist: "Sanju Rathod,Sonali Sonawane",
        image: "jhumka marathi.jpg",
        file: "jhumka marathi.mp3"
    },

    39: {
        title: "Teri Meri Yariyaan",
        artist: "Harshwardhan Wavare, Amitraj",
        image: "teri meri yariyaan.jpg",
        file: "Teri-Meri-Yaariyan-Sai-Ankush-Sonalee-Amitraj.mp3"
    },

    40: {
        title: "Mitwa",
        artist: "Amitraj, Shankar-Mahadeven, Jaanvee Prabhu-Arora",
        image: "mitwaaa marathi song.jpg",
        file: "MItwa marathi song.mp3"
    },

    41: {
        title: "Aaruz",
        artist: "Asim Azhar,Noor,Khan,Madhurxo",
        image: "aaruz indian best.jpg",
        file: "Aarzu - DjBaap.mp3"
    },

    42: {
        title: "Inaam",
        artist: "Jasleen Royal, Badshah, Ansh Chahal",
        image: "inaam india best.jpg",
        file: "Inaam Jasleen Royal 128 Kbps.mp3"
    },

    43: {
        title: "Zulfein",
        artist: "Mehul Mahesh, Dj AYnik",
        image: "zulfein india best.jpg",
        file: "Zulfein - Mehul Mahesh Prod By Dj AYnik (Official Visualizer Video) Latest Hindi Romantic Song 2025 - (320 Kbps).mp3"
    },

    44: {
        title: "Barged",
        artist: "Sufr, Arpit Bala, Toorjo dey",
        image: "barged india best.jpg",
        file: "sufr ft Arpit Bala, toorjo dey - bargad.mp3"
    },

    45: {
        title: "Nadaaniyan",
        artist: "Akshath",
        image: "nadaaniyan india best.jpg",
        file: "Nadaaniyan Akshath 128 Kbps.mp3"
    },

    46: {
        title: "On the Floor",
        artist: "Jennifer Lopez , Pitbull",
        image: "pop song.jpg",
        file: "Jennifer Lopez, Pitbull - On The Floor.mp3"
    },

    47: {
        title: "That's so true",
        artist: "Gracie Abrams",
        image: "pop song 2.jpg",
        file: "Gracie Abrams - That’s So True.mp3"
    },

    48: {
        title: "Espresso",
        artist: "Sabrina Carpenter",
        image: "pop song 3.jpg",
        file: "Sabrina Carpenter - Espresso.mp3"
    },

    49: {
        title: "Ride it",
        artist: "Jay Sean",
        image: "pop song 4.jpg",
        file: "Jay Sean - Ride It.mp3"
    },

    50: {
        title: "Dandelions",
        artist: "Ruth B.",
        image: "pop song 5.jpg",
        file: "Ruth B. - Dandelions.mp3"
    },

    52: {
        title: "Boyfriend",
        artist: "Karan Aujila, Ikky",
        image: "boyfriend punjabi song.jpg",
        file: "Boyfriend P Pop Culture 128 Kbps.mp3"
    },

    53: {
        title: "Kahyaal",
        artist: "Talwiinder, NDS",
        image: "kahyaaal punjabi.jpg",
        file: "Khayaal Talwiinder 128 Kbps.mp3"
    },

    54: {
        title: "Nal Nachan",
        artist: "Shashwat Sachdev,Afsana Khan,Reble, Irshad Kamil",
        image: "nal nachna punjabi.jpg",
        file: "Naal Nachna Dhurandhar 128 Kbps.mp3"
    },

    55: {
        title: "Gal Sun",
        artist: "Sabat Batin, Rackstar",
        image: "gal sun punjabi.jpg",
        file: "Gal Sun [fwMtW9OIWC8].mp3"
    },

    56: {
        title: "Sadi Sun",
        artist: "Harsh Nussi",
        image: "sadi sun punjabi.jpg",
        file: "Sadi Sun Harsh Nussi 128 Kbps.mp3"
    },
};

let currentSongId = null;

/* Play Song */

document.querySelectorAll(".playMusic").forEach(btn => {

    btn.addEventListener("click", function (e) {

        e.stopPropagation();

        const songId = this.id;

        if (!songs[songId]) {
            alert("Song not added in JS yet");
            return;
        }

        currentSongId = songId;

        audioPlayer.src = songs[songId].file;

        playerTitle.textContent = songs[songId].title;

        playerArtist.textContent = songs[songId].artist;

        playerImage.src = songs[songId].image;

        audioPlayer.play();

        playPauseBtn.innerHTML =
        '<span class="material-symbols-outlined">pause</span>';

    });

});

/* Play Pause Button */

playPauseBtn.addEventListener("click", () => {

    if (!audioPlayer.src) return;

    if (audioPlayer.paused) {

        audioPlayer.play();

        playPauseBtn.innerHTML =
        '<span class="material-symbols-outlined">pause</span>';

    }
    else {

        audioPlayer.pause();

        playPauseBtn.innerHTML =
        '<span class="material-symbols-outlined">play_arrow</span>';

    }

});

/* Volume */

volumeRange.value = 0.7;
audioPlayer.volume = 0.7;

function updateVolumeBar() {

    const value = volumeRange.value * 100;

    volumeRange.style.background =
    `linear-gradient(to right,
    white 0%,
    white ${value}%,
    #535353 ${value}%,
    #535353 100%)`;

}

updateVolumeBar();

volumeRange.addEventListener("input", () => {

    audioPlayer.volume = volumeRange.value;

    updateVolumeBar();

});

/* Progress Bar */

const progress = document.querySelector(".progress");

audioPlayer.addEventListener("timeupdate", () => {

    if (audioPlayer.duration) {

        const percentage =
            (audioPlayer.currentTime / audioPlayer.duration) * 100;

        progress.style.width = percentage + "%";
    }

});

/* Click Progress Bar */

const progressBar =
document.querySelector(".progress-bar");

progressBar.addEventListener("click", (e) => {

    const width = progressBar.clientWidth;

    const clickX = e.offsetX;

    const duration = audioPlayer.duration;

    audioPlayer.currentTime =
    (clickX / width) * duration;

});

/* Song Duration*/

audioPlayer.addEventListener("ended", () => {

    playPauseBtn.innerHTML =
    '<span class="material-symbols-outlined">play_arrow</span>';

});
const currentTimeEl =
document.getElementById("currentTime");

const totalDurationEl =
document.getElementById("totalDuration");

audioPlayer.addEventListener("timeupdate", () => {

    if(audioPlayer.duration){

        const progressPercent =
        (audioPlayer.currentTime /
        audioPlayer.duration) * 100;

        progress.style.width =
        progressPercent + "%";

        // Current Time
        let currentMin =
        Math.floor(audioPlayer.currentTime / 60);

        let currentSec =
        Math.floor(audioPlayer.currentTime % 60);

        if(currentSec < 10){
            currentSec = "0" + currentSec;
        }

        currentTimeEl.textContent =
        `${currentMin}:${currentSec}`;

    }

});
audioPlayer.addEventListener("loadedmetadata", () => {

    let durationMin =
    Math.floor(audioPlayer.duration / 60);

    let durationSec =
    Math.floor(audioPlayer.duration % 60);

    if(durationSec < 10){
        durationSec = "0" + durationSec;
    }

    totalDurationEl.textContent =
    `${durationMin}:${durationSec}`;

});
/*Favorite button*/
const favBtn =
document.getElementById("favBtn");

favBtn.addEventListener("click",()=>{

    favBtn.classList.toggle("favorite-active");

});

const favorites = [];

favBtn.addEventListener("click", () => {

    if(!currentSongId) return;

    if(favorites.includes(currentSongId)){

        favorites.splice(
            favorites.indexOf(currentSongId),
            1
        );

        favBtn.classList.remove("favorite-active");

    }else{

        favorites.push(currentSongId);

        favBtn.classList.add("favorite-active");
    }

    console.log(favorites);

});
/* ==========================
   NEXT PREV SHUFFLE REPEAT
========================== */

const songIds = Object.keys(songs);

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");

let repeatMode = false;


/* Play Song Function */

function playSong(songId){

    currentSongId = songId;

    audioPlayer.src = songs[songId].file;

    playerTitle.textContent =
    songs[songId].title;

    playerArtist.textContent =
    songs[songId].artist;

    playerImage.src =
    songs[songId].image;

    audioPlayer.play();

    playPauseBtn.innerHTML =
    '<span class="material-symbols-outlined">pause</span>';
}


/* NEXT SONG */

nextBtn.addEventListener("click", () => {

    let currentIndex =
    songIds.indexOf(currentSongId);

    currentIndex++;

    if(currentIndex >= songIds.length){
        currentIndex = 0;
    }

    playSong(songIds[currentIndex]);
});


/* PREVIOUS SONG */

prevBtn.addEventListener("click", () => {

    let currentIndex =
    songIds.indexOf(currentSongId);

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = songIds.length - 1;
    }

    playSong(songIds[currentIndex]);
});


/* SHUFFLE */

shuffleBtn.addEventListener("click", () => {

    const randomIndex =
    Math.floor(Math.random() * songIds.length);

    playSong(songIds[randomIndex]);
});


/* REPEAT */

repeatBtn.addEventListener("click", () => {

    repeatMode = !repeatMode;

    if(repeatMode){

        repeatBtn.style.color = "#1db954";

    }else{

        repeatBtn.style.color = "white";

    }
});


/* SONG END */

audioPlayer.addEventListener("ended", () => {

    if(repeatMode){

        audioPlayer.currentTime = 0;
        audioPlayer.play();

    }else{

        let currentIndex =
        songIds.indexOf(currentSongId);

        currentIndex++;

        if(currentIndex >= songIds.length){
            currentIndex = 0;
        }

        playSong(songIds[currentIndex]);
    }

});
