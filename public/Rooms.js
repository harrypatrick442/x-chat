
var Rooms = new (function(){
	var _Rooms = function(){
		var self = this;
		var mapIdToRoom={};
		var roomsMenu = new RoomsMenu();
		var entries = [roomsMenu];
		roomsMenu.addEventListener('showroom', showRoom);
		var ui = new UI({menu: roomsMenu});
		this.getElement = ui.getElement;
		this.set = function(roomInfos){
			roomsMenu.set(roomInfos);
			var ids=[];
			each(roomInfos, function(roomInfo){
				ids.push(roomInfo.id);
			});
			for(var id in mapIdToRoom){
				if(ids.indexOf(id)<0)
					remove(mapIdToRoom[id]);
			}
		};
		function showRoom(roomInfo){
			console.log(roomInfo);
			var room = mapIdToRoom[roomInfo.id];
			if(!room)
				room = loadRoom(roomInfo);
			showEntry(room);
		}
		function showEntry(entryToShow){
			each(entries, function(entry){
				entry.setVisible(entryToShow==entry);
			});
		}
		function loadRoom(roomInfo){
			var room = new Room(roomInfo);
			mapIdToRoom[roomInfo.id]=room;
			entries.push(room);
			ui.addEntry(room);
			return room;
		}
		function remove(room){
			delete mapIdToRoom[room.getId()];
			entries.splice(entries.indexOf(room), 1);
			ui.removeEntry(room);
			room.dispose();
		}
	};
	return _Rooms;
	function UI(params){
		var menu = params.menu;
		var element = E.DIV();
		element.classList.add('rooms');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		entries.appendChild(menu.getElement());
		this.getElement = function(){return element;};
		this.addEntry = function(entry){
			entries.appendChild(entry.getElement());
		};
		this.removeEntry = function(entry){
			entries.removeChild(entry.getElement());
		};
	}
})();