"use strict";var now=new Date;var end=new Date("2018-10-20T00:00:00");var countDownDay=document.getElementById("count-down-day");var bg_tra1=document.getElementById("bg-tra1");var bg_tra2=document.getElementById("bg-tra2");var bg_tra3=document.getElementById("bg-tra3");var introContent=document.getElementById("intro-inner-content");var page1=document.getElementById("page_1");var downArrow=document.querySelector(".down-arrow");var intro_ico_container=document.querySelector(".intro-ico-container");var isIE=/*@cc_on!@*/false||!!document.documentMode;var height=0;var width=0;var langRemaining=["\u5269\u4E0B","Remaining","\u3042\u3068"];var langDays=["\u5929","Days","\u65E5"];var langHours=["\u5C0F\u6642","hours","\u6642\u9593"];var langMin=["\u5206","min","\u5206"];var langSec=["\u79D2","sec","\u79D2"];var currentLangId=0;var currentLang={"remaining":langRemaining[currentLangId],"days":langDays[currentLangId],"hours":langHours[currentLangId],"min":langMin[currentLangId],"sec":langSec[currentLangId]// function switchLang(x) {
//   currentLangId = x;
//   currentLang = {
//     "remaining": langRemaining[currentLangId],
//     "days": langDays[currentLangId],
//     "hours": langHours[currentLangId],
//     "min": langMin[currentLangId],
//     "sec": langSec[currentLangId]
//   }
// }
};function startCountDown(){now=new Date;end=new Date("2018-10-20T00:00:00");var betweenMS=end-now;var day=betweenMS/1000/60/60/24;var hour=(day-Math.floor(day))*24;var min=(hour-Math.floor(hour))*60;var secOnd=(min-Math.floor(min))*60;countDownDay.innerHTML=currentLang.remaining+"<br><b>"+Math.floor(day)+" <span>"+currentLang.days+"</span> "+Math.floor(hour)+" <span>"+currentLang.hours+"</span> "+Math.floor(min)+" <span>"+currentLang.min+"</span> "+Math.floor(secOnd)+" <span>"+currentLang.sec+"</span><b>"}window.onload=function(){var betweenNowAndEndDay=Math.ceil((end-now)/86400000);if(betweenNowAndEndDay>0){setInterval(startCountDown,1000)}if(isIE){height=document.compatMode==="CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;width=document.compatMode==="CSS1Compat"?document.documentElement.clientWidth:document.body.clientWidth}else{height=self.innerHeight;width=self.innerWidth}document.addEventListener("touchstart",function(event){if(event.touches.length>1){event.preventDefault()}},{passive:false});var lastTouchEnd=0;document.addEventListener("touchend",function(event){var now=new Date().getTime();if(now-lastTouchEnd<=300){event.preventDefault();lastTouchEnd=now}},false);bg_tra1.style.borderWidth="0 0 "+height*0.2+"px "+height*0.2+"px";bg_tra2.style.borderWidth="0 0 "+height*0.6+"px "+height*0.6+"px";bg_tra3.style.borderWidth="0 0 "+height+"px "+height+"px";if(width<=360){intro_ico_container.innerHTML="<img class='intro-ico' src='reso/enl.png' alt=''><br><img class='intro-ico' src='reso/rr.png' alt=''>";introContent.innerHTML="2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>\u53F0\u4E2D</b><br><span class='intro-phone-text'>Recursion<br>Prime</span>"}else{intro_ico_container.innerHTML="<img class='intro-ico' src='reso/enl.png' alt=''><img class='intro-ico' src='reso/rr.png' alt=''>";introContent.innerHTML="2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>\u53F0\u4E2D</b><span class='text-yellow'>Recursion<br>Prime</span></div>"}};window.addEventListener("resize",function(){if(isIE){height=document.compatMode==="CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;width=document.compatMode==="CSS1Compat"?document.documentElement.clientWidth:document.body.clientWidth}else{height=self.innerHeight;width=self.innerWidth}bg_tra1.style.borderWidth="0 0 "+height*0.2+"px "+height*0.2+"px";bg_tra2.style.borderWidth="0 0 "+height*0.6+"px "+height*0.6+"px";bg_tra3.style.borderWidth="0 0 "+height+"px "+height+"px";if(width<=360){intro_ico_container.innerHTML="<img class='intro-ico' src='reso/enl.png' alt=''><br><img class='intro-ico' src='reso/rr.png' alt=''>";introContent.innerHTML="2018 <span>/</span> <br> 10 <span>/</span> 20<br><b>\u53F0\u4E2D</b><br><span class='intro-phone-text-color'>Recursion<br>Prime</span>"}else{intro_ico_container.innerHTML="<img class='intro-ico' src='reso/enl.png' alt=''><img class='intro-ico' src='reso/rr.png' alt=''>";introContent.innerHTML="2018 <span>/</span> 10 <span>/</span> 20<br> <div class='intro-TC-RP-inline'> <b>\u53F0\u4E2D</b><span>Recursion<br>Prime</span></div>"}});downArrow.addEventListener("click",function(){setInterval(function(){if(window.pageYOffset===page1.offsetTop){clearInterval}else{window.pageYOffset++}},1000);document.getElementById("page_1").scrollIntoView({behavior:"smooth"})});//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map