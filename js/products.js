const span = document.querySelector(".div-item-text");
const homeCard = document.querySelector(".home-cards");
const buy = document.querySelector(".buy");
const searchInput = document.querySelector(".search__input");
const pagination = document.querySelector(".pagination");

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

  return `
    <div class="card">
      <img class="img" src=${images[1]} />
      <div class="card-price">
        <img class="card-img" src="../../images/Button (1).png" />
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
      <h2 class="card-list">Apple</h2>
      <h2 class="card-list">${description}</h2>
      <img class="images" src=${getrating()} />
      ${
        productInCart
          ? `<div class="card__plus-minus">
              <button class="minus" onclick="decreaseQuantity(${id})>-</button>
              <span class="card__cantent">${productInCart.quantity}</span>
              <button class="plus"onclick="increaseQuantity(${id}>+</button>
            </div>`
          : `<div class="card-links"><button onclick ="addToCart(${id})"  class="card-link">В корзину</button></div>`
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
}

function increaseQuantity(id) {
  cartProducts = cartProducts.map((pr) => {
    if (pr.id === id) {
      pr.quantity++;
    }
    return pr;
  });
  getProducts();
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
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

getProductCard()


