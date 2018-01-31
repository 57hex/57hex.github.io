function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var body = document.body;
var a = document.querySelector(".rocket-1").style.bottom;
var b = document.querySelector(".rocket-2").style.bottom;
var c = document.querySelector(".rocket-3").style.bottom;
body.addEventListener("keydown", goRocket, false);
function goRocket(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 49:
            document.querySelector(".rocket-1").style.bottom = "2000px";
            break;
        case 50:
            document.querySelector(".rocket-2").style.bottom = "2000px";
            break;
        case 51:
            document.querySelector(".rocket-3").style.bottom = "2000px";
            break;
        case 81:
            document.querySelector(".rocket-1").style.bottom = a;
            break;
        case 87:
            document.querySelector(".rocket-2").style.bottom = b;
            break;
        case 69:
            document.querySelector(".rocket-3").style.bottom = c;
    }
}
