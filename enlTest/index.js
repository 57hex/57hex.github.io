let now = new Date();
let end = new Date("2018-10-20T00:00:00");
let countDownDay = document.getElementById("count-down-day");
let bg_tra1 = document.getElementById("bg-tra1");
let bg_tra2 = document.getElementById("bg-tra2");
let bg_tra3 = document.getElementById("bg-tra3");
let introContent = document.getElementById("intro-inner-content")
let isIE = /*@cc_on!@*/false || !!document.documentMode;
let height = 0;
let width = 0;
let langRemaining = ['剩下', 'Remaining', 'あと'];
let langDays = ['天', 'Days', "日"];
let langHours = ['小時', 'hours', '時間'];
let langMin = ['分', 'min', '分'];
let langSec = ['秒', 'sec', '秒'];
let currentLangId = 0;
let currentLang = {
  "remaining": langRemaining[currentLangId],
  "days": langDays[currentLangId],
  "hours": langHours[currentLangId],
  "min": langMin[currentLangId],
  "sec": langSec[currentLangId]
}
// function switchLang(x) {
//   currentLangId = x;
//   currentLang = {
//     "remaining": langRemaining[currentLangId],
//     "days": langDays[currentLangId],
//     "hours": langHours[currentLangId],
//     "min": langMin[currentLangId],
//     "sec": langSec[currentLangId]
//   }
// }
function startCountDown() {
  now = new Date();
  end = new Date("2018-10-20T00:00:00");
  let betweenMS = (end - now);
  let day = betweenMS / 1000 / 60 / 60 / 24;
  let hour = (day - Math.floor(day)) * 24;
  let min = (hour - Math.floor(hour)) * 60;
  let secOnd = (min - Math.floor(min)) * 60;
  countDownDay.innerHTML = `${currentLang.remaining}<br><b>${Math.floor(day)} <span>${currentLang.days}</span> ${Math.floor(hour)} <span>${currentLang.hours}</span> ${Math.floor(min)} <span>${currentLang.min}</span> ${Math.floor(secOnd)} <span>${currentLang.sec}</span><b>`
}

window.onload = () => {
  let betweenNowAndEndDay = Math.ceil((end-now) / 86400000);
  if (betweenNowAndEndDay > 0) {
    setInterval(startCountDown, 1000);
  }
  if (isIE) {
    height =  document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
    width =  document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
  } else {
    height =  self.innerHeight;
    width = self.innerWidth;
  }
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if ( now - lastTouchEnd <= 300) {
      event.preventDefault();
      lastTouchEnd = now;
    }}, false)
  bg_tra1.style.borderWidth = `0 0 ${height * 0.2}px ${height * 0.2}px`
  bg_tra2.style.borderWidth = `0 0 ${height * 0.6}px ${height * 0.6}px`
  bg_tra3.style.borderWidth = `0 0 ${height}px ${height}px`
  if (width < 361) {
    introContent.innerHTML = "2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>台中</b><br><span class='intro-phone-text'>Recursion<br>Prime</span>"
  } else {
    introContent.innerHTML = "2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>台中</b><span class='text-yellow'>Recursion<br>Prime</span></div>"
  }
}
window.addEventListener('resize', function () {
  if (isIE) {
    height = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
    width = document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
  } else {
    height = self.innerHeight;
    width = self.innerWidth;
  }
  bg_tra1.style.borderWidth = `0 0 ${height * 0.2}px ${height * 0.2}px`
  bg_tra2.style.borderWidth = `0 0 ${height * 0.6}px ${height * 0.6}px`
  bg_tra3.style.borderWidth = `0 0 ${height}px ${height}px`
  if (width < 361) {
    introContent.innerHTML = "2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>台中</b><br><span class='intro-phone-text-color'>Recursion<br>Prime</span>"
  } else {
    introContent.innerHTML = "2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>台中</b><span>Recursion<br>Prime</span></div>"
  }
})