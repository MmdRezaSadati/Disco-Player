
function searchAjax(event){
        let inputValue = event.target.value;
        const keywords = inputValue.toLowerCase().split();
        const filteredObjects = dataMusics.filter((Music)=>{
                        return Music.title.toLowerCase().includes(keywords)||
                        Music.artist.map().toLowerCase().includes(keywords)||
                        Music.persianNameArtist.map().toLowerCase().includes(keywords)||
                        Music.persianTitile.toLowerCase().includes(keywords)                
        });
linkMusic(filteredObjects);
}