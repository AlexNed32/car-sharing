$(function(){
    $('.top__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});

