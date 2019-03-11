var SearchBar = (function(){
	var _SearchBar = function(params){
		var ui = new UI();
		this.getElement = ui.getElement;
	};
	return _SearchBar;
	function UI(params){
		var element = E.DIV();
		var inputWrapper = E.DIV();
		var buttonWrapper = E.DIV();
		var input =E.TEXT();
		var button = E.BUTTON();
		element.classList.add('search-bar');
		inputWrapper.classList.add('search-bar-text-wrapper');
		buttonWrapper.classList.add('search-bar-button-wrapper');
		input.classList.add('search-bar-text');
		button.classList.add('search-bar-button');
		element.appendChild(inputWrapper);
		element.appendChild(buttonWrapper);
		inputWrapper.appendChild(input);
		buttonWrapper.appendChild(button);
		this.getElement = function(){
			return element;
		};
	}
})();