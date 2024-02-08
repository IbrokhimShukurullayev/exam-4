const homeCard = document.querySelector(".home-cards");
// const buy = document.querySelector(".buy");
const searchInput = document.querySelector(".search__input");
const pagination = document.querySelector(".pagination");

//cart

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

// add to favourute

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

let search = "";

let activePage = +localStorage.getItem("page") || 1;

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

products.forEach((el) => {
  homeCard.innerHTML += getProducts(el);
});

function getProductCard() {
  let results = products.filter((pr) => pr.name.toLowerCase().includes(search));

  let pages = Math.ceil(results.length / LIMIT);

  if (pages > 1) {
    pagination.innerHTML = `<li class="page-item ${
      activePage === 1 ? "disabled" : ""
    }"><button onclick = "getPage('-')" class="page-link"> < </button></li>`;

    for (let i = 1; i <= pages; i++) {
      pagination.innerHTML += `<li class="page-item ${
        i === activePage ? "active" : ""
      }"><button class="page-link" onclick="getPage(${i})">${i}</button></li>`;
    }
    pagination.innerHTML += `<li class="page-item ${
      activePage === pages ? "disabled" : ""
    }"><button onclick = "getPage('+')" class="page-link"> > </button></li>`;
  } else {
    pagination.innerHTML = "";
  }

  let start = (activePage - 1) * LIMIT;
  let end = activePage * LIMIT;

  homeCard.innerHTML = "";

  results.slice(start, end).forEach((el) => {
    homeCard.innerHTML += getProducts(el);
  });
}

function getPage(page) {
  if (page === "+") {
    activePage++;
  } else if (page === "-") {
    activePage--;
  } else {
    activePage = page;
  }
  localStorage.setItem("page", activePage);
  getProductCard();
}

getProductCard();

//search

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  activePage = 1;
  localStorage.setItem("page", activePage);
  getProductCard();
});

// getProductCard();

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

  getProductCard();
  getFavouriteNumber();

  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

function increaseQuantity(id) {
  cartProducts = cartProducts.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getProductCard();
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
  getProductCard();
  getCartQuantity();
  getFavouriteNumber();
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

getProductCard();

// add to favourite

function addToFavourite(id) {
  let checkFavourite = favouriteProducts.find((el) => el.id === id);
  let product = products.find((el) => el.id === id);
  if (checkFavourite) {
    favouriteProducts = favouriteProducts.filter((el) => el.id !== id);
  } else {
    favouriteProducts.push(product);
  }
  localStorage.setItem(FAVOURITE, JSON.stringify(favouriteProducts));
  getProductCard();
  getFavouriteNumber();
  getFavouriteNumbers();
}
