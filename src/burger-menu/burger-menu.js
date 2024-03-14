breakpoint = window.matchMedia("(max-width: 1119px)");
let menuOB = document.querySelector(".burger-menu");
let aside = document.querySelector(".mobile-menu");
let menuCB = document.querySelector(".mobile-menu__close-btn");

const openMenu = () => {
  aside.style.transition = "left 0.2s linear 0s";
  aside.style.left = breakpoint.matches ? "0" : "-320px";
};

const closeMenu = () => {
  aside.style.transition = "left 0.2s linear 0s";
  aside.style.left = "-320px";
};

menuOB.addEventListener("click", openMenu);
menuCB.addEventListener("click", closeMenu);
