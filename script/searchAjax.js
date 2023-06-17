
function searchAjax(){
	fillteredData = dataMusics.filter(function(Music) {
        return Music.title.indexOf(searchInput.value) !=-1 &&
                Music.persianTitile.indexOf(searchInput.value) !=-1
    });
    discoGrid(fillteredData);
}