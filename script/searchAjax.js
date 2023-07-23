
function searchAjax(event) {
        let inputValue = event.target.value;
        const keywords = inputValue.toLowerCase().split();
        const filteredObjects = dataMusics.filter((Music) => {
                return keywords.every((keyword) =>
                        Music.title.toLowerCase().includes(keyword) ||
                        Music.artist.some((artistname) => artistname.toLowerCase().includes(keyword)) ||
                        Music.persianNameArtist.some((artistname) => artistname.includes(keyword)) ||
                        Music.persianTitile.includes(keyword) ||
                        Music.category.includes(keyword)
                )
        });
        linkMusic(filteredObjects);
}