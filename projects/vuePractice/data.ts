'use strict'
let app = new Vue({
  el: '#newapp',
  data: {
    title: '待辦事項',
    inputWork: '',
    inputWorks: [{ content: 'test', finished: false }]
  },
  methods: {
    addWork: function (todo) {
      if (todo === '') {
        alert('說點什麼吧？')
        return false
      } else {
        this.inputWorks.push({ content: todo, finished: false })
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
    }
  }
})
