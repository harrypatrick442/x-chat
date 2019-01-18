var UsersMenu =(function(){
	var _UsersMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var id = params.id;
		var ui = new UI();
		var getUserMe = params.getUserMe;
		console.log(getUserMe);
		var users = params.users;
		var ignoreManager = params.ignoreManager;
		var clickMenu = params.clickMenu;
		
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries()});
		var sortedFilteredEntriesIgnored = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntriesIgnored()});
		
		this.getElement = ui.getElement;
		this.getId = function(){return id;};
		users.addEventListener('add', userAdd);
		users.addEventListener('remove', userRemove);
		ignoreManager.addEventListener('add', ignoreAdd);
		ignoreManager.addEventListener('remove', ignoreRemove);
		this.getVisible = ui.getVisible;
		this.setVisible = ui.setVisible;
		function userAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
			sortedFilteredEntries.addEntry(new UserEntry({user:e.user, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe}));
		}
		function userRemove(e){
			sortedFilteredEntries.removeEntryById(e.user.getId());
		}
		function ignoreAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
			sortedFilteredEntriesIgnored.addEntry(new UserEntry({user:e.user, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe}));
		}
		function ignoreRemove(e){
			sortedFilteredEntriesIgnored.removeEntryById(e.user.getId());
		}
		function compare(userEntryA, userEntryB){
			console.log(userEntryA.getUsername());
			console.log(userEntryB.getUsername());
			console.log(userEntryA.getUsername()>userEntryB.getUsername());
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
		var visible=false;
		var element = E.DIV();
		element.classList.add('users-menu');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		var entriesIgnored = E.DIV();
		entriesIgnored.classList.add('entries-ignored');
		element.appendChild(entriesIgnored);
		
		
		this.getEntries = function(){return entries;};
		this.getEntriesIgnored = function(){return entriesIgnored;};
		
		this.getElement=function(){return element;};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
	}
})();