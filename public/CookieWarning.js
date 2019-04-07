(function(){
	Dialog.show({message:"This site uses cookies to remember your username and various settings. By entering you accept this.",
			buttons:[{text:'That\'s ok', callback:thatsOk}], classNames:['cookie-warning']
	});
	function thatsOk(){
		
	}})();