var allList = new XMLHttpRequest();
allList.open('get', 'https://57hex.github.io/file.json', false);
allList.send(null);
var allWorks;
if (allList.responseText !== '') {
    allWorks = JSON.parse(allList.responseText);
}
// 以上用來存作品相關資料。
//
var body = document.querySelector('.body');
var list = document.querySelector('.list');
var workName = document.querySelector('.workName');
var workPath = document.querySelector('.workPath');
var workHTML = document.querySelector('.workHtml');
var workButton = document.querySelector('.workButton');
// 這邊宣告從 ＨＴＭＬ 撈過來的變數。
workButton.addEventListener('click', addNewWork, false); // 按按鈕時觸發 addNewWork 事件。
//
function listAll() {
    var strName = '';
    for (var i = 0; i < allWorks.length; i++) {
        strName += "<div class='col s4 m4 l4 word'><li data-num =" + i + "><a href=" + allWorks[i].link + " class='flow-text'>" + allWorks[i].projectName + "</a></li></div>";
    }
    list.innerHTML = strName;
}
// 更新菜單。
listAll(); // 網頁被載入完的時候更新一次菜單。
function closeResume() {
    var resumeBeClosed = document.querySelector('.word');
    if (resumeBeClosed.dataset.num === '0') {
        resumeBeClosed.setAttribute('href', '#');
    }
}
//
function addToLocal() {
    localStorage.setItem('workName', workName.value);
    localStorage.setItem('workPath', workPath.value);
}
// 使用 Local Storage 儲存使用者在 InputBox 輸入的資料。
//
function addNewWork() {
    addToLocal();
    if (workName.value !== '' && workPath.value !== '') {
        var str = localStorage.getItem('workPath');
        if (workHTML.value !== '') {
            str += '/' + workHTML.value + '.html'; // 自訂路徑補全 HTML
        }
        else {
            str += '/index.html';
        }
        allWorks.push({ projectName: localStorage.getItem('workName'), link: str });
        listAll();
    }
    else {
        alert('你好像忘記填什ㄇㄌ??????');
        return;
    }
}
// 儲存資料，檢查 InputBox 是否為空。
// 夜間模式
var seeMode = document.querySelector('.seeMode');
var word = document.querySelectorAll('.testWord');
var inputWord = document.querySelectorAll('.input-box');
var btn = document.querySelectorAll('.btn');
var card = document.querySelector('.card-panel');
var modeToken = 0;
// 預先儲存原本的顏色，不用再抓一次。
var bodyBGColor = body.style.backgroundColor;
var btnBGColor = btn[0].style.backgroundColor;
var cardBGColor = card.style.backgroundColor;
//
localStorage.setItem('modeToken', JSON.stringify(modeToken));
function changeMode() {
    if (JSON.parse(localStorage.getItem('modeToken')) === 0) {
        body.style.backgroundColor = '#262322';
        for (var i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = '#485665';
        }
        card.style.backgroundColor = '#485665';
        card.style.color = '#ffffff';
        for (var i = 0; i < inputWord.length; i++) {
            inputWord[i].style.color = '#ffffff';
        }
        for (var i = 0; i < word.length; i++) {
            word[i].setAttribute('class', ' blue-text text-lighten-4 flow-text');
        }
        modeToken++;
        seeMode.textContent = '夜間模式';
        localStorage.setItem('modeToken', JSON.stringify(modeToken));
    }
    else if (JSON.parse(localStorage.getItem('modeToken')) !== 0) {
        body.style.backgroundColor = bodyBGColor;
        for (var i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = btnBGColor;
        }
        card.style.backgroundColor = cardBGColor;
        card.style.color = '#000000';
        for (var i = 0; i < word.length; i++) {
            word[i].removeAttribute('class');
            word[i].setAttribute('class', 'flow-text');
        }
        card.style.color = '#000000';
        for (var i = 0; i < inputWord.length; i++) {
            inputWord[i].style.color = '#000000';
        }
        seeMode.textContent = '日間模式';
        modeToken--;
        localStorage.setItem('modeToken', JSON.stringify(modeToken));
    }
}
seeMode.addEventListener('click', changeMode, false);
// 為什麼睡覺還要回家 麻煩死ㄌ= ="
