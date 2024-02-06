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
          <svg class="imagess" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="current-color" class="bi bi-suit-heart" viewBox="0 0 16 16">
            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"stroke: #fff; />
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
}
