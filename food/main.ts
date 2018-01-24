function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}
function beginRandomInt(){
    (document.getElementById("inputCount") as HTMLInputElement).value = generateRandomInteger(0, 50).toString();
    (document.getElementById("inputPrice") as HTMLInputElement).value = generateRandomInteger(50, 200).toString();
}
function calc(){
    const x = (document.getElementById("inputCount") as HTMLInputElement).value;
    const y = (document.getElementById("inputPrice") as HTMLInputElement).value;
    document.getElementById("total").textContent = (x * y).toString();
    document.getElementById("count").textContent = x.toString();
}
beginRandomInt();
calc();
