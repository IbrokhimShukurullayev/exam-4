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
// if (count == 0) {
//   span.style.display = "none"
// }

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    count++;
    // span.style.display = "inline-block"; 
    span.innerHTML = count;
  });
}

const buttonLinks = document.querySelector(".card-link");
const plusMinus = document.querySelector(".card__plus-minus");
const minus = document.querySelector(".minus");
const cardCantent = document.querySelector(".card__cantent");
const plus = document.querySelector(".plus");

let countCard = 0;

buttonLinks.addEventListener("click", function () {
  this.style.display = "none";
  plusMinus.style.display = "flex";
  countCard++;
  cardCantent.innerHTML = countCard;
});

plus.addEventListener("click", function () {
  countCard++;
  cardCantent.innerHTML = countCard;
});

minus.addEventListener("click", function () {
  countCard--;
  cardCantent.innerHTML = countCard;
});
