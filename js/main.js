//Ventana de CARGA
var carga = document.querySelector(".carga")

window.addEventListener("load", vanish);

function vanish(){
  carga.classList.add("desaparecer");
}

//Menú barra
$(document).ready(function(){

    //  Btn Cerrar Modal
    $("#btn-cerrar-modal").click(function(e){
        e.preventDefault();
        $(".contenedor-modal").removeClass("active");
    });

    // Menú responsivo
    $("#btn-menu").click(function(e){
        e.preventDefault();
        if( $(".btn-menu i").attr("class") == "fa fa-bars" ){
            $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
        } else{
            $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
        }

        $(".contenedor-menu-responsive").toggleClass("active");

        if ($(".contenedor-menu-responsive").hasClass("active")) {
            $(".contenedor-modal-responsive").addClass("active");
        } else {
            $(".contenedor-modal-responsive").removeClass("active");
        }

    });

    //Cerrar Modal
    $(".contenedor-modal-responsive").click(function(){
        $(".contenedor-menu-responsive").removeClass("active");
        $(".btn-menu").removeClass("active");
        $(".contenedor-modal-responsive").removeClass("active");

        if( $(".btn-menu i").attr("class") == "fa fa-bars" ){
            $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
        } else{
            $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
        }
    });

    $("#btn-cerrar-modal-responsive").click(function(e){
        e.preventDefault();
        $(".contenedor-modal-responsive").removeClass("active");
        $(".contenedor-menu-responsive").removeClass("active");
        $(".btn-menu").removeClass("active");
    });

});

// popup Galería
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>Hotel Palacio de Moctezuma</small>';
            }
        }
    });
});

//video pop-up
const playbtn=document.querySelector('.playbtn');
const video=document.querySelector('.vdo-contenedor');
const cerrar=document.querySelector('.cerrar');

playbtn.addEventListener('click',()=>{
  video.classList.add('mostrar');
})

  cerrar.addEventListener('click',()=>{
    video.classList.remove('mostrar');
  })

//Habitaciones SLIDER
var indexCarousel = 0;
carouselNavClick(indexCarousel);

function carouselNavClick(n) {
    indexCarousel += n;
    var i;
    var images = document.querySelectorAll("#carousel-img img");
    var textes = document.querySelectorAll("#carousel-text div");
    if ( indexCarousel > images.length-1) { indexCarousel = 0 }
    if ( indexCarousel < 0) { indexCarousel = images.length-1 }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        textes[i].style.display = "none";
    }
    images[indexCarousel].style.display = "block";
    textes[indexCarousel].style.display = "block";
}
