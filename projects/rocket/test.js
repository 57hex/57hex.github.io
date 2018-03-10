"use strict";
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var body = document.body;
var rocket1 = document.querySelector(".rocket-1");
var rocket2 = document.querySelector(".rocket-2");
var rocket3 = document.querySelector(".rocket-3");
// 預先保存原本的位置，方便火箭飛回來回來
var rocketLocarion = [
    {
        a: rocket1.style.bottom,
        b: rocket1.style.left,
    },
    {
        a: rocket2.style.bottom,
        b: rocket2.style.left,
    },
    {
        a: rocket3.style.bottom,
        b: rocket3.style.left,
    },
];
body.addEventListener("keydown", goRocket, false);
function goRocket(e) {
    switch (e.keyCode) {
        case 49:
            rocket1.style.bottom = "1000px";
            rocket1.style.left = "1000px";
            break;
        case 50:
            rocket2.style.bottom = "1000px";
            rocket2.style.left = "1000px";
            break;
        case 51:
            rocket3.style.bottom = "1000px";
            rocket3.style.left = "1000px";
            break;
        case 81:
            rocket1.style.bottom = rocketLocarion[0].a;
            rocket1.style.left = rocketLocarion[0].b;
            break;
        case 87:
            rocket2.style.bottom = rocketLocarion[1].a;
            rocket2.style.left = rocketLocarion[1].b;
            break;
        case 69:
            rocket3.style.bottom = rocketLocarion[2].a;
            rocket3.style.left = rocketLocarion[2].b;
    }
}
