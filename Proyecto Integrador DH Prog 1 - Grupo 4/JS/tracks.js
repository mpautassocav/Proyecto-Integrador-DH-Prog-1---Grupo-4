var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let trackid = queryStringObj.get("id")
console.log(trackid)
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + trackid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
        let contenedorname = document.querySelector('.albumName');
        contenedorname.innerHTML +=  `${datos.title}`;
        let contenedorartista = document.querySelector('.artistName');
        contenedorartista.innerHTML += 
        `<a href="detailArtist.html?id=${datos.artist.id}" class="artistName">
        <div class="canciones">${datos.artist.name}</a>`;
        let contenedorimg = document.querySelector('#imageArtist');
        contenedorimg.innerHTML += `<img src="${datos.album.cover}" id="track-image">`;
        let contenedordate = document.querySelector('.genreName');
        contenedordate.innerHTML += `<a href="detailAlbum.html?id=${datos.album.id}">
        <div class="canciones">${datos.album.title}</a>`;
        let contenedordur = document.querySelector('.duracion');
        function secondsToString(seconds) {
            var minute = Math.floor((seconds / 60) % 60);
            minute = (minute < 10)? '0' + minute : minute;
            var second = seconds % 60;
            second = (second < 10)? '0' + second : second;
            return minute + ':' + second;
        }
        let boton = document.querySelector('#me-gusta');
        boton.onclick = function () {
            window.localStorage.setItem('meGustan', JSON.stringify(pelisArrayEnLocal));
            //me traigo las pelis de localStorage
            let pelisEnLocal = window.localStorage.getItem('meGustan');
            //transformar a js ese string que esta en localStorage
            let pelisArrayEnLocal = JSON.parse(pelisEnLocal);
            // tengo que validar que no tenga nada, y si es asi creo un array desde cero
            if (!pelisArrayEnLocal) {
                pelisArrayEnLocal = []
            }
            //ahora le guardo la nueva peli
            pelisArrayEnLocal.push(data);
        } //NO LOGRAMOS HACERLO FUNCIONAR PARA ARMARLO DE CERO
        var largo = datos.duration
        contenedordur.innerHTML += secondsToString(largo);
        let contenedoraudio = document.querySelector('.audio');
        contenedoraudio.innerHTML +=  `<div class="repro"><audio controls>
        <source src="${datos.preview}" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio></div>`;
    })
    .catch(function(error){
        console.log(error)
    })

/* fin api-deezer */