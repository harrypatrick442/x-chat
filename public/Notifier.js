var Notifier = new (function(){
	var title = new Title({'default':/*FancyTextTranslator.smallBold(*/'x-chat'/*)*/});
	this.show = function(a){
		if(typeof(a)=='string'){
			showInTitle(a);
		}
		else if(typeof(a)=='object'){
			if(a.inTitle){
				showInTitle(a);
			}
			if(a.asNotification){
				showAsNotification(a);
			}
		}
	};
	function showInTitle(str){
		title.add(str/*FancyTextTranslator.smallBold(str)*/);
	}
	function showAsNotification(str){
		
	}
})();