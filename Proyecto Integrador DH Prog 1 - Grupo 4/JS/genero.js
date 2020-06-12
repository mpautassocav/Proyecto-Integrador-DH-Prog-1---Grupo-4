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
        
    })
    .catch(function(error){
        console.log(error)
    })

/* fin api-deezer */