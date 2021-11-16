const Message = function(params){
	this.setUniqueId = function(value){params.uniqueId = value;};
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
Message.fromJSON = function(jObject){
	return new Message(jObject);
};
Message.fromSqlRow = function(row){
	row.userId = String(row.userId);
	row.uniqueId = row.serverAssignedNMessage;
	return new Message(row);
};
Message.fromRequest=function(req, user){
	req.userId = user.getId();
	req.username = user.getUsername();
	req.image= user.getImage();
	req.sentAt=new Date().toISOString();
	return new Message(req);
};
module.exports =  Message;
