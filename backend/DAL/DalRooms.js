exports.dalRooms= new (function(){
	console.log('DalRooms loaded');
	const STORED_PROCEDURE_GET_ROOMS='xchat_rooms_get';
	const STORED_PROCEDURE_GET_MESSAGES='xchat_rooms_messages_get';
	const STORED_PROCEDURE_CREATE_ROOM ='xchat_room_get';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Room = require('./../Room').Room;
	var Message = require('./../Message').Message;
	var each = require('./../each').each;
	var sql = require('mssql');
	this.getRooms = function(callback){
		var rooms=[];
		dalXChat.query({storedProcedure:STORED_PROCEDURE_GET_ROOMS,
			callbackRead:function(rows){
				console.log(rows);
				console.log('is rows');
				var rooms=[];
				each(rows, function(row){
					console.log(row);
					rooms.push(Room.fromSqlRow(row));
				});
				console.log(rooms);
				callback(rooms);
		}});
	};
	
	this.createRoom = function(room){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_CREATE_ROOM, parameters:[
			{name:NAME, value:room.getName(), type:sql.VarChar(45)},
			{name:ID, value:room.getId(), type:sql.Int}
		]
		});
	};
})();
