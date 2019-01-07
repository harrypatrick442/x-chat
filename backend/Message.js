exports.Message = new (function(){
	var _Message = function(params){
		this.getUserId = function(){return params.userId;};
		this.getContent = function(){return params.content;};
		this.getServerAssignedNMessage=function(){return params.serverAssignedNMessage;};
		this.setServerAssignedNMessage = function(value){params.serverAssignedNMessage = value;
		console.log('set server assigned n message');
		console.log(params);};
		console.log(params);
		this.toJSON= function(){
			return params;
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
