var Emoticons = (function(){
	var _Emoticons = function(params){
		var emoticonsLibrary = params.emoticonsLibrary;
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
		load();
		function selected(e){
			var emoticonInfo = e.emoticonInfo;
			if(callbackPicked)
				callbackPicked(emoticonInfo);
			popup.hide();
		}
		function load(){
			var folders = emoticonsLibrary.folders;
			var defaultFolder = emoticonsLibrary.defaultFolder;
			each(emoticonsLibrary.emoticons, function(emoticon){
				resolveImageSource(emoticon, folders, defaultFolder);
				var emoticonEntry = new EmoticonEntry({emoticonInfo:new EmoticonInfo(emoticon)});
				emoticonEntry.addEventListener('selected', selected);
				ui.addEntry(emoticonEntry);
			});
		}
		function resolveImageSource(emoticon, folders, defaultFolder){
			if(emoticon.character)return;
			var path = emoticon.folder&&folders?folders[emoticon.folder]:defaultFolder;
			path+=emoticon.file;
			emoticon.imageSource = path;
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