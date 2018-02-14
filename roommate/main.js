function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var indexBanner = document.getElementById("index-banner");
var bannerHeight = indexBanner.style.height;
var testText = document.querySelector(".scale-text");
var startButton = document.querySelector(".start");
var introduction = document.getElementById("introduction");
function textAppear() {
    indexBanner.style.height = window.innerHeight.toString() + "px";
    var time = 0;
    var timer = setInterval(text, 5);
    function text() {
        if (time === 100) {
            clearInterval(timer);
            testText.removeAttribute("class");
            testText.setAttribute("class", "header center-on-small-only grey-text text-darken-4 scale-transition test-text");
        }
        else {
            testText.removeAttribute("class");
            testText.setAttribute("class", "header center-on-small-only grey-text text-darken-4 scale-transition scale-out test-text");
            time++;
        }
    }
}
window.onload = function () {
    textAppear();
};
startButton.addEventListener("click", changePage, false);
function changePage() {
    var height = 0;
    var timer = setInterval(start, 500);
    function start() {
        if (height === 20) {
            clearInterval(timer);
        }
        else {
            height++;
            indexBanner.style.height = height.toString() + "%";
        }
    }
}
