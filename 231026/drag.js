// 드래그 이벤트 구현

function feelDrag() {
  const storeItem = $(".store-item");
  const dropZone = $(".drag-zone");

  storeItem.on("dragstart", function (e) {
    const divId = e.target.children[0].id;

    function findItem(item) {
      // 클릭한 버튼의 id와 같은 id를 가진 아이템이 있는지 확인
      // 있으면 객체를 반환하고 없으면 undefined 반환
      return item.id == divId;
    }

    dropZone.on("dragover", function (e) {
      e.preventDefault();
    });

    dropZone.on("drop", function (e) {
      e.preventDefault();
      // div id와 동일한 id를 가진 obj를 storeList에서 찾는다.
      if (isCart == false) {
        const newProduct = findProduct(divId);
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

          const newProduct = findProduct(divId);
          cartStoreList.push(newProduct);
        }
      }

      makeCartProduct(cartStoreList);
      clickCount();
      dropZone.off("drop");
    });
  });
}
