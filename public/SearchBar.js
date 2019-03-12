var SearchBar = (function(){
	var _SearchBar = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var ui = new UI({callbackSearch:dispatchSearch});
		this.getElement = ui.getElement;
		var currentText;
		function dispatchSearch(text){
			self.dispatchEvent({type:'search', text:text});
		}
	};
	return _SearchBar;
	function UI(params){
		var self = this;
		var callbackSearch = params.callbackSearch;
		var temporalCallback = new TemporalCallback({
			callback:dispatchSearch,
			maxTotalDelay:1200,
			delay:400
		});
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
		input.addEventListener('keydown', scheduleDispatchSearch);
		function scheduleDispatchSearch(){
			temporalCallback.trigger();
		}
		function dispatchSearch(){
			callbackSearch(input.value);
		}
	}
})();