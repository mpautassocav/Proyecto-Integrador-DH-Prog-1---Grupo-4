var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);
let artistid = queryStringObj.get("id")

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

    })

/* fin api-deezer */