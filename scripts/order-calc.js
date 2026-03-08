let total = 0;

const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(btn => {

btn.addEventListener("click",function(){

const name = this.dataset.name;
const price = parseFloat(this.dataset.price);
const qty = this.parentElement.querySelector(".quantity").value;

const orderList = document.getElementById("orderList");

const li = document.createElement("li");

li.textContent = qty + " x " + name + " - $" + (price*qty).toFixed(2);

orderList.appendChild(li);

total += price * qty;

document.getElementById("totalPrice").textContent = total.toFixed(2);

});

});
