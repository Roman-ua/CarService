$(function(){
    $('.gallery__slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick__dots'
      });
      $('.slick__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.gallery__slick',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });


      $('.gamburger__btn').click(function () {
        $(".header__nav-menu").toggleClass('active');
        $(".gamburger__btn").toggleClass('active_btn');
        });

        $(".nav__menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1500);
      });
});

new WOW().init();
