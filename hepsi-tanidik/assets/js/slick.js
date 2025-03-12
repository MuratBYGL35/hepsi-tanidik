$(document).ready(function () {
    /*------------------------------
      HABERLER - ETKİNLİKLER
       -------------------------------*/
    $(".anasayfa-slider").slick({
      dots: false,
      lazyLoad: "ondemand",
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      adaptiveHeight:false,
      autoplay: 0,
      fade: false,
      autoplaySpeed: 3000,
    });

    $('.steps').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

        if (nextSlide == slick.slideCount - 1) {
            $('.next').hide();
            $('.previous').show();
        } else if (nextSlide != slick.slideCount - 1 && nextSlide != 0) {
            $('.next').show();
            $('.previous').show();
        } else if (currentSlide == 0 || nextSlide == 0) {
            $('.next').show();
            $('.previous').hide();
        }
    
    });
  });

  
  
  
  





  