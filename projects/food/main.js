"use strict";
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function beginRandomInt() {
    document.getElementById("inputCount").value = generateRandomInteger(0, 50).toString();
    document.getElementById("inputPrice").value = generateRandomInteger(50, 200).toString();
}
let count = document.querySelector("#inputCount");
let price = document.querySelector("#inputPrice");
let btn = document.querySelector("#btn");
let total = document.querySelector("#total");
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
    const x = parseInt(count.value, 0);
    const y = parseInt(price.value, 0);
    total.textContent = (x * y).toString();
    document.getElementById("count").textContent = x.toString();
}
beginRandomInt();
calc();
let person = {
    interest: ["programing", "eatSomething"],
};
//# sourceMappingURL=main.js.map