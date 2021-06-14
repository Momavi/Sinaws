$(function(){

  $('.webinar__slider').slick({
    centerMode: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.menu-btn').on('click', function() {
    $('.menu-btn').toggleClass('menu-btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  })

  $('.menu__list-link').on('click', function() {
      $('.menu-btn').removeClass('menu-btn--active');
      $('.menu__list').removeClass('menu__list--active');
  })
});