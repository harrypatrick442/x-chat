var StandardSearch = (function(){
	var _StandardSearch = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var callbackSearch = params.callbackSearch;
		var classNames = params.classNames;
		var getEntryId = params.getEntryId;
		var title = params.title;
		var standardMenu = new StandardMenu({title:title, classNames:classNames});
		var searchBar = new SearchBar({});
		var ui = new UI({standardMenu:standardMenu, searchBar:searchBar, callbackSearch:callbackSearch});
		var sortedFilteredEntries = new SortedFilteredEntries({element:ui.getEntries(), getEntryId:getEntryId});
		this.show = standardMenu.show;
		this.getEntries = ui.getEntries;
	};
	return _StandardSearch;
	function UI(params){
		var self = this;
		var entries = E.DIV();
		var callbackSearch = params.callbackSearch;
		entries.classList.add('standard-search-entries');
		var standardMenu = params.standardMenu;
		var searchBar = params.searchBar;
		standardMenu.getEntries().appendChild(searchBar.getElement());
		standardMenu.getEntries().appendChild(entries);
		this.getEntries = function(){
			return entries;
		};
		searchBar.addEventListener('search', callbackSearch);
	}
})();
