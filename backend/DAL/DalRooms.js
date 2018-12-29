module.DalRooms= new (function(){
	const STORED_PROCEDURE_GET_ROOMS='xchat_rooms_get';
	const STORED_PROCEDURE_CREATE_ROOM ='xchat_room_get';
    var dalXChat = require('./Dal/DalXChat');
	
	this.getRooms = function(){
		var rooms=[];
		dalXChat.query({storedProcedure:STORED_PROCEDURE_GET_ROOMS, callbackRead:function(row){
			each(row, function(row){
				rooms.push(Room.fromSqlRow());
			});
		}})
		return rooms;
	};
	
	this.createRoom = function(room){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_CREATE_ROOM, parameters:room.getSqlParameters()});
	};
})();
