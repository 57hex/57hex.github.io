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
count.addEventListener("blur", checkNull, false);
price.addEventListener("blur", checkNull, false);
btn.addEventListener("click", calc, false);
function checkNull() {
    if (this.value === "") {
        alert("此欄位不得為空");
        btn.setAttribute("disabled", "true");
    }
    else {
        btn.removeAttribute("disabled");
    }
}
function calc() {
    var x = parseInt(count.value, 0);
    var y = parseInt(price.value, 0);
    document.getElementById("total").textContent = (x * y).toString();
    document.getElementById("count").textContent = x.toString();
}
beginRandomInt();
calc();
