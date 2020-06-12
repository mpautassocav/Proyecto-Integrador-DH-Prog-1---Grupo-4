fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log(datos)
        let genres=datos.data;
        let contenedoralbums = document.querySelector('.listageneros');
        for (const genre of genres) {
            if (genre.id != 0){
            contenedoralbums.innerHTML += `<a href="detalleGenero.html"><div class="generol2" ><img src="${genre.picture}" class="generol" width="100%"><p class="nomgen">${genre.name}</p></div></a>`;
            }
        }
    })
    .catch(function(error){
        console.log(error)
    });
