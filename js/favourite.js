const cartNumbertProductsRow = document.querySelector(".home");

// cart

// const cartQuantity = document.querySelector(".div-item-text");

// let cartJson = localStorage.getItem("cart");

// let cartProducts = JSON.parse(cartJson) || [];

// function getCartQuantity() {
//   cartQuantity.textContent = cartProducts.length;
// }

// getCartQuantity();

// add to favourute

const favouriteNumber = document.querySelector(".div-item-texts");
const favouriteNumbers = document.querySelector(".div-item-textses");

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
  let checkFavourite = favouriteProducts.find((el) => el.id === id);
  return `
    <div class="card">
      <img class="img" src=${images[1]}>
      <div class="card-price">
        <button onclick="addToFavourite(${id})" class="${
    checkFavourite ? "btn-danger" : "card-img"
  } card-img">
          <svg class="imagess" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
          </svg>
        </button>
        <p class="card-precent">20%</p>
        <div class="card-price-1">
          <h2 class="card-price-mainly">${price}</h2>
          <p class="card-price-mainly-text">С картой</p>
        </div>
        <div class="card-price-2">
          <h2 class="card-price-mainly-2">${disprice}</h2>
          <p class="card-price-mainly-text">Обычная</p>
        </div>
      </div>
      <h2 class="card-list">${name}</h2>
      <h2 class="card-list">${description} </h2>
      <img class="images" src=${getrating()}>
      <div class="card-links">
              <button onclick="addToCart(1)" class="card-link">В корзину</button>
            </div>
    </div>
  `;
}

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

function getCartProducts() {
  cartNumbertProductsRow.innerHTML = "";
  favouriteProducts.map((pr) => {
    cartNumbertProductsRow.innerHTML += getCartProductCard(pr);
  });
}

getCartProducts();

function addToFavourite(id) {
  let checkFavourite = favouriteProducts.find((el) => el.id === id);
  let product = products.find((el) => el.id === id);
  if (checkFavourite) {
    favouriteProducts = favouriteProducts.filter((el) => el.id !== id);
  } else {
    favouriteProducts.push(product);
  }
  localStorage.setItem(FAVOURITE, JSON.stringify(favouriteProducts));
  getCartProducts();
  getFavouriteNumber();
  getFavouriteNumbers();
  getCartQuantityes();
}
