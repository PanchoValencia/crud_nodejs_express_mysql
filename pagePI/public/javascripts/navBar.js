"use strict";

(() => {
    let boton   = $(".nav-container__opts").find("i");
    var colores = $(".nav-container__opts-color");

    boton.click(() => {
        colores.toggle();
    });
})();
