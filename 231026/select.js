const selectProduct = document.querySelector(".select-1");
const selectSize = document.querySelector(".select-2");

// const changeFn = function (target) {
//   if (target.value == "shirt") {
//     selectSize.classList.add("show");
//   } else {
//     selectSize.classList.remove("show");
//   }
// };

let pants = [28, 30, 32];
let shirts = [95, 100, 105];

selectProduct.addEventListener("input", function (e) {
  const value = e.currentTarget.value;

  if (value == "셔츠") {
    selectSize.classList.add("show");
    selectSize.innerHTML = "";
    shirts.forEach(function (shirt) {
      selectSize.insertAdjacentHTML("beforeend", `<option>${shirt}</option>`);
    });
  } else if (value == "바지") {
    selectSize.classList.add("show");
    selectSize.innerHTML = "";
    pants.forEach(function (pant) {
      selectSize.insertAdjacentHTML("beforeend", `<option>${pant}</option>`);
    });
    // const option = `<option>25</option><option>30</option>`;

    // selectSize.innerHTML = option;
  } else {
    selectSize.classList.remove("show");
  }
});
