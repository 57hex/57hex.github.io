if (localStorage.getItem('savedData') === null || localStorage.getItem('savedData') === undefined || localStorage.getItem('savedData') === '') {
  localStorage.setItem('savedData', JSON.stringify({ content: 'test', finished: false }))
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
    inputWorks: [JSON.parse(localStorage.getItem('savedData'))],
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
    },
    deleteWork: function (todo) {
      this.inputWorks.splice(this.inputWorks.indexOf(todo), 1)
    },
    finishAllWorks: function () {
      for (let obj of this.inputWorks) {
        obj.finished = true
      }
    },
    finishWork: function (todo) {
      if (todo.finished === true) {
        todo.finished = false
      } else if (todo.finished === false) {
        todo.finished = true
      }
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
