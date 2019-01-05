var EmoticonEntry = new (function(){
	var _EmoticonEntry = function(params){
		var self = this;
		EventEnabledBuilder(this);
		var element = E.DIV();
		element.classList.add('emoticon-entry');
		var emoticonInfo = params.emoticonInfo;
		if(emoticonInfo.isCharacter())
		{
			element.innerHTML = emoticonInfo.getCharacter();
		}
		/*else{
			new ImageComponent();
		}*/
		element.addEventListener('click', dispatchSelected);
		this.getElement = function(){return element;};
		function dispatchSelected(){
			self.dispatchEvent({type:'selected', emoticonInfo:emoticonInfo});
		}
	};
	return _EmoticonEntry;
	/*function ImageComponent(){
		var img = E.IMG();
		img.src=url;
		img.addEventListener('error', error);
		element.addEventListener('click', dispatchSelected);
		this.getElement = function(){return element;};
		function error(){
			element.style.display='none';
		}
		throw new Error('ImageEmoticon is not supported yet');
	}*/
})();