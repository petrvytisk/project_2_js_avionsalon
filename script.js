"use strict";

let totalPrice = 0;
let pricePerTicket = 0;
let passengers = 0;
let returnTicket = 1;
let budget = 0;
let budgetControl = 0;
let classMultiplier = 1;

function infocollect() {
  pricePerTicket = Number(document.getElementById("destination_select").value);
  passengers = Number(document.getElementById("tickets-select").value);
  returnTicket = Number(document.getElementById("return").value);
  classMultiplier = Number(
    document.querySelector(".class_check:checked").value
  );
}

document.querySelector("#story").addEventListener("input", function () {
  this.value = this.value.replace(
    /[^a-zA-Z0-9 áčďéěíňřšťúůýžÁČĎÉĚÍŇŘŠŤÚŮÝŽ.,]/g,
    ""
  );
});

document.querySelector(".btn-overit").addEventListener("click", function () {
  infocollect();
  totalPrice = pricePerTicket * passengers;
  if (document.getElementById("return").checked) {
    totalPrice = totalPrice * 2;
  }
  totalPrice = totalPrice * classMultiplier;
  budget = Number(document.getElementById("text_budged").value);
  budgetControl = totalPrice - budget;
  document.getElementById("budget_result").textContent =
    totalPrice <= budget ? "dostatečný" : "nedostatečný";
  document.querySelector("#totprice").value = totalPrice;
  console.log(budget);
});
