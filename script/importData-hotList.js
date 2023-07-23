var hotList = document.querySelector(".hot-list");
function creaHotItem(jsonDataMusic) {
    var hotItem = document.createElement("div");
    hotItem.className = "hot-item rounded-pill";
    hotItem.addEventListener("click", () => { showSinglePage(jsonDataMusic.id) });
    var hotItemImg = document.createElement("img");
    hotItemImg.src = "./img/playList/" + jsonDataMusic.image;
    let divHotItem = document.createElement("div");
    divHotItem.innerHTML = `<p class="songName">${jsonDataMusic.title}</p><div><img src="./img/Icons/headphone green.svg" width="16px" alt="headphone green"> <p class="artistName">${jsonDataMusic.artist}</p></div>`;
    hotList.appendChild(hotItem);
    hotItem.appendChild(hotItemImg);
    hotItem.appendChild(divHotItem);
}
for (i = 0; i < 5; i++) {
    var RandomString = Math.floor(Math.random() * dataMusics.length);
    creaHotItem(dataMusics[RandomString]);
}