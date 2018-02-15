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
var account = document.querySelector(".acc");
console.log(account);
var password = document.querySelector(".pwd");
console.log(password);
function loginButton() {
    var value = window.location.search;
    var valueArray = value.split("");
    for (var i = 0; i < valueArray.length; i++) {
        if (valueArray[i] === "?") {
            valueArray.splice(i, 1);
        }
    }
    var joinValueArray = decodeURIComponent(valueArray.join(""));
    if (typeof (joinValueArray) !== "string") {
        JSON.stringify(joinValueArray);
    }
    alert(joinValueArray);
    login(joinValueArray);
    alert(xhr.responseText);
    return false;
}
var xhr = new XMLHttpRequest();
function login(x) {
    xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signup", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (typeof (x) !== "string") {
        xhr.send(JSON.stringify(x));
    }
    else {
        xhr.send(x);
    }
    xhr.onload = function () {
        alert(xhr.responseText);
    };
}
account.addEventListener("blur", function () {
    if (account.value === "") {
        account.removeAttribute("class");
        account.setAttribute("class", "col s6 m6 l6 acc error");
    }
    else {
        account.removeAttribute("class");
        account.setAttribute("class", "col s6 m6 l6 acc");
    }
}, false);
password.addEventListener("blur", function () {
    if (password.value === "") {
        password.removeAttribute("class");
        password.setAttribute("class", "col s6 m6 l6 pwd error");
    }
    else {
        password.removeAttribute("class");
        password.setAttribute("class", "col s6 m6 l6 pwd");
    }
}, false);
