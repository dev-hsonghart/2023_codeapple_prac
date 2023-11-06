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

// 문자열 역순으로 정렬 - sort()

const sortBtn = document.querySelector("#sort-reverse");
sortBtn.addEventListener("click", sortReverse);

function sortReverse() {
  const products2 = [...products];
  // 다나가순으로 배열 정렬
  products2.sort(function (a, b) {
    return a.title > b.title ? -1 : 1;
  });

  // 기존 html 비우기
  row.innerHTML = "";
  // 정렬된 배열을 출력하기
  makeCard(products2);
}

// 6만원 이하만 보기 - filter

const filterBtn = document.querySelector("#filter");
filterBtn.addEventListener("click", filterPrice);

function filterPrice() {
  const filteredList = products.filter(function (a) {
    return a.price < 60000;
  });
  // 기존 html 비우기
  row.innerHTML = "";
  // 정렬된 배열을 출력하기
  makeCard(filteredList);
}
