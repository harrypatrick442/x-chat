var E = new (function () {
    this.DIV = function () {
        return c('div');
    };
	this.IMG= function(){ return c('img');};
	this.CANVAS = function(){return c('canvas');};
    this.TABLE = function () {
        return c('table');
    };
    this.TR = function () {
        return c('tr');
    };
    this.TD = function () {
        return c('td');
    };
    this.TH = function () {
        return c('th');
    };
    this.H3 = function () {
        return c('h3');
    };
    this.H2 = function () {
        return c('h2');
    };
    this.H1 = function () {
        return c('h1');
    };
	this.VIDEO = function(){
		return c('video');
	};
	this.CHECKBOX = function(){
		return i('input', 'checkbox');
	};
    this.TEXT = function () {
        return i('input', 'text');
    };
    this.PASSWORD = function () {
        return i('input','password');
    };
    this.TEXTAREA = function () {
        return c('textarea');
    };
    this.SPAN = function () {
        return c('span');
    };
    this.SELECT = function () {
        return c('select');
    };
    this.OPTION = function () {
        return c('option');
    };
    this.TABLE = function () {
        return c('table');
    };
    this.COLGROUP = function () {
        return c('colgroup');
    };
    this.COL = function () {
        return c('col');
    };
    this.BUTTON = function () {
        return c('button');
    };
    this.A = function () {
        return c('a');
    };
    this.LABEL = function () {
        return c('label');
    };
	this.FILE = function(){
		return i('input', 'file');
	};
    function i(name, type) {
        var i = c(name);
        i.type = type;
        return i;
    }

    function c(name) {
        return document.createElement(name);
    }
})();