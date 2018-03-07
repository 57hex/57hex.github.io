"use strict";
var app = new Vue({
    el: '#newapp',
    data: {
        title: '代辦事項',
        inputWork: '',
        inputWorks: [{ content: 'test', finished: false }]
    },
    methods: {
        addWork: function (todo) {
            this.inputWorks.push({ content: todo, finished: false });
        },
        deleteAllWorks: function () {
            this.inputWorks = [];
        },
        deleteWork: function (todo) {
            this.inputWorks.splice(this.inputWorks.indexOf(todo), 1);
        },
        finishAllWorks: function () {
					for (let obj of this.inputWorks) {
            obj.finished = true
					}}
    }
})
