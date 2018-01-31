var allWorks = [
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
var list = document.querySelector(".list");
function listAll() {
    var strName = "";
    for (var i = 0; i < allWorks.length; i++) {
        strName += "<div class='col s4 m4 l4 word'><li><a href=" + allWorks[i].link + ">" + allWorks[i].projectName + "</a></li></div>";
    }
    list.innerHTML = strName;
}
listAll();
