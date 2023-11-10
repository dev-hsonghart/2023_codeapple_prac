// 성함과 연락처가 입력되어 있어야 입력완료 클릭 함수 실행
// 입력완료 클릭 시 성함과 연락처의 입력값을 어딘가에 저장해야한다.

// 닫기 버튼 클릭 시 모달창 닫기

const reciptIemTemplete = function (data, i) {
  return `<p>${data[i].title}</p>
  <p>${data[i].brand}</p>
  <p>가격 : ${data[i].price}</p>
  <p>수량 : ${data[i].count}</p>
  <p>합계 : ${data[i].price * data[i].count}</p>
  <hr/>`;
};

const receiptForm = document.getElementById("buyForm");

// 지금 시간 구하기
function getTime() {
  let today = new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);

  const timeString = hours + ":" + minutes + ":" + seconds;

  const dateString = year + "-" + month + "-" + day;
  const todayIs = `${dateString} ${timeString}`;
  return todayIs;
}

// 영수증창 구현하기
function makeReciept() {
  // 구매일시 : submit 버튼 클릭을 한 시간 출력
  const today = getTime();
  $(".receipt-date").html(today);
  // 구매 아이템 : 장바구니 list에 들어있는 아이템 출력 반복문으로.
  //  제품명, 브랜드명, 제품 가격, 구매 수량, 해당 제품의 가격 합계
  const viewFinalItem = document.querySelector(".receipt-item-info");
  for (let i = 0; i < cartStoreList.length; i++) {
    viewFinalItem.insertAdjacentHTML(
      "beforeend",
      reciptIemTemplete(cartStoreList, i)
    );
  }

  // 총 합계 : 구매할 물품의 총 합계
  const fixPrice = calculatePrice();
  $(".receipt-total-price").html(`총 합계 : ${fixPrice}`);
}

receiptForm.onsubmit = function (e) {
  e.preventDefault();

  // 입력값 가져오기
  const nameValue = this.userName.value;
  const phoneValue = this.userPhoneNum.value;

  // 입력칸 validation 확인 요소 : 연락처는 00000000000 으로 숫자가 11자인지 확인 필요
  function checkOnlyNumber(str) {
    return /\d{11}/.test(str);
  }

  const checkResult = checkOnlyNumber(phoneValue);

  const errorMsg = document.querySelector(".error-message");
  const purchaseBox = document.querySelector(".modal-box");
  const reciptBox = document.querySelector(".receipt-box");

  if (checkResult != true) {
    // 휴대폰번호 유효성 검사가 성공일 경우
    errorMsg.classList.remove("hidden");
  } else {
    errorMsg.classList.add("hidden");
    // 모달창 닫고 영수증 창 열기
    purchaseBox.classList.add("hidden");
    reciptBox.classList.remove("hidden");
    // 입력값 초기화
    receiptForm.userName.value = "";
    receiptForm.userPhoneNum.value = "";
    makeReciept();
  }
  // 닫기 버튼 클릭 시 입력값 삭제하고 모달창 히든처리
  $(".purcharseClose").on("click", function (e) {
    receiptForm.userName.value = "";
    receiptForm.userPhoneNum.value = "";
    const purcharseModal = document.querySelector(".purcharse-modal");
    purcharseModal.classList.add("hidden");

    // 만약 영수증의 닫기버튼을 누를경우, 장바구니 데이터를 비운다.
    const checkModal = e.target.parentNode.id;
    if (checkModal != "buyForm") {
      cartStoreList = [];
      makeCartProduct(cartStoreList);
      $("#cartRow").html(`<p class="info-text">여기에 드래그</p>`);
    }
  });
};
