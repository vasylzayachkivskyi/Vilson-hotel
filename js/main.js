
$(document).ready(function () {

    // change header while scrolling --------------------------- //

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // submenu open/close ----------------- //
    $('.sub-menu').on('click', function () {
        $(this).toggleClass('active');
        $(this).children('ul').slideToggle();
    });
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.sub-menu').length) {
            $('.sub-menu ul').slideUp();
            $('.sub-menu').removeClass('active');
        }
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

    // Функція для оновлення guest-field
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

    // datepicker -------------- // 

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


    // apartaments slider ------------ //
    var swiper = new Swiper(".apartaments__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 700,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })

    //  gallery ----------- //
    if ($('.apartament__gallery').length) {

        Fancybox.bind('[data-fancybox="gallery"]', {
            Carousel: {
                infinite: true
            }
        });
    }

    // more/less info box ---- //

    $('.more-btn').on('click', function () {
        var $this = $(this);
        var $infoWrap = $this.siblings('.apartament__info-wrap');

        // Отримати поточну висоту елемента
        var currentHeight = $infoWrap.height();

        // Встановити нову висоту або скинути до значення "auto"
        var newHeight = (currentHeight === 150) ? $infoWrap.get(0).scrollHeight : 150;

        // Використовувати animate() для плавного змінення висоти
        $infoWrap.animate({
            height: newHeight
        }, 500);

        // Додати або видалити клас 'active' для зміни стилів кнопки
        $this.toggleClass('active');
    });


    // booking form scroll --------------------------- //
    if ($('#booking-form').length) {
        $(window).scroll(function () {
            var bookingFormOffset = $('#booking-form').offset().top;
            if ($(this).scrollTop() >= bookingFormOffset - 200) {
                $('.apartament__widget').addClass('hide');
            } else {
                $('.apartament__widget').removeClass('hide');
            }
        });
    }


    // scroll to anchor ------------- //
    $(".scrollto").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 100 }, 0);
    });


    // servtypes tabs
    $('.servtypes__tabs .tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.servtypes__image').removeClass('show').hide();
        $('.servtypes__tabs .tab').removeClass('active-tab');
        $(this).addClass('active-tab');
        $('.' + dataClass).addClass('show').fadeIn(300);
        return false;
    });


    //  terms navigation
    if ($('.terms__nav').length > 0) {
        var headers = document.querySelectorAll('.terms__content h2');
        for (var i = 0; i < headers.length; i++) {
            headers[i].setAttribute('id', i + 1);
        }


        var headers = document.querySelectorAll('.terms__content h2');
        var list = document.querySelector('.terms__nav');
        var ul = document.createElement('ul');

        for (var i = 0; i < headers.length; i++) {
            var text = headers[i].textContent;
            var id = headers[i].getAttribute('id');
            var listItem = document.createElement('li');
            var link = document.createElement('a');

            link.textContent = text;
            link.setAttribute('href', '#' + id);
            listItem.appendChild(link);
            ul.appendChild(listItem);
        }

        list.appendChild(ul);
    }

    // -----------


        $(".terms__nav ul").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top - 105 }, 0);
        });


        const links = document.querySelectorAll('.terms__nav li a');
        window.addEventListener('scroll', () => {
            const anchors = document.querySelectorAll('.terms__content [id]');
            anchors.forEach(anchor => {
                if (anchor.closest('.terms__content')) {
                    const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                    if (window.pageYOffset >= anchorTop - 110) {
                        links.forEach(link => {
                            const correspondingLink = document.querySelector(`.terms__nav li a[href="#${anchor.id}"]`);
                            if (correspondingLink) {
                                link.classList.remove('active');
                                correspondingLink.classList.add('active');
                            }
                        });
                    }
                }
            });
        });


});


AOS.init();