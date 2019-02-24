var MessageComponents = new (function(){
	var EMOTICON ='emoticon';
	var TEXT='text';
	this.Text=function(str){
		this.getString=function(){
			return str;
		};
		this.getElement=function(){
			return document.createTextNode(str);
		};
		this.TYPE=TEXT;
	};
	this.Text.TYPE = TEXT;
	this.Emoticon = function(emoticonInfo){
		this.getElement= function(){
			if(emoticonInfo.isCharacter())
			return document.createTextNode(emoticonInfo.getStringRepresentation());
			var img = E.IMG();
			img.classList.add('emoticon');
			img.src=emoticonInfo.getImageSource();
			return img;
		};
		this.TYPE=EMOTICON;
	};
	this.Emoticon.TYPE=EMOTICON;
})();