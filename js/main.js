
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

    //  --------------- FORM SCRIPTS --------------- //
    //  -------------------------------------------- //

    // guest dropdown ------------- 
    $('.reservation__form-guest').on('click', function () {
        $(this).find('.guest-dropdown').slideDown();
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.reservation__form-guest').length) {
            $('.guest-dropdown').slideUp();
        }
    });

    // guest counter ------------- 

    // Функція для зміни лічильника та тексту в input
    function updateCounter($counterField, value) {
        $counterField.text(value);
        updateGuestField(); // Додано виклик функції для оновлення .guest-field
    }

    // Функція для оновлення .guest-field
    function updateGuestField() {
        const adultValue = parseInt($('.adult-counter').text(), 10);
        const childValue = parseInt($('.child-counter').text(), 10);

        console.log(childValue + adultValue);


        const totalGuests = adultValue + childValue;
        let guestsText;

        if (totalGuests === 1) {
            guestsText = 'Гість';
        } else if (totalGuests >= 2 && totalGuests <= 4) {
            guestsText = 'Гостя';
        } else {
            guestsText = 'Гостей';
        }

        $('.guest-field').val(`${totalGuests} ${guestsText}`);
    }

    // Обробник події для кнопок мінус
    $('.minus').on('click', function () {
        const $counterField = $(this).siblings('.counter-field');
        let value = parseInt($counterField.text(), 10);
        if (value > 0) {
            value--;
            updateCounter($counterField, value);
        }
        if (value <= 0) {
            $(this).addClass('disabled');
        }
        $(this).siblings('.plus').removeClass('disabled');
    });

    // Обробник події для кнопок плюс
    $('.plus').on('click', function () {
        const $counterField = $(this).siblings('.counter-field');
        const maxGuests = 7;
        let value = parseInt($counterField.text(), 10);
        if (value < maxGuests) {
            value++;
            updateCounter($counterField, value);
        }
        if (value >= maxGuests) {
            $(this).addClass('disabled');
        }
        $(this).siblings('.minus').removeClass('disabled');
    });



    // filtr btn -------------
    $('.reservation__form-btn').on('click', function (e) {
        e.preventDefault();
        $('.reservation').toggleClass('active');
    });

    // календар -------------- // 

    if ($('#datepicker').length) {

        const args = {
            id: 1,
            startDay: 1,
            customDays: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            customMonths: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
            formatter: (input, date, instance) => {
                const value = date.toLocaleDateString()
                input.value = value
            }
        };

        const start = datepicker('.date-start', args);
        const end = datepicker('.date-end', args);

    }

});


AOS.init();