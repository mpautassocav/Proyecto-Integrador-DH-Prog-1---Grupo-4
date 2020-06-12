/* var queryString = window.location.search;
var queryStringObj = new URLSearchParams(queryString);
let genreid = queryStringObj.get("id")
console.log(genreid)
fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/" + genreid + "/artists")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
        
    })
    .catch(function(error){
        console.log(error)
    }) */