Enumerable.prototype.toList = function () {
	this.reset();
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
Enumerable.prototype.take = function (n) {
	return (function(n, self){
		var count=0;
		return new Enumerable(function(){
			var next = self.moveNext();
			if(next){
				count++;
				if(count<=n)
					return true;
			}
			return false;
		},
		self.current,
		self.reset);
	})(n, this);
};
Enumerable.prototype.leave = function (n) {
	var self = this;
	var count=0;
	return new Enumerable(function(){
		var next = self.moveNext();
		if(next){
			count++;
			if(count>n)
				return true;
		}
		return false;
	},
	self.current,
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
		this.current,
		this.reset);
};
Enumerable.prototype.firstOrDefault = function () {
		this.reset();
		this.moveNext();
		return this.current();
};
Enumerable.prototype.reverse=function(){
	this.reset();
	return Enumerable.fromArray(this.toList().reverse());
};
Enumerable.prototype.sum=function(func){
	this.reset();	
	var sum=0;
	while (this.moveNext()) {
		sum+=func(this.current());
	}
	return sum;
};
Enumerable.prototype.count=function(){
	this.reset();	
	var count=0;
	while (this.moveNext()) {
		count++;
	}
	return count;
};
Enumerable.prototype.each=function(func){
	this.reset();	
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
Array.prototype.take=function(n){
	return Enumerable.fromArray(this).take(n);
};
Array.prototype.leave=function(n){
	return Enumerable.fromArray(this).leave(n);
};
Array.prototype.sum = function(func){
	return Enumerable.fromArray(this).sum(func);
};