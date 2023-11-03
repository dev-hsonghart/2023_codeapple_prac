let car = {
  name: "소나타",
  price: [50000, 3000, 400],
};

const cardCarName = document.querySelector(".card-car-name");
const cardCarPrice = document.querySelector(".card-car-price");

cardCarName.innerHTML = car.name;
cardCarPrice.innerHTML = car.price[0];

// 자바스크립트 숙제 20 용 데이터
var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

const cardTitles = document.querySelectorAll("h5");
const cardPrices = document.querySelectorAll("p");

console.log(cardTitles);

for (let i = 0; i < cardTitles.length; i++) {
  const cardTitle = cardTitles[i];
  const cardPrice = cardPrices[i];

  cardTitle.innerHTML = products[i].title;
  cardPrice.innerHTML = products[i].price;
}
