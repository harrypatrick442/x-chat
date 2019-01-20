
var Rooms = new (function(){
	var _Rooms = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var ignoreManager = params.ignoreManager;
		var clickMenuUser = params.clickMenu;
		var collection = new Collection({getEntryId:getEntryId});
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
			each(collection.getIds(), function(id){
				if(ids.indexOf(id)>=0)return;
				var room = collection.getById(id);
				room.dispose();
				remove(room);
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
		this.showPm=function(pm){
			
		};
		this.join = function(msg, user){
			if(!user)return;
			var room = collection.getById(msg.roomId);
			if(!room) return;	
			room.join(user);
		};
		this.getById= collection.getById;
		this.showRoom = function(roomInfo){
			var room = collection.getById(roomInfo.id);
			if(!room)
				room = loadRoom(roomInfo);
			showEntry(room);
		};
		function showRoom(e){
			self.showRoom(e.roomInfo);
		}
		
		function showEntry(entryToShow){
			overlappingEntries.show(entryToShow);
		}
		function getEntryId(room){
			return room.getId();
		}
		function loadRoom(roomInfo){
			var room = new Room({id:roomInfo.id, name:roomInfo.name, isPm:roomInfo.isPm, getUserMe:getUserMe, emoticonsParser:emoticonsParser, userTo:roomInfo.userTo,
			getUserById:getUserById, ignoreManager:ignoreManager, clickMenuUser :clickMenuUser});
			collection.add(room);
			var isPm = room.isPm();
			overlappingEntries.add(room);
			room.addEventListener('showemoticons', showEmoticons);
			if(!isPm){
			room.addEventListener('sendmessage', e=>self.dispatchEvent(e));
			room.addEventListener('getmessages', e=>self.dispatchEvent(e));
			}else{
			room.addEventListener('sendpm', e=>self.dispatchEvent(e));
			room.addEventListener('getpms', function(e){console.log('get pm 2');self.dispatchEvent(e);});
			
			}
			//room.addEventListener('getuserids', self.dispatchEvent);
			dispatchCreatedRoom(room);
			room.addEventListener('dispose',callbackRoomDispose);
			dispatchRoomsInChanged();
			if(!isPm)
				room.addEventListener('missingusers', self.dispatchEvent);
			return room;
		}
		function callbackRoomDispose(e){
			var room = e.room;
			remove(room);
			dispatchRoomsInChanged();
		}
		function dispatchRoomsInChanged(){
			self.dispatchEvent({type:'roomsinchanged', roomIds:collection.getEntries().where(x=>!x.isPm()).select(x=>x.getId()).toList()});
		}
		function dispatchCreatedRoom(room){
			self.dispatchEvent({type:'createdroom', room:room});
		}
		function dispatchDestroyedRoom(room){
			self.dispatchEvent({type:'destroyedroom', room:room});
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
		function dispatchSendPm(e){
			self.dispatchEvent({type:'sendpm', message:e.message});
		}
		function dispatchGetMessages(e){
			self.dispatchEvent(e);
		}
		function dispatchGetPms(e){	
		}
		function remove(room){
			collection.remove(room);
			overlappingEntries.remove(room);
			dispatchDestroyedRoom(room);
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