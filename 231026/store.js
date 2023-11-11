// 화면 기본값
// 상품 템플릿
const storeList = [];
const productTemplete = function (data, i) {
  return `<div class="col-sm-3 store-item" draggable="true">
  <div class="bg-white p-3 card-box" draggable="false" id="${data[i].id}">
  <img src="./img/${data[i].photo}" class="w-100" draggable="false"/>
  <h5 draggable="false">${data[i].title}</h5>
  <p draggable="false">${data[i].brand}</p>
  <p draggable="false">가격 : ${data[i].price}</p>
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
  // 새로 생성된 담기 버튼에 click 이벤트 심기
  clickBuy();
  feelDrag();
}

function searchProduct(array) {
  const searchInputValue = document.querySelector("#searchInput").value;
  // 검색이 입력되면
  if (searchInputValue != "") {
    for (let i = 0; i < array.length; i++) {
      const title = array[i].title;
      const brand = array[i].brand;
      const product = array[i];
      // 검색 데이터에 저장할 객체 생성
      const searchItem = {
        id: product.id,
        title: product.title,
        brand: product.brand,
        photo: product.photo,
        price: product.price,
      };
      // 입력값이 현재 아이템에 있는지 확인하고 있을 경우 검색결과값에 출력한다.
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
    clickBuy();
    feelDrag();
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
