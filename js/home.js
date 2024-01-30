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
              <button class="minus">-</button>
              <span class="card__cantent">${productInCart.quantity}</span>
              <button class="plus">+</button>
            </div>`
          : `<div class="card-links"><button onclick ="addToCart(${id})"  class="card-link">В корзину</button></div>`
      }
    </div>
  `;

}

let result = products.filter((pr) => pr.discount).slice(-4)


result.forEach((el) => {
  homeCard.innerHTML += getProducts(el);
});




let results = products.slice(-4);

results.forEach((el) => {
  newCard.innerHTML += getProducts(el);
});


let resultes = products.filter((pr) => pr.price).slice(-4);

resultes.forEach((el) => {
  buy.innerHTML += getProducts(el);
});


function addToCart(id) {
  let productFound = products.find ((pr) => pr.id === id);
  let productInCart = cartProducts.find((pr) => pr.id === id);
  if (productInCart) {

    cartProducts = cartProducts.map(pr => {
      if (pr.id === id) {
        pr.quantity ++ 
      }
      return pr;
    });
  }else {
    productFound.quantity= 1;
    cartProducts.push(productFound)
  }

  getCartQuantity()

}









//<div class="card__plus-minus">
  //<button class="minus">-</button>
  //<p class="card__cantent">0</p>
  //<button class="plus">+</button>
//</div>;