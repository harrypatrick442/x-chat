
var Dimension = (function(){
	const PX='px';
	const PERCENT='%';
	var _Dimension = function(value, unit){
		var self = this;
		this.isDimension = true;
		if(unit===undefined)
		{
			var valueAndUnit = seperateValueAndUnit(value);
			value = valueAndUnit.value;
			unit = valueAndUnit.unit;
		}
		this.getValue= function(){
			return value;
		};
		this.getUnit = function(){
			return unit;
		};
	};
	_Dimension.PX=PX;
	_Dimension.PERCENT=PERCENT;
	_Dimension.px = function(value){
		return new _Dimension(value, PX);
	};
	_Dimension.percent=function(value){
		return new _Dimension(value, PERCENT);
	};
	function seperateValueAndUnit(str){
		var index = str.indexOf('%');
		if(index>0)
		{	
			var value = str.substr(0, index);
			if(value.length<=0) throw getInvalidStringError(str);
			return {value:parseInt(value),unit:PERCENT};
		}
		var index = str.indexOf('px');
		if(index<=0) throw getInvalidStringError(str);
		var value = str.substr(0, index);
		if(value.length<=0) throw getInvalidStringError(tr);
		return {value:parseInt(value),unit:PX};
	}
	function getInvalidStringError(str){
		return new Error('The string 2'+str+'" is an invalid dimension');
	}
	return _Dimension;
})();