var Room = new (function(){
	var _Room = function(params){
		var self = this;
		var ui = new UI();
		var users = new Users();
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.dispose = function(){
			
		};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
	};
	return _Room;
	function UI(){
		var element = E.DIV();
		element.classList.add('room');
		this.getElement = function(){
			return element;
		};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
	}
})();