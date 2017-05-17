"use strict";

(() => {
    $(".verde").mouseover(() => {
        $("#verde").animate({
            width : '90%'
        });
    });
    $(".verde").mouseout(() => {
        $("#verde").animate({
            width : '0'
        });
    });

    $(".azulCielo").mouseover(() => {
        $("#azulCielo").animate({
            width : '90%'
        });
    });
    $(".azulCielo").mouseout(() => {
        $("#azulCielo").animate({
            width : '0'
        });
    });

    $(".rosa").mouseover(() => {
        $("#rosa").animate({
            width : '90%'
        });
    });
    $(".rosa").mouseout(() => {
        $("#rosa").animate({
            width : '0'
        });
    });

    $(".azul").mouseover(() => {
        $("#azul").animate({
            width : '90%'
        });
    });
    $(".azul").mouseout(() => {
        $("#azul").animate({
            width : '0'
        });
    });

    $(".amarillo").mouseover(() => {
        $("#amarillo").animate({
            width : '90%'
        });
    });
    $(".amarillo").mouseout(() => {
        $("#amarillo").animate({
            width : '0'
        });
    });

    $(".default").mouseover(() => {
        $("#default").animate({
            width : '90%'
        });
    });
    $(".default").mouseout(() => {
        $("#default").animate({
            width : '0'
        });
    });

    let flag = 0;
    $(".nav-container__opts-color__container-name").find("span").click(function(){
        if(flag == 0){
            $(this).addClass("colorSelected");
            var color = $(".colorSelected").attr("value");

            $("h1,h2,.theme").css({
                'color' : color
            });

            $("#rotate").css({
                'color' : color
            });

            $("#iniciar, .btn-form").css({
               'background-color' : color
            });

            $(".underline, .button, .container-icon").css({
                'background-color' : color
            });

            let border  = "5px solid "+ color;
            let bordmin = "1px solid "+ color;
            $(".portada-container-logo").css({
                'border' : border ,
                'color'  : color
            });

            $("#minilogo").css({
                'border'  : bordmin ,
                'color'   : color
            });

            flag = 1;
        }

        else if(flag == 1) {
            $(".nav-container__opts-color__container-name").find(".colorSelected").removeClass("colorSelected");
             $(this).addClass("colorSelected");
             var color = $(".colorSelected").attr("value");

             $("h1,h2,.theme").css({
                 'color' : color
             });

             $("#rotate").css({
                 'color' : color
             });

             $("#iniciar, .btn-form").css({
                'background-color' : color
             });

             $(".underline, .button, .container-icon").css({
                 'background-color' : color
             });

             let border  = "5px solid "+ color;
             let bordmin = "1px solid "+ color;
             $(".portada-container-logo").css({
                 'border' : border ,
                 'color'  : color
             });

             $("#minilogo").css({
                 'border'  : bordmin ,
                 'color'   : color
             });

             flag = 0;
        }
    });
})();
