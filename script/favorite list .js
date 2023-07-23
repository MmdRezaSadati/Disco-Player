function CreatFavoriteList(favoriteList){
    var FavoriteItem = document.createElement("div");
    FavoriteItem.addEventListener("click",()=>{PlayMusic(favoriteList.elementId)})
    FavoriteItem.className ="item item-music liked-item";
        var i = document.createElement("i");
        i.className ="bi bi-heart-fill";
        i.setAttribute("data-id",favoriteList.elementId);
        i.addEventListener("click",addToFavoriteList);
        var FavoriteItemCover = document.createElement("img");
        FavoriteItemCover.src = "./img/playList/" + favoriteList.Image;
        var songName = document.createElement("p");
        songName.className = "songName";
        songName.innerHTML =  favoriteList.Title;
        var artistName = document.createElement("p");
        artistName.className = "artistName";
        artistName.innerHTML =  favoriteList.Artist;
    FavoriteItem.style.background = "linear-gradient(0deg, rgba(54, 54, 54, 0.75), rgba(54, 54, 54, 0.75)),url(./img/playList/"+favoriteList.Image+")no-repeat 50%";
    FavoriteItem.appendChild(i);
    FavoriteItem.appendChild(FavoriteItemCover);
    FavoriteItem.appendChild(songName);
    FavoriteItem.appendChild(artistName);
    return FavoriteItem;
}

function linkFavoriteList(favoriteLocalSt){
    let row = document.querySelector("#favoritePage > .row");
    row.innerHTML = "";
    favoriteLocalSt.map((favoriteList)=>{
        let favoriteListItme = CreatFavoriteList(favoriteList);
        row.appendChild(favoriteListItme);
    })
}

function getLocalSt(){
    let favoriteLocal = JSON.parse(localStorage.getItem("favoriteList"));
    linkFavoriteList(favoriteLocal)
}
getLocalSt()