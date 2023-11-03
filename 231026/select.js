const selectProduct = document.querySelector(".select-1");
const selectSize = document.querySelector(".select-2");

// const changeFn = function (target) {
//   if (target.value == "shirt") {
//     selectSize.classList.add("show");
//   } else {
//     selectSize.classList.remove("show");
//   }
// };

selectProduct.addEventListener("input", function (e) {
  const value = e.currentTarget.value;
  console.log(value);
  if (value == "셔츠") {
    selectSize.classList.add("show");
  } else {
    selectSize.classList.remove("show");
  }
});
