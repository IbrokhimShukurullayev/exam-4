let count = 0;
const btn = document.querySelectorAll(".card-link");
const span = document.querySelector(".div-item-text");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    count++;
    span.innerHTML = count;
  });
}

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "images/light.svg";
  } else {
    this.firstElementChild.src = "images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

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

const homeCard = document.querySelector(".home-cards");
const newCard = document.querySelector(".new__card");
const buy = document.querySelector(".buy");
const searchInput = document.querySelector(".search__input");

let search = "";

const cartProductsRow = document.querySelector(".hero__cart__left");

const cartQuantity = document.querySelector(".div-item-text");

const cartQuantitys = document.querySelector(".div-item-textes");

let cartJson = localStorage.getItem("cart");

let cartProducts = JSON.parse(cartJson) || [];

function getCartQuantity() {
  cartQuantity.textContent = cartProducts.length;
}

getCartQuantity();

function getCartQuantityes() {
  cartQuantitys.textContent = cartProducts.length;
}

getCartQuantityes();

const favouriteNumber = document.querySelector(".div-item-texts");
const favouriteNumbers = document.querySelector(".div-item-textsesss");

let favouriteProductsJson = localStorage.getItem(FAVOURITE);
let favouriteProducts = JSON.parse(favouriteProductsJson) || [];

function getFavouriteNumber() {
  favouriteNumber.textContent = favouriteProducts.length;
}

getFavouriteNumber();
function getProducts({
  id,
  category,
  description,
  name,
  price,
  images,
  disprice,
  discount,
  rating,
}) {
  function getrating() {
    if (rating == 5) {
      return `../images/rating(1).svg`;
    } else if (rating == 4.5) {
      return `../images/rating(8).png`;
    } else if (rating == 4) {
      return `../images/rating(2).svg`;
    } else if (rating == 3.5) {
      return `../images/rating(3).png`;
    } else if (rating == 3) {
      return `../images/rating(3).png`;
    } else if (rating == 2) {
      return `../images/rating.svg`;
    } else if (rating == 1) {
      return `../images/rating(7).png`;
    }
  }

  let productInCart = cartProducts.find((pr) => pr.id === id);
  let checkFavourite = favouriteProducts.find((el) => el.id === id);

  return `
    <div class="card">
      <img class="img" src=${images[1]} />
      <div class="card-price">
        <button onclick="addToFavourite(${id})" class="${
    checkFavourite ? "btn-danger" : "card-img"
  } card-img">
          <svg class="imagess" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
          </svg>
        </button>
        <p class="card-precent">${discount}%</p>
        <div class="card-price-1">
          <h2 class="card-price-mainly">${price}</h2>
          <p class="card-price-mainly-text">С картой</p>
        </div>
        <div class="card-price-2">
          <h2 class="card-price-mainly-2">${disprice}</h2>
          <p class="card-price-mainly-text">Обычная</p>
        </div>
      </div>
      <h2 class="card-list">Apple</h2>
      <h2 class="card-list">${description}</h2>
      <img class="images" src=${getrating()} />
      ${
        productInCart
          ? `<div class = "card__plus-minus">
              <button class="minus" onclick="decreaseQuantity(${id})"> - </button>
              <span class="card__cantent">${productInCart.quantity}</span>
              <button class="plus" onclick="increaseQuantity(${id})">+</button>
            </div>`
          : `<div class="card-links">
              <button onclick ="addToCart(${id})"  class="card-link">В корзину</button>
            </div>`
      }
    </div>
  `;
}

function getFavouriteNumbers() {
  favouriteNumbers.textContent = favouriteProducts.length;
}

getFavouriteNumbers();
let result = products.filter((pr) => pr.description).slice(5, 9);

result.forEach((el) => {
  homeCard.innerHTML += getProducts(el);
});

let results = products.slice(-4);

results.forEach((el) => {
  newCard.innerHTML += getProducts(el);
});

let resultes = products.filter((pr) => pr.description).slice(0, 4);

resultes.forEach((el) => {
  buy.innerHTML += getProducts(el);
});

function addToCart(id) {
  let productFound = products.find((pr) => pr.id === id);
  let productInCart = cartProducts.find((pr) => pr.id === id);
  if (productInCart) {
    cartProducts = cartProducts.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
  } else {
    productFound.quantity = 1;
    cartProducts.push(productFound);
  }
  getCartQuantity();
  getCartQuantityes();
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}
function addToFavourite(id) {
  let checkFavourite = favouriteProducts.find((el) => el.id === id);
  let product = products.find((el) => el.id === id);
  if (checkFavourite) {
    favouriteProducts = favouriteProducts.filter((el) => el.id !== id);
  } else {
    favouriteProducts.push(product);
  }
  localStorage.setItem(FAVOURITE, JSON.stringify(favouriteProducts));
  getFavouriteNumber();
  getFavouriteNumbers();
}

function increaseQuantity(id) {
  cartProducts = cartProducts.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

function decreaseQuantity(id) {
  let productInCart = cartProducts.find((pr) => pr.id === id);
  if (productInCart.quantity === 1) {
    cartProducts = cartProducts.filter((pr) => pr.id !== id);
  } else {
    cartProducts = cartProducts.map((pr) => {
      if (pr.id === id) {
        pr.quantity--;
      }
      return pr;
    });
  }
  getCartQuantity();
  getFavouriteNumber();
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}
