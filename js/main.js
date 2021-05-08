$(document).ready(function(){

    /***************************
        Btn Cerrar Modal
    ***************************/
    $("#btn-cerrar-modal").click(function(e){
        e.preventDefault();
        $(".contenedor-modal").removeClass("active");
    });

    /*********************
        Menu Responsive
    *********************/
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

    /********************
        Cerrar Modal
    ********************/
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
