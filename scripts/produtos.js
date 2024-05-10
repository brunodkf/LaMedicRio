
const swiperProdutos = new Swiper('.produtos__carrousel', {
    slidesPerView: 1,
    centeredSlides: true,
    direction: 'horizontal',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});
