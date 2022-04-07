const menu = document.querySelector('.menu');
const navMiddle = document.querySelector('.nav-middle');
const lists = document.querySelectorAll('.mobile-menu-options');

function toggleMenu() {
  navMiddle.classList.toggle('show');
  menu.classList.toggle('show');
}
menu.addEventListener('click', toggleMenu);
lists.forEach((list) => list.addEventListener('click', toggleMenu));