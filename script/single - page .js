const homePage = document.getElementById('homePage');
const musicSinglePage = document.getElementById('musicSinglePage');
const sideBar = document.querySelector('.sideBar');
const closeBtn = document.getElementById('closeBtn');
const musicContainer = document.querySelector('.music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const singerName = document.getElementById('singerName');
const categoryName = document.getElementById('categoryName');
const LikeNumber = document.getElementById('LikeNumber');
const musicCaption = document.getElementById('music-caption');
const musicText = document.getElementById('music-text');
const downloadMusic = document.getElementById('downloadMusic');
const cover = document.getElementById('cover');
var songIndex ;
// Show
function showSinglePage(musicID){
    musicSinglePage.style.display="block";
    homePage.style.display="none";
    sideBar.style.display="none";
    songIndex = dataMusics.findIndex(MyProduct=>{return MyProduct.id == musicID });
    loadSong(dataMusics[songIndex]);
}
// hide
function hideSinglePage(){
    musicSinglePage.style.display="none";
    homePage.style.display="block";
    sideBar.style.display="block";
}
// Initially load song details into DOM
// Update song details
function loadSong(song) {
    title.innerHTML = song.persianTitile +" از " + song.persianNameArtist ;
    singerName.innerHTML = song.persianNameArtist;
    categoryName.innerHTML = song.category;
    LikeNumber.innerHTML = song.likes;
    musicCaption.innerHTML = song.caption;
    musicText.innerHTML = song.musicText;
    downloadMusic.href = "Diagram-Musics/"+song.musicSrc;
    audio.src = "Diagram-Musics/"+song.musicSrc;
    cover.style.background = "url('img/playList/"+song.image+"'";
    cover.style.backgroundSize = "cover";
}
// Play song
function playSong() {
    musicContainer.classList.add("played");
    audio.play();
}
// Pause song
function pauseSong() {
    musicContainer.classList.remove("played");
    audio.pause();
}
// Previous song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(dataMusics[songIndex]);

    playSong();
}
// Next song
function nextSong() {
    songIndex++;

    if (songIndex > dataMusics.length - 1) {
        songIndex = 0;
    }

    loadSong(dataMusics[songIndex]);

    playSong();
}
// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}
// Event listeners
playBtn.addEventListener('click', () => {
    if(musicContainer.className == "music-container played") {
        pauseSong();
        musicContainer.classList.remove("played");
    }else if(musicContainer.className != "music-container played") {
        playSong();
        musicContainer.classList.add("played");
    }
});

closeBtn.addEventListener('click', hideSinglePage);
// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
// Time/song update
audio.addEventListener('timeupdate', updateProgress);
// Click on progress bar
progressContainer.addEventListener('click', setProgress);
// Song ends
audio.addEventListener('ended', nextSong);