
$(document).ready(function () {

    // submenu open ----------------- //
    $('.sub-menu').on('click', function () {
        $(this).toggleClass('active');
        $(this).children('ul').slideToggle();
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


});