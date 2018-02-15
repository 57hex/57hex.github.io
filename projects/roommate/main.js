function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var indexBanner = document.getElementById("index-banner");
var bannerHeight = indexBanner.style.height;
var testText = document.querySelector(".scale-text");
var startButton = document.querySelector(".start");
var introduction = document.getElementById("introduction");
function textAppear() {
    var time = 0;
    var timer = setInterval(text, 5);
    function text() {
        if (time === 100) {
            clearInterval(timer);
            testText.classList.remove("scale-out");
        }
        else {
            testText.classList.add("scale-out");
            time++;
        }
    }
}
window.onload = function () {
    textAppear();
};
startButton.addEventListener("click", function () {
    Materialize.toast("其實這邊本來要做動畫，不過他一直不工作，我ㄝㄅ知道why", 5000);
}, false);
$('.tap-target').tapTarget('open');
