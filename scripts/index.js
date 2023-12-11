// menu mobile

const button = document.querySelector('[data-button-menu]');

button.addEventListener('click', function () {
  const navMenu = document.querySelector('.menu');
  navMenu.classList.toggle('active');

});



// Mostra botão após 50% da página
const backToTop = document.querySelector('.topo__button');

const voltaTopo = ()=>{
  console.log('FUNCIONA')
  if(window.scrollY >= 700){
    backToTop.classList.add('show');
  }else{
    backToTop.classList.remove('show');
  }
}

window.addEventListener('scroll', ()=>{
  voltaTopo();
});
 


// Nossas Especialidades
const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },


});
