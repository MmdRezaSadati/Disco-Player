//<!-------- creat Music Slider --------> //
function discoGrid(jsonData){
	for(i in jsonData){
        linkMusic(jsonData,i);
	}
}
function creatMusics(jsonDataMusic){
    var music = document.createElement("div");
    music.className ="item";
    music.addEventListener("click",()=>{PlayMusic(jsonDataMusic.id)})
        musicCover = document.createElement("img");
        musicCover.src = "./img/playList/" + jsonDataMusic.image +".png";
        songName = document.createElement("p");
        songName.className = "songName";
        songName.innerHTML =  jsonDataMusic.title;
        artistName = document.createElement("p");
        artistName.className = "artistName";
        artistName.innerHTML =  jsonDataMusic.artist;
    music.style.background = "linear-gradient(0deg, rgba(54, 54, 54, 0.75), rgba(54, 54, 54, 0.75)),url(../img/playList/"+jsonDataMusic.image+".png)no-repeat "
    music.appendChild(musicCover);
    music.appendChild(songName);
    music.appendChild(artistName);
    return music;
}
discoGrid(dataMusics);

function linkMusic(jsonData,i){
    let Music = creatMusics(jsonData[i]);
    carousel.appendChild(Music);
}