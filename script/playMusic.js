var songName =document.getElementById("songName");
var artistName =document.getElementById("artistName");
var MusiPlayer =document.getElementById("MusiPlayer");
var PlayPause =document.getElementById("PlayPause");
var coverSong =document.querySelector(".cover-song");
let flagMusic = false;
//<!-------- Start musicPlayer -------->//
function PlayMusic(musicID){
    MusiPlayer.pause();
    PlayPause.src ="./img/Icons/play.svg";
    var musicPlay = dataMusics.findIndex(MyProduct=>{return MyProduct.id == musicID });
    MusiPlayer.src = "./Diagram-Musics/"+ dataMusics[musicPlay].musicSrc;
    flagMusic = false;
    coverSong.style.background = "url(./img/playList/"+dataMusics[musicPlay].image+".png)no-repeat 50% 50% ";
    
    console.log(coverSong.style.background);
    coverSong.style.backgroundSize = "cover";
    console.log("Played : "+songName.innerHTML+"; By : "+artistName.innerHTML + " !");
    songName.innerHTML = dataMusics[musicPlay].title;
    artistName.innerHTML = dataMusics[musicPlay].artist;
}
//<!-------- End musicPlayer -------->//
//<!-------- Start Play Button -------->//

function playButton(){
    if(coverSong.style.background == 'url("img/Icons/play\ Button.png")no-repeat 50% 50%  , #666666'){
        alert('pleas Choose one song');
        console.log("not have bug!")
    }
    else{
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
}