var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let artistid = queryStringObj.get("id")

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + artistid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
       
        let contenedorartist = document.querySelector('.containerArtist');
        contenedorartist.innerHTML += `<div id="imageArtistt"></div>
            <div id="textArtist">
                <div class="albumName">Canserbero</div>
                <div class="artistName"> 1.994.932 Fans</div>
            </div>`;
    })
    .catch(function(error){
        console.log(error)
    })

/* fin api-deezer */