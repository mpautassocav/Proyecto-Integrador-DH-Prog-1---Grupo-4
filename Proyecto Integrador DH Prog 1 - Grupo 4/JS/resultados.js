window.onload = function (){
    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo lo que mandé por el formulario de busqueda
    let busqueda = objetoQuery.get('filtro');
    
    fetch('https://api.deezer.com/search?q='+busqueda)
        .then(function(res){
            //transformo en json
            return res.json();
        })
        .then(function(data){
            //empiezo a mostrar las peliculas
            let peliculas = document.querySelector('.peliculas');

            //aqui es donde voy a usar la info que vino desde la api
            for(let pelicula of data.Search){
                //aqui uso las comillas francesas
                peliculas.innerHTML += `<div class="pelicula">
                <div class="cont-imgs">
                <a href="detalle_pelicula.html?id=${pelicula.imdbID}">
                    <img src="${pelicula.Poster}" alt="" class="peli-img">
                    </a>
                    <img src="img/premiere.png" alt="" class="banderin">
                </div>
                <div class="rating">
                    <i class="fas fa-star star-rating"></i>
                    <span class="text-rating">8.5</span>
                </div>
                <h3 class="peli-titulo">${pelicula.Title}</h3>
                <div>
                    <!--<a href="editar_pelicula.html" class="btn btn-success">Editar</a>
                    <a href="eliminar_pelicula.html" class="btn btn-danger">Eliminar</a>-->
                    <a href="javascript:;" class="btn btn-success boton-me-gusta" onclick="meGustaPelicula('${pelicula.Title}', '${pelicula.imdbID}', '${pelicula.Poster}')">Me gusta</a>
                </div>
                </div>`;
            }
        })
        .catch(function(error){
            console.error(error);
            return null;
        });

}