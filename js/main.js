// -----------------------------------------------------------------------------
// Main Javascript 
// -----------------------------------------------------------------------------
(function($) {
    "use strict";

    // Preloader
    // ----------------------------------------
    $(window).load(function(){
        if($('#preloader').length > 0){
            $('#preloader').fadeOut('slow',function(){$(this).remove();});
        }
    });

    $(document).ready(function($) {  

        // Animating the navbar toggle
        // ----------------------------------------
        $('.navbar-toggle').on('click', function () {
            $(this).toggleClass('active');
        });


        // Sliders
        // ----------------------------------------

        // home splash slider
        if($('.splash-slider').length > 0){
            $('.splash-slider').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // simple gallery slider
        if($('.gallery-slider').length > 0){
            $('.gallery-slider').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true
            });
        }

        // full width gallery slider
        if($('.full-gallery-slider').length > 0){
            $('.full-gallery-slider').owlCarousel({
                itemsDesktop: [1199,4],
                itemsDesktopSmall: [992,3],
                itemsTablet: [768,3],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
            });
        }

        // testimonials slider
        if($('.testimonials-slider').length > 0){
            $('.testimonials-slider ').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // tweets slider
        if($('.tweets-slider').length > 0){
            $('.tweets-slider ').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                transitionStyle: "fade",
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // clients slider
        if($('.clients-slider').length > 0){
            $('.clients-slider ').owlCarousel({
                items: 6,
                itemsDesktop: [1199,4],
                itemsDesktopSmall: [992,3],
                itemsTablet: [768,3],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // Progress
        // ----------------------------------------
        if($('.progress-circle').length > 0){
            $('.progress-circle').circleProgress({
                size: 145,
                startAngle: -Math.PI / 2,
                thickness: 8,
                emptyFill: "#f6fcff",
                fill: {
                    color: "#3fb3e5"
                }
            });
        }

        // Gallery Popup
        // ----------------------------------------

        // image popup
        if($('.popup').length > 0){
            $('.popup').magnificPopup({
              type: 'image'
            });
        }

        // video popup
        if($('.popup-video').length > 0){
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }

        // Masonry Grid
        // ----------------------------------------
        if($('.masonry').length > 0){
            $('.masonry').gridalicious({
                gutter: 0,
                width: 570,
                selector: '.portfolio-item'
            });
        }


        // Portfolio Filtering
        // ----------------------------------------
        if($('.filter').length > 0){
            $('.filter').on("click", function () {
                var $this = $(this);
                // if we click the active tab, do nothing
                if ( !$this.hasClass("active") ) {
                    $(".filter").removeClass("active");
                    $this.addClass("active"); // set the active tab
                    // get the data-rel value from selected tab and set as filter
                    var $filter = $this.data("rel");
                    // if we select view all, return to initial settings and show all
                    $filter == 'all' ?
                        $(".item")
                        .css('opacity', 1)
                    : // otherwise
                        $(".item")
                        .css('opacity', .2)
                        .filter(function () {
                            // set data-filter value as the data-rel value of selected tab
                            return $(this).data("filter") == $filter;
                        })
                        .css('opacity', 1);
                } // if
            });
        }
    });
})(jQuery);