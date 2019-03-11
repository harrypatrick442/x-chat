var UsersSearch = (function(){
	var _UsersSearch = function(){
		var self = this;
		var standardMenu = new StandardMenu({title:'Users Search'});
		var searchBar = new SearchBar({});
		standardMenu.getEntries().appendChild(searchBar.getElement());
		this.show = standardMenu.show;
	};
	return _UsersSearch;
})();
