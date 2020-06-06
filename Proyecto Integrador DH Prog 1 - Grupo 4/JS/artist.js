var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let artistid = queryStringObj.get("id")
console.log(artistid)
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + artistid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let contenedorname = document.querySelector('.albumName');
        contenedorname.innerHTML +=  `${datos.name}`;
        let contenedorimg = document.querySelector('#imageArtistt');
        console.log(datos)
        contenedorimg.innerHTML += `<img src="${datos.picture}" id="track-image">`;
        let contenedorfans = document.querySelector('.artistName');
        function format(n, sep) {
            sep = sep || "."; // Default to period as decimal separator
     
            return n.toLocaleString().split(sep)[0]
                + sep
        }
        contenedorfans.innerHTML +=  format(datos.nb_fan,"   ") +" Fans";
    })
    .catch(function(error){
        console.log(error)
    })

/* fin api-deezer */