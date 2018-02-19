function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
let indexBanner = document.getElementById("index-banner");
let bannerHeight = indexBanner.style.height;
let testText = document.querySelector(".scale-text");
let startButton = document.querySelector(".start");
let introduction = document.getElementById("introduction");
startButton.addEventListener("click", () => {
    Materialize.toast("其實這邊本來要做動畫，不過他一直不工作，我ㄝㄅ知道why", 5000);
}, false);
$('.tap-target').tapTarget('open');
$('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onClose: function (el) {

        },
    }
  );
let sideNav_tw = new Vue({
    el: "#sideNav-tw",
    data: {
        sideNavTelegram: "用 telegram 聯絡我",
        sideNavInstagram: "用 instagram 聯絡我"
    }
});
let sideNav_en = new Vue({
    el: "#sideNav-en",
    data: {
        sideNav_telegram: "Connect with me",
        sideNav_instagram: "",
    }
});
let sideNav_jp = new Vue({
    el: "#sideNav-jp",
    data: {
        sideNav_telegram: "テレグラムで連絡する",
        sideNav_instagram: "Instagram で連絡する"
    }
});
let intro_tw = new Vue({
    el: "#intro-tw",
    data: {
        title: "你好，我是花生罐",
        subTitle: "如果說每個人都在尋找一個人的話\n" +
        "那我肯定是在尋找可以跟我一起住的那個人吧。",
        button: "點了應該也沒用"
    }
});

let intro_jp = new Vue({
    el: "#intro-jp",
    data: {
        title: "こんにちは、花生缶です",
        subTitle: "もし、みんなも誰を探しているなら、僕はきっと一緒に住む人が探しているです",
        button: "クリックしても無用DA"
    }
});
let intro_en = new  Vue({
    el: "#intro-en",
    data: {
        title: "Hello, I am HuaShengGuan.",
        subTitle: "If people are always search for someone for something, i am surely searching for something to live together.",
        button: "This button is useless."
    }
});
let section_1_tw = new Vue({
    el: "#section-1-tw",
    data: {
        title: "先自我介紹一下吧😊",
        subTitle: "我超不想透露本名，總之現在是夜校大學生👋<br>\n" +
        "                        生活習慣應該算不錯，不會有太多東西 <br> 垃圾也都會自己拿到公司或是學校丟。<br>\n" +
        "                        如果有上班的話都是8點左右就會出門<br> 然後晚上十點後到家😢 <br>\n" +
        "                        基本不帶朋友回家，有的話應該也是帶男友。"
    }
});
let section_1_jp = new  Vue({
    el: "#section-1-jp",
    data: {
        title: "自分を紹介する☺️",
        subTitle: "今は国立台中科技大学夜間部の学生です。 <br>\n" +
        "                        生活習慣は悪くない、家具が多くない。"
    }
});
let sideNavId = document.getElementById("sideNav-tw");
let introId = document.getElementById("intro-tw");
function changeLanJP() {
    sideNavId.removeAttribute("id");
    sideNavId.setAttribute("id", "sideNav-jp");
    introId.removeAttribute("id");
    introId.setAttribute("id", "intro-jp");
    vm.$forceUpdate();
}
