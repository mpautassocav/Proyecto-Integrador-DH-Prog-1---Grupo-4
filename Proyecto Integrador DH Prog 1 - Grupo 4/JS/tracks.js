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
        `<a href="detailArtist.html?id=${datos.artist.id}">
        <div class="canciones">${datos.artist.name}</a>`;
        let contenedorimg = document.querySelector('#imageArtist');
        contenedorimg.innerHTML += `<img src="${datos.album.cover}" id="track-image">`;
        let contenedordate = document.querySelector('.genreName');
        contenedordate.innerHTML += `${datos.album.title}`+`${datos.album.release_date}`;
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
        contenedoraudio.innerHTML +=  `<audio controls>
        <source src="${datos.preview}" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>`;
    })
    .catch(function(error){
        console.log(error)
    })

/* fin api-deezer */