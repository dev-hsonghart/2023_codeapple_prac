var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

const row = document.querySelector(".row");

const cardTemplete = function (products, index) {
  return `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>${products[index].title}</h5>
  <p>가격 : ${products[index].price}</p>
  </div>`;
};

function makeCard(product) {
  for (let i = 0; i < product.length; i++) {
    row.insertAdjacentHTML("beforeend", cardTemplete(product, i));
  }
}
makeCard(products);

const productBtn = document.querySelector(".btn");
productBtn.addEventListener("click", getProduct);

let count = 0;

function getProduct() {
  if (count == 0) {
    $.get("https://codingapple1.github.io/js/more1.json").done(function (data) {
      makeCard(data);
    });
    count++;
  } else if (count == 1) {
    $.get("https://codingapple1.github.io/js/more2.json").done(function (data) {
      makeCard(data);
    });
    productBtn.classList.add("d-none");
  }
}
