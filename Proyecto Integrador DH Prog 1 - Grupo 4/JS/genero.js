var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let genreid = queryStringObj.get("id")
console.log(genreid)
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + genreid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
        let contenedorimg = document.querySelector('#imageArtist');
        contenedorimg.innerHTML += `<img src="${datos.picture}" id="track-image">`;
        let contenedornombre = document.querySelector('.nombreGenero');
        contenedornombre.innerHTML += `${datos.name}`;
        
    })
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + genreid + "/artists")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
        let nombreArtists = datos.data;
        let contenedorgenreartist = document.querySelector('#ranking_tracks');
        for (const nombreArtist of nombreArtists) {
            contenedorgenreartist.innerHTML += `
            <div class="canciones" > <a href="DETAIL-TRACK.html"><div id="track"> ${nombreArtist.name} </div></a> <img src="Imagenes/image-solid.svg" height="35px" id="track-image"></div>`;
        }
       
    })
    .catch(function(error){
        console.log(error)
    })

/* fin api-deezer */