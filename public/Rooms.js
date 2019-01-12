
var Rooms = new (function(){
	var _Rooms = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserMe = params.getUserMe;
		var mapIdToRoom={};
		var emoticonsParser = new EmoticonsParser({emoticonsLibrary:EmoticonsLibrary});
		var roomsMenu = new RoomsMenu();
		var emoticons = new Emoticons({emoticonsLibrary:EmoticonsLibrary});
		var ui = new UI({emoticons:emoticons});
		var overlappingEntries= new OverlappingEntries({element:ui.getEntries()});
		roomsMenu.addEventListener('showroom', showRoom);
		emoticons.addEventListener('addemoticon', addEmoticon);
		overlappingEntries.add(roomsMenu);
		overlappingEntries.show(roomsMenu);
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
		this.incomingMessage = function(msg){
			var room = mapIdToRoom [msg.roomId];
			if(!room)return;
			room.incomingMessage(msg.message);
		};
		this.incomingMessages = function(msg){
			var room = mapIdToRoom [msg.roomId];
			if(!room)return;
			room.incomingMessages(msg.messages);
		};
		function showRoom(e){
			var roomInfo = e.roomInfo;
			var room = mapIdToRoom[roomInfo.id];
			if(!room)
				room = loadRoom(roomInfo);
			showEntry(room);
		}
		function showEntry(entryToShow){
			overlappingEntries.show(entryToShow);
		}
		function loadRoom(roomInfo){
			console.log(roomInfo);
			var room = new Room({id:roomInfo.id, name:roomInfo.name, getUserMe:getUserMe, emoticonsParser:emoticonsParser});
			mapIdToRoom[roomInfo.id]=room;
			overlappingEntries.add(room);
			room.addEventListener('showemoticons', showEmoticons);
			room.addEventListener('sendmessage', dispatchSendMessage);
			room.addEventListener('getmessages', dispatchGetMessages);
			dispatchCreatedRoom(room);
			return room;
		}
		function destroyRoom(room){
			dispatchDestroyedRoom(room);
		}
		function dispatchCreatedRoom(room){
			self.dispatchEvent({type:'createdroom', room:room});
		}
		function dipatchDestroyedRoom(room){
			self.dispatchEvent({type:'detroyedroom', room:room});
		}
		function addEmoticon(e){
			var emoticonEntry = e.emoticonEntry;
		}
		function showEmoticons(e){
			console.log('show emoticons');
			var picked = e.picked;
			emoticons.show({picked:picked});
		}
		function dispatchSendMessage(e){
			self.dispatchEvent(e);
		}
		function dispatchGetMessages(e){
			self.dispatchEvent(e);
		}
		function remove(room){
			delete mapIdToRoom[room.getId()];
			overlappingEntries.remove(room);
			room.dispose();
		}
	};
	return _Rooms;
	function UI(params){
		var menu = params.menu;
		var emoticons = params.emoticons;
		var element = E.DIV();
		element.classList.add('rooms');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		element.appendChild(emoticons.getElement());
		this.getEntries = function(){
			return entries;
		};
		this.getElement = function(){return element;};
	}
})();