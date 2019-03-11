var UsersSearch = (function(){
	var _UsersSearch = function(){
		EventEnabledBuilder(this);
		var self = this;
		var standardSearch = new StandardSearch({title:'Users Search', getEntryId:getEntryId, callbackSearch:dispatchSearch});
		this.show = standardSearch.show;
		this.incomingUsers = function(users){
			
		};
		function getEntryId(entry){
			
		}
		function dispatchSearch(e){
			console.log('dispatching search');
			self.dispatchEvent({type:'search', text:e.text});
		}
	};
	return _UsersSearch;
})();
