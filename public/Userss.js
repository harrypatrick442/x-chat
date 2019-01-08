var UsersMenu = new (function(){
	var _UsersMenu = function(){
		var self = this;
		var list =[];
		var ui = new UI();
		this.getElement = ui.getElement;
		this.add=function(users){
			if(!contains(users))
				list.push(users);
		};
		this.remove=function(users){
			var index = list.indexOf(users);
			if(index<0) return;
			list.splice(index, 1);
		};
		function contains(user){
			return list.indexOf(user)>0;
		}
		this.setUsers = function(users){
			each(list, function(entry){
				entry.setVisible(entry==users);
			});
		};
	};
	return _UsersMenu;
	function UI(params){
		var element = E.DIV();
		element.classList.add('userss');
		this.appendEntry = function(entry){
			element.appendChild(entry);
		};
		this.insertEntryBefore = function(entry, entryBefore){
			entryBefore.insertBefore(entry);
		};
		this.removeEntry = function(entry){
			element.removeChild(entry);
		};
		this.getElement=function(){return element;};
	}
})();