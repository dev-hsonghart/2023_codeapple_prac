// 화면 기본값
// 상품 템플릿
const storeList = [];
const productTemplete = function (data, i) {
  return `<div class="col-sm-3">
  <div class="bg-white p-3 card-box" id="${data[i].id}">
  <img src="./img/${data[i].photo}" class="w-100" />
  <h5>${data[i].title}</h5>
  <p>${data[i].brand}</p>
  <p>가격 : ${data[i].price}</p>
  <button class="buy">담기</button>
</div>
  </div>`;
};

let searchStoreList = [];

// 상품 리스트가 담길 row
const storeRow = document.querySelector("#storeRow");

// 리스트에 추가하고 html 검색값만 그리기
function viewSearchProduct(item, value) {
  const searchedStr = `<span>${value}</span>`;
  const title = item.title;
  const brand = item.brand;

  if (title.indexOf(value) != -1) {
    const newStr = title.replace(value, searchedStr);
    item.title = newStr;
  } else {
    const newStr = brand.replace(value, searchedStr);
    item.brand = newStr;
  }

  searchStoreList.push(item);

  storeRow.innerHTML = "";

  initProducts(searchStoreList);
}

function searchProduct(array) {
  // 검색이 입력되면
  const searchInputValue = document.querySelector("#searchInput").value;
  if (searchInputValue != "") {
    for (let i = 0; i < array.length; i++) {
      const title = array[i].title;
      const brand = array[i].brand;
      const product = array[i];
      const searchItem = {
        id: product.id,
        title: product.title,
        brand: product.brand,
        photo: product.photo,
        price: product.price,
      };

      if (brand.indexOf(searchInputValue) != -1) {
        viewSearchProduct(searchItem, searchInputValue);
      } else if (title.indexOf(searchInputValue) != -1) {
        viewSearchProduct(searchItem, searchInputValue);
      }
    }

    searchStoreList = [];
  } else {
    storeRow.innerHTML = "";
    initProducts(storeList);
  }
}

// json 배열을 템플릿에 바인딩하고 storeRow에 기본값 추가하기
function initProducts(array) {
  for (let i = 0; i < array.length; i++) {
    // 템플릿에 하나씩 저장하고 html 에 출력하기
    storeRow.insertAdjacentHTML("beforeend", productTemplete(array, i));
  }
}

// json을 전역배열변수 storeList 에 저장하기
function pushProducts(data) {
  const products = data.products;
  for (let i = 0; i < products.length; i++) {
    storeList.push(products[i]);
  }

  // 검색칸에 입력값이 비어있을 경우 처음 불러온 데이터를 출력
  searchProduct(storeList);
}

function init() {
  $.get("./json/store.json").done(pushProducts);
}

init();
