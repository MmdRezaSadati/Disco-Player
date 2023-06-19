//<!-------- creat Music Slider --------> //
function creatMusics(jsonDataMusic){
    var music = document.createElement("div");
    music.className ="item item-music";
    music.addEventListener("click",()=>{PlayMusic(jsonDataMusic.id)})
        musicCover = document.createElement("img");
        musicCover.src = "./img/playList/" + jsonDataMusic.image +".png";
        songName = document.createElement("p");
        songName.className = "songName";
        songName.innerHTML =  jsonDataMusic.title;
        artistName = document.createElement("p");
        artistName.className = "artistName";
        artistName.innerHTML =  jsonDataMusic.artist;
    music.style.background = "linear-gradient(0deg, rgba(54, 54, 54, 0.75), rgba(54, 54, 54, 0.75)),url(./img/playList/"+jsonDataMusic.image+".png)no-repeat 50%"
    music.appendChild(musicCover);
    music.appendChild(songName);
    music.appendChild(artistName);
    return music;
}
linkMusic(dataMusics);
function linkMusic(Data){
    let sliderElement = document.querySelector(".owl-carousel1");
    sliderElement.innerHTML = "";
    Data.map((music)=>{
        let Music = creatMusics(music);
        sliderElement.appendChild(Music);
    })
}