var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let albumid = queryStringObj.get("id")
console.log(albumid)
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + albumid)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
    })
    .catch(function(error){ 
        console.log(error)
    })