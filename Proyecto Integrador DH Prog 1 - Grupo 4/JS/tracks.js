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
        var largo = datos.duration
        contenedordur.innerHTML += secondsToString(largo);
        let contenedoraudio = document.querySelector('.audio');
        contenedoraudio.innerHTML +=  `<div class="repro"><audio controls>
        <source src="${datos.preview}" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio></div>`;

      let añadir = document.querySelector('#me-gusta')
      añadir.onclick = function () {
          //me traigo las pelis de localStorage
          let tracksEnLocal = window.localStorage.getItem('track')
          //transformar a js ese string que esta en localStorage
          let tracksArrayEnLocal = JSON.parse(tracksEnLocal);
         // tengo que validar que no tenga nada, y si es asi creo un array desde cero
          if (!tracksArrayEnLocal){
              tracksArrayEnLocal = []
          }
        //ahora guarda el track
          tracksArrayEnLocal.push(datos)
          window.localStorage.setItem('track', JSON.stringify(tracksArrayEnLocal))
          console.log(tracksEnLocal)
          console.log(tracksArrayEnLocal)
      }

    })
    .catch(function(error){
        console.log(error)
    })

/* fin api-deezer */