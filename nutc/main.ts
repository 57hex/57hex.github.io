function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
let monDay = [
    {
        lesson: "週會/班會",
        classRoom: "2703",
        startTimeHour: "18",
        startTimeMin: "00",
        endTimeHour: "19",
        endTimeMin: "35",
    },
    {
        lesson: "進階程式設計",
        classRoom: "2701",
        startTimeHour: "19",
        startTimeMin: "40",
        endTimeHour: "22",
        endTimeMin: "05",
    },
];
let tuesDay = [
    {
        lesson: "微積分",
        classRoom: "6604",
        startTimeHour: "18",
        startTimeMin: "00",
        endTimeHour: "20",
        endTimeMin: "25",
    },
];
let wednesDay = [
    {
        lesson: "國文",
        classRoom: "3904",
        startTimeHour: "18",
        startTimeMin: "00",
        endTimeHour: "19",
        endTimeMin: "35",
    },
    {
        lesson: "工程應用套裝軟體",
        classRoom: "2702",
        startTimeHour: "19",
        startTimeMin: "40",
        endTimeHour: "22",
        endTimeMin: "05",
    },
];
let thursDay = [
    {
        lesson: "網際網路與應用",
        classRoom: "2703",
        startTimeHour: "18",
        startTimeMin: "50",
        endTimeHour: "22",
        endTimeMin: "05",
    },
];
let friDay = [
    {
        lesson: "英文",
        classRoom: "7301",
        startTimeHour: "18",
        startTimeMin: "05",
        endTimeHour: "20",
        endTimeMin: "25",
    },
    {
        lesson: "體育",
        classRoom: "可能自己找",
        startTimeHour: "20",
        startTimeMin: "30",
        endTimeHour: "22",
        endTimeMin: "05",
    },
];
let saturDay = [
    {
        lesson: "線性代數",
        classRoom: "2706",
        startTimeHour: "13",
        startTimeMin: "40",
        endTimeHour: "16",
        endTimeMin: "05",
    },
    {
        lesson: "Linux 系統實務",
        classRoom: "2702",
        startTimeHour: "16",
        startTimeMin: "10",
        endTimeHour: "19",
        endTimeMin: "10",
    },
];
let sunDay = [
    {
        lesson: "test",
    },
];
let day = new Date();
let whichDay = checkWhichDay();
function checkWhichDay() {
    switch (day.getDay()) {
        case 0:
            return monDay;
        case 1:
            return monDay;
        case 2:
            return tuesDay;
        case 3:
            return wednesDay;
        case 4:
            return thursDay;
        case 5:
            return friDay;
        case 6:
            return saturDay;
    }
}
function test() {
    for (let i = 0; i < whichDay.length; i++) {
        console.log(day.getHours() >= parseInt(whichDay[i].startTimeHour, 0));
        console.log(day.getHours() < parseInt(whichDay[i].endTimeHour, 0));
        console.log(day.getMinutes() > parseInt(whichDay[i].startTimeMin, 0));
    }
}
function loadList() {
    let str = "";
    for (let i = 0; i < whichDay.length; i++) {
        if (day.getHours() >= parseInt(whichDay[i].startTimeHour, 0) && day.getHours() < parseInt(whichDay[i].endTimeHour, 0)) {
            if (day.getMinutes() > parseInt(whichDay[i].startTimeMin, 0)) {
                str = "";
                str += "<div class='card-content white-text center'>" + "<p class='flow-text'>正在上的課：" + whichDay[i].lesson + "<br>在：" + whichDay[i].classRoom + "上課 <br> 時間是：" + whichDay[i].startTimeHour + "：" + whichDay[i].startTimeMin + "到" + whichDay[i].endTimeHour + "：" + whichDay[i].endTimeMin + "</div>";
                list.innerHTML = str;
            } else { str = ""; }
        } else { str = ""; }
    }
}
let list = document.querySelector(".list");
let body = document.querySelector(".body");
body.setAttribute("class", "body grey darken-2");
loadList();
