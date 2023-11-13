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
  <button class="buy">구매</button> 
  
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

// 장바구니 버튼 - 로컬스토리지에 저장하기
const saveCartBtns = document.querySelectorAll(".buy");

for (let i = 0; i < saveCartBtns.length; i++) {
  saveCartBtns[i].addEventListener("click", saveStorage);
}
// 빈 배열 신규 생성하기
let cart = [];

function saveStorage(e) {
  // 새로운 오브젝트 생성
  const productObj = {
    title: "",
    count: 0,
  };
  // 클릭이 발생한 html요소의 형제 요소 중 타이틀 요소 찾기
  const targetTitle =
    e.target.previousElementSibling.previousElementSibling.innerText;

  const isCart = localStorage.getItem("cart");
  // 이미 로컬스토리지에 cart가 있을 경우
  if (isCart != null) {
    // 기존 cart를 불러오기
    let loadCart = JSON.parse(isCart);

    // 로컬스토리지 안에 추가할 타이틀이 있는지 여부 확인
    let found = loadCart.filter((e) => e.title === targetTitle);
    // filter는 array를 반환함

    if (found.length > 0) {
      found[0].count++;

      const newCart = JSON.stringify(loadCart);
      localStorage.setItem("cart", newCart);
    } else {
      productObj.title = targetTitle;
      productObj.count = count + 1;

      // // cart에 선택한 객체 넣기
      loadCart.push(productObj);
      // // 로컬스토리지에 cart 올리기
      const newCart = JSON.stringify(loadCart);
      localStorage.setItem("cart", newCart);
    }
  } else {
    // 스토리지에 cart가 없을 경우 해당 요소를 cart 배열에 넣기
    productObj.title = targetTitle;
    productObj.count = count + 1;
    cart.push(productObj);
    // 배열을 json형태로 바꾸기
    const newCart = JSON.stringify(cart);
    // 로컬스토리지에 cart 키에 값으로 넣기
    localStorage.setItem("cart", newCart);
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
