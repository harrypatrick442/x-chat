var EmoticonEntry = new (function(){
	var _EmoticonEntry = function(params){
		EventEnabledBuilder(this);
		var element = E.DIV();
		element.classList.add('emoticon-entry');
		var img = E.IMG();
		img.src=url;
		img.addEventListener('error', error);
		element.addEventListener('click', dispatchSelected);
		this.getElement = function(){return element;};
		function error(){
			element.style.display='none';
		}
		function dispatchSelected(){
			self.dispatchEvent({type:'selected', emoticonEntry:self});
		}
	};
	return _EmoticonEntry;
})();