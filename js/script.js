$( document ).ready(function() {
/* ----------------------------- general ----------------------------- */
  $backgroundPen = $('.house-background__pen')
  if($('.main-houses__house')){
    $('.main-houses__house').bind('mouseenter', function(){
      const position = $(this).position()
      const width = $(this).width()
      const height = $(this).height()

      console.log(position)

      $backgroundPen.show()
      $backgroundPen.width(width+50)
      $backgroundPen.height(height-20)

      $backgroundPen.css('backgroundImage', 'url("themes/TDS/assets/icons/background_2.svg")');

      $backgroundPen.css('top', (position.top-10));
      $backgroundPen.css('left', position.left-10);
      //$backgroundPen.offset({top: 760+position.top, left: 380+position.left})
    })
  }
/* ----------------------------- general! ----------------------------- */

  /* ----------------------------- header ----------------------------- */

  const burger = document.querySelector('.header__burger')
  const headerDropdown = document.querySelector('.header__dropdown')

  if (burger) {
    burger.addEventListener('click', () => {
      if(burger.classList.contains('header__burger_active')){
        burger.classList.remove('header__burger_active')
        headerDropdown.classList.remove('header__dropdown_active')
        document.querySelector('html').classList.remove('lock')
      }
      else{
        burger.classList.add('header__burger_active')
        headerDropdown.classList.add('header__dropdown_active')
        document.querySelector('html').classList.add('lock')
      }
    })
  }
  /* ----------------------------- header! ----------------------------- */

  /* ----------------------------- payments ----------------------------- */
  if($('*').is('.main-news__row') && $(window).width() < 767) {
    $('.main-news__row').slick({
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true
    });
  }
  if($('*').is('.main-payment__row-slider')) {
    $('.main-payment__row-slider').slick({
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      variableWidth: true,
    });
  }

  if ($(window).width() <= '767' && $('*').is('.house-info__images')){
    $('.house-info__images').slick({
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      variableWidth: true,
    })
  }
  if ($('*').is('.flat-similar__block_mobile')) {
    $('.flat-similar__block_mobile').slick({
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      variableWidth: true,
    })
  }

  //------------- payments! -----------------//

  //              purchase                   //
    $ipoteka = $('.purchase-content__body .purchase-ipoteka')
    $tradeIn = $('.purchase-content__body .purchase-trade-in')
    $action  = $('.purchase-content__body .main-payment__action')
    $combinationFlats = $('.purchase-content__body .purchase-combination-flats')

    $tradeIn.hide();
    $action.hide();
    $combinationFlats.hide();

    if($('.main-payment__column')){
      $('.main-payment__column').bind('click', function(){
        $('.purchase-content__body').children().each((idx, el) => $(el).hide()) // Скрыть все блоки контента

        $(this).hasClass('main-payment__ipoteka') && $ipoteka.show()
        $(this).hasClass('main-payment__trade-in') && $tradeIn.show()
        $(this).hasClass('main-payment__combination-flat') && $combinationFlats.show()
        $(this).hasClass('main-payment__action') && $action.show()
      })
    }
  //              purchase!                   //

  //              about                   //

    $company = $('.company')
    $builder = $('.builder')
    $docs  = $('.docs')
    $requisites = $('.requisites')

    if($builder) $builder.hide();
    if($docs) $docs.hide();
    if($requisites) $requisites.hide();

    if($('.about-tabs__item')){
      $('.about-tabs__item').bind('click', function(){
        $('.about-content').children().each((idx, el) => $(el).hide()) // Скрыть все блоки контента

        $(this).hasClass('about-tabs__company') && $company.show()
        $(this).hasClass('about-tabs__builder') && $builder.show()
        $(this).hasClass('about-tabs__docs') && $docs.show()
        $(this).hasClass('about-tabs__requisites') && $requisites.show()
      })
    }

    if ($(window).width() <= '767' && $('*').is('.about-tabs')) {
      $('.about-tabs').slick({
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        variableWidth: true,
      })
    }

  // -------------------------- about-accordion ---------------------------//
  if ($('*').is('.docs__accordion-head')) {
    $('.docs__accordion-head').bind('click', function(){
      const thisEl = $(this).next()[0].children[0]
      const paddings = 60
      if (thisEl.style.height != '0px' && thisEl.style.height !== "") thisEl.style.height = '0px';
      else thisEl.style.height = thisEl.scrollHeight + paddings  + "px";
    })
  }
  // -------------------------- about-accordion! ---------------------------//
  // -------------------------- about! -------------------------- //

  // -------------------------- filter ---------------------------//

  if ($('.header__burger')) {

  }
  $('.header__burger').bind('click', function(){
    if($('.header__burger').hasClass('header__burger_active-filter')){
      $('.header__burger').removeClass('header__burger_active-filter')

      $('html').removeClass('lock')
      $('nav').removeClass('header_active')
      $('footer').removeClass('footer_active')
      $filterMobileBtn.removeClass('filter__btn-for-mobile_active')
      $filterWrapper.removeClass('filter-wrapper__mobile-version')
      $filterBody.removeClass('filter-body__mobile_active')
    }
  })

  // -------------------------- filter! ---------------------------//

  if($('*').is('#price')){
    $("#price").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 0,
      to: 1000,
      onChange: function (data) {

        $('#valueStart').val(`${$('.filter__square-price .irs-from').text()} ₽`)
        $('#valueEnd').val(`${$('.filter__square-price .irs-to').text()} ₽`)
      },
    });
  }
  if($('*').is('#square')){
    $("#square").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 40,
      to: 600,
      onChange: function (data) {
        $('.filter__squre-start').val(`${$('.filter__range-square .irs-from').text()} м²`)
        $('.filter__square-end').val(`${$('.filter__range-square .irs-to').text()} м²`)
      },
    });
  }
});
//                  filter-mobile                    //
$filterMobileBtn = $('.filter__btn-for-mobile')
$filterBody = $('.filter-body')
$filterWrapper = $('.filter-wrapper')
if($filterMobileBtn){
  $filterMobileBtn.bind('click', function(){
    $('html').addClass('lock')
    $('nav').addClass('header_active')
    // $('footer').addClass('footer_active')
    $filterMobileBtn.addClass('filter__btn-for-mobile_active')
    $filterWrapper.addClass('filter-wrapper__mobile-version')
    $filterBody.addClass('filter-body__mobile_active')

    $('.header__burger').addClass('header__burger_active')
    $('.header__burger').addClass('header__burger_active-filter')
  })
}
