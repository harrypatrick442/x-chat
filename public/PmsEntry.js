var PmsEntry= new (function(){
	var _PmsEntry = function(){
		var self = this;
		var ui = new UI();
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
	};
	return _PmsEntry;
	function UI(){
	}
})();