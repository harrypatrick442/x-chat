
var Rooms = new (function(){
	var _Rooms = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var collection = new Collection({getEntryId:getEntryId});	
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
			console.log(roomInfos);
			each(roomInfos, function(roomInfo){
				ids.push(roomInfo.id);
			});
			each(collection.getIds(), function(id){
				if(ids.indexOf(id)<0)
					remove(collection.getById(id));
			});
		};
		this.incomingMessage = function(msg){
			var room = collection.getById(msg.roomId);
			if(!room)return;
			room.incomingMessage(msg.message);
		};
		this.incomingMessages = function(msg){
			var room = collection.getById(msg.roomId);
			if(!room)return;
			room.incomingMessages(msg.messages);
		};
		this.setRoomsIn=function(roomsIn){
				
		};
		this.join = function(msg, user){
			if(!user)return;
			var room = collection.getById(msg.roomId);
			if(!room) return;	
			room.join(user);
		};
		this.getById= collection.getById;
		function showRoom(e){
			var roomInfo = e.roomInfo;
			var room = collection.getById(roomInfo.id);
			if(!room)
				room = loadRoom(roomInfo);
			showEntry(room);
		}
		function showEntry(entryToShow){
			overlappingEntries.show(entryToShow);
		}
		function getEntryId(room){
			return room.getId();
		}
		function loadRoom(roomInfo){
			console.log(roomInfo);
			var room = new Room({id:roomInfo.id, name:roomInfo.name, getUserMe:getUserMe, emoticonsParser:emoticonsParser, getUserById:getUserById});
			collection.add(room);
			overlappingEntries.add(room);
			room.addEventListener('showemoticons', showEmoticons);
			room.addEventListener('sendmessage', dispatchSendMessage);
			room.addEventListener('getmessages', dispatchGetMessages);
			room.addEventListener('missingusers', self.dispatchEvent);
			dispatchCreatedRoom(room);
			room.addEventListener('dispose',callbackRoomDispose);
			dispatchRoomsInChanged();
			return room;
		}
		function callbackRoomDispose(e){
			var room = e.room;
			collection.remove(room);
			dispatchRoomsInChanged();
		}
		function dispatchRoomsInChanged(){
			self.dispatchEvent({type:'roomsinchanged', roomIds:collection.getIds()});
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
			collection.removeById(room.getId());
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