function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
let body = document.body;
const a = (document.querySelector(".rocket-1") as HTMLElement).style.bottom;
const b = (document.querySelector(".rocket-2") as HTMLElement).style.bottom;
const c = (document.querySelector(".rocket-3") as HTMLElement).style.bottom;
body.addEventListener("keydown", goRocket , false);
function goRocket(e) {
    console.log(e.keyCode);

    switch (e.keyCode) {
        case 49:
            (document.querySelector(".rocket-1") as HTMLElement).style.bottom = "2000px";
            break;
        case 50:
            (document.querySelector(".rocket-2") as HTMLElement).style.bottom = "2000px";
            break;
        case 51:
            (document.querySelector(".rocket-3") as HTMLElement).style.bottom = "2000px";
            break;
        case 81:
            (document.querySelector(".rocket-1") as HTMLElement).style.bottom = a;
            break;
        case 87:
            (document.querySelector(".rocket-2") as HTMLElement).style.bottom = b;
            break;
        case 69:
            (document.querySelector(".rocket-3") as HTMLElement).style.bottom = c;
    }
}
