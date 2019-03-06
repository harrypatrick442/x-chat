module.exports = (function(){
	var _Message = function(params){
		this.getUserId = function(){return params.userId;};
		this.getContent = function(){return params.content;};
		this.getServerAssignedNMessage=function(){return params.serverAssignedNMessage;};
		this.setServerAssignedNMessage = function(value){params.serverAssignedNMessage = value;};
		this.setSentAt=function(value){
			params.sentAt=value;
		};
		this.toJSON= function(){
			return params;
		};
	};
	_Message.fromSqlRow = function(row){
		row.userId = String(row.userId);
		row.uniqueId = row.serverAssignedNMessage;
		return new _Message(row);
	};
	_Message.fromRequest=function(req, user){
		req.userId = user.getId();
		req.username = user.getUsername();
		req.image= user.getImage();
		req.sentAt=new Date().toISOString();
		return new _Message(req);
	};
	return _Message;
})();
