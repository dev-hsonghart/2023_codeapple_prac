let cartStoreList = [];
const cartRow = document.querySelector("#cartRow");

const cartTemplete = function (data, i) {
  return `<div class="col-sm-4" draggable="false">
  <div class="bg-white p-3" id="${data[i].id}">
    <img src="./img/${data[i].photo}" class="w-100"draggable="false" />
    <h5>${data[i].title}</h5>
    <p>${data[i].brand}</p>
    <p>가격 : ${data[i].price}</p>
    <input type="number" value="${data[i].count}" class="countInput"/>
  </div>
</div>`;
};

// 장바구니 아이템의 수량 인풋이 포커스를 잃을 때 clickBlur를 실행해라
function clickBlur(e) {
  const parentId = e.target.parentNode.id;
  const fixedCount = parseInt(e.target.value);

  function findItem(item) {
    return item.id == parentId;
  }
  const cartProduct = cartStoreList.find(findItem);

  // 수량조절 완료 후 input value 값이 1 이상일 경우 해당 obj에 수량 반영
  if (fixedCount >= 1) {
    cartProduct.count = fixedCount;
  } else {
    // input value 값이 0 이하일 경우 alert 출력 후 1로 복귀
    alert("0개 이상 작성해야함");
  }

  makeCartProduct(cartStoreList);
}

// 수량 입력칸 클릭 시 수량 반영하기
function clickCount() {
  const inputs = $(".countInput");
  inputs.blur(clickBlur);
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
  // 기존 obj를 새로운 객체에 복사하기
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

// 담기 버튼 클릭 이벤트 발생 위치 찾기

function makeCartProduct(array) {
  // 장바구니 배열의 데이터를 장바구니 영역에 출력하기
  cartRow.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    // 템플릿에 하나씩 저장하고 html 에 출력하기
    cartRow.insertAdjacentHTML("beforeend", cartTemplete(array, i));
  }
  clickCount();
  viewTotalPrice(array);
}

// 장바구니에 아이템 없으로 기초값 설정
let isCart = false;

function cartInProduct(e) {
  // 버튼의 부모 div의 id를 가져온다
  const parentId = e.target.parentNode.id;

  function findItem(item) {
    // 클릭한 버튼의 id와 같은 id를 가진 아이템이 있는지 확인
    // 있으면 객체를 반환하고 없으면 undefined 반환
    return item.id == parentId;
  }
  // div id와 동일한 id를 가진 obj를 storeList에서 찾는다.
  if (isCart == false) {
    const newProduct = findProduct(parentId);
    cartStoreList.push(newProduct);
    isCart = !isCart;
  } else {
    // 클릭한 id와 동일한 아이템 있는지 확인하고 있으면 아이템 꺼내오기
    const isInProduct = cartStoreList.find(findItem);
    if (isInProduct != undefined) {
      // 장바구니에 해당 아이템이 이미 있음
      isInProduct.count += 1;
    } else {
      // 장바구니에 해당 아이템은 아직 없어서 새로 추가함

      const newProduct = findProduct(parentId);
      cartStoreList.push(newProduct);
    }
  }

  makeCartProduct(cartStoreList);
}

function clickBuy() {
  const btns = $(".buy");
  btns.on("click", cartInProduct);
}

window.onload = clickBuy();
