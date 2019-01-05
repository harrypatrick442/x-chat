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
	};
	this.Text.TYPE = TEXT;
	this.Emoticon = function(){
		this.getMarkup= function(){
			
		};
	};
	this.Emoticon.TYPE=EMOTICON;
	
	return _MessageComponents;
})();