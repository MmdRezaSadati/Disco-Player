const likeIcon = document.querySelector("#likeCheckBox > .bi")
function addToFavoriteList(){
    var musicId = likeCheckBox.getAttribute("data-id")
    var musicElement = dataMusics.find(el=> el.id == musicId);
    if(musicElement.likedStatus == false){
        localStFavorite(musicElement);
        likeIcon.classList.remove("bi-heart")
        likeIcon.classList.add("bi-heart-fill");
        likeCheckBox.classList.add("liked-label");
        musicElement.likedStatus = true;
    }else if(musicElement.likedStatus == true){
        deleteFromLocalSt(musicElement);
        likeIcon.classList.add("bi-heart")
        likeIcon.classList.remove("bi-heart-fill");
        likeCheckBox.classList.remove("liked-label");
        musicElement.likedStatus = false;
    }
}

// Creat Local Storage For Favorite List
function localStFavorite(){
    var musicId = likeCheckBox.getAttribute("data-id")
    var musicElement = dataMusics.find(el=> {return el.id == musicId});
    var id = musicElement.id;
    var image = musicElement.image;
    var title = musicElement.title;
    var artist = musicElement.artist;
    var musicSrc = musicElement.musicSrc;
    //
    var favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
    if(!favoriteList){
        favoriteList =[];
    }
    MusicIndex = favoriteList.findIndex(music =>{ music.elemenetId == musicId});
    if(MusicIndex == -1){
        favoriteList.push({id,image,title,artist,musicSrc})
    }else if(MusicIndex == 1){
        deleteFromLocalSt(musicElement)
    }
    localStorage.setItem("favoriteList",JSON.stringify(favoriteList));
    linkFavoriteList(favoriteList)
}
function deleteFromLocalSt(musicElement){
    musicElement.likedStatus = false;
}