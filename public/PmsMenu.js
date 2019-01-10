var PmsMenu = new (function(){
	var _PmsMenu = function(){
		var self = this;
		var ui = new UI();
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
	};
	return _PmsMenu;
	function UI(){
		EventEnabledBuilder(this);
		var self = this;
		var element = E.DIV();
		element.classList.add('pms-menu');
		var entriesWrapper = E.DIV();
		entriesWrapper.classList.add('entries-wrapper');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entriesWrapper); 
		entriesWrapper.appendChild(entries); 
		this.getElement = function(){return element;};
		this.setVisible=function(value){
			entries.style.display=value?'block':'none';
		};
	}
})();