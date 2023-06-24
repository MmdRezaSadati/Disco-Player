function creatMusicBanner(jsonDataMusic){
    var banner = document.createElement("div");
    banner.addEventListener("click",()=>{showSinglePage(jsonDataMusic.id)});
    banner.className ="item item-banner";
    var divCaption = document.createElement("div");

        musicCover = document.createElement("img");
        musicCover.src = "./img/playList/" + jsonDataMusic.image;
        songName = document.createElement("p");
        songName.className = "songName";
        songName.innerHTML =  jsonDataMusic.title;
        artistName = document.createElement("p");
        artistName.className = "artistName";
        artistName.innerHTML =  jsonDataMusic.artist;
        bannerCaption = document.createElement("p");
        bannerCaption.className = "bannerCaption";
        bannerCaption.innerHTML =  jsonDataMusic.caption;
    banner.style.background = "linear-gradient(0deg, rgba(54, 54, 54, 0.75), rgba(54, 54, 54, 0.75)),url(./img/playList/"+jsonDataMusic.image+")no-repeat 50%"
    banner.appendChild(musicCover);
    divCaption.appendChild(artistName);
    divCaption.appendChild(songName);
    divCaption.appendChild(bannerCaption);
    banner.appendChild(divCaption)
    return banner;
}
function linkMusicBanner(Data){
    let sliderElement = document.querySelector(".owl-carousel2");
    sliderElement.innerHTML = "";
    Data.map((music)=>{
        let Music = creatMusicBanner(music);
        // console.log(Music);
        sliderElement.appendChild(Music);
    })
}
linkMusicBanner(dataMusics);