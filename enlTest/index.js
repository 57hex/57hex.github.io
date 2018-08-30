let now = new Date();
let end = new Date("2018-10-20");
let betweenNowAndEndDay = 0;
let countDownDay = document.getElementById("count-down-day");
let bg_tra1 = document.getElementById("bg-tra1");
let bg_tra2 = document.getElementById("bg-tra2");
let bg_tra3 = document.getElementById("bg-tra3");
let isIE = /*@cc_on!@*/false || !!document.documentMode;
let height = 0;
window.onload = () => {
  betweenNowAndEndDay = Math.floor((end.valueOf() - now.valueOf()) / 86400000);
  countDownDay.innerHTML = `還剩 <b>${betweenNowAndEndDay}</b> 天`;
  if (isIE) {
    height =  document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
  } else {
    height =  self.innerHeight;
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

}
window.addEventListener('resize', function () {
  if (isIE) {
    height =  document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
  } else {
    height =  self.innerHeight;
  }
  bg_tra1.style.borderWidth = `0 0 ${height * 0.2}px ${height * 0.2}px`
  bg_tra2.style.borderWidth = `0 0 ${height * 0.6}px ${height * 0.6}px`
  bg_tra3.style.borderWidth = `0 0 ${height}px ${height}px`
})