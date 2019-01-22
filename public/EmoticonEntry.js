var EmoticonEntry = (function(){
	var _EmoticonEntry = function(params){
		var self = this;
		EventEnabledBuilder(this);
		console.log(params);
		var element = E.DIV();
		element.classList.add('emoticon-entry');
		var emoticonInfo = params.emoticonInfo;
		if(emoticonInfo.isCharacter())
		{
			element.innerHTML = emoticonInfo.getCharacter();
		}else{
			var imageComponent = new ImageComponent(emoticonInfo);
			element.appendChild(imageComponent.getElement());
		}
		element.addEventListener('click', dispatchSelected);
		this.getElement = function(){return element;};
		function dispatchSelected(){
			self.dispatchEvent({type:'selected', emoticonInfo:emoticonInfo});
		}
	};
	return _EmoticonEntry;
	function ImageComponent(emoticonInfo){
		var img = E.IMG();
		img.src= emoticonInfo.getImageSource();
		img.addEventListener('error', error);
		this.getElement = function(){return img;};
		function error(){
			img.style.display='none';
		}
	}
})();