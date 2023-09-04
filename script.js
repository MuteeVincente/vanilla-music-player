const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover= document.querySelector('#cover');


//Songs titles

const songs = ['bad idea','vampire','Enchated']

//Keeping track of the songs

let songIndex = 1;

//Initially load song info DOM

loadSong(songs(songIndex));

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`; 
    cover.src = `images/${song}.jpg`;
}

//Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(playing){
        pauseSong()
    }else{
        pauseSong()
    }
})

