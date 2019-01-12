var UserEntry =(function(){
	var _UserEntry = function(user){
		var self = this;
		var ui = new UI();
		this.getElement = ui.getElement;
		this.getId = function(){return user.getId();};
	};
	return _UserEntry;
	function UI(params){
		var element = E.DIV();
		element.classList.add('user-entry');
		this.getElement=function(){return element;};
	}
})();