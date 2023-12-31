$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    });


    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('menu--open');
    });

    if ($(window).width() < 651) {
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
    }

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
    });
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
       responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
      }
    },
    {
      breakpoint: 1511,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 841,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 551,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 361,
      settings: {
        slidesToShow: 1,
          slidesToScroll: 1,
        dots:false,
      }
    }
  ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowLeft"><img src="images/arrow-prev.svg" alt=" arrow prev"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowRight"><img src="images/arrow-next.svg" alt=" arrow next"></button>',
    });

    var mixer = mixitup('.gallery__inner',{
        load: {
            filter:'.living'
        }
    });
})
// const header__btn = document.querySelector('.header__btn');
// const rightside_menu = document.querySelector('.rightside-menu');
// const rightside_menu_close = document.querySelector('.rightside-menu__close');

// header__btn.addEventListener('click', () => {
//     rightside_menu.classList.remove('rightside-menu--close');
// });

// rightside_menu_close.addEventListener('click', () => {
//     rightside_menu.classList.add('rightside-menu--close');
// });
