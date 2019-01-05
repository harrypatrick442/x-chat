var MessageComponents = new (function(){
	const EMOTICON ='emoticon';
	const TEXT='text';
	this.Text=function(str){
		this.getString=function(){
			return str;
		};
		this.getMarkup=function(){
			return str;
		};
		this.TYPE=TEXT;
	};
	this.Text.TYPE = TEXT;
	this.Emoticon = function(emoticonInfo){
		this.getMarkup= function(){
			return emoticonInfo.getStringRepresentation();
		};
		this.TYPE=EMOTICON;
	};
	this.Emoticon.TYPE=EMOTICON;
})();