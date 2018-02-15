function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
let indexBanner = document.getElementById("index-banner");
let bannerHeight = indexBanner.style.height;
let testText = document.querySelector(".scale-text");
let startButton = document.querySelector(".start");
let introduction = document.getElementById("introduction");
function textAppear() {
    let time = 0;
    const timer = setInterval(text, 5);
    function text() {
        if (time === 100) {
            clearInterval(timer);
            testText.classList.remove("scale-out");
            } else {
            testText.classList.add("scale-out");
            time++;
        }
    }
}
window.onload = () => {
    textAppear();
};
startButton.addEventListener("click", () => {
    Materialize.toast("其實這邊本來要做動畫，不過他一直不工作，我ㄝㄅ知道why", 5000);
}, false);
$('.tap-target').tapTarget('open');