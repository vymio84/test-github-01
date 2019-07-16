var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach = [];
}

Dog.prototype.sayHi = function() {
	console.log(
		'Hello! I am Dog. My name is ' + chalk.bold.red.bgBlue(this.name)
	);
};

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

module.exports = Dog;
