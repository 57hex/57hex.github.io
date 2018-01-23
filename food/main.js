function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function beginRandomInt() {
    document.getElementById("inputNum").value = generateRandomInteger(0, 50).toString();
}
function calc() {
    var x = document.getElementById("inputNum").value;
    document.getElementById("total").textContent = (x * 50).toString();
}
beginRandomInt();
calc();
