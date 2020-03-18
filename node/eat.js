var Cat = require('./cat');
var Mouse = require('./mouse');

var tom = new Cat("Tom");
var mouse = new Mouse("Jerry");
tom.an(mouse);

console.log(tom);