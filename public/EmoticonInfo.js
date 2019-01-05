function EmoticonInfo(params){
	var self = this;
	this.isCharacter = function(){
		return self.getCharacter()?true:false;
	};
	this.getCharacter = function(){return params.character;};
	this.getUrl = function(){return ;};
	
}