"use strict";
var STORAGE_KEY = 'savedData';
if (localStorage.getItem(STORAGE_KEY) === '' || localStorage.getItem(STORAGE_KEY) === undefined || localStorage.getItem(STORAGE_KEY) === null) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([{ content: '123', finished: false }]));
}
var filters = {
    all: function (todo) {
        return todo;
    },
    active: function (todo) {
        var filter = [];
        for (var _i = 0, todo_1 = todo; _i < todo_1.length; _i++) {
            var obj = todo_1[_i];
            if (obj.finished === false) {
                filter.push(obj);
            }
        }
        return filter;
    },
    haveFinished: function (todo) {
        var filter = [];
        for (var _i = 0, todo_2 = todo; _i < todo_2.length; _i++) {
            var obj = todo_2[_i];
            if (obj.finished === true) {
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
        inputWorks: JSON.parse(localStorage.getItem(STORAGE_KEY)),
        visibility: 'all'
    },
    computed: {
        filterWorks: function () {
            return filters[this.visibility](this.inputWorks);
        },
        filterNotFinishedWorks: function () {
            return filters.active(this.inputWorks);
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
            }
        },
        deleteAllWorks: function () {
            this.inputWorks = [];
            localStorage.setItem(STORAGE_KEY, '');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
        },
        deleteWork: function (todo) {
            this.inputWorks.splice(this.inputWorks.indexOf(todo), 1);
            localStorage.setItem(STORAGE_KEY, '');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
        },
        finishAllWorks: function () {
            for (var _i = 0, _a = this.inputWorks; _i < _a.length; _i++) {
                var obj = _a[_i];
                obj.finished = true;
                localStorage.setItem(STORAGE_KEY, '');
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.inputWorks));
            }
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
        },
        changeVisToAll: function () {
            return this.visibility = 'all';
        },
        changeVisToActive: function () {
            return this.visibility = 'active';
        },
        changeVisToHaveFinished: function () {
            return this.visibility = 'haveFinished';
        }
    }
});
