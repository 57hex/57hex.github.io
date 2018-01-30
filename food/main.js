function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
function beginRandomInt() {
    document.getElementById("inputCount").value = generateRandomInteger(0, 50).toString();
    document.getElementById("inputPrice").value = generateRandomInteger(50, 200).toString();
}
function calc() {
    var x = parseInt(document.getElementById("inputCount").value, 0);
    var y = parseInt(document.getElementById("inputPrice").value, 0);
    document.getElementById("total").textContent = (x * y).toString();
    document.getElementById("count").textContent = x.toString();
}
beginRandomInt();
calc();
