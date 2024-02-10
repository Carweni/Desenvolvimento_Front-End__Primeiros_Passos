const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){
    const url = "http://localhost:3000/artists?name_like=${searchTerm}"
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(results) {
    resultPlaylist.classList.add('hidden');
    const artistImage = document.getElementById("artist-img");
    const artistName = document.getElementById("artist-name");
  
    results.forEach((element) => {
      artistImage.src = element.urlImg;
      artistName.innerText = element.name;
    });
    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();

    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})
