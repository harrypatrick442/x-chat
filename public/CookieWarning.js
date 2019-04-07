(function(){
	var settings = new Settings('cookieWarning');
	if(settings.get('accepted'))return;
	Dialog.show({message:"This site uses cookies to remember your username and various settings. By entering you accept this.",
			buttons:[{text:'That\'s ok', callback:thatsOk}], classNames:['cookie-warning']
	});
	function thatsOk(){
		settings.set('accepted', true);
	}})();