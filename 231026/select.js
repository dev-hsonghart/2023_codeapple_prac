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

  if (value == "셔츠") {
    selectSize.classList.add("show");
    const option = `<option>90</option>
    <option>100</option>`;
    selectSize.innerHTML = option;
  } else if (value == "바지") {
    const option = `<option>25</option><option>30</option>`;

    selectSize.innerHTML = option;
  } else {
    selectSize.classList.remove("show");
  }
});
