var STORAGE_KEY = 'savedData';
var STORAGE_MAIL_KEY = 'mailUser';
var STORAGE_UID_KEY = 'userId';
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
var time = new Date();
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
    },
    search: function (todo, key) {
        var filter = [];
        var _loop_1 = function (obj) {
            todo.filter(function (d) {
                if (todo.indexOf(key) > -1) {
                    filter.push(obj);
                }
            });
        };
        for (var _i = 0, todo_4 = todo; _i < todo_4.length; _i++) {
            var obj = todo_4[_i];
            _loop_1(obj);
        }
        return filter;
    }
};
var app = new Vue({
    el: '#newapp',
    data: {
        text: {
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
        loginErr: '',
        regError: '',
        inputWork: '',
        inputWorks: [{ vis: false }],
        visibility: 'all',
        loading: false,
        countOfPage: 8,
        currPage: 1,
        search: false,
        searchKey: '123',
        fire: firebase.database(),
        emptyWorks: false
    },
    computed: {
        filterWorks: function () {
            if (this.visibility !== 'search') {
                if (filters.length === 0) {
                    app.emptyWorks = true;
                    return filters[this.visibility](this.inputWorks);
                }
                else {
                    return filters[this.visibility](this.inputWorks);
                }
            }
            else if (this.visibility === 'search') {
                return filters[this.visibility](this.inputWorks, this.searchKey);
            }
        },
        filterNotFinishedWorks: function () {
            return filters.yetFinished(this.inputWorks);
        },
        filterHaveFinishedWorks: function () {
            return filters.haveFinished(this.inputWorks);
        },
        loginPage: function () {
            return (this.loginVis === 'login') && (this.login === false);
        },
        regPage: function () {
            return (this.loginVis === 'register') && (this.login === false);
        },
        exitingUser: function () {
            return checkExitUser();
        },
        unSignLogin: function () {
            if (app.login === true && app.account === '') {
                alert('請勿逕自更改內部設定。');
                app.login = false;
            }
        },
        exitingUserName: function () {
            if (checkExitUser()) {
                return JSON.parse(localStorage.getItem(STORAGE_MAIL_KEY)).email;
            }
            else {
                return '';
            }
        },
        checkLoginStatus: function () {
            if (this.login === true) {
                return true;
            }
            else {
                return false;
            }
        },
        pageStart: function () {
            return ((this.currPage - 1) * this.countOfPage);
        },
        totalPage: function () {
            return Math.ceil(this.filterWorks.length / this.countOfPage);
        }
    },
    watch: {},
    methods: {
        addWork: function (todo) {
            if (todo === '') {
                alert('說點什麼吧？');
                return false;
            }
            else {
                app.inputWorks.push({ content: todo, finished: false, pinned: false, editing: false, time: time.getFullYear() + "/" + time.getMonth() + "/" + time.getDate() + "  " + time.getHours() + " : " + time.getMinutes(),
                    more: false });
                localStorage.setItem('savedData', '');
                localStorage.setItem('savedData', JSON.stringify(this.inputWorks));
                firebase.database().ref("user/" + this.uid + "/data").set(this.inputWorks);
                app.inputWork = '';
            }
        },
        deleteWork: function (todo) {
            if (todo.pinned !== true) {
                this.inputWorks.splice(this.inputWorks.indexOf(todo), 1);
                localStorage.setItem(STORAGE_KEY, '');
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
                firebase.database().ref("user/" + this.uid + "/data").set(this.inputWorks);
            }
            else if (todo.pinned === true) {
                alert('被保護不能被刪除。');
            }
        },
        pinWork: function (todo) {
            if (todo.pinned === false || todo.pinned === undefined) {
                todo.pinned = true;
            }
            else {
                todo.pinned = false;
            }
        },
        editWork: function (todo) {
            if (todo.editing === true) {
                todo.editing = false;
                firebase.database().ref("user/" + this.uid + "/data").set(this.inputWorks);
            }
            else {
                todo.editing = true;
            }
        },
        checkIsPinnedOrNot: function (todo) {
            return todo.pinned === true;
        },
        finishAllWorks: function () {
            for (var _i = 0, _a = this.inputWorks; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.finished = true;
                localStorage.setItem(STORAGE_KEY, '');
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            }
            firebase.database().ref("user/" + this.uid + "/data").set(this.inputWorks);
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
            firebase.database().ref("user/" + this.uid + "/data").set(this.inputWorks);
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
        changeVisToSearch: function () {
            this.search = true;
            return this.visibility = 'search';
        },
        cancelSearch: function () {
            this.search = false;
        },
        changeVisToRegister: function () {
            return this.loginVis = 'register';
        },
        changeVisToLogin: function () {
            return this.loginVis = 'login';
        },
        changePasswordVis: function () {
            if (this.showPassword === false) {
                this.showPassword = true;
            }
            else {
                this.showPassword = false;
            }
        },
        setPage: function (idx) {
            if (idx <= 0 || idx > this.totalPage) {
                return;
            }
            this.currPage = idx;
        },
        firebaseLogin: function () {
            if (app.account !== '' && app.password !== '') {
                firebase.auth().signInWithEmailAndPassword(app.account, app.password).then(function (user) {
                    app.loading = true;
                    app.exitingUser = true;
                    app.uid = user.uid; // app.account.split('.').join('_')
                    app.login = true;
                    app.password = '';
                    var fire = firebase.database().ref("user/" + app.uid + "/data");
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
                    localStorage.setItem(STORAGE_MAIL_KEY, '');
                    localStorage.setItem(STORAGE_MAIL_KEY, JSON.stringify({ email: app.account }));
                    localStorage.setItem(STORAGE_UID_KEY, '');
                    localStorage.setItem(STORAGE_UID_KEY, app.uid);
                }).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
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
                app.loading = true;
                app.exitingUser = true;
                app.account = app.regAccount;
                app.uid = user.uid; // app.account.split('.').join('_')
                app.regPassword = '';
                localStorage.setItem(STORAGE_MAIL_KEY, '');
                localStorage.setItem(STORAGE_MAIL_KEY, JSON.stringify({ email: app.account }));
                localStorage.setItem(STORAGE_UID_KEY, '');
                localStorage.setItem(STORAGE_UID_KEY, app.uid);
                var fire = firebase.database().ref("user/" + app.uid + "/data");
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
                var errorCode = error.code;
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
        },
        firebaseSignOut: function () {
            firebase.auth().signOut().then(function () {
                localStorage.clear();
                location.reload(true);
            });
        }
    },
    created: function () {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in and currentUser will no longer return null.
                app.loading = true;
                app.uid = user.uid;
                app.account = firebase.auth().currentUser.email;
                var fire_1 = firebase.database().ref("user/" + app.uid + "/data");
                localStorage.setItem(STORAGE_MAIL_KEY, '');
                localStorage.setItem(STORAGE_MAIL_KEY, JSON.stringify({ email: app.account }));
                localStorage.setItem(STORAGE_UID_KEY, '');
                localStorage.setItem(STORAGE_UID_KEY, app.uid);
                app.login = true;
                fire_1.once('value', function (s) {
                    if (s.val() === null || s.val().length === 0 || app.inputWorks === null) {
                        fire_1.set([{ vis: false }]);
                        app.loading = false;
                        app.inputWorks = [{ vis: false }];
                    }
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(s.val()));
                    app.loading = false;
                    app.inputWorks = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
                });
            }
            else {
                app.loading = false;
                // No user is signed in.
            }
        });
    }
});
// 好想睡 ( ；´Д｀)
console.log("\n      ___           ___           ___           ___           ___\n     /\\__\\         /\\  \\         /\\__\\         /\\  \\         /\\__\\\n    /:/  /        /::\\  \\       /:/ _/_       /::\\  \\       /:/  /\n   /:/__/        /:/\\:\\  \\     /:/ /\\__\\     /:/\\:\\  \\     /:/  /\n  /::\\  \\ ___   /:/  \\:\\  \\   /:/ /:/ _/_   /::\\~\\:\\  \\   /:/  /  ___\n /:/\\:\\  /\\__\\ /:/__/ \\:\\__\\ /:/_/:/ /\\__\\ /:/\\:\\ \\:\\__\\ /:/__/  /\\__\\\n \\/__\\:\\/:/  / \\:\\  \\ /:/  / \\:\\/:/ /:/  / \\/_|::\\/:/  / \\:\\  \\ /:/  /\n      \\::/  /   \\:\\  /:/  /   \\::/_/:/  /     |:|::/  /   \\:\\  /:/  /\n      /:/  /     \\:\\/:/  /     \\:\\/:/  /      |:|\\/__/     \\:\\/:/  /\n     /:/  /       \\::/  /       \\::/  /       |:|  |        \\::/  /\n     \\/__/         \\/__/         \\/__/         \\|__|         \\/__/\n     \u60A8\u597D\uFF0C\u559C\u6B61\u6211\u7684\u7DB2\u7AD9\u4E26\u4E14\u60F3\u8981\u7D66\u6211\u4E00\u4EFD\u5DE5\u4F5C\u7684\u8A71\u6B61\u8FCE\u8207\u6211\u806F\u7D61\u3002\uD83D\uDE22 email: mailto:aa1010111@icloud.com\n");
