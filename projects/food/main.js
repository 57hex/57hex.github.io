"use strict";
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function beginRandomInt() {
    document.getElementById("inputCount").value = generateRandomInteger(0, 50).toString();
    document.getElementById("inputPrice").value = generateRandomInteger(50, 200).toString();
}
var count = document.querySelector("#inputCount");
var price = document.querySelector("#inputPrice");
var btn = document.querySelector("#btn");
var total = document.querySelector("#total");
count.addEventListener("blur", checkNull, false);
price.addEventListener("blur", checkNull, false);
btn.addEventListener("click", calc, false);
function checkNull() {
    if (this.value === "") {
        alert("ㄛ？你好像沒填ㄛ？還是你填ㄌ非數字ㄉ字？");
        btn.setAttribute("disabled", "true");
    }
    else {
        btn.removeAttribute("disabled");
    }
}
function calc() {
    var x = parseInt(count.value, 0);
    var y = parseInt(price.value, 0);
    total.textContent = (x * y).toString();
    document.getElementById("count").textContent = x.toString();
}
beginRandomInt();
calc();
var person = {
    interest: ["programing", "eatSomething"],
};
