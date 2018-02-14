function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
let indexBanner = document.getElementById("index-banner");
let bannerHeight = indexBanner.style.height;
let testText = document.querySelector(".scale-text");
let startButton = document.querySelector(".start");
let introduction = document.getElementById("introduction");
function textAppear() {
    indexBanner.style.height = window.innerHeight.toString() + "px";
    let time = 0;
    const timer = setInterval(text, 5);
    function text() {
        if (time === 100) {
            clearInterval(timer);
            testText.removeAttribute("class");
            testText.setAttribute("class", "header center-on-small-only grey-text text-darken-4 scale-transition test-text");
        } else {
            testText.removeAttribute("class");
            testText.setAttribute("class", "header center-on-small-only grey-text text-darken-4 scale-transition scale-out test-text");
            time++;
        }
    }
}
window.onload = () => {
    textAppear();
};
startButton.addEventListener("click", changePage, false);
function changePage() {
    let height = 0;
    const timer = setInterval(start, 500);
    function start() {
        if (height === 20) {
            clearInterval(timer);
        } else {
            height ++;
            indexBanner.style.height = height.toString() + "%";
        }
    }
}
