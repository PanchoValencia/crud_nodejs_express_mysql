"use strict";

(() => {
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        items              : 1,
        loop               : true,
        margin             : 10,
        autoplay           : true,
        smartSpeed         : 800,
        autoplayTimeout    : 3000,
        autoplayHoverPause : false
    });

    $(".owl-prev").click(() =>{
        owl.trigger('prev.owl.carousel');
    });
    $(".owl-next").click(() =>{
        owl.trigger('next.owl.carousel');
    });
})();
