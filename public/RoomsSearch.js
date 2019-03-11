var RoomsSearch = (function(){
	var _RoomsSearch = function(){
		EventEnabledBuilder(this);
		var self = this;
		var standardSearch = new StandardSearch({title:'Rooms Search', getEntryId:getEntryId, callbackSearch:dispatchSearch});
		this.show = standardSearch.show;
		this.incomingRooms = function(rooms){
			console.log(rooms);
		};
		function getEntryId(entry){
			
		}
		function dispatchSearch(e){
			console.log('dispatching search');
			self.dispatchEvent({type:'search', text:e.text});
		}
	};
	return _RoomsSearch;
})();
