
var Rooms = new (function(){
	var _Rooms = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var send = params.send;
		var getSessionId=params.getSessionId;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var getNDevice = params.getNDevice;
		var showRoomsSearch = params.showRoomsSearch;
		var ignoreManager = params.ignoreManager;
		var clickMenuUser = params.clickMenu;
		var showUsersSearch = params.showUsersSearch;
		var set = new Set({getEntryId:getEntryId});var usersMenuAll = params.usersMenuAll;
		var emoticonsParser = new EmoticonsParser({emoticonsLibrary:EmoticonsLibrary});
		var roomsMenu = new RoomsMenu({usersMenu:usersMenuAll, showRoomsSearch:showRoomsSearch});
		var emoticons = new Emoticons({emoticonsLibrary:EmoticonsLibrary});
		var ui = new UI({emoticons:emoticons, getTopEntry:getTopEntry});
		var overlappingEntries= new OverlappingEntries({element:ui.getEntries(), name:'rooms'});
		roomsMenu.addEventListener('showroom', showRoom);
		emoticons.addEventListener('addemoticon', addEmoticon);
		overlappingEntries.add(roomsMenu);
		overlappingEntries.show(roomsMenu);
		this.getElement = ui.getElement
		this.resize = ui.resize;
		this.showMenu = function(){
			overlappingEntries.show(roomsMenu);
		};
		this.getById = function(id){
			return set.getById(id);
		};
		this.set = function(roomInfos){
			roomsMenu.set(roomInfos);
			var ids=[];
			each(roomInfos, function(roomInfo){
				ids.push(roomInfo.id);
			});
			each(set.getIds(), function(id){
				if(ids.indexOf(id)>=0)return;
				var room = set.getById(id);
				room.dispose();
				remove(room);
			});
		};
		this.incomingMessage = function(msg){
			var room = set.getById(msg.roomId);
			if(!room)return;
			room.incomingMessage(msg.message);
		};
		this.incomingMessages = function(msg){
			var room = set.getById(msg.roomId);
			if(!room)return;
			room.incomingMessages(msg.messages);
		};
		this.showPm=function(pm){
			
		};
		this.join = function(msg, user){
			if(!user)return;
			var room = set.getById(msg.roomId);
			if(!room) return;	
			room.join(user);
		};
		this.getById= set.getById;
		this.showRoom = function(roomInfo){
			var room = set.getById(roomInfo.id);
			if(!room)
				room = loadRoom(roomInfo);
			showEntry(room);
		};
		this.clear = function(){
			each(set.getEntries().slice(), function(entry){
				console.log(entry);
				entry.dispose&&entry.dispose();
				remove(entry);
			});
			roomsMenu.clear();
		};
		function getTopEntry(){
			return overlappingEntries.getTopEntry();
		}
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
			var room = new Room({id:roomInfo.id, name:roomInfo.name, isPm:roomInfo.isPm, getUserMe:getUserMe, emoticonsParser:emoticonsParser,
			userTo:roomInfo.userTo, getUserById:getUserById, ignoreManager:ignoreManager, clickMenuUser :clickMenuUser, getNDevice:getNDevice,
			getSessionId:getSessionId, send:send, showUsersSearch:showUsersSearch});
			set.add(room);
			var isPm = room.isPm();
			overlappingEntries.add(room);
			room.addEventListener('showemoticons', showEmoticons);
			room.addEventListener('hide', hideRoom);
			room.addEventListener('showpm', function(e){ return self.dispatchEvent(e);});
			if(!isPm){
			room.addEventListener('sendmessage', function(e){ return self.dispatchEvent(e);});
			room.addEventListener('getmessages', function(e){ return self.dispatchEvent(e);});
			}else{
			room.addEventListener('sendpm', function(e){ return self.dispatchEvent(e);});
			room.addEventListener('getpms', function(e){self.dispatchEvent(e);});
			room.addEventListener('videopmofferrejected', function(e){self.dispatchEvent(e);});
			
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
		function hideRoom(e){
			var room = e.room;
			overlappingEntries.hide(room);
		}
		function dispatchRoomsInChanged(){
			self.dispatchEvent({type:'roomsinchanged', roomIds:set.getEntries().where(function(x){ return !x.isPm();}).select(function(x){ return x.getId();}).toList()});
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
			set.remove(room);
			overlappingEntries.remove(room);
			dispatchDestroyedRoom(room);
		}
	};
	return _Rooms;
	function UI(params){
		var menu = params.menu;
		var emoticons = params.emoticons;
		var getTopEntry = params.getTopEntry;
		var element = E.DIV();
		element.classList.add('rooms');
		var entries = E.DIV();
		var inner = E.DIV();
		inner.classList.add('rooms-inner');
		element.appendChild(inner);
		entries.classList.add('entries');
		inner.appendChild(entries);
		inner.appendChild(emoticons.getElement());
		this.getEntries = function(){
			return entries;
		};
		this.getElement = function(){return element;};
		var resizeOnce = new Once(resize);
		this.resize = resizeOnce.trigger;
		function resize(){
			console.log('rooms.resize'); 	
			var topEntry = getTopEntry();
			if(!topEntry)return;
			topEntry = topEntry.getEntry();
			if(!topEntry)return;
			topEntry.resize&&topEntry.resize();
		}
	}
})();