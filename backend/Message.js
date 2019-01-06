exports.Message = new (function(){
	var _Message = function(params){
		this.getUserId = function(){return params.userId;};
		this.getContent = function(){return params.content;};
		this.toJSON= function(){
			return {userId:params.userId, username:params.username, content:params.content};
		};
	};
	_Message.fromSqlRow = function(row){
		return new _Message(row);
	};
	_Message.fromRequest=function(req){
		return new _Message(req);
	};
	return _Message;
})();