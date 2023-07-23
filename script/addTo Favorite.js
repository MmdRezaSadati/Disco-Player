function addToFavoriteList(){
	/* get element id*/
    let musicId = this.getAttribute("data-id");
    let musicElement = dataMusics.find(Id => Id.id == musicId);
    if(musicElement.likedStatus == true) {
        likeCheckBox.classList.remove("liked-label");
        let i = document.querySelector("#likeCheckBox > i");
        i.className = "bi bi-heart";
        console.log(false);
        musicElement.likedStatus = false;
    }else if (musicElement.likedStatus == false) {
        console.log(true);
        musicElement.likedStatus = true;
        likeCheckBox.classList.add("liked-label");
        let i = document.querySelector("#likeCheckBox > i");
        i.className = "bi bi-heart-fill";
    }
    musicLocalStorage(musicElement,musicId)
}
function musicLocalStorage(musicElement,musicId){
	/* set element data for favorite list*/
    let elementId = musicElement.id;
    let Image =musicElement.image;
    let Title =musicElement.title;
    let Artist = musicElement.artist;
    let src = musicElement.musicSrc;
    var likeStatus =musicElement.likedStatus;
	let favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
    if(!favoriteList){
        favoriteList=[];
    }
	let favoriteIndex = favoriteList.findIndex(Music=> Music.elementId == musicId);
    if(favoriteIndex != -1){
        musicElement.likedStatus = false;
		favoriteList.splice(favoriteIndex,1);
	}else{
        musicElement.likedStatus = true;
		favoriteList.push({elementId,Image,Title,Artist,src,});
	}
	localStorage.setItem("favoriteList",JSON.stringify(favoriteList));
    linkFavoriteList(favoriteList);
}