let car = {
  name: "소나타",
  price: 50000,
};

const cardCarName = document.querySelector(".card-car-name");
const cardCarPrice = document.querySelector(".card-car-price");

cardCarName.innerHTML = car.name;
cardCarPrice.innerHTML = car.price;
