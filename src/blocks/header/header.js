const menuBtn = document.querySelector('.menu-toggle');
const header = document.querySelector('.header');

function toggleMenu() {
  if (menuBtn.classList.contains('menu-toggle--close')) {
    menuBtn.classList.remove('menu-toggle--close');
    header.classList.remove('header--open');
  } else {
    menuBtn.classList.add('menu-toggle--close');
    header.classList.add('header--open');
  }
}

menuBtn.addEventListener('click', toggleMenu);
