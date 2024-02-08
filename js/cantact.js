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

const tabButtons = document.querySelectorAll(".location__list button");
const tabContents = document.querySelectorAll(".tab__cantent ");

let active = 0;

function getTabContents() {
  tabContents.forEach((el, i) => {
    if (i == active) {
      el.style.display = "block";
      tabButtons[i].classList.add("active-tab");
    } else {
      el.style.display = "none";
      tabButtons[i].classList.remove("active-tab");
    }
  });
}

getTabContents();

tabButtons.forEach((el, i) => {
  el.addEventListener("click", function () {
    active = i;
    getTabContents();
  });
});
