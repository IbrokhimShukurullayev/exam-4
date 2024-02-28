const cartProductsRow = document.querySelector(".hero__cart__left");

const cartQuantity = document.querySelector(".div-item-text");
const cartQuantitys = document.querySelector(".div-item-textes");
const cartKarzinu = document.querySelector(".product__count");

let cartJson = localStorage.getItem("cart");

let cartProducts = JSON.parse(cartJson) || [];

function getCartQuantity() {
  cartQuantity.textContent = cartProducts.length;
}

getCartQuantity();

function cartKarzinus() {
  cartKarzinu.textContent = cartProducts.length;
}

cartKarzinus();

function getCartQuantityes() {
  cartQuantitys.textContent = cartProducts.length;
}

getCartQuantityes();

const favouriteNumber = document.querySelector(".div-item-texts");
const favouriteNumbers = document.querySelector(".div-item-textsesss");
const cartprice = document.querySelector(".cards-prices");

let totalPriceElement = document.getElementById("total-amout");
let bookingButton = document.querySelector(".chekout__btn");
let allPriceElement = document.querySelector(".all__prices");
let totalAmount1 = document.getElementById("total-amout-1");
let totalAmount2 = document.getElementById("total-amout-2");

let totaldiscount = document.querySelector(".discoounts");

let favouriteProductsJson = localStorage.getItem(FAVOURITE);
let favouriteProducts = JSON.parse(favouriteProductsJson) || [];

function getFavouriteNumber() {
  favouriteNumber.textContent = favouriteProducts.length;
}

getFavouriteNumber();

function getFavouriteNumbers() {
  favouriteNumbers.textContent = favouriteProducts.length;
}

getFavouriteNumbers();

function getCartProductCard({
  id,
  name,
  description,
  price,
  images,
  quantity,
  discount,
}) {
  return `
    <div class="hero__cart__item">
        <div class="hero__cart__item__left">
            <div class="hero__cart__item__frame">
            <img src=${images[0]} alt=${name} />
            </div>
            <div class="hero__cart__item__content">
            <h2>${description}</h2>
            <p><span class="cards-prices">${price}₽</span> за шт.</p>
            </div>
        </div>
        <p class="card-precent" >${discount}%</p>
        <div class="hero__cart__item__right">
            <div class = "card__plus-minus">
                <button class="minus" onclick="decreaseQuantity(${id})"> - </button>
                <span class="card__cantent">${quantity}</span>
                <button class="plus" onclick="increaseQuantity(${id})">+</button>
            </div>
            <div>
            <p class="product__price">${
              price * quantity - (price * quantity * discount) / 100
            } ₽</p>
            <p class="product__prices">${price * quantity} ₽</p></div>
        </div>
    </div>
  `;
}

function getCartProducts() {
  cartProductsRow.innerHTML = "";
  cartProducts.map((pr) => {
    cartProductsRow.innerHTML += getCartProductCard(pr);
  });
}

getCartProducts();

bookingButton.addEventListener("click", function () {
  const totalPrice = getallPrice();

  window.open("../pages/dastavka.html");
});

function getallPrice() {
  let allPrice = 0;
  cartProducts.forEach((pr) => {
    allPrice += pr.price * pr.quantity;
  });
  allPriceElement.innerHTML = allPrice;
  return allPrice;
}
getallPrice();

function increaseQuantity(id) {
  cartProducts = cartProducts.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getCartProducts();
  getallPrice();
  getDiscountPrice();
  getTotalPriced();
  // totalPriceElement.innerHTML = totalPrice;
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
  getCartProducts();
  getCartQuantityes();
  getCartQuantity();
  cartKarzinus();
  getallPrice();
  getDiscountPrice();
  getTotalPriced();
  // totalPriceElement.innerHTML = totalPrice;
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

getCartProducts();

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../images/light.svg";
  } else {
    this.firstElementChild.src = "../images/dark.svg";
  }
  document.body.classList.toggle("dark");
});

function getDiscountPrice() {
  let totalDiscount = 0;
  cartProducts.forEach((pr) => {
    totalDiscount += (pr.price * pr.quantity * pr.discount) / 100;
    totaldiscount.innerHTML = totalDiscount.toFixed(1);
  });
}

getDiscountPrice();

function getTotalPriced() {
  let totalPrice = 0;
  cartProducts.forEach((pr) => {
    totalPrice +=
      pr.price * pr.quantity - (pr.price * pr.quantity * pr.discount) / 100;
    totalPriceElement.innerHTML = totalPrice.toFixed(1);
    totalAmount1.innerHTML = totalPrice.toFixed(1);
    totalAmount2.innerHTML = totalPrice.toFixed(1);
  });
}

getTotalPriced();
