
var Rooms = new (function(){
	var dalRooms = require('./Dal/DalRooms');
	var _Rooms = function(){
		var self = this;
		var mapUuidToRoom={};
		var ui = new UI();
		this.getElement = ui.getElement;
		this.getRoom(roomUuid){
			return mapUuidToRoom[roomUuid];
		};
		this.createRoom=function(name){
			var room = new Room({name:name});
			mapUuidToRoom[room.getUuid()]=room;
			return room;
		};
		initialize();
		function initialize(){
			loadRooms();
		}
		function loadRooms(){
			var rooms = dalRooms.getRooms();
			each(rooms, function(room){
				mapUuidToRoom[room.getUuid()]=room;
			});
		}
	};
	return _Rooms;
	function UI(){
		var element = E.DIV();
		element.classList.add('rooms');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.getElement = function(){return element;};
	}
})();