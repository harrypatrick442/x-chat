exports.Notification = (function(){
	var _Notification = function(params)
	{
		var self = this;
		this.toJSON = function(){
			return params;
		};
	};
	_Notification.fromSqlRow= function(row){
		return new _Notification({userId:String(row.userId), username:row.username});
	};
	return _Notification;
})();