function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
generateRandomInteger(1, 10);
var app3 = new Vue({
    el: '#app',
    data: {
        message: '123',
        score: 0,
        scoreArray: [],
        loading: false
    },
    methods: {
        mufun: function () {
            var vm = this;
            if (typeof (vm.score) !== 'number') {
                parseInt(vm.score, 0);
            }
            vm.scoreArray.push(vm.score);
        },
        delFun: function (x) {
            this.scoreArray.splice(x, 1);
        }
    }
});
//# sourceMappingURL=main.js.map