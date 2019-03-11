var Heading = (function(){
	var _Heading = function(params){
		var self = this;
		var ui = new UI(params);
		this.getElement = ui.getElement;
		this.getEntries = ui.getEntries;
	};
	return _Heading;
	function UI(params){
		var element = E.DIV();
		var entries = E.DIV();
		var title = E.DIV();
		
		element.classList.add('heading');
		title.classList.add('heading-title');
		entries.classList.add('heading-entries');
		title.title = title.innerHTML=params.title;
		element.appendChild(title);
		element.appendChild(entries);
		this.getElement = function(){
			return element;
		};
		this.getEntries = function(){
			return entries;
		};
	}
})();