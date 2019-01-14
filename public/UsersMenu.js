var UsersMenu =(function(){
	var _UsersMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var ui = new UI();
		var users = params.users;
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries()});
		this.getElement = ui.getElement;
		users.addEventListener('add', userAdd);
		users.addEventListener('remove', userRemove);
		function userAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
			sortedFilteredEntries.addEntry(new UserEntry(e.user));
		}
		function userRemove(e){
			sortedFilteredEntries.removeEntryById(e.user.getId());
		}
		function compare(userEntryA, userEntryB){
			return userEntryA.getUsername()>userEntryB.getUsername();
		}
		function getEntryId(userEntry){
			return userEntry.getId();
		}
		this.show = function(){
			self.dispatchEvent({type:'show', entry:self});
		};
	};
	return _UsersMenu;
	function UI(params){
		var element = E.DIV();
		element.classList.add('users-menu');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.getEntries = function(){return entries;};
		this.getElement=function(){return element;};
	}
})();