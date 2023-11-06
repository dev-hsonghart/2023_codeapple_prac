const row = document.querySelector(".row");

const cardTemplete = function (products, index) {
  return `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100" />
  <h5>${products[index]}</h5>
  </div>`;
};

let cartProducts = JSON.parse(localStorage.getItem("cart"));

function makeCard(product) {
  for (let i = 0; i < product.length; i++) {
    row.insertAdjacentHTML("beforeend", cardTemplete(product, i));
  }
}
makeCard(cartProducts);
