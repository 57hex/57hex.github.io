function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
let player = {
    name: "",
    personAbility: {pow: 0, spd: 0, luk: 0,  stamina: 100, emotion: 100},
    constructor() {
        this.personAbility.pow = generateRandomInteger(0, 9);
        this.personAbility.spd = generateRandomInteger(0, 9);
        this.personAbility.luk = generateRandomInteger(0, 9);
    },
    nameIsNullOrNot() {
        if (this.name === "") {
            this.name = prompt("請輸入名字");
            document.querySelector(".test123").textContent = this.name;
        }
    },
};
function playGame() {
    player.constructor();
    player.nameIsNullOrNot();
}
playGame();
