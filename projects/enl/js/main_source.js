'use strict'
let intro = document.querySelector('.intro');
let phonePos = document.querySelector('.phone-pos');
let nav = document.querySelector('nav');
let footer = document.querySelector('footer');
let start = document.getElementById('start');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let media = document.getElementById('media');
let page1 = document.getElementById('content-page1')
let page2 = document.getElementById('content-page2')
let page3 = document.getElementById('content-page3')
let count = 0;
function changePage() {
  if (count === 0) {
    intro.style.opacity = '1';
    phonePos.style.left =  '60%';
    nav.style.opacity = '0';
    footer.style.opacity = '0';
    media.innerHTML = '<img src="./media/game-screenshoot.jpg" alt="">'
    page1.style.opacity = '0';
  } else if (count === 1) {
    intro.style.opacity = '0';
    phonePos.style.left = '0%';
    media.innerHTML = '<video autoplay><source src="./media/video-1.mp4" type="video/mp4"><video>';
    page1.style.opacity = '1';
    page2.style.opacity = '0'
    page3.style.opacity = '0'
    nav.style.opacity = '1';
    footer.style.opacity = '1';
  } else if (count === 2) {
    page1.style.opacity = '0'
    page2.style.opacity = '1'
    page3.style.opacity = '0'
    media.innerHTML = '<video autoplay><source src="./media/video-2.mp4" type="video/mp4"><video>'
  } else if (count === 3) {
    page1.style.opacity = '0'
    page2.style.opacity = '0'
    page3.style.opacity = '1'
    media.innerHTML = '<img src="./media/comm_screenshoot.jpg" alt="">'
  }
}
start.addEventListener('click', () => {
  count ++;
  changePage();
}) // 此處為點擊開始導覽， count 從 0 開始。
leftArrow.addEventListener('click', () => {
  if (count -- < 0) {
    count = 0;
    changePage()
    return;
  }
  count --;
  changePage();
})
rightArrow.addEventListener('click', () => {
  if (count ++ > 4) {
    count = 3;
    changePage()
    return;
  }
  count ++;
  changePage();
})