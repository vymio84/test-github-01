var chalk = require('chalk');

function Dog(name) {
	this.name = name;
}
Dog.prototype.sayHi = function() {
	console.log(
		'Hello! I am Dog. My name is ' + chalk.bold.red.bgBlue(this.name)
	);
};

module.exports = Dog;
