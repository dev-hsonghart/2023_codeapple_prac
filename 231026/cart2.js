let cartStoreList = [
  {
    id: 0,
    title: "이미 있음",
    brand: "이미 있는것",
    photo: "./",
    price: "10000",
    count: 1,
  },
];
const cartRow = document.querySelector("#cartRow");

const cartTemplete = function (data, i) {
  return `<div class="col-sm-4">
  <div class="bg-white p-3" id="${data[i].id}">
    <img src="./img/${data[i].photo}" class="w-100" />
    <h5>${data[i].title}</h5>
    <p>${data[i].brand}</p>
    <p>가격 : ${data[i].price}</p>
    <input type="text" value="${data[i].count}" />
  </div>
</div>`;
};

// 담기 버튼 클릭 이벤트 발생 위치 찾기

// 장바구니 배열의 데이터 장바구니 영역에 출력하기

function makeCartProduct(array) {
  cartRow.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    // 템플릿에 하나씩 저장하고 html 에 출력하기
    cartRow.insertAdjacentHTML("beforeend", cartTemplete(array, i));
  }
}

function makeNewItem(item) {
  // 장바구니용 객체 생성해서 리턴
  const newItem = {
    id: item.id,
    title: item.title,
    brand: item.brand,
    photo: item.photo,
    price: item.price,
    count: 1,
  };
  return newItem;
}

function findProduct(objId) {
  // id로 기존 Obj 찾기
  function baseObj(id) {
    for (let i = 0; i < storeList.length; i++) {
      if (id == storeList[i].id) {
        return storeList[i];
      }
    }
  }
  const item = baseObj(objId);
  makeNewItem(item);
}

// 장바구니에 아이템 없음
let isCart = false;

function cartInProduct(e) {
  // 버튼의 부모 div의 id를 가져온다
  const parentId = e.target.parentNode.id;
  console.log(parentId);
  // div id와 동일한 id를 가진 obj를 storeList에서 찾는다.

  if (isCart == true) {
    console.log("장바구니에 아이템이 있음");
    // 클릭한 아이템의 아이디가 장바구니에 없으면

    // 새로운 객체 생성해서 기존 객체 데이터 복사하기
  }

  // cartView에 출력하기

  // makeCartProduct(cartStoreList);
}

window.onload = function () {
  const btns = document.querySelectorAll(".buy");
  btns[0].addEventListener("click", cartInProduct);
  btns[1].addEventListener("click", cartInProduct);
  // btns[2].addEventListener("click", cartInProduct);
  // btns[3].addEventListener("click", cartInProduct);
};
