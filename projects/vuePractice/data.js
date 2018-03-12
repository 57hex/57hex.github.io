"use strict";
var STORAGE_KEY = 'savedData';
localStorage.setItem(STORAGE_KEY, '');
var config = {
    apiKey: 'AIzaSyAVpPL0_unC-ElX6Qfein_Ki6xil2AxFo0',
    authDomain: 'project-4fe4c.firebaseapp.com',
    databaseURL: 'https://project-4fe4c.firebaseio.com',
    projectId: 'project-4fe4c',
    storageBucket: 'project-4fe4c.appspot.com',
    messagingSenderId: '36011476367'
};
firebase.initializeApp(config);
var filters = {
    all: function (todo) {
        var filter = [];
        for (var _i = 0, todo_1 = todo; _i < todo_1.length; _i++) {
            var obj = todo_1[_i];
            if (obj.vis !== false) {
                filter.push(obj);
            }
        }
        return filter;
    },
    yetFinished: function (todo) {
        var filter = [];
        for (var _i = 0, todo_2 = todo; _i < todo_2.length; _i++) {
            var obj = todo_2[_i];
            if (obj.finished === false && obj.vis !== false) {
                filter.push(obj);
            }
        }
        return filter;
    },
    haveFinished: function (todo) {
        var filter = [];
        for (var _i = 0, todo_3 = todo; _i < todo_3.length; _i++) {
            var obj = todo_3[_i];
            if (obj.finished === true && obj.vis !== false) {
                filter.push(obj);
            }
        }
        return filter;
    }
};
var app = new Vue({
    el: '#newapp',
    data: {
        title: '待辦事項',
        inputWork: '',
        inputWorks: [{ content: '', finished: false, vis: false }],
        visibility: 'all',
        login: false,
        loginVis: 'login',
        account: '',
        password: ''
    },
    computed: {
        filterWorks: function () {
            return filters[this.visibility](this.inputWorks);
        },
        filterNotFinishedWorks: function () {
            return filters.yetFinished(this.inputWorks);
        }
    },
    methods: {
        addWork: function (todo) {
            if (todo === '') {
                alert('說點什麼吧？');
                return false;
            }
            else {
                this.inputWorks.push({ content: todo, finished: false });
                localStorage.setItem('savedData', '');
                localStorage.setItem('savedData', JSON.stringify(this.inputWorks));
                firebase.database().ref(this.account).set(this.inputWorks);
            }
        },
        deleteAllWorks: function () {
            this.inputWorks = [];
            localStorage.setItem(STORAGE_KEY, '');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            firebase.database().ref(this.account).set(this.inputWorks);
        },
        deleteWork: function (todo) {
            this.inputWorks.splice(this.inputWorks.indexOf(todo), 1);
            localStorage.setItem(STORAGE_KEY, '');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            firebase.database().ref(this.account).set(this.inputWorks);
        },
        finishAllWorks: function () {
            for (var _i = 0, _a = this.inputWorks; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.finished = true;
                localStorage.setItem(STORAGE_KEY, '');
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            }
            firebase.database().ref(this.account).set(this.inputWorks);
        },
        finishWork: function (todo) {
            if (todo.finished === true) {
                todo.finished = false;
            }
            else if (todo.finished === false) {
                todo.finished = true;
            }
            localStorage.setItem(STORAGE_KEY, '');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            firebase.database().ref(this.account).set(this.inputWorks);
        },
        changeVisToAll: function () {
            return this.visibility = 'all';
        },
        changeVisToYetFinished: function () {
            return this.visibility = 'yetFinished';
        },
        changeVisToHaveFinished: function () {
            return this.visibility = 'haveFinished';
        },
        changeVisToRegister: function () {
            return this.loginVis = 'register';
        },
        changeVisToLogin: function () {
            return this.loginVis = 'login';
        },
        firebaseLogin: function () {
            if (this.account !== '' || this.password !== '') {
                var fire_1 = firebase.database().ref(app.account);
                fire_1.once('value', function (s) {
                    if (s.val() === null || s.val().length === 0) {
                        fire_1.set([{ content: '', finished: false }]);
                        app.inputWorks = s.val();
                    }
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(s.val()));
                    app.inputWorks = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
                });
                this.login = true;
                // return firebase.database().ref(this.account).set(this.inputWorks)
            }
            else {
                alert('你好像忘記打帳號ㄌ');
            }
        },
        firebaseReg: function () {
            console.log('test');
        }
    }
});
var fire = firebase.database().ref('test');
fire.once('value', function (snapshot) {
    console.log(snapshot.val());
});
