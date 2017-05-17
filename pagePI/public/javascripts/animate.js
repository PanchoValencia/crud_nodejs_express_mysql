"use strict";

var menu  = $("#tog");
var boton = $("#animBot");
menu.hide();

boton.click(function(e){
    e.preventDefault();
    menu.toggle();
});

var accionador = menu.find("ul").find("li").find("a");
var imagen     = $("#animating");
var flag       = 0;
var clase_2;

accionador.each(function(){
    $(this).click(function(e){
        e.preventDefault();
        menu.hide();

        if(flag == 0){
            imagen.removeClass(clase_2);
            let clase = $(this).attr('href');
            clase_2   = clase;
            imagen.addClass("animated");
            imagen.addClass(clase);
            flag = 1;
            //alert(flag);
            //alert(imagen.attr("class"));
        }
        else if(flag == 1){
            imagen.removeClass(clase_2);
            let classe = $(this).attr('href');
            imagen.addClass("animated");
            imagen.addClass(classe);
            clase_2 = classe;
            flag    = 0;
            //alert(flag);
            //alert(imagen.attr("class"));
        }
    });
});
