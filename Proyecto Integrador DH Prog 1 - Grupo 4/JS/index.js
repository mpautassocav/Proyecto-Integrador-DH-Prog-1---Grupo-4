function chau1(){
    var fra1si = document.getElementById("fra1")
    var fra2no = document.getElementById("fra2")
    if(fra1si==fra1si){
        fra1si.id="fra1no";
        fra2no.id="fra2si"
    }
}
function chau2(){
    var fra2si = document.getElementById("fra2si")
    var fra3no = document.getElementById("fra3")
    if(fra2si==fra2si){
        fra2si.id="fra2";
        fra3no.id="fra3si"
    }
}
function chau3(){
    var fra3si = document.getElementById("fra3si")
    var fra4no = document.getElementById("fra4")
    if(fra3si==fra3si){
        fra3si.id="fra3";
        fra4no.id="fra4si"
    }
}
function chau4(){
    var fra4si = document.getElementById("fra4si")
    var fra5no = document.getElementById("fra5")
    if(fra4si==fra4si){
        fra4si.id="fra4";
        fra5no.id="fra5si"
    }
}
function chau5(){
    var fra5si = document.getElementById("fra5si")
    var fra6no = document.getElementById("fra6")
    if(fra5si==fra5si){
        fra5si.id="fra5";
        fra6no.id="fra6si"
    }
}
function chau6(){
    var fra6si = document.getElementById("fra6si")
    var fra7no = document.getElementById("fra7")
    if(fra6si==fra6si){
        fra6si.id="fra6";
        fra7no.id="fra7si"
    }
}
function chau7(){
    var fra7si = document.getElementById("fra7si")
    var fra8no = document.getElementById("fra8")
    if(fra7si==fra7si){
        fra7si.id="fra7";
        fra8no.id="fra8si"
    }
}
function chau8(){
    var fra8si = document.getElementById("fra8si")
    var fra9no = document.getElementById("fra9")
    if(fra8si==fra8si){
        fra8si.id="fra8";
        fra9no.id="fra9si"
    }
}
function chau9(){
    var fra9si = document.getElementById("fra9si")
    var fra10no = document.getElementById("fra10")
    if(fra9si==fra9si){
        fra9si.id="fra9";
        fra10no.id="fra10si"
    }
}
function chau10(){
    var fra10si = document.getElementById("fra10si")
    var fra11no = document.getElementById("fra11")
    if(fra10si==fra10si){
        fra10si.id="fra10";
        fra11no.id="fra11si"
    }
}
function chau11(){
    var fra11si = document.getElementById("fra11si")
    var fra12no = document.getElementById("fra12")
    if(fra11si==fra11si){
        fra11si.id="fra11";
        fra12no.id="fra12si"
    }
}
function chau12(){
    var fra12si = document.getElementById("fra12si")
    var fra1no = document.getElementById("fra1no")
    if(fra12si==fra12si){
        fra12si.id="fra12";
        fra1no.id="fra1"
    }
}
function musicasi(){
    var musi = document.getElementById("musicasi")
    var plsi = document.getElementById("playlistsi")
    var artsi = document.getElementById("artistsi")
    var muno = document.getElementById("musicano")
    var plno = document.getElementById("playlistno")
    var artno = document.getElementById("artistno")
    var tracks = document.getElementById("ranking_tracks")
    var playsi = document.getElementById("ranking_playlist")
    var arts = document.getElementById("ranking_artists")
    a="a"
    if(a==a){
        musi.style.display="inherit";
        muno.style.display="none";
        plsi.style.display="none";
        artsi.style.display="none";
        plno.style.display="inherit";
        artno.style.display="inherit";
        tracks.style.display="grid";
        playsi.style.display="none";
        arts.style.display="none";
    }
}
function playsi(){
    var musi = document.getElementById("musicasi")
    var plsi = document.getElementById("playlistsi")
    var artsi = document.getElementById("artistsi")
    var muno = document.getElementById("musicano")
    var plno = document.getElementById("playlistno")
    var artno = document.getElementById("artistno")
    var tracks = document.getElementById("ranking_tracks")
    var playsi = document.getElementById("ranking_playlist")
    var arts = document.getElementById("ranking_artists")
    a="a"
    if(a==a){
        musi.style.display="none";
        muno.style.display="inherit";
        plsi.style.display="inherit";
        artsi.style.display="none";
        plno.style.display="none";
        artno.style.display="inherit";
        tracks.style.display="none";
        playsi.style.display="grid";
        arts.style.display="none";
    }
}
function artsi(){
    var musi = document.getElementById("musicasi")
    var plsi = document.getElementById("playlistsi")
    var artsi = document.getElementById("artistsi")
    var muno = document.getElementById("musicano")
    var plno = document.getElementById("playlistno")
    var artno = document.getElementById("artistno")
    var tracks = document.getElementById("ranking_tracks")
    var playsi = document.getElementById("ranking_playlist")
    var arts = document.getElementById("ranking_artists")
    a="a"
    if(a==a){
        musi.style.display="none";
        muno.style.display="inherit";
        plsi.style.display="none";
        artsi.style.display="inherit";
        plno.style.display="inherit";
        artno.style.display="none";
        tracks.style.display="none";
        playsi.style.display="none";
        arts.style.display="grid";
    }
}


/* api-deezer */

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        let playlists=datos.playlists.data;
        let contenedorplaylists = document.querySelector('#ranking_playlist');
        for (const playlist of playlists) {
            contenedorplaylists.innerHTML += `<div class="canciones" >
            <div id="track" class="nuevaplaylist"> ${playlist.title}</div>
            <img src="${playlist.picture}" height="35px" id="track-image"></div>`;
        }
        let tracks=datos.tracks.data;
        let contenedortracks = document.querySelector('#ranking_tracks');
        for (const track of tracks) {
            contenedortracks.innerHTML += `<a href="DETAIL-TRACK.html">
            <div class="canciones" >
            <div id="track">${track.title}</div>
            <img src="./Imagenes/music-solid.svg" height="15px" id="track-image">
            </div>
            </a>`;
        }
        let artists=datos.artists.data;
        let contenedorartists = document.querySelector('#ranking_artists');
        for (const artist of artists) {
            contenedorartists.innerHTML += `<a href="detailArtist.html?=${artist.id}">
            <div class="canciones" >
            <div id="track">${artist.name}</div>
            <img src="${artist.picture}" height="35px" id="track-image">
            </div></a>`;
        }
    })

/* fin api-deezer */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}