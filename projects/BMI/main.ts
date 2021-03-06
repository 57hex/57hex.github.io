function generateRandomInteger (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

let allData = []

function loadPage () {
  allData = JSON.parse(localStorage.getItem('List'))
  const h = parseFloat(height.value)
  const w = parseFloat(heavy.value)
  const result = w / Math.pow(h / 100, 2)
  const resultInt = parseInt(result.toString(), 0)
  if (result < 18.5) {
    const color = 'blue darken-2'
    button.removeAttribute('class')
    button.setAttribute('class', 'btn result blue darken-2')
    button.textContent = '過輕'
    allData.push({ height: height.value, heavy: heavy.value, bgColor: color, BMI: resultInt })
    localStorage.setItem('List', JSON.stringify(allData))
  } else if (result >= 18.5 && result < 24) {
    const color = 'teal darken-2'
    button.removeAttribute('class')
    button.setAttribute('class', 'btn result teal darken-2')
    button.textContent = '正常'
    allData.push({ height: height.value, heavy: heavy.value, bgColor: color, BMI: resultInt })
    localStorage.setItem('List', JSON.stringify(allData))
  } else if (result >= 24) {
    const color = 'yellow darken-3'
    button.removeAttribute('class')
    button.setAttribute('class', 'btn result yellow darken-3')
    button.textContent = '過重'
    allData.push({ height: height.value, heavy: heavy.value, bgColor: color, BMI: resultInt })
    localStorage.setItem('List', JSON.stringify(allData))
  }
  updateList()
}

function BMIClac () {
  if (checkInputValue() !== false) {
    loadPage()
  } else {
    return
  }
}

function updateList () {
  const obj = JSON.parse(localStorage.getItem('List'))
  let str = ''
  for (let i = 0; i < obj.length; i++) {
    str += `<div class='col s12 m6'><div class='card ${obj[i].bgColor}'><div class='card-content white-text' data-num='${i}'><p>體重: ${obj[i].heavy} </p><p>身高: ${obj[i].height}</p><p> BMI：${obj[i].BMI}</p><button class='btn delete-btn ${obj[i].bgColor}'>刪除</button></div></div></div>`
    resultContainer.innerHTML = str
  }
}

function checkInputValue () {
  if (parseInt(height.value, 0) < 100 || parseInt(height.value, 0) > 250 || parseInt(heavy.value, 0) > 170 || parseInt(heavy.value, 0) < 25 || heavy.value === '' || height.value === '') {
    alert('你可以輸入正確ㄉ資訊ㄇ??')
    return false
  }
}

let height = document.querySelector('.personHeight') as HTMLInputElement
let heavy = document.querySelector('.personHeavy') as HTMLInputElement
let button = document.querySelector('.result')
let resultContainer = document.querySelector('.resultContainer')
button.addEventListener('click', BMIClac, false)
loadPage()
resultContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON' && allData.length !== 0) {
    allData.splice((e.target.dataset.num - 1), 1)
    localStorage.setItem('List', JSON.stringify(allData))
    updateList()
  } else if (e.target.nodeName === 'BUTTON' && allData.length === 0) {
    resultContainer.innerHTML = ''
  }
}, false)
