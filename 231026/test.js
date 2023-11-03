// 코딩애플 array, for 반복문 실력향상 과제
// Q1. Array에서 "철수"라는 데이터를 찾아서 콘솔창에 출력하기
// 파라미터에 '철수'를 넣으면 '있어요' 라는 글자를 띄우고, 자료 안에 없는 데이터를 입력 시 콘솔 창에 아무것도 띄우지 않는다.

let nameList = ["흥민", "영희", "철수", "재석"];

function findName(name) {
  nameList.forEach(function (item) {
    if (name == item && item == "철수") {
      console.log("있어요");
    }
  });
}
