let button = document.querySelector(".button");
button.addEventListener("onmouseenter", (e) => {
    button.removeAttribute("class");
    button.setAttribute("class", "button z-depth-5");
}, false);

button.addEventListener("onmouseleave", (e) => {
    button.removeAttribute("class");
    button.setAttribute("class", "button z-depth-3");
}, false)