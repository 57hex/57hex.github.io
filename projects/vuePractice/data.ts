let STORAGE_KEY = 'savedData'
let STORAGE_MAIL_KEY = 'mailUser'
let STORAGE_UID_KEY = 'userId'
localStorage.setItem(STORAGE_KEY, '')
let config = {
  apiKey: 'AIzaSyAVpPL0_unC-ElX6Qfein_Ki6xil2AxFo0',
  authDomain: 'project-4fe4c.firebaseapp.com',
  databaseURL: 'https://project-4fe4c.firebaseio.com',
  projectId: 'project-4fe4c',
  storageBucket: 'project-4fe4c.appspot.com',
  messagingSenderId: '36011476367'
}
firebase.initializeApp(config)
let filters = {
  all: function (todo: any) { // 返回全部陣列
    let filter = []
    for (let obj of todo) {
      if (obj.vis !== false) {
        filter.push(obj)
      }
    }
    return filter
  },
  yetFinished: function (todo: any) { // 返回未完成的資料
    let filter = []
    for (let obj of todo) {
      if (obj.finished === false && obj.vis !== false) {
        filter.push(obj)
      }
    }
    return filter
  },
  haveFinished: function (todo: any) { // 返回已完成的資料
    let filter = []
    for (let obj of todo) {
      if (obj.finished === true && obj.vis !== false) {
        filter.push(obj)
      }
    }
    return filter
  },
  search: function (todo: any, key: string) {
	  let filter = []
	  for (let obj of todo) {
		  todo.filter(function (d) {
			  if (todo.indexOf(key) > -1) {
			  	filter.push(obj)
			  }
		  })
	  }
	  return filter
  }
}
let app = new Vue({
  el: '#newapp',
  data: {
  	text: {
		  title: '待辦事項',
		  inputAccount: '請輸入帳號',
		  inputPassword: '請輸入密碼',
		  loginBtn: '登入',
		  regBtn: '註冊',
		  alreadyHaveAcc: '已經有帳號？'
	  },
    login: false,
    loginVis: 'login',
	  showPassword: false,
    account: '',
    password: '',
    uid: '',
    regAccount: '',
    regPassword: '',
    regFirstName: '',
    regLastName: '',
	  loginErr: '',
	  regError: '',
	  inputWork: '',
	  inputWorks: [{ vis: false }],
	  visibility: 'all',
    loading: true,
	  countOfPage: 8,
	  currPage: 1,
	  search: false,
	  searchKey: '123'
  },
  computed: {
    filterWorks: function () {
    	if (this.visibility !== 'search') {
		    return filters[this.visibility](this.inputWorks)
	    } else if (this.visibility === 'search') {
    		return filters[this.visibility](this.inputWorks, this.searchKey)
	    }
    },
    filterNotFinishedWorks: function () {
      return filters.yetFinished(this.inputWorks)
    },
	  filterHaveFinishedWorks: function () {
		  return filters.haveFinished(this.inputWorks)
	  },
    loginPage: function () {
      return (this.loginVis === 'login') && (this.login === false)
    },
    regPage: function () {
      return (this.loginVis === 'register') && (this.login === false)
    },
	  exitingUser: function () {
		  return checkExitUser()
	  },
	  exitingUserName: function () {
		  if (checkExitUser()) {
			  return JSON.parse(localStorage.getItem(STORAGE_MAIL_KEY)).email
		  } else {
		  	return ''
		  }
	  },
	  checkLoginStatus: function () {
		  if (this.login === true) {
		  	return true
		  } else {
		  	return false
		  }
	  },
	  pageStart: function () {
		  return ((this.currPage - 1) * this.countOfPage)
	  },
	  totalPage: function () {
		  return Math.ceil(this.filterWorks.length / this.countOfPage)
	  }
  },
  watch: {},
  methods: {
    addWork: function (todo: any) {
      if (todo === '') {
        alert('說點什麼吧？')
        return false
      } else {
        this.inputWorks.push({ content: todo, finished: false, pinned: false, editing: false })
        localStorage.setItem('savedData', '')
        localStorage.setItem('savedData', JSON.stringify(this.inputWorks))
        firebase.database().ref(`${this.uid}/data`).set(this.inputWorks)
	      app.inputWork = ''
      }
    },
    deleteWork: function (todo) {
    	if (todo.pinned !== true) {
		    this.inputWorks.splice(this.inputWorks.indexOf(todo), 1)
		    localStorage.setItem(STORAGE_KEY, '')
		    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks))
		    firebase.database().ref(`${this.uid}/data`).set(this.inputWorks)
	    } else if (todo.pinned === true) {
	    	alert('被保護不能被刪除。')
	    }
    },
	  pinWork: function (todo) {
    	if (todo.pinned === false || todo.pinned === undefined) {
		    todo.pinned = true
	    } else {
    		todo.pinned = false
	    }
	  },
	  editWork: function (todo) {
		  if (todo.editing === true) {
		  	todo.editing = false
			  firebase.database().ref(`${this.uid}/data`).set(this.inputWorks)
		  } else {
		  	todo.editing = true
		  }
	  },
	  checkIsPinnedOrNot: function (todo) {
		  return todo.pinned === true
	  },
    finishAllWorks: function () {
      for (let obj of this.inputWorks) {
        obj.finished = true
        localStorage.setItem(STORAGE_KEY, '')
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks))
      }
      firebase.database().ref(`${this.uid}/data`).set(this.inputWorks)
    },
    finishWork: function (todo) {
      if (todo.finished === true) {
        todo.finished = false
      } else if (todo.finished === false) {
        todo.finished = true
      }
      localStorage.setItem(STORAGE_KEY, '')
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks))
      firebase.database().ref(`${this.uid}/data`).set(this.inputWorks)
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
	  changeVisToSearch: function () {
		 this.search = true
		  return this.visibility = 'search'
	  },
	  cancelSearch: function () {
		  this.search = false
	  },
    changeVisToRegister: function () {
      return this.loginVis = 'register'
    },
    changeVisToLogin: function () {
      return this.loginVis = 'login'
    },
	  changePasswordVis: function () {
		  if (this.showPassword === false) {
		  	this.showPassword = true
		  } else {
		  	this.showPassword = false
		  }
	  },
	  setPage: function (idx) {
		  if (idx <= 0 || idx > this.totalPage) {
			  return
		  }
		  this.currPage = idx
	  },
    firebaseLogin: function () {
      if (app.account !== '' && app.password !== '') {
        firebase.auth().signInWithEmailAndPassword(app.account, app.password).then(function (user) {
	        app.exitingUser = true
          app.uid = app.account.split('.').join('_')
          app.login = true
	        app.password = ''
          const fire = firebase.database().ref(`${app.uid}/data`)
          fire.once('value', function (s) {
            if (s.val() === null || s.val().length === 0 || app.inputWorks === null) {
              fire.set([{ vis: false }])
              app.loading = false
              app.inputWorks = [{ vis: false }]
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(s.val()))
            app.loading = false
            app.inputWorks = (JSON.parse(localStorage.getItem(STORAGE_KEY)))
          })
	        localStorage.setItem(STORAGE_MAIL_KEY, '')
	        localStorage.setItem(STORAGE_MAIL_KEY, JSON.stringify({ email: app.account }))
	        localStorage.setItem(STORAGE_UID_KEY, '')
	        localStorage.setItem(STORAGE_UID_KEY, app.uid)
        }).catch(function (error) {
          let errorCode = error.code
          let errorMessage = error.message
          if (errorCode === 'auth/wrong-password') {
            app.loginErr = '密碼錯誤。'
          } else if (errorCode === 'auth/user-not-found') {
          	app.loginErr = '使用者不存在，請註冊。'
          } else {
            app.loginErr = '帳號格式不正確。'
          }
          console.log(error)
        })
      } else {
        alert('你忘記打帳號密碼了！')
      }
    },
    firebaseReg: function () {
      firebase.auth().createUserWithEmailAndPassword(app.regAccount, app.regPassword).then(function (user) {
	      app.exitingUser = true
	      app.account = app.regAccount
	      app.uid = app.account.split('.').join('_')
	      app.regPassword = ''
	      localStorage.setItem(STORAGE_MAIL_KEY, '')
	      localStorage.setItem(STORAGE_MAIL_KEY, JSON.stringify({ email: app.account }))
	      localStorage.setItem(STORAGE_UID_KEY, '')
	      localStorage.setItem(STORAGE_UID_KEY, app.uid)
	      const fire = firebase.database().ref(`${app.uid}/data`)
        fire.set([{ vis: false }])
        app.login = true
        fire.once('value', function (s) {
          if (s.val() === null || s.val().length === 0 || app.inputWorks === null) {
            fire.set([{ vis: false }])
            app.loading = false
            app.inputWorks = [{ vis: false }]
          }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(s.val()))
          app.loading = false
          app.inputWorks = (JSON.parse(localStorage.getItem(STORAGE_KEY)))
        })
      }).catch(function (error) {
        let errorCode = error.code
        console.log(error.code)
        app.regError = errorCode
        console.log(errorCode !== '')
        if (app.regError !== '') {
          if (errorCode === 'auth/invalid-email') {
            app.regError = '信箱格式錯誤。'
          } else if (errorCode === 'auth/weak-password') {
            app.regError = '密碼必須大於六個字。'
          } else if (errorCode === 'auth/email-already-in-use') {
            app.regError = '這個帳號已被註冊。'
          }
        }
      })
    },
	  firebaseExitUser: function () {
    if (checkExitUser()) {
      	// 這邊要加上歡迎回來功能。其實只要增加一個按鈕按下去之後會自動填入 mail 即可。
	      app.account = JSON.parse(localStorage.getItem(STORAGE_MAIL_KEY)).email
    }
	  },
	  firebaseSignOut: function () {
		  firebase.auth().signOut().then(
		  		function () {
					  localStorage.clear()
					  location.reload(true)
				  }
		  )
	  }
  }
})
function checkExitUser () {
  return localStorage.getItem(STORAGE_MAIL_KEY) !== null && localStorage.getItem(STORAGE_MAIL_KEY) !== undefined && localStorage.getItem(STORAGE_MAIL_KEY) !== '' ? true : false
}

// 好想睡 ( ；´Д｀)
