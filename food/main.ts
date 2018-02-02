function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function beginRandomInt() {
    (document.getElementById("inputCount") as HTMLInputElement).value = generateRandomInteger(0, 50).toString();
    (document.getElementById("inputPrice") as HTMLInputElement).value = generateRandomInteger(50, 200).toString();
}
let count = (document.querySelector("#inputCount") as HTMLInputElement);
let price = (document.querySelector("#inputPrice") as HTMLInputElement);
let btn = (document.querySelector("#btn") as HTMLInputElement);
count.addEventListener("blur", checkNull, false);
price.addEventListener("blur", checkNull, false);
btn.addEventListener("click", calc, false);
function checkNull() {
    if (this.value === "") {
        alert("此欄位不得為空");
        btn.setAttribute("disabled", "true");
    } else {
        btn.removeAttribute("disabled");
    }
}
function calc() {
    const x: number = parseInt(count.value, 0);
    const y: number = parseInt(price.value, 0);
    document.getElementById("total").textContent = (x * y).toString();
    document.getElementById("count").textContent = x.toString();
}
beginRandomInt();
calc();
