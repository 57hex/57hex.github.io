function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}
function beginRandomInt(){
    (document.getElementById("inputNum") as HTMLInputElement).value = generateRandomInteger(0, 50).toString();
}
function calc(){
    var x = (document.getElementById("inputNum") as HTMLInputElement).value;
    document.getElementById("total").textContent = (x * 50).toString();
}
beginRandomInt();
calc();