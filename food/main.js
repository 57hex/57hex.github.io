function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function beginRandomInt() {
    document.getElementById("inputCount").value = generateRandomInteger(0, 50).toString();
    document.getElementById("inputPrice").value = generateRandomInteger(50, 200).toString();
}
function calc() {
    var x = document.getElementById("inputCount").value;
    var y = document.getElementById("inputPrice").value;
    document.getElementById("total").textContent = (x * y).toString();
    document.getElementById("count").textContent = x.toString();
}
beginRandomInt();
calc();
