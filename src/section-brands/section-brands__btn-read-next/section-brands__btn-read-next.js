let clickCounter = 1;
let btnRN = document.querySelector('.section-brands__btn-read-next');

const openCloseCarousel = () => {
  clickCounter++;

  let brandsCarousel = document.querySelector('.swiper-wrapper');
  brandsCarousel.style.height = clickCounter % 2 ? '155px' : 'fit-content';
  btnRN.innerText = clickCounter % 2 ? 'Показать все' : 'Скрыть';
};

btnRN.addEventListener('click', openCloseCarousel);
