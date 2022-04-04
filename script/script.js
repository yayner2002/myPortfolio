const menu = document.querySelector('.menu');
const navMiddle = document.querySelector('.nav-middle');
function toggleMenu() {
  navMiddle.classList.toggle('show');
  menu.classList.toggle('show');
}
menu.addEventListener('click', toggleMenu);
