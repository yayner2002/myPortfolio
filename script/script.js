const menu = document.querySelector('.menu');
const navMiddle = document.querySelector('.nav-middle');

function toggleMenu() {
  navMiddle.classList.toggle('show');
  menu.classList.toggle('show');
}
menu.addEventListener('click', toggleMenu);

document.querySelectorAll('.navMiddle ul li').forEach((n) =>
  n.addEventListener('click', () => {
    menu.classList.remove('show');
    navMiddle.classList.remove('show');
  })
);
