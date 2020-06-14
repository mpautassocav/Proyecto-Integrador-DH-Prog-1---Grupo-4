window.onload = function (){
    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo lo que mandé por el formulario de busqueda
    let busqueda = objetoQuery.get('filtro');
    
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q='+busqueda)
        .then(function(respuesta){
            //transformo en json
            return respuesta.json();
        })
        .then(function(datos){
            console.log(datos)
            let tuBusqueda = document.querySelector("#tuBusqueda")
            tuBusqueda.innerHTML += `${datos.data.title}`;
        })
        .catch(function(error){
            console.error(error);
            return null;
        });

}