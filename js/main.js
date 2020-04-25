(function(){
    "use strict";

    document.addEventListener('DOMContentLoaded', function(){

        if(document.getElementById('mapa')){
            var map = L.map('mapa').setView([-27.347483, -65.60002], 17);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([-27.347483, -65.60002]).addTo(map)
            .bindPopup('Stewart Shipton 1980, Concepción(4146) - TUC')
            .openPopup()
            .bindTooltip('Concepción Fútbol Club')
            .openTooltip();
        }
    }); //DOM CONTENT LOADED
})();

$(function() {

    // Menu fijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    console.log (barraAltura);
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight){
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        } else{
           $('.barra').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    });

    //Menu responsive
    $('.menu-movil').on('click', function(){
        $('.navegacion').slideToggle();
    });

    $(window).resize(function() {
        var windowWidth = $(".barra").width();
        if (windowWidth > 755) {
        $(".navegacion").css({ display: "block" });
        } else {
        $(".navegacion").css({ display: "none" });
        }
    });
});
