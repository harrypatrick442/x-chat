function EmoticonInfo(params){
	var self = this;
	this.isCharacter = function(){
		return self.getCharacter()?true:false;
	};
	this.getCharacter = function(){return params.character;};
	this.getImageSource = function(){return params.imageSource;};
	this.getStringRepresentation = function(){
		console.log(self.getCharacter());
		if(self.isCharacter())
			return self.getCharacter();
		return params.strings[0];
	};
	
}