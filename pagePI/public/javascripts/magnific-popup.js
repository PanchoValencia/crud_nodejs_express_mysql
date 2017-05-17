"use strict";

(() => {
    let popup = $(".magnific-popup");

    popup.magnificPopup({
		type: 'image',
		tLoading: 'Cargando imágen #%curr%...',
		mainClass: 'mfp-img-mobile',
        gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
        image: {
			tError: '<a href="%url%">La imágen #%curr%</a> no puede ser cargada.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by FD</small>';
			}
		}
    });

    //formulario para wow
    $('.popup-with-form').click(function(){
        $(this).magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function() {
                    if($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });
})();
