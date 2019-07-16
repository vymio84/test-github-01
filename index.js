var Dog = require('./Dog.js');
var Cat = require('./Cat.js');

var pluto = new Dog('Pluto');
pluto.sayHi();

var tom = new Cat('Tom');

pluto.eat(tom);
console.log(pluto);
