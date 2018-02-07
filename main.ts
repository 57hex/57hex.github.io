let allWorks = [
    {
        projectName: "履歷",
        link: "resume/resume.html",
    },
    {
        projectName: "火箭",
        link: "rocket/rocket.html",
    },
    {
        projectName: "生日賀卡",
        link: "birthday/index.html",
    },
    {
        projectName: "漢堡計算機",
        link: "food/index.html",
    },
];
// 以上用來存作品相關資料。
//
let body = document.querySelector(".body") as HTMLElement;
let list = document.querySelector(".list");
let workName = document.querySelector(".workName") as HTMLInputElement;
let workPath = document.querySelector(".workPath") as HTMLInputElement;
let workHTML = document.querySelector(".workHtml") as HTMLInputElement;
let workButton = document.querySelector(".workButton");
// 這邊宣告從 ＨＴＭＬ 撈過來的變數。
workButton.addEventListener("click", addNewWork, false); // 按按鈕時觸發 addNewWork 事件。
//
function listAll() {
    let strName = "";
    for (let i = 0; i < allWorks.length; i++) {
        strName += "<div class='col s4 m4 l4 word'><li data-num =" + i + "><a href=" + allWorks[i].link + ">" +  allWorks[i].projectName + "</a></li></div>";
    }
    list.innerHTML = strName;
}
// 更新菜單。
listAll(); // 網頁被載入完的時候更新一次菜單。
function closeResume() {
    const resumeBeClosed = document.querySelector(".word");
    if (resumeBeClosed.dataset.num === "0") {
        resumeBeClosed.setAttribute("href", "#");
    }
}
//
function addToLocal() {
    localStorage.setItem("workName", workName.value);
    localStorage.setItem("workPath", workPath.value);
}
// 使用 Local Storage 儲存使用者在 InputBox 輸入的資料。
//
function addNewWork() {
    addToLocal();
    if (workName.value !== "" && workPath.value !== "") {
        let str = localStorage.getItem("workPath");
        if (workHTML.value !== "") {
            str += "/" + workHTML.value + ".html"; // 自訂路徑補全 HTML
        } else {
            str += "/index.html";
        }
        allWorks.push({projectName: localStorage.getItem("workName"), link: str});
        listAll();
    } else {
        alert("你好像忘記填什ㄇㄌ??????");
        return;
    }
}
// 儲存資料，檢查 InputBox 是否為空。

// 夜間模式
let seeMode = document.querySelector(".seeMode");
let btn = document.querySelectorAll(".btn");
let card = document.querySelector(".card-panel") as HTMLElement;
let modeToken = 0;
const bodyBGColor = body.style.backgroundColor;
const btnBGColor = btn[0].style.backgroundColor;
const cardBGColor = card.style.backgroundColor;
const cardTextColor = card.style.color;
localStorage.setItem("modeToken", JSON.stringify(modeToken));
function changeMode() { // 改變夜間/日間模式
    if (JSON.parse(localStorage.getItem("modeToken")) === 0){
        body.style.backgroundColor = "#262322";
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = "#485665";
        }
        card.style.backgroundColor = "#485665";
        card.style.color = "#ffffff";
        modeToken ++;
        seeMode.textContent = "夜間模式";
        localStorage.setItem("modeToken", JSON.stringify(modeToken));
    } else if (JSON.parse(localStorage.getItem("modeToken")) !== 0) {
        body.style.backgroundColor = bodyBGColor;
        for (let i = 0; i < btn.length; i++) {
            btn[i].style.backgroundColor = btnBGColor;
        }
        card.style.backgroundColor = cardBGColor;
        card.style.color = cardTextColor;
        seeMode.textContent = "日間模式";
        modeToken --;
        localStorage.setItem("modeToken", JSON.stringify(modeToken));
    }
}
seeMode.addEventListener("click", changeMode, false);
