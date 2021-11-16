(function(){
	var Enumerable = require('./Enumerable');
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
	Enumerable.prototype.count=function(func){
		var count=0;
		while (this.moveNext()) {
			count++;
		}
		return count;
	};
	Enumerable.prototype.toMap = function(funcKey, funcValue){
		var map={};
		while (this.moveNext()) {
			var current = this.current();
			map[funcKey(current)]= funcValue(current);
		}
		return map;
	};
	Array.prototype.toMap = function(funcKey, funcValue){
		return Enumerable.fromArray(this).toMap(funcKey, funcValue);
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
})();