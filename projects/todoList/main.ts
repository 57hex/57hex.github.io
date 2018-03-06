function generateRandomInteger (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}
let todoList = []
let list = document.querySelector('.list')
let btn = document.querySelector('.btn')
let inputBox = document.querySelector('.inputBox') as HTMLInputElement
btn.addEventListener('click', getInputBoxValue, false)
list.addEventListener('click', (e) => {
  let num = e.target.dataset.num
  if (e.target.nodeName === 'A') {
    todoList.splice(num, 1)
    updateList()
    if (todoList.length === 0) {
      list.innerHTML = ''
    }
  }
}, false)
function updateList () {
  let html = ''
  for (let i = 0; i < todoList.length; i++) {
    html += "<a data-num='" + i +  "' href='#' style='color: #ffffff;'>刪除</a><p class='text'>" + todoList[i].text + '</p>'
    list.innerHTML = html
  }
  localStorage.setItem('List', JSON.stringify(todoList))
}
function getInputBoxValue () {
  let str = ''
  str += inputBox.value
  todoList.push({ text: str })
  updateList()
}
