var button = document.querySelector(".button");
button.addEventListener("mouseover", function (e) {
    if (e.target.nodeName === "IMG") {
        button.removeAttribute("class");
        button.setAttribute("class", "z-depth-5 button");
    }
}, false);
button.addEventListener("mouseout", function () {
    button.removeAttribute("class");
    button.setAttribute("class", "z-depth-3 button");
}, false);
