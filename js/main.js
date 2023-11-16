
$(document).ready(function () {

    // change header while scrolling --------------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    $(window).on('load', function () {
        if ($(window).scrollTop() > 10) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // submenu open ----------------- //
    $('.sub-menu').on('click', function () {
        $(this).toggleClass('active');
        $(this).children('ul').slideToggle();
    });

    // mobile menu ----------------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__nav').toggleClass('active');
    });

    // heroscreen slider ------------ //
    var swiper = new Swiper(".heroscreen__slider", {
        slidesPerView: 1,
        speed: 2600,
        loop: true,
        autoplay: {
            delay: 2600,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })

    // padding(imitation container) -------------------------- //
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2);
    $('.margleft').css('margin-left', paddingContainer);
    $('.margright').css('margin-right', paddingContainer);
    $('.padright').css('padding-right', paddingContainer);
    $('.padleft').css('padding-left', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2);
        $('.margleft').css('margin-left', paddingContainer);
        $('.margright').css('margin-right', paddingContainer);
        $('.padright').css('padding-right', paddingContainer);
        $('.padleft').css('padding-left', paddingContainer);
    });

    // events slider ------------ //
    var swiper = new Swiper(".events__slider", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        speed: 7000,
        autoplay: {
            delay: 0,
        },
        breakpoints: {
            992: {
                spaceBetween: 35
            }
        }
    })

    // card image slider ------------ //
    $('.gallery-image').each(function () {
        var swiper = new Swiper(this, {
            loop: true,
            navigation: {
                nextEl: ".slider-next",
                prevEl: ".slider-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: true,
            },
        });
        var prevButton = $(this).find('.slider-prev');
        var nextButton = $(this).find('.slider-next');
        prevButton.on('click', function () {
            swiper.slidePrev();
        });
        nextButton.on('click', function () {
            swiper.slideNext();
        });
    });

    // services slider ------------ //
    var swiper = new Swiper(".services__slider", {
        loop: true,
        slidesPerView: 1,
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 1000,
        },
    })

    // FAQ accordeon
    $('.faq__row-head').on('click', function () {
        var parent = $(this).closest('.faq__row');
        parent.toggleClass('active');
        parent.find('.faq__row-body').slideToggle();
    });


});