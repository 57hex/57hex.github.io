let now = new Date();
let end = new Date("2018-10-20");
let betweenNowAndEndDay = 0;
let countDownDay = document.getElementById("count-down-day");
let bg_tra1 = document.getElementById("bg-tra1");
let bg_tra2 = document.getElementById("bg-tra2");
let bg_tra3 = document.getElementById("bg-tra3");
let introContent = document.getElementById("intro-inner-content")
let isIE = /*@cc_on!@*/false || !!document.documentMode;
let height = 0;
let width = 0;
window.onload = () => {
  betweenNowAndEndDay = Math.ceil((end-now) / 86400000);
  if (betweenNowAndEndDay > 0) {
    countDownDay.innerHTML = `還剩 <b>${betweenNowAndEndDay}</b> 天`;
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
  if (width < 346) {
    introContent.innerHTML = "2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>台中</b><br><span class='intro-phone-text-color'>Recursion<br>Prime</span>"
  } else {
    introContent.innerHTML = "2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>台中</b><span>Recursion<br>Prime</span></div>"
  }
}
window.addEventListener('resize', function () {
  if (isIE) {
    height =  document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
    width =  document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
  } else {
    height =  self.innerHeight;
    width =  self.innerWidth;
  }
  bg_tra1.style.borderWidth = `0 0 ${height * 0.2}px ${height * 0.2}px`
  bg_tra2.style.borderWidth = `0 0 ${height * 0.6}px ${height * 0.6}px`
  bg_tra3.style.borderWidth = `0 0 ${height}px ${height}px`
  if (width < 346) {
    introContent.innerHTML = "2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>台中</b><br><span class='intro-phone-text-color'>Recursion<br>Prime</span>"
  } else {
    introContent.innerHTML = "2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>台中</b><span>Recursion<br>Prime</span></div>"
  }
})