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

// const products = [
//   {
//     name: "Г/Ц Блинчики с мясом вес, Россия",
//     price: "50,50 ₽",
//     disPrice: "44,50 ₽",
//     img: "../images/image (2).svg",
//     discount: "-50%",
//     names: "С картой",
//     text: "Обычная",
//     rating: 3,
//   },
//   {
//     name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
//     price: "50,50 ₽",
//     disPrice: "44,50 ₽",
//     img: "../images/image (5).png",
//     discount: "-50%",
//     names: "С картой",
//     rating: 3.5,
//   },
//   {
//     name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
//     price: "50,50 ₽",
//     disPrice: "44,50 ₽",
//     img: "../images/kitob.png",
//     discount: "-50%",
//     names: "С картой",
//     text: "Обычная",
//     rating: 3.5,
//   },
//   {
//     name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
//     price: "50,50 ₽",
//     disPrice: "44,50 ₽",
//     img: "../images/kitob2.png",
//     discount: "-50%",
//     names: "С картой",
//     text: "Обычная",
//     rating: 4.5,
//   },
// ];
// const newProducts = [
//   {
//     name: "Г/Ц Блинчики с мясом вес, Россия",
//     price: "",
//     disPrice: "599,99 ₽",
//     img: "../images/image (2).svg",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 5,
//   },
//   {
//     name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
//     price: "",
//     disPrice: "44,50 ₽",
//     img: "../images/image (5).png",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 2,
//   },
//   {
//     name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
//     price: "",
//     disPrice: "159,99 ₽",
//     img: "../images/kitob.png",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 1,
//   },
//   {
//     name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
//     price: "",
//     disPrice: "49,39 ₽",
//     img: "../images/kitob2.png",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 5,
//   },
// ];
// const buyProduct = [
//   {
//     name: "Г/Ц Блинчики с мясом вес, Россия",
//     price: "",
//     disPrice: "599,99 ₽",
//     img: "../images/image (2).svg",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 5,
//   },
//   {
//     name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
//     price: "",
//     disPrice: "44,50 ₽",
//     img: "../images/image (5).png",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 2,
//   },
//   {
//     name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
//     price: "",
//     disPrice: "159,99 ₽",
//     img: "../images/kitob.png",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 1,
//   },
//   {
//     name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
//     price: "",
//     disPrice: "49,39 ₽",
//     img: "../images/kitob2.png",
//     discount: "",
//     names: "",
//     text: "",
//     rating: 5,
//   },
// ];

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
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-suit-heart" viewBox="0 0 16 16">
            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
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
      <h2 class="card-list">Apple</h2>
      <h2 class="card-list">${description}</h2>
      <img class="images" src=${getrating()} />
      ${
         `<div class="card-links"><button onclick ="addToCart(${id})"  class="card-link">В корзину</button></div>`
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
}

// function increaseQuantity(id) {
//   cartProducts = cartProducts.map((pr) => {
//     if (pr.id === id) {
//       pr.quantity++;
//     }
//     return pr;
//   });
//   ibrohim();
//   localStorage.setItem("cart", JSON.stringify(cartProducts));
// }

// function decreaseQuantity(id) {
//   let productInCart = cartProducts.find((pr) => pr.id === id);
//   if (productInCart.quantity === 1) {
//     cartProducts = cartProducts.filter((pr) => pr.id !== id);
//   } else {
//     cartProducts = cartProducts.map((pr) => {
//       if (pr.id === id) {
//         pr.quantity--;
//       }
//       return pr;
//     });
//   }
//   ibrohim();
//   getCartQuantity();
//   getFavouriteNumber();
//   localStorage.setItem("cart", JSON.stringify(cartProducts));
// }

// ibrohim();

//<div class="card__plus-minus">
//<button class="minus">-</button>
//<p class="card__cantent">0</p>
//<button class="plus">+</button>
//</div>;
