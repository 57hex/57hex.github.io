'use strict';
var isIE = /*@cc_on!@*/false || !!document.documentMode;
window.onload = function () {
    if (isIE) {
        width =  document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
    } else {
        width =  self.innerWidth;
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
          }
          lastTouchEnd = now;
      }, false)
    }
window.addEventListener('resize', function () {
  if (isIE) {
    width =  document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth;
    } else {
    width =  self.innerWidth;
  }
})
var intro = document.querySelector('.intro');
var phonePos = document.querySelector('.phone-pos');
var nav = document.querySelector('nav');
var footer = document.querySelector('footer');
var start = document.getElementById('start');
var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var media = document.getElementById('media');
var page1 = document.getElementById('content-page1');
var page2 = document.getElementById('content-page2');
var page3 = document.getElementById('content-page3');
var count = 0;
var width = 0;
var introTitle = document.getElementById('intro-title');
var title1 = document.getElementById('title-1')
var title2 = document.getElementById('title-2')
var title3 = document.getElementById('title-3')
function changePage() {
  if (count === 0) {
    intro.style.opacity = '1';
    phonePos.style.left = '60%';
    nav.style.opacity = '0';
    nav.style.display = 'none';
    footer.style.opacity = '0';
    footer.style.display = 'none';
    media.innerHTML = '';
    media.innerHTML = '<img src="./media/game-screenshoot.jpg" alt="">';
    page1.style.opacity = '0';
  } else if (count === 1) {
    intro.style.opacity = '0';
    phonePos.style.left = '0%';
    media.innerHTML = '';
    media.innerHTML = '<video autoplay><source src="./media/video-1.mp4" type="video/mp4"><video>';
    page1.style.opacity = '1';
    page2.style.opacity = '0';
    page3.style.opacity = '0';
    nav.style.opacity = '1';
    nav.style.display = 'block';
    footer.style.opacity = '1';
    footer.style.display = 'block';
  } else if (count === 2) {
    page1.style.opacity = '0';
    page2.style.opacity = '1';
    page3.style.opacity = '0';
    media.innerHTML = '';
    media.innerHTML = '<video autoplay><source src="./media/video-2.mp4" type="video/mp4"><video>';
  } else if (count === 3) {
    page1.style.opacity = '0';
    page2.style.opacity = '0';
    page3.style.opacity = '1';
    media.innerHTML = '';
    media.innerHTML = '<img src="./media/comm_screenshoot.jpg" alt="">';
  }
}
start.addEventListener('click', function() {
  if (width <= 1070) {
    page1.scrollIntoView();
    return;
  }
  count++;
  changePage();
}, true); // 此處為點擊開始導覽， count 從 0 開始。
leftArrow.addEventListener('click', function() {
  if (count -1 < 0) {
    count = 0;
    changePage();
    return;
  }
  count--;
  changePage();
});
rightArrow.addEventListener('click', function() {
  if (count + 1 > 4) {
    count = 3;
    changePage();
    return;
  }
  count++;
  changePage();
});
