var compatabilityCheck = function(callbackLoad){	
	
	if(browserSupported()){proceed();}
	else
	Dialog.show({message:"Your browser may not be able to run this chat properly. We recommend you upgrade to a new version of Chrome, Opera, Safari or Edge.",
			buttons:[{text:'Try', callback:proceed}]
	});
	function proceed(){
		callbackLoad();
	}
	function browserSupported(){
		var browser = Sniff.browser;
		var name = browser.name;
		var version = browser.version;
		console.log(name);
		console.log(version);
		switch(browser){
			case 'chrome':
			
			break;
			case 'opera':
			break;
			case 'safari':
			break;
			case 'edge':
			break;
			default:
			return false;
		}
	}
};