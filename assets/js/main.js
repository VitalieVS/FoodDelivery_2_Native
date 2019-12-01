$(document).ready(function(){

    $("#carouselExampleIndicators").swiperight(function() {
        $(this).carousel('prev');
    });

    $("#carouselExampleIndicators").swipeleft(function() {
        $(this).carousel('next');
    });

    $(".item-ico").click(function () {
            $( "#barb" ).dialog();
    })

    $( function() {
        $( "#dialog" ).dialog();
    } );
});