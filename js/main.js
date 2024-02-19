//navbar-shirink

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.querySelector(".header");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

//dark mode



let toggle = document.getElementById("navbar-open");
let menu = document.getElementById("navbar-toogle");
let main = document.getElementById("main");
let isOpen = false;

toggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    menu.style.top = "70px";
  } else {
    menu.style.top = "-240px";
  }
});

main.addEventListener("click", () => {
  menu.style.top = "-240px";
});

let Footertoggle = document.querySelector(".footer__fixsed-button");
let Footermenu = document.querySelector(".footer__toogle");
let Footermain = document.getElementById("main");
let FooterisOpen = false;

Footertoggle.addEventListener("click", () => {
  FooterisOpen = !FooterisOpen;
  if (FooterisOpen) {
    Footermenu.style.bottom = "50px";
  } else {
    Footermenu.style.bottom = "-240px";
  }
});

Footermain.addEventListener("click", () => {
  Footermenu.style.bottom = "-240px";
});

