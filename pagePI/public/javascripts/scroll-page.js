"use strict";

//scroll page//
let link = $("#nav").find("p");                      //variable link vale el elemento p a dar click
link.click(function(e){                              //al hacerle click se ejecuta una función
    e.preventDefault();                              //evitar eventos por defecto, ejemplo si existiera una url
    var href   = $(this).attr("href");               //variable href vale el atributo href del elemento clickeado
    var altura = 60;                                 //valor que se va restar para mostrar la sección completa
    $('html, body').animate({                        //animamos el html y body
        scrollTop : $(href).offset().top - (altura)  //scrollTop nos visualiza en pantalla el elemento seleccionado por el selector despues va .offset().top/bottom y restamos la altura que se esconde
    },1000);                                         //duración de la animación
});

var up = $(".container-icon").find("i");
up.click(function(e){
    e.preventDefault();
    var ref = $(this).attr("href");
    $("body, html").animate({
        scrollTop : $(ref).offset().top
    },1000);
});

//active class//
var $sections   = $("section"),
    $nav        = $("#nav"),
    $nav_height = $nav.outerHeight() + (35);

$(window).on("scroll",function(){
    var cur_pos = $(this).scrollTop();

    $sections.each(function(){
        var top = $(this).offset().top - $nav_height,
        bottom  = top + $(this).outerHeight();

        if(cur_pos >= top && cur_pos <= bottom){
            $nav.find(".selected").removeClass("selected");
            var active = $(this).attr("id");
            //$sections.removeClass("selected");

            $nav.find('p[href="#'+active+'"]').addClass('selected');
        }
    });
});
