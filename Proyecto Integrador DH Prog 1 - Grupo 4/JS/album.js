var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let trackid = queryStringObj.get("id")
console.log(albumid)
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + albumid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
        let contenedorname = document.querySelector('.albumName');
        contenedorname.innerHTML +=  `${datos.title}`;
        let contenedorartista = document.querySelector('.artistName');
        contenedorartista.innerHTML +=  `${datos.artist.name}`;
        let contenedorimg = document.querySelector('#imageArtist');
        contenedorimg.innerHTML += `<img src="${datos.album.cover}" id="track-image">`;
        let contenedordate = document.querySelector('.genreName');
        contenedordate.innerHTML += `${datos.album.title}`+" - "+`${datos.album.release_date}`;
        let contenedordur = document.querySelector('.duracion');
        contenedordur.innerHTML += `${datos.duration}`+'"';
    })
    .catch(function(error){
        console.log(error)
    })
