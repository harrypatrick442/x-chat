exports.dalRooms= new (function(){
	console.log('DalRooms loaded');
	const STORED_PROCEDURE_GET_ROOMS='xchat_rooms_get';
	const STORED_PROCEDURE_GET_MESSAGES='xchat_rooms_messages_get';
	const STORED_PROCEDURE_CREATE_ROOM ='xchat_room_get';
	const STORED_PROCEDURE_SEARCH_ROOMS='xchat_rooms_search';
	const TEXT='text';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Room = require('./../Room').Room;
	var Message = require('./../Message');
	var each = require('./../each');
	var sql = require('mssql');
	this.getRooms = function(callback){
		var rooms=[];
		dalXChat.query({storedProcedure:STORED_PROCEDURE_GET_ROOMS,
			callback:function(result){
				var rows = result.recordsets[0];
				var rooms=[];
				each(rows, function(row){
					rooms.push(Room.fromSqlRow(row));
				});
				callback(rooms);
		}});
	};
	this.search = function(text, callback){
		console.log({name:TEXT, value:text, type:sql.Text});
		dalXChat.query({storedProcedure:STORED_PROCEDURE_SEARCH_ROOMS,
		parameters:[
			{name:TEXT, value:text, type:sql.Text}],
			callback:function(result){
				console.log(result);
				var rows = result.recordsets[0];
				callback(rows);
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
