exports.Device = (function(){
	var EventEnabledBuilder=require('./EventEnabledBuilder').EventEnabledBuilder;
	var _Device = function(params){
		EventEnabledBuilder(this);
		var roomsSet = new Set({getEntryId:getEntryId});
		var self = this;
		var mysocket = params.mysocket;
		this.getId = mysocket.getId;
		this.sendMessage = mysocket.sendMessage;
		this.joinedRoom = function(room){
			roomsSet.add(room);
			room.addEventListener(DISPOSE, roomDisposed);
		};
		this.leftRoom = function(room){
			roomsSet.remove(room);
			room.removeEventListener(DISPOSE, roomDisposed);
		};
		this.close=function(){
			dispatchClose();
		};
		this.getUser = function(){
			return user;
		};
		this.getRoomIdsIsIn = function(){
			return roomsSet.getEntryIds();
		};
		function roomDisposed(e){
			roomsSet.remove(e.room);
		}
		function dispatchClose(){
			self.dispatchEvent({type:'close', device:self});
		}
		function getEntryId(room){
			return room.getId();
		}
	};
	return _Device;
})();
