exports.Room = new (function(){
	var _Room = function(){
		
		this.getSqlParameters= function(){
		   return {};
		};
	};
	_Room.fromSqlRow = function(row){
		return new _Room({name:row.name, uuid:row.uuid});
	};
	return _Room;
})();