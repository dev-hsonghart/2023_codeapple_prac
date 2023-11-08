let cartStoreList = [
  {
    id: 0,
    title: "식기세척기",
    brand: "세척나라",
    photo: "pr1.jpg",
    price: 10000,
    count: 1,
  },
];
const cartRow = document.querySelector("#cartRow");

const cartTemplete = function (data, i) {
  return `<div class="col-sm-4">
  <div class="bg-white p-3" id="${data[i].id}">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${data[i].title}</h5>
    <p>가격 : ${data[i].price}</p>
    <input type="text" value="1" />
  </div>
</div>`;
};

// 담기 버튼 클릭 이벤트 발생 위치 찾기

function makeNewProduct(objId) {
  // id로 기존 Obj 찾기
  // const baseObj = function () {
  //   for (let i = 0; i < storeList.length; i++) {
  //     if (objId == storeList[i].id) {
  //       return storeList[i];
  //     }
  //   }
  // };
  // console.log(baseObj);
  // 새로운 obj 생성
  // const newProduct = {
  //   id: baseObj.id,
  //   title: baseObj.title,
  //   brand: baseObj.brand,
  //   photo: baseObj.photo,
  //   price: baseObj.price,
  //   count: 1,
  // };
  // cartStoreList.push(newProduct);
  // console.log(cartStoreList);
}

window.onload = function () {
  const btns = document.querySelectorAll(".buy");
  btns[0].addEventListener("click", function (e) {
    // 버튼의 부모 div의 id를 가져온다
    const parentId = e.target.parentNode.id;
    // div id와 동일한 id를 가진 obj를 storeList에서 찾는다.

    if (cartStoreList.length > 0) {
      for (let i = 0; i < cartStoreList.length; i++) {
        if (parentId == cartStoreList[i].id) {
          console.log("이거 있음");
        } else {
          console.log("있긴한데 얜 없어");
        }
      }
    } else {
      console.log("비어있음");
    }

    // 찾아온 obj의 id가 cartStore에 있는지 확인한다.
    // if () {
    //   // 새로운 obj에 복사하기

    //   // makeNewProduct(parentId);
    // } else {
    //   // 아무것도 안하기
    // }

    // 없으면 새로운 obj에 데이터를 복사하여 cart에 넣는다.
    // 있으면 수량만 1 더한다.
    // 장바구니 영역에 cartStoreList를 출력한다.
  });
};
