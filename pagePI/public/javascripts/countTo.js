"use strict";

var iniciar = $("#iniciar");
iniciar.click(function(){
    $(".counter").countTo({
        from            : 1,
        to              : 777,
        speed           : 2000,
        refreshInterval : 6
    });
});

$(".counter").one('inview', function(e, isInView){
    if(isInView){
        $(this).countTo({
            from            : 1,
            to              : 777,
            speed           : 2000,
            refreshInterval : 6
        });
    }
    else{
        $(this).off('inview');
    }
})
