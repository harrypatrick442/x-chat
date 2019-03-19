exports.dalRooms= new (function(){
	console.log('DalRooms loaded');
	const STORED_PROCEDURE_GET_ROOMS='xchat_rooms_get';
	const STORED_PROCEDURE_GET_MESSAGES='xchat_rooms_messages_get';
	const STORED_PROCEDURE_CREATE_ROOM ='xchat_room_create';
	const STORED_PROCEDURE_SEARCH_ROOMS='xchat_rooms_search';
	const STORED_PROCEDURE_GET_ROOM = 'xchat_room_get';
	const TEXT='text';
	const NAME ='name';
	const ID='id';
    var dalXChat = require('./DalXChat').dalXChat;	
	var Room = require('./../Room').Room;
	console.log('ROOM IS: ');
	console.log(Room);
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
	this.getRoom = function(id, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_GET_ROOM,
			parameters:[{name:ID, value:id, type:sql.Int}],
			callback:function(result){
				var rows = result.recordsets[0];
				var roomInfo = rows?rows[0]:null;
				callback(roomInfo?Room.fromSqlRow(roomInfo):null);
			}
		});
	};
	this.search = function(text, callback){
		console.log({name:TEXT, value:text, type:sql.Text});
		dalXChat.query({storedProcedure:STORED_PROCEDURE_SEARCH_ROOMS,
		parameters:[
			{name:TEXT, value:text, type:sql.Text}],
			callback:function(result){
				var rows = result.recordsets[0];
				callback(rows);
		}});
	};
	this.createRoom = function(name, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_CREATE_ROOM, parameters:[
			{name:NAME, value:name, type:sql.VarChar(45)}
		],
		callback:function(result){
			var rows = result.recordsets[0];
			var row = rows[0];
			if(row.exists){
				callback('A room with this name already exists!');
				return;
			}
			console.log('returning room');
			callback(Room.fromSqlRow(row));
		}
		});
	};
})();
