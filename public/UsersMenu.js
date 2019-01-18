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
		console.log(clickMenu);
		console.log(new Error().stack);
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries()});
		var sortedFilteredEntriesIgnored = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntriesIgnored()});
		
		this.getElement = ui.getElement;
		this.getId = function(){return id;};
		users.addEventListener('add', userAdd);
		users.addEventListener('remove', userRemove);
		ignoreManager.addEventListener('ignored', callbackIgnoreAdd);
		ignoreManager.addEventListener('unignored', ignoreRemove);
		this.getVisible = ui.getVisible;
		this.setVisible = ui.setVisible;
		this.show = function(){
			self.dispatchEvent({type:'show', entry:self});
		};
		loadIgnores();
		function userAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
			sortedFilteredEntries.addEntry(new UserEntry({user:e.user, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe}));
		}
		function userRemove(e){
			sortedFilteredEntries.removeEntryById(e.user.getId());
		}
		function callbackIgnoreAdd(e){
			ignoreAdd(e.ignored);
		}
		function ignoreRemove(e){
			sortedFilteredEntriesIgnored.removeEntryById(e.ignored.getId());
		}
		function compare(userEntryA, userEntryB){
			return userEntryA.getUsername()>userEntryB.getUsername();
		}
		function getEntryId(userEntry){
			return userEntry.getId();
		}
		function loadIgnores(){
			try{
			each(ignoreManager.getIgnores(), function(ignored){
				 console.log(ignored);
				ignoreAdd(ignored);
			});
			}
			catch(ex){console.log(ex);
			ignoreManager.clearSave();}
		}
		function ignoreAdd(ignored){
			if(sortedFilteredEntriesIgnored.getByEntryId(ignored.getId()))return;
			sortedFilteredEntriesIgnored.addEntry(UserEntry.fromIgnored({user:ignored, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe}));
		}
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