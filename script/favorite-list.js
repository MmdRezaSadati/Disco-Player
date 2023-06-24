
function CreatFavoriteList(favoriteList){
    var FavoriteItem = document.createElement("div");
    FavoriteItem.addEventListener("click",()=>{PlayMusic(favoriteList.id)})
    FavoriteItem.className ="item item-music liked-item";
        var i = document.createElement("i");
        i.className ="bi bi-heart-fill";
        var FavoriteItemCover = document.createElement("img");
        FavoriteItemCover.src = "./img/playList/" + favoriteList.image;
        var songName = document.createElement("p");
        songName.className = "songName";
        songName.innerHTML =  favoriteList.title;
        var artistName = document.createElement("p");
        artistName.className = "artistName";
        artistName.innerHTML =  favoriteList.musicSrc;
    FavoriteItem.style.background = "linear-gradient(0deg, rgba(54, 54, 54, 0.75), rgba(54, 54, 54, 0.75)),url(./img/playList/"+favoriteList.image+")no-repeat 50%";
    FavoriteItem.appendChild(i);
    FavoriteItem.appendChild(FavoriteItemCover);
    FavoriteItem.appendChild(songName);
    FavoriteItem.appendChild(artistName);
    console.log(FavoriteItem)
    return FavoriteItem;
}
function linkFavoriteList(favoriteLocalSt){
    let row = document.querySelector("#favoritePage > .row");
    row.innerHTML = "";
    favoriteLocalSt.map((favoriteList)=>{
        let favoriteListItme = CreatFavoriteList(favoriteList);
        console.log(favoriteListItme)
        row.appendChild(favoriteListItme);
    })
}

function getLocalSt(){
    const favoriteLocalSt = JSON.parse(localStorage.getItem("favoriteList"));
    linkFavoriteList(favoriteLocalSt)
}
getLocalSt();