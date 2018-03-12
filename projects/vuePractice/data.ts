let STORAGE_KEY = 'savedData'
if (localStorage.getItem(STORAGE_KEY) === '' || localStorage.getItem(STORAGE_KEY) === undefined || localStorage.getItem(STORAGE_KEY) === null) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([{ content: '123', finished: false }]))
}
let config = {
  apiKey: 'AIzaSyAVpPL0_unC-ElX6Qfein_Ki6xil2AxFo0',
  authDomain: 'project-4fe4c.firebaseapp.com',
  databaseURL: 'https://project-4fe4c.firebaseio.com',
  projectId: 'project-4fe4c',
  storageBucket: 'project-4fe4c.appspot.com',
  messagingSenderId: '36011476367'
}
firebase.initializeApp(config);let filters = {
  all: function (todo: any) {
    return todo
  },
  yetFinished: function (todo: any) {
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
    visibility: 'all',
    login: false,
    account: '',
    password: ''
  },
  computed: {
    filterWorks: function () {
      return filters[this.visibility](this.inputWorks)
    },
    filterNotFinishedWorks: function () {
      return filters.yetFinished(this.inputWorks)
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
    changeVisToYetFinished: function () {
      return this.visibility = 'yetFinished'
    },
    changeVisToHaveFinished: function () {
      return this.visibility = 'haveFinished'
    },
    firebaseTest: function () {
      if (this.account !== '' || this.password !== '') {
	      this.login = true
	      // return firebase.database().ref(this.account).set(this.inputWorks)
      } else {
        alert('你好像忘記打帳號ㄌ')
      }
    }
  }
})
