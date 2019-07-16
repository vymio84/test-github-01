function Lion() {
	this.stomach = [];
}
Lion.prototype.eat = function(cat) {
	this.stomach.push(cat);
};
