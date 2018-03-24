function generateRandomInteger (min: number, max: number) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}
let p = document.querySelector('.test')
p.addEventListener('click', () => {
  p.style.color = 'yellow'
  alert(inputNum.value)
})
let inputBox = document.querySelector('.inputText') as HTMLInputElement
let inputNum = document.querySelector('.inputSchoolName') as HTMLInputElement
let btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  p.textContent = inputBox.value
  alert(inputNum.value)
})
let ptestBtn = document.querySelector('.ptestBtn')
let ptest = document.querySelectorAll('.ptest') as NodeList
ptestBtn.addEventListener('click', () => {
  const a = generateRandomInteger(0, 9)
  console.log(ptest[a])
  ptest[a].focus()
})
