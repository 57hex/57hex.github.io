"use strict";
let STORAGE_KEY = 'savedData';
localStorage.setItem(STORAGE_KEY, '');
let config = {
    apiKey: 'AIzaSyAVpPL0_unC-ElX6Qfein_Ki6xil2AxFo0',
    authDomain: 'project-4fe4c.firebaseapp.com',
    databaseURL: 'https://project-4fe4c.firebaseio.com',
    projectId: 'project-4fe4c',
    storageBucket: 'project-4fe4c.appspot.com',
    messagingSenderId: '36011476367'
};
firebase.initializeApp(config);
let filters = {
    all: function (todo) {
        let filter = [];
        for (let obj of todo) {
            if (obj.vis !== false) {
                filter.push(obj);
            }
        }
        return filter;
    },
    yetFinished: function (todo) {
        let filter = [];
        for (let obj of todo) {
            if (obj.finished === false && obj.vis !== false) {
                filter.push(obj);
            }
        }
        return filter;
    },
    haveFinished: function (todo) {
        let filter = [];
        for (let obj of todo) {
            if (obj.finished === true && obj.vis !== false) {
                filter.push(obj);
            }
        }
        return filter;
    }
};
let app = new Vue({
    el: '#newapp',
    data: {
        title: '待辦事項',
        inputWork: '',
        inputWorks: [{ vis: false }],
        visibility: 'all',
        login: false,
        loginVis: 'login',
        account: '',
        password: '',
        loginErr: '',
        uid: '',
        regAccount: '',
        regPassword: '',
        regFirstName: '',
        regLastName: '',
        regError: '',
        loading: true
    },
    computed: {
        filterWorks: function () {
            return filters[this.visibility](app.inputWorks);
        },
        filterNotFinishedWorks: function () {
            return filters.yetFinished(this.inputWorks);
        },
        loginPage: function () {
            return (this.loginVis === 'login') && (this.login === false);
        },
        regPage: function () {
            return (this.loginVis === 'register') && (this.login === false);
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
                firebase.database().ref(`${this.uid}/data`).set(this.inputWorks);
            }
        },
        deleteWork: function (todo) {
            this.inputWorks.splice(this.inputWorks.indexOf(todo), 1);
            localStorage.setItem(STORAGE_KEY, '');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            firebase.database().ref(`${this.uid}/data`).set(this.inputWorks);
        },
        finishAllWorks: function () {
            for (let obj of this.inputWorks) {
                obj.finished = true;
                localStorage.setItem(STORAGE_KEY, '');
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            }
            firebase.database().ref(`${this.uid}/data`).set(this.inputWorks);
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
            firebase.database().ref(`${this.uid}/data`).set(this.inputWorks);
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
            if (app.account !== '' && app.password !== '') {
                firebase.auth().signInWithEmailAndPassword(app.account, app.password).then(function (user) {
                    const uid = user.uid;
                    app.uid = uid;
                    app.login = true;
                    const fire = firebase.database().ref(`${app.uid}/data`);
                    fire.once('value', function (s) {
                        if (s.val() === null || s.val().length === 0 || app.inputWorks === null) {
                            fire.set([{ vis: false }]);
                            app.loading = false;
                            app.inputWorks = [{ vis: false }];
                        }
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(s.val()));
                        app.loading = false;
                        app.inputWorks = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
                    });
                }).catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        app.loginErr = '密碼錯誤。';
                    }
                    else if (errorCode === 'auth/user-not-found') {
                        app.loginErr = '使用者不存在，請註冊。';
                    }
                    else {
                        app.loginErr = '帳號格式不正確。';
                    }
                    console.log(error);
                });
            }
            else {
                alert('你忘記打帳號密碼了！');
            }
        },
        firebaseReg: function () {
            firebase.auth().createUserWithEmailAndPassword(app.regAccount, app.regPassword).then(function (user) {
                app.uid = user.uid;
                const fire = firebase.database().ref(`${app.uid}/data`);
                fire.set([{ vis: false }]);
                app.login = true;
                fire.once('value', function (s) {
                    if (s.val() === null || s.val().length === 0 || app.inputWorks === null) {
                        fire.set([{ vis: false }]);
                        app.loading = false;
                        app.inputWorks = [{ vis: false }];
                    }
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(s.val()));
                    app.loading = false;
                    app.inputWorks = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
                });
            }).catch(function (error) {
                let errorCode = error.code;
                let errorMsg = error.message;
                console.log(error.code);
                app.regError = errorCode;
                console.log(errorCode !== '');
                if (app.regError !== '') {
                    if (errorCode === 'auth/invalid-email') {
                        app.regError = '信箱格式錯誤。';
                    }
                    else if (errorCode === 'auth/weak-password') {
                        app.regError = '密碼必須大於六個字。';
                    }
                    else if (errorCode === 'auth/email-already-in-use') {
                        app.regError = '這個帳號已被註冊。';
                    }
                }
            });
        }
    }
});
//# sourceMappingURL=data.js.map