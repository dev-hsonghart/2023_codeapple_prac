const btns = $(".tab-button");
const tabContents = $(".tab-content");

// 직접 짠 코드
// function tab(e) {
//   const currentClickBtn = $(e.target);
//   for (let i = 0; i < btns.length; i++) {
//     btns.eq(i).removeClass("orange");
//     tabContents.eq(i).removeClass("show");
//   }
//   currentClickBtn.addClass("orange");
//   // 지금 클릭한 요소의 인덱스 찾기

//   const index = btns.index(e.target);
//   tabContents.eq(index).addClass("show");
// }

// btns.on("click", tab);

// 애플코딩 답 코드

// for (let i = 0; i < btns.length; i++) {
//   btns.eq(i).on("click", function () {
//     btns.removeClass("orange");
//     btns.eq(i).addClass("orange");
//     tabContents.removeClass("show");
//     tabContents.eq(i).addClass("show");
//   });
// }

// data-set과 이벤트 버블링을 활용한 방법

function activeTab(num) {
  btns.removeClass("orange");
  btns.eq(num).addClass("orange");
  tabContents.removeClass("show");
  tabContents.eq(num).addClass("show");
}

$(".list").click(function (e) {
  const currentID = parseInt(e.target.dataset.id);
  activeTab(currentID);
});
