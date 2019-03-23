var compatabilityCheck = function(callbackLoad){	
	
	if(browserSupported()||true){proceed();}
	else
	Dialog.show({message:"Your browser may not be able to run this chat properly. We recommend you upgrade to a new version of Chrome,  Edge, Firefox, Opera or Safar.",
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
				if(version>='10')return true;
			break;
			case 'edge':
			break;
			case 'firefox':
			break;
			case 'opera':
			break;
			case 'operamini':
			break;
			case 'safari':
			break;
			case 'ie':
			break;
			case 'nokiabrowser':
			break;
			case 'operamini':
			break;
			case 'sailfishbrowser':
			case 'ovi':
			case 'coast':
			default:
			return false;
		}
	}
};