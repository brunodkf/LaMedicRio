// menu mobile
const button = document.querySelector('[data-button-menu]');
const navMenu = document.querySelector('.menu');


button.addEventListener('click', function () {
  navMenu.classList.toggle('active');

  const someBarra = () => {
    if (window.scrollY >= 500) {
      navMenu.classList.remove('active');
      document.querySelector('#checkbox-menu').checked = false;
    }
  }

  window.addEventListener('scroll', () => {
    someBarra();
  });


});



// Mostra botão após 50% da página
const backToTop = document.querySelector('.topo__button');

const voltaTopo = () => {
  if (window.scrollY >= 700) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
}

window.addEventListener('scroll', () => {
  voltaTopo();
});



// Animação Exclusivo

const observer = new IntersectionObserver(entries => {
  if (entries[0].intersectionRatio > 0) {
    entries[0].target.classList.add('animate')
  } else {
    entries[0].target.classList.remove('animate')
  }
}, {
  threshold: 0
})

observer.observe(document.querySelector('[data-target="exclusivo"]'))




// Nossas Especialidades
const swiperEspecialidades = new Swiper('.especialidades__cards--swiper', {
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


const swiperDepoimentos = new Swiper('.depoimentos__decoration--swiper', {
  slidesPerView: 1,
  autoplay: true,
  centeredSlides: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

