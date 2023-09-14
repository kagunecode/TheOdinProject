function Hero(name, level) {
    this.name = name;
    this.level = level;
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Object.setPrototypeOf(Healer.prototype, Hero.prototype);
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}

Warrior.prototype.attack = function () {
    return `${this.name} attacks with a ${this.weapon}`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}`;
}

const player1 = new Warrior('Kagune', 1, 'Sword');
const player2 = new Healer('Sphynx', 1, 'Faira');

console.log(player2.heal())
