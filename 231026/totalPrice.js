function calculatePrice() {
  let totalPrice = 0;
  // 최종가격은 각 물품에 * 갯수를 다 더하는 것.
  for (let i = 0; i < cartStoreList.length; i++) {
    const itemPrice = cartStoreList[i].price;
    const itemCount = cartStoreList[i].count;
    totalPrice = totalPrice + itemPrice * itemCount;
  }
  return totalPrice;
}

function viewTotalPrice(array) {
  const totalView = document.querySelector(".total");
  const totalViewTemplete = (price) => {
    return `<h5 class="title">최종가격</h5>
    <p class="totalPrice">합계 : ${price}</p>
    <button type="button">구매하기</button>`;
  };
  // 최종가격 뷰가 나타나는 조건 : 장바구니에 아이템이 있을 때만
  totalView.innerHTML = "";
  if (array.length > 0) {
    // 최종가격을 계산해서 값으로 리턴해야함
    const fixPrice = calculatePrice();

    totalView.insertAdjacentHTML("beforeend", totalViewTemplete(fixPrice));
  }
}
