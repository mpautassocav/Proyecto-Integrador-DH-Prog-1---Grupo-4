var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let albumid = queryStringObj.get("id")

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + albumid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
        let contenedorname = document.querySelector('.albumName');
        contenedorname.innerHTML +=  `${datos.title}`;
        let contenedorartista = document.querySelector('.artistName');
        contenedorartista.innerHTML +=  
        `<a href="detailArtist.html?id=${datos.artist.id}">
        <div class="canciones">${datos.artist.name}</a>`;
        let contenedorimg = document.querySelector('#imageArtist');
        contenedorimg.innerHTML += `<img src="${datos.cover}" id="track-image">`;
        let contenedorDate = document.querySelector('.releaseDate');
        contenedorDate.innerHTML += `${datos.release_date}`;
    })
    .catch(function(error){ 
        console.log(error)
    })