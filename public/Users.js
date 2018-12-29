var Users = new (function(){
	var _Users = function(){
		var self = this;
		var list =[];
		var ui = new UI();
		this.getElement = ui.getElement;
		this.add=function(user){
			if(!contains(user))
				list.push(user);
		};
		this.remove=function(user){
			var index = list.indexOf(user);
			if(index<0) return;
			list.splice(index, 1);
		};
		function contains(user){
			return list.indexOf(user)>0;
		}
	};
	return _Users;
	function UI(){
		var element = E.DIV();
		element.classList.add('users');
		this.getElement=function(){return element;};
	}
})();