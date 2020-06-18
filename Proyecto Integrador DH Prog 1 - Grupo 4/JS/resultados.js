window.onload = function (){
    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo lo que mandé por el formulario de busqueda
    let busqueda = objetoQuery.get('filtro');
    
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q='+busqueda)
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(datos){
            console.log(datos)
            let resultados = datos.data;
            let tuBusqueda = document.querySelector("#tuBusqueda");
            for (const resultado of resultados) {
                tuBusqueda.innerHTML +=   
                `<div class="canciones" >
                 <a href="DETAIL-TRACK.html?id=${resultado.id}"> <div id="track"> ${resultado.title} </div> </a> 
                 <a href="DETAIL-TRACK.html?id=${resultado.id}"> <img src="${resultado.album.cover}" height="45px" id="track-image"></div> </a>`;
            }

                })
        .catch(function(error){
            console.error(error);
            return null;
        });

}