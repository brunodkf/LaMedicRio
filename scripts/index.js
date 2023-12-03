

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
})