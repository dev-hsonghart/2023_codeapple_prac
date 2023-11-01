const btns = $(".tab-button");
const tabContents = $(".tab-content");

btns.on("click", function (e) {
  const currentClickBtn = $(e.target);
  for (let i = 0; i < btns.length; i++) {
    const btn = btns.eq(i);
    btn.removeClass("orange");
  }
  currentClickBtn.addClass("orange");
  // 지금 클릭한 요소의 인덱스 찾기

  const index = btns.index(e.target);

  for (let i = 0; i < tabContents.length; i++) {
    const tabContent = tabContents.eq(i);
    tabContent.removeClass("show");
  }

  tabContents.eq(index).addClass("show");
});
