const burgerTrigger = document.querySelector('.burger__icon');
const burgerNav = document.querySelector('.burger__nav');

const delay = () => setTimeout(showBurger, 500);

burgerTrigger.addEventListener('click', showBurger);
burgerNav.addEventListener('click', delay);

function showBurger() {
    burgerNav.classList.toggle('burger__active');
}

AOS.init()