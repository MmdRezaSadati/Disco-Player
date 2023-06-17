var songName =document.getElementById("songName");
var artistName =document.getElementById("artistName");
var coverSong =document.querySelector(".cover-song");
let flagMusic = false;
//<!-------- Start musicPlayer -------->//
function PlayMusic(musicID){
    MusiPlayer.pause();
    PlayPause.src ="./img/Icons/pause.svg";
    var musicPlay = dataMusics.findIndex(MyProduct=>{return MyProduct.id == musicID });
    MusiPlayer.src = "./Diagram-Musics/"+ dataMusics[musicPlay].musicSrc;
    MusiPlayer.play();
    flagMusic = true
    coverSong.style.background = "url(./img/playList/"+dataMusics[musicPlay].image+".png)no-repeat 50% 50% "
    coverSong.style.backgroundSize = "cover";
    songName.innerHTML = dataMusics[musicPlay].title;
    console.log(songName.innerHTML);
    artistName.innerHTML = dataMusics[musicPlay].artist;
    console.log(artistName.innerHTML);
}
//<!-------- End musicPlayer -------->//
//<!-------- Start Play Button -------->//

function playButton(){
    if(flagMusic == true){
        MusiPlayer.pause();
        flagMusic = false;
        PlayPause.src ="./img/Icons/play.svg";
    }else
    if(flagMusic == false){
        MusiPlayer.play();
        flagMusic = true;
        PlayPause.src ="./img/Icons/pause.svg";
        console.log("play");
    }
}