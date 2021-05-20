/*
const Dog = require('./js/Dog');
const Cat = require('./js/Cat');
const Rabbit = require('./js/Rabbit');

const rexas = new Dog('Rex', 'brown');
rexas.voice();


const rainis = new Cat('Rainis', 'golden');
rainis.voice();

const benas = new Rabbit('Benas', 'black');
benas.voice();


rexas.introduce();
benas.introduce();
rainis.introduce();

rexas.childCount();
benas.childCount();
rainis.childCount();
*/

const Volvo = require('./js/masinos/Lengvosios/Volvo');

const pilkasVolvo = new Volvo('Volvo', 'Left', 5, 4);
console.log(pilkasVolvo.engineIsOn);

pilkasVolvo.turnOnTheEngine();

console.log(pilkasVolvo.engineIsOn);
