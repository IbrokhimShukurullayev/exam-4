let toggle = document.getElementById("navbar-open");
let menu = document.getElementById("navbar-toogle");
let main = document.getElementById("main");
let isOpen = false;

toggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    menu.style.top = "80px";
  } else {
    menu.style.top = "-240px";
  }
});

main.addEventListener("click", () => {
  menu.style.top = "-240px";
});

let count = 0;
const btn = document.querySelectorAll(".card-link");
const span = document.querySelector(".div-item-text");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    count++;
    span.innerHTML = count;
  });
}
