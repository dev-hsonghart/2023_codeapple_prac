const selectProduct = document.querySelector(".select-1");
const selectSize = document.querySelector(".select-2");

const changeFn = function (target) {
  if (target.value == "shirt") {
    selectSize.classList.add("show");
  } else {
    selectSize.classList.remove("show");
  }
};
