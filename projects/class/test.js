function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
var p = document.querySelector('.test');
p.addEventListener('click', function () {
    p.style.color = 'yellow';
    alert(inputNum.value);
});
var inputBox = document.querySelector('.inputText');
var inputNum = document.querySelector('.inputSchoolName');
var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    p.textContent = inputBox.value;
    alert(inputNum.value);
});
var ptestBtn = document.querySelector('.ptestBtn');
var ptest = document.querySelectorAll('.ptest');
ptestBtn.addEventListener('click', function () {
    var a = generateRandomInteger(0, 9);
    console.log(ptest[a]);
    ptest[a].focus();
});
