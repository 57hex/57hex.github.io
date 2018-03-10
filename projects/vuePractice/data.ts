let STORAGE_KEY = 'savedData'
if (localStorage.getItem(STORAGE_KEY) === '' || localStorage.getItem(STORAGE_KEY) === undefined || localStorage.getItem(STORAGE_KEY) === null) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([{ content: '123', finished: false }]))
}
let filters = {
  all: function (todo: any) {
    return todo
  },
  active: function (todo: any) {
    let filter = []
    for (let obj of todo) {
      if (obj.finished === false) {
        filter.push(obj)
      }
    }
    return filter
  },
  haveFinished: function (todo: any) {
    let filter = []
    for (let obj of todo) {
      if (obj.finished === true) {
        filter.push(obj)
      }
    }
    return filter
  }
}
let app = new Vue({
  el: '#newapp',
  data: {
    title: '待辦事項',
    inputWork: '',
    inputWorks: JSON.parse(localStorage.getItem(STORAGE_KEY)),
    visibility: 'all'
  },
  computed: {
    filterWorks: function () {
      return filters[this.visibility](this.inputWorks)
    },
    filterNotFinishedWorks: function () {
      return filters.active(this.inputWorks)
    }
  },
  methods: {
    addWork: function (todo: any) {
      if (todo === '') {
        alert('說點什麼吧？')
        return false
      } else {
        this.inputWorks.push({ content: todo, finished: false })
        localStorage.setItem('savedData', '')
        localStorage.setItem('savedData', JSON.stringify(this.inputWorks))
      }
    },
    deleteAllWorks: function () {
      this.inputWorks = []
	    localStorage.setItem(STORAGE_KEY, '')
	    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks))
    },
    deleteWork: function (todo) {
      this.inputWorks.splice(this.inputWorks.indexOf(todo), 1)
      localStorage.setItem(STORAGE_KEY, '')
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks))
    },
    finishAllWorks: function () {
      for (let obj of this.inputWorks) {
        obj.finished = true
	      localStorage.setItem(STORAGE_KEY, '')
	      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks))
      }
    },
    finishWork: function (todo) {
      if (todo.finished === true) {
        todo.finished = false
      } else if (todo.finished === false) {
        todo.finished = true
      }
	    localStorage.setItem(STORAGE_KEY, '')
	    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks))
    },
    changeVisToAll: function () {
      return this.visibility = 'all'
    },
    changeVisToActive: function () {
      return this.visibility = 'active'
    },
    changeVisToHaveFinished: function () {
      return this.visibility = 'haveFinished'
    }
  }
})
