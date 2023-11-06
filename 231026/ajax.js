const row = document.querySelector(".row");

const cardTemplete = `<div class="col-sm-4">
<img src="https://via.placeholder.com/600" class="w-100" />
<h5>Card title</h5>
<p>가격 : 70000</p>
</div>`;

for (let i = 0; i < 3; i++) {
  row.insertAdjacentHTML("beforeend", cardTemplete);
}
