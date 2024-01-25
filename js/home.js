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

// mapping

const homeCard = document.querySelector(".home-cards");
const newCard = document.querySelector(".new__card");

const products = [
  {
    name: "Г/Ц Блинчики с мясом вес, Россия",
    price: "50,50 ₽",
    disPrice: "44,50 ₽",
    img: "../images/image (2).svg",
    discount: "-50%",
    names: "С картой",
    text: "Обычная",
  },
  {
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "50,50 ₽",
    disPrice: "44,50 ₽",
    img: "../images/image (5).png",
    discount: "-50%",
    names: "С картой",
  },
  {
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "50,50 ₽",
    disPrice: "44,50 ₽",
    img: "../images/kitob.png",
    discount: "-50%",
    names: "С картой",
    text: "Обычная",
  },
  {
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "50,50 ₽",
    disPrice: "44,50 ₽",
    img: "../images/kitob2.png",
    discount: "-50%",
    names: "С картой",
    text: "Обычная",
  },
];
const newProducts = [
  {
    name: "Г/Ц Блинчики с мясом вес, Россия",
    price: "",
    disPrice: "599,99 ₽",
    img: "../images/image (2).svg",
    discount: "0%",
    names: "",
    text: "",
  },
  {
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "",
    disPrice: "44,50 ₽",
    img: "../images/image (5).png",
    discount: "",
    names: "",
    text: "",
  },
  {
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "",
    disPrice: "159,99 ₽",
    img: "../images/kitob.png",
    discount: "",
    names: "",
    text: "",
  },
  {
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "",
    disPrice: "49,39 ₽",
    img: "../images/kitob2.png",
    discount: "",
    names: "",
    text: "",
  },
];


function getProducts({ name, price, img, disPrice, discount ,names,text}) {
  const card = document.createElement("div");
  card.className = "card";
  const cardImg = document.createElement("img");
  cardImg.className = "img";
  cardImg.src = img;
  const cardList = document.createElement("h2");
  cardList.className = "card-list";
  const cardImages = document.createElement("img");
  cardImages.className = "card-img";
  cardImages.src = "../../images/Button (1).png";
  const cardLinks = document.createElement("div");
  cardLinks.className = "card-links";
  const cardPrice = document.createElement("div");
  cardPrice.className = "card-price";
  const cardPrice1 = document.createElement("div");
  cardPrice1.className = "card-price-1";
  const cardPrice2 = document.createElement("div");
  cardPrice2.className = "card-price-2";
  const cardPriceImages = document.createElement("img");
  cardPriceImages.className = "images";
  cardPriceImages.src = "../../images/rating.png";
  const cardLink = document.createElement("button");
  cardLink.className = "card-link";
  const cardPrecent = document.createElement("p");
  cardPrecent.className = "card-precent";
  const cardPriceMainly = document.createElement("h2");
  cardPriceMainly.className = "card-price-mainly";
  const cardPriceMainlyTitle = document.createElement("p");
  cardPriceMainlyTitle.className = "card-price-mainly-text";
  const cardPriceMainly2 = document.createElement("h2");
  cardPriceMainly2.className = "card-price-mainly-2";
  const cardPriceMainlyTitle2 = document.createElement("p");
  cardPriceMainlyTitle2.className = "card-price-mainly-text";

  const cardPrecentText = document.createTextNode(discount);
  const cardPriceMainlyText = document.createTextNode(disPrice);
  const cardPriceMainlyTitleText = document.createTextNode(names);
  const cardPriceMainly2Text = document.createTextNode(price);
  const cardPriceMainlyTitle2Text = document.createTextNode(text);
  const cardListText = document.createTextNode(name);
  const cardLinkText = document.createTextNode("В корзину");

  cardPrecent.appendChild(cardPrecentText);
  cardPriceMainly.appendChild(cardPriceMainlyText);
  cardPriceMainlyTitle.appendChild(cardPriceMainlyTitleText);
  cardPriceMainly2.appendChild(cardPriceMainly2Text);
  cardPriceMainlyTitle2.appendChild(cardPriceMainlyTitle2Text);
  cardList.appendChild(cardListText);
  cardLink.appendChild(cardLinkText);

  cardLinks.append(cardLink);
  cardPrice2.append(cardPriceMainly2, cardPriceMainlyTitle2);
  cardPrice1.append(cardPriceMainly, cardPriceMainlyTitle);
  cardPrice.append(cardImages, cardPrecent, cardPrice1, cardPrice2);
  card.append(cardImg, cardPrice, cardList, cardPriceImages, cardLinks);

  homeCard.appendChild(card);
  return card;
}

products.forEach((el) => {
  homeCard.append(getProducts(el));
});

newProducts.forEach((el) => {
  newCard.append(getProducts(el));
});
