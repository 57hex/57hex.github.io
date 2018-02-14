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
let account = document.querySelector(".acc") as HTMLInputElement;
console.log(account);
let password = document.querySelector(".pwd") as HTMLInputElement;
console.log(password);
function loginButton() {
    const value = window.location.search;
    const valueArray = value.split("");
    for (var i = 0; i < valueArray.length; i++) {
        if (valueArray[i] === "?") {
            valueArray.splice(i, 1);
        }
    }
    const joinValueArray = decodeURIComponent(valueArray.join(""));
    if (typeof(joinValueArray) !== "string") {
        JSON.stringify(joinValueArray);
    }
    alert(joinValueArray);
    login(joinValueArray);
    alert(xhr.responseText);
    return false;
}
let xhr = new XMLHttpRequest();
function login(x) {
    xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signup", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (typeof(x) !== "string") {
        xhr.send(JSON.stringify(x));
    } else {
        xhr.send(x);
    }
    xhr.onload = () => {
        alert(xhr.responseText);
    };
}
account.addEventListener("blur", () => {
    if (account.value === "") {
        account.removeAttribute("class");
        account.setAttribute("class", "col s6 m6 l6 acc error");
    } else {
        account.removeAttribute("class");
        account.setAttribute("class", "col s6 m6 l6 acc");
    }
}, false);
password.addEventListener("blur", () => {
        if (password.value === "") {
            password.removeAttribute("class");
            password.setAttribute("class", "col s6 m6 l6 pwd error");
        }   else {
            password.removeAttribute("class");
            password.setAttribute("class", "col s6 m6 l6 pwd");
        }
}, false);
