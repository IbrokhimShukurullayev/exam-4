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
}) {
  return `
    <div class="hero__cart__item">
        <div class="hero__cart__item__left">
            <div class="hero__cart__item__frame">
            <img src=${images[0]} alt=${name} />
            </div>
            <div class="hero__cart__item__content">
            <h2>${description}</h2>
            <p><span>${price}₽</span> за шт.</p>
            </div>
        </div>
        <div class="hero__cart__item__right">
            <div class = "card__plus-minus">
                <button class="minus" onclick="decreaseQuantity(${id})"> - </button>
                <span class="card__cantent">${quantity}</span>
                <button class="plus" onclick="increaseQuantity(${id})">+</button>
            </div>
            <p class="product__price">${price} ₽</p>
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

function increaseQuantity(id) {
  cartProducts = cartProducts.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getCartProducts();
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
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

getCartProducts();
