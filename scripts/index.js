

// menu mobile

const button = document.querySelector('[data-button-menu]');


button.addEventListener('click', function () {
  const navMenu = document.querySelector('.menu');
  navMenu.classList.toggle('active');

});


