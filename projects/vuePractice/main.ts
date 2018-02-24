function generateRandomInteger (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}
generateRandomInteger(1, 10)
const app3 = new Vue({
  el: '#app',
  data: {
    message: '123',
    score: 0,
    scoreArray: [],
    loading: false
  },
  methods: {
  	mufun: function () {
  		let vm = this
  		if (typeof(vm.score) !== 'number') {
  			parseInt(vm.score, 0)
		  }
  		vm.scoreArray.push(vm.score)
  },
	  delFun: function () {
		  this.scoreArray.splice(this, 1)
	  }
  }
})
