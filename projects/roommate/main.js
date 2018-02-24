function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var indexBanner = document.getElementById("index-banner");
var bannerHeight = indexBanner.style.height;
var testText = document.querySelector(".scale-text");
var startButton = document.querySelector(".start");
var introduction = document.getElementById("introduction");
startButton.addEventListener("click", function () {
    Materialize.toast("其實這邊本來要做動畫，不過他一直不工作，我ㄝㄅ知道why", 5000);
}, false);
$('.tap-target').tapTarget('open');
$('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: true,
    draggable: true,
    onClose: function (el) {
    },
});
var sideNav_tw = new Vue({
    el: "#sideNav",
    data: {
        sideNavTelegram: "用 telegram 聯絡我",
        sideNavInstagram: "用 instagram 聯絡我"
    }
});
var sideNav_en = new Vue({
    el: "#sideNav",
    data: {
        sideNavTelegram: "Connect with me",
        sideNavInstagram: "",
    }
});
var sideNav_jp = new Vue({
    el: "#sideNav",
    data: {
        sideNavTelegram: "テレグラムで連絡する",
        sideNavInstagram: "Instagram で連絡する"
    }
});
var intro_tw = new Vue({
    el: "#intro",
    data: {
        title: "你好，我是花生罐",
        subTitle: "如果說每個人都在尋找一個人的話\n" +
            "那我肯定是在尋找可以跟我一起住的那個人吧。",
        button: "點了應該也沒用"
    }
});
var intro_jp = new Vue({
    el: "#intro-jp",
    data: {
        title: "こんにちは、花生缶です",
        subTitle: "もし、みんなも誰を探しているなら、僕はきっと一緒に住む人が探しているです",
        button: "クリックしても無用DA"
    }
});
var intro_en = new Vue({
    el: "#intro-en",
    data: {
        title: "Hello, I am HuaShengGuan.",
        subTitle: "If people are always search for someone for something, i am surely searching for something to live together.",
        button: "This button is useless."
    }
});
var section_1_tw = new Vue({
    el: "#section-1",
    data: {
        title: "先自我介紹一下吧😊",
        subTitle: "我超不想透露本名，總之現在是夜校大學生👋<br>\n" +
            "                        生活習慣應該算不錯，不會有太多東西 <br> 垃圾也都會自己拿到公司或是學校丟。<br>\n" +
            "                        如果有上班的話都是8點左右就會出門<br> 然後晚上十點後到家😢 <br>\n" +
            "                        基本不帶朋友回家，有的話應該也是帶男友。"
    }
});
var section_1_jp = new Vue({
    el: "#section-1-jp",
    data: {
        title: "自分を紹介する☺️",
        subTitle: "今は国立台中科技大学夜間部の学生です。 <br>\n" +
            "                        生活習慣は悪くない、家具が多くない。"
    }
});
var sideNavId = document.getElementById("sideNav-tw");
var introId = document.getElementById("intro-tw");
function changeLanJP() {
}
