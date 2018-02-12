let button = document.querySelector(".button");
button.addEventListener("mouseover", (e) => {
    if (e.target.nodeName === "IMG") {
        button.removeAttribute("class");
        button.setAttribute("class", "z-depth-5 button");
    }
}, false);
button.addEventListener("mouseout", () => {
    button.removeAttribute("class");
    button.setAttribute("class", "z-depth-3 button");
}, false);
