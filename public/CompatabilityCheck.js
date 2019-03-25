var compatabilityCheck = function(callbackLoad, callbackGetRecommendedBrowser){	
	
	if(browserSupported()||true){proceed();}
	else
	Dialog.show({message:"Your browser may not be able to run this chat properly. We recommend you upgrade to a new version of Chrome,  Edge, Firefox, Opera or Safar.",
			buttons:[{text:'Try', callback:proceed}, {text:'Get Recommended Browser', callback:getRecommendedBrowser}]
	});
	function proceed(){
		callbackLoad();
	}
	function getRecommendedBrowser(){
		callbackGetRecommendedBrowser();
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
				return true;
			break;
			case 'firefox':
				if(version>='29')return true;
			break;
			case 'opera':
				if(version>='12.1')return true;/*simple issue with text inputs small text*/
			break;
			case 'operamini':
			break;
			case 'safari':
				if(version>='5.1.4')return true;
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