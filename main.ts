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
let list = document.querySelector(".list");
let workName = document.querySelector(".workName") as HTMLInputElement;
let workPath = document.querySelector(".workPath") as HTMLInputElement;
let workHTML = document.querySelector(".workHtml") as HTMLInputElement;
let workButton = document.querySelector(".workButton");
workButton.addEventListener("click", addNewWork, false);
function listAll() {
    let strName = "";
    for (let i = 0; i < allWorks.length; i++) {
        strName += "<div class='col s4 m4 l4 word'><li data-num =" + i + "><a href=" + allWorks[i].link + ">" +  allWorks[i].projectName + "</a></li></div>";
    }
    list.innerHTML = strName;
}
listAll();
function addToLocal() {
    localStorage.setItem("workName", workName.value);
    localStorage.setItem("workPath", workPath.value);
}
function addNewWork() {
    addToLocal();
    if (workName.value !== "" && workPath.value !== "") {
        let str = localStorage.getItem("workPath");
        if (workHTML.value !== "") {
            str += "/" + workHTML.value + ".html";
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
