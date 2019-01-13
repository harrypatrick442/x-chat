(function(){
	var Enumerable = require('./Enumerable').Enumerable;
	console.log(Enumerable);
		Enumerable.prototype.toList = function () {
		var list = [];
		var self = this;
		while (self.moveNext()) {
			list.push(self.current());
		}
		return list;
	};
	Enumerable.prototype.select = function (func) {
		var self = this;
		return new Enumerable(self.moveNext,
			function current() {
				return func(self.current());
			},
			self.reset);
	};
	Enumerable.prototype.where = function (func) {
		var self = this;
		return new Enumerable(function () {
				do {
					if (!self.moveNext()) return false;
				} while (!func(self.current()));
				return true;
			},
			self.current,
			self.reset);
	};
	Array.prototype.select = function (func) {
		return Enumerable.fromArray(this).select(func);
	};
	Array.prototype.where = function (func) {
		return Enumerable.fromArray(this).where(func);
	};
})();