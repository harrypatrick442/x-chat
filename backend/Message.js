exports.Message = new (function(){
	var _Message = function(params){
		this.toJSON= function(){
			return params;
		};
	};
	_Message.fromSqlRow = function(row){
		return new _Message(row);
	};
	return _Message;
})();