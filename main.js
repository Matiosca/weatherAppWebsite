const hamIcon = document.querySelector(".hamburger");
const menu = document.querySelector(".links-top");

function toggleMenu() {
  menu.classList.toggle("show");
}

hamIcon.addEventListener("click", toggleMenu);
