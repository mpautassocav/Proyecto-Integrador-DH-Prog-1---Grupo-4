window.onload = function(){

    //obtengo las peliculas que me gustan
    let canciones = JSON.parse(window.localStorage.getItem('cancion'));

    //empiezo a mostrar las peliculas
    let imprimirCanciones = document.querySelector('#ranking_tracks');

    //aqui es donde voy a usar la info que vino desde la api
    for(let cancion of canciones){
        //aqui uso las comillas francesas
        imprimirCanciones.innerHTML += `<div class="canciones" ><div id="track">${cancion.title}</div><img src="Imagenes/image-solid.svg" height="35px" id="track-image"></div>`;
    }

    let eliminarTodo = document.querySelector(".eliminar")
    eliminarTodo.onclick = function(){
        localStorage.clear("cancion");
    }
}