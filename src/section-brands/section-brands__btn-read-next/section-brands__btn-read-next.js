let clickCounter = 0; 
let btnRN = document.querySelector('.section-brands__btn-read-next');

const openCloseCarousel = () => {
    clickCounter ++;

    let brandsCarousel = document.querySelector('.swiper-wrapper'); 
    brandsCarousel.style.height = clickCounter % 2 ? '155px' : 'fit-content';
    btnRN.innerText = clickCounter % 2 ? 'Скрыть' : 'Показать все';
}

btnRN.addEventListener('click', openCloseCarousel);
