var FileSenderUI=(function(){
	var _FileSenderUI = function(params){
		var fileSender = params.fileSender;
		var element = E.DIV();
		element.classList.add('file-sender');
		this.getElement = function(){return element;};
		
	};
	return _FileSenderUI;
})();