Enumerable.prototype.toList = function () {
	var list = [];
	var self = this;
	while (this.moveNext()) {
		list.push(self.current());
	}
	return list;
};
Enumerable.prototype.select = function (func) {
	var self = this;
	return new Enumerable(this.moveNext,
		function current() {
			return func(self.current());
		},
		this.reset);
};
Enumerable.prototype.where = function (func) {
	var self = this;
	return new Enumerable(function () {
			do {
				if (!self.moveNext()) return false;
			} while (!func(self.current()));
			return true;
		},
		this.current,
		this.reset);
};
Enumerable.prototype.each=function(func){
	while (this.moveNext()) {
		func(this.current());
	}
};
Array.prototype.select = function (func) {
	return Enumerable.fromArray(this).select(func);
};
Array.prototype.where = function (func) {
	return Enumerable.fromArray(this).where(func);
};
Array.prototype.each=function(func){
	return Enumerable.fromArray(this).each(func);
};