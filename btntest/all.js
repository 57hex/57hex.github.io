var button = document.querySelector(".button");
button.addEventListener("onmouseenter", function (e) {
    button.removeAttribute("class");
    button.setAttribute("class", "button z-depth-5");
}, false);
button.addEventListener("onmouseleave", function (e) {
    button.removeAttribute("class");
    button.setAttribute("class", "button z-depth-3");
}, false);
