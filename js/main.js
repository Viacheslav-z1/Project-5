$(function(){
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
    });

    $('.slider__inner').slick({
       arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1048,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 721,
                settings: {
                  slidesToShow: 1
                }
              },
          ]
      });


});