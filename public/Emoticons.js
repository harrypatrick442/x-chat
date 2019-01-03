var Emoticons = new (function(){
	var _Emoticons = function(){
		EventEnabledBuilder(this);
		var popup = new Popup();
		var ui = new UI({popup:popup});
		var callbackPicked;
		this.show = function(params){
			callbackPicked = params.picked;
			popup.show();
		};
		this.getElement = ui.getElement;
		function addEmoticonEntry(){
			var emoticonEntry = new EmoticonEntry();
			emoticonEntry.addEventListener('selected', selected);
			ui.addEntry(emoticonEntry);
		}
		function selected(e){
			var emoticonEntry = e.emoticonEntry;
			if(callbackPicked)
				callbackPicked(emoticonEntry);
		}
	};
	return _Emoticons;
	function UI(params){
		var popup = params.popup;
		var element = popup.getElement();	
		element.classList.add('emoticons');
		var entries = E.DIV();
		entries.classList.add('entries');
		element.appendChild(entries);
		this.addEntry = function(entry){
			entries.appendChild(entry.getElement());
		};
	}
})();