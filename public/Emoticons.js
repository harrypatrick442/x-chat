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
		this.setVisible = ui.setVisible;
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
		function load(jObjectEmoticons){
			
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
		this.getElement = function(){return element;};
		this.setVisible = function(value){
			element.style.display=value?'block':'none';
		};
	}
})();