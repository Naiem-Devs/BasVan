(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    //------------ Hero slider -------------

    $(".slider-area").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dot: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    //------------ services slider -------------

    $(".service-sliders").owlCarousel({
      loop: true,
      margin: 20,
      center: true,
      nav: true,
      navText: [
        ' <i class="fal fa-long-arrow-left"></i>',
        ' <i class="fal fa-long-arrow-right"></i>',
      ],
      dot: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

      //------------ doctor slider -------------

      $(".doctors_slider").owlCarousel({
        loop: true,
        margin:30,
        nav: true,
        navText: [
          ' <i class="fal fa-long-arrow-left"></i>',
          ' <i class="fal fa-long-arrow-right"></i>',
        ],
        dot: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      });

       //------------ shop slider -------------

       $(".shop__slider").owlCarousel({
        loop: true,
        margin:30,
        nav: true,
        navText: [
          ' <i class="fal fa-long-arrow-left"></i>',
          ' <i class="fal fa-long-arrow-right"></i>',
        ],
        dot: false,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      });


       //------------testimonial slider -------------

    $(".testimonials-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      navText: [
        ' <i class="fal fa-long-arrow-left"></i>',
        ' <i class="fal fa-long-arrow-right"></i>',
      ],
      dot: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    //--- counter up js------
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    //--- video pop up js------
    $(".venobox_custom").venobox({});

    //---owl dots number-----

    var i = 1;

    $(".slider-area.owl-carousel .owl-dot").each(function () {
      $(this).text(i);
      i++;
    });
  }); //---document-ready-----
})(jQuery);
