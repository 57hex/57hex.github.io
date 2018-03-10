"use strict";
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var todoList = [];
var list = document.querySelector('.list');
var btn = document.querySelector('.btn');
var inputBox = document.querySelector('.inputBox');
btn.addEventListener('click', getInputBoxValue, false);
list.addEventListener('click', function (e) {
    var num = e.target.dataset.num;
    if (e.target.nodeName === 'A') {
        todoList.splice(num, 1);
        updateList();
        if (todoList.length === 0) {
            list.innerHTML = '';
        }
    }
}, false);
function updateList() {
    var html = '';
    for (var i = 0; i < todoList.length; i++) {
        html += "<a data-num='" + i + "' href='#' style='color: #ffffff;'>刪除</a><p class='text'>" + todoList[i].text + '</p>';
        list.innerHTML = html;
    }
    localStorage.setItem('List', JSON.stringify(todoList));
}
function getInputBoxValue() {
    var str = '';
    str += inputBox.value;
    todoList.push({ text: str });
    updateList();
}
