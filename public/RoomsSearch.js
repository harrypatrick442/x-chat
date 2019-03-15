var RoomsSearch = (function(){
	var _RoomsSearch = function(){
		EventEnabledBuilder(this);
		var self = this;
		var standardSearch = new StandardSearch({title:'Rooms Search', getEntryId:getEntryId, callbackSearch:dispatchSearch, classNames:['rooms-search']	});
		var sortedFilteredEntries = new SortedFilteredEntries({element:standardSearch.getEntries(), getEntryId:getEntryId, compare:compare});
		this.show = standardSearch.show;
		this.incomingRooms = function(roomInfos){
			setRooms(roomInfos);
		};
		function setRooms(roomInfos){
			var ids=[];
			each(roomInfos, function(roomInfo){
				if(!sortedFilteredEntries.getByEntryId(roomInfo.id))
				{
					roomAdd(roomInfo);
				}
			});
			for(var id in sortedFilteredEntries.getEntries().slice()){
				if(ids.indexOf(id)<0)
				{
					roomRemove(id);
				}
			}
		}
		function getEntryId(roomEntry)
		{
			return roomEntry.getId();
		}
		function compare(roomEntryA, roomEntryB){
			return roomEntryA.getName()>roomEntryB.getName();
		}
		function roomAdd(roomInfo){
			var roomEntry = new RoomEntry(roomInfo)
			sortedFilteredEntries.addEntry(roomEntry);
			roomEntry.addEventListener('selected', selected);
			return roomEntry;
		}
		function roomRemove(id){
			var roomEntry = sortedFilteredEntries.getByEntryId(id);
			sortedFilteredEntries.removeEntry(roomEntry);
		}
		function selected(e){
			standardSearch.hide();
			dispatchShowRoom(e.roomInfo);
		}
		function dispatchShowRoom(roomInfo){
			self.dispatchEvent({type:'showroom', roomInfo:roomInfo});
		}
		function dispatchSearch(e){
			if(!e.text||e.text.length<1)return;
			self.dispatchEvent({type:'search', text:e.text});
		}
	};
	return _RoomsSearch;
})();
