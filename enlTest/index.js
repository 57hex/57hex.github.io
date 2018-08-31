"use strict";

var now = new Date();
var end = new Date("2018-10-20");
var betweenNowAndEndDay = 0;
var countDownDay = document.getElementById("count-down-day");
var bg_tra1 = document.getElementById("bg-tra1");
var bg_tra2 = document.getElementById("bg-tra2");
var bg_tra3 = document.getElementById("bg-tra3");
var introContent = document.getElementById("intro-inner-content");
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var height = 0;
var width = 0;
window.onload = function () {
  betweenNowAndEndDay = Math.ceil((end - now) / 86400000);
  if (betweenNowAndEndDay > 0) {
    countDownDay.innerHTML = "\u9084\u5269 <b>" + betweenNowAndEndDay + "</b> \u5929";
  }
  if (isIE) {
    height = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
    width = document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
  } else {
    height = self.innerHeight;
    width = self.innerWidth;
  }
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  var lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    var now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
      lastTouchEnd = now;
    }
  }, false);
  bg_tra1.style.borderWidth = "0 0 " + height * 0.2 + "px " + height * 0.2 + "px";
  bg_tra2.style.borderWidth = "0 0 " + height * 0.6 + "px " + height * 0.6 + "px";
  bg_tra3.style.borderWidth = "0 0 " + height + "px " + height + "px";
  if (width < 346) {
    introContent.innerHTML = "2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>台中</b><br><span class='intro-phone-text-color'>Recursion<br>Prime</span>";
  } else {
    introContent.innerHTML = "2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>台中</b><span>Recursion<br>Prime</span></div>";
  }
};
window.addEventListener('resize', function () {
    if (isIE) {
        height = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
        width = document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
    } else {
        height = self.innerHeight;
        width = self.innerWidth;
    }
    bg_tra1.style.borderWidth = "0 0 " + height * 0.2 + "px " + height * 0.2 + "px";
    bg_tra2.style.borderWidth = "0 0 " + height * 0.6 + "px " + height * 0.6 + "px";
    bg_tra3.style.borderWidth = "0 0 " + height + "px " + height + "px";
    if (width < 346) {
        introContent.innerHTML = "2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>台中</b><br><span class='intro-phone-text-color'>Recursion<br>Prime</span>";
    } else {
        introContent.innerHTML = "2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>台中</b><span>Recursion<br>Prime</span></div>";
    }
});
//# sourceMappingURL=index.js.map