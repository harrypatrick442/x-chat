var UsersMenu =(function(){
	var _UsersMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var id = params.id;
		var showUsersSearch = params.showUsersSearch;
		var buttonClose;
		if(window.isMobile)
		{
			buttonClose = new Button({className:'button-close'});
			buttonClose.addEventListener('click', dispatchHidePopup);
		}
		var buttonSearch = new Button({className:'button-search'});
		var ui = new UI({name:params.name, buttonClose:buttonClose, buttonSearch:buttonSearch});
		var getUserMe = params.getUserMe;
		var users = params.users;
		var ignoreManager = params.ignoreManager;
		var clickMenu = params.clickMenu;
		var sortedFilteredEntries = new SortedFilteredEntries({compare:compare, getEntryId:getEntryId, element:ui.getEntries(), buttonClose:buttonClose});
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
		this.hide = function(){
			self.dispatchEvent({type:'hide', entry:self});
		};
		this.resize = ui.resize;
		this.dispose = ui.dispose;
		buttonSearch.addEventListener('click', showUsersSearch);
		loadIgnores();
		function dispatchHidePopup(){
			self.dispatchEvent({type:'hidepopup'});
		}

		function userAdd(e){
			if(sortedFilteredEntries.getByEntryId(e.user.getId()))return;
				var userEntry = new UserEntry({user:e.user, clickMenu:clickMenu, ignoreManager:ignoreManager, getUserMe:getUserMe});
				sortedFilteredEntries.addEntry(userEntry);
			userEntry.addEventListener('showpm', function(e){
			console.log('a');self.dispatchEvent(e);});
		}
		function userRemove(e){
			var userEntry = sortedFilteredEntries.getByEntryId(e.user.getId());
			userEntry.dispose();
			sortedFilteredEntries.removeEntry(userEntry);
		}
		function callbackIgnoreAdd(e){
			ignoreAdd(e.ignored);
		}
		function ignoreRemove(e){
			sortedFilteredEntriesIgnored.removeEntryById(e.ignored.getId());
		}
		function compare(userEntryA, userEntryB){
			return userEntryA.getUsername().toLowerCase()>userEntryB.getUsername().toLowerCase();
		}
		function getEntryId(userEntry){
			return userEntry.getId();
		}
		function loadIgnores(){
			try{
			each(ignoreManager.getIgnores(), function(ignored){
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
		var buttonClose = params.buttonClose;
		var buttonSearch = params.buttonSearch;
		var visible=false;
		var element = E.DIV();
		var entries = E.DIV();
		var entriesWrapper = E.DIV();
		var headingWrapper = E.DIV();
		var entriesIgnored = E.DIV();
		var entriesIgnoredWrapper = E.DIV();
		var headingIgnoredWrapper = E.DIV();
		var splitPane = new SplitPane({nPanelsWidth:1, nPanelsHeight:2, rowProfiles:[{height:'70%',minHeight:'60px'}, {minMeight:'60px'}]});
		var top = splitPane.getPanelXY(0, 0).getElement();
		var bottom = splitPane.getPanelXY(0, 1).getElement();
		var heading = new Heading({title:'&nbsp;'+params.name});
		var headingIgnored = new Heading({title:'&nbsp;Ignored '});
		element.classList.add('users-menu');
		entries.classList.add('users-menu-entries');
		entriesIgnored.classList.add('users-menu-entries');
		
		
		headingWrapper.classList.add('heading-wrapper');
		entriesWrapper.classList.add('user-menu-entries-wrapper');
		headingIgnoredWrapper.classList.add('heading-wrapper');
		entriesIgnoredWrapper.classList.add('user-menu-entries-wrapper');
		headingWrapper.appendChild(heading.getElement());
		entriesWrapper.appendChild(entries);
		headingIgnoredWrapper.appendChild(headingIgnored.getElement());
		entriesIgnoredWrapper.appendChild(entriesIgnored);
		
		element.appendChild(splitPane.getElement());
		top.appendChild(headingWrapper);
		top.appendChild(entriesWrapper);
		bottom.appendChild(headingIgnoredWrapper);
		bottom.appendChild(entriesIgnoredWrapper);
		var headingEntries = heading.getEntries();
		headingEntries.appendChild(buttonSearch.getElement());
		if(buttonClose){
			headingEntries.appendChild(buttonClose.getElement());
		}
		
		
		this.getEntries = function(){return entries;};
		this.getEntriesIgnored = function(){return entriesIgnored;};
		
		this.getElement=function(){return element;};
		this.resize = splitPane.resize;
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
			new Task(splitPane.resize).run();	
		};
		this.getVisible = function(){return visible;};
	}
})();