window.addEventListener('load', function () {

    //obtengo las peliculas que me gustan
    let peliculas = JSON.parse(window.localStorage.getItem('meGustan'))

    //empiezo a mostrar las peliculas
    let containerPeliculas = document.querySelector('#ranking_tracks');

    //aqui es donde voy a usar la info que vino desde la api
    for(let pelicula of peliculas){
        //aqui uso las comillas francesas
        containerPeliculas.innerHTML += `<a href=""><div class="canciones" ><div id="track">${pelicula.title}</div><img src="Imagenes/image-solid.svg" height="35px" id="track-image"></div></a>`;
    }

});