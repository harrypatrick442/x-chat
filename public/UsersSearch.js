var UsersSearch = (function(){
	var _UsersSearch = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var clickMenu = params.clickMenu;
		var ignoreManager = params.ignoreManager;
		var getUserMe = params.getUserMe;
		var users = new Users({});
		var standardSearch = new StandardSearch({title:'Users Search', getEntryId:getEntryId, callbackSearch:dispatchSearch, classNames:['users-search']});
		var sortedFilteredEntries = new SortedFilteredEntries({element:standardSearch.getEntries(), getEntryId:getEntryId, compare:compare});
		this.show = standardSearch.show;
		this.hide = standardSearch.hide;
		this.incomingUsers = function(userInfos){
			setUsers(userInfos);
			standardSearch.hideSpinner();
		};
		users.addEventListener('add', userAdd);
		users.addEventListener('remove', userRemove);
		function compare(userEntryA, userEntryB){
			return userEntryA.getUsername()>userEntryB.getUsername();
		}
		function getEntryId(userEntry){
			return userEntry.getId();
		}
		function setUsers(userInfos){
			var idsShouldContain =[];
			each(userInfos, function(userInfo){
				idsShouldContain.push(userInfo.id);
				if(!users.getById(userInfo.id))
				{
					users.add(User.fromJSON(userInfo));
				}
			});
			each(users.getEntries().slice(), function(user){
				if(idsShouldContain.indexOf(user.getId())<0)
					users.remove(user);
			});
		}
		function userAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
			var userEntry = new UserEntry({user:e.user, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe});
			sortedFilteredEntries.addEntry(userEntry);
			userEntry.addEventListener('showpm', function(e){self.dispatchEvent(e);
			self.hide();});
		}
		function userRemove(e){
			var userEntry = sortedFilteredEntries.getByEntryId(e.user.getId());
			userEntry.dispose();
			sortedFilteredEntries.removeEntry(userEntry);
		}
		function dispatchSearch(e){
			if(!e.text||e.text.length<1)return;
			self.dispatchEvent({type:'search', text:e.text});
			standardSearch.showSpinner();
		}
	};
	return _UsersSearch;
})();
