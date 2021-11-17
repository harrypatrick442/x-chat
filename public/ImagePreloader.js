var ImagePreloader = new (function(){
	var self = this;
	var preloaded={};
	var mapUrlToPreloaderPreloading=new Map();
	this.preloadRange = function(urls, callback){
		var rangePreloader;
		each(urls, function(url){
			if(preloaded[url])return;
			var preloader = mapUrlToPreloaderPreloading.get(url);
			if(!rangePreloader)rangePreloader = new RangePreloader({callback:callback});
			rangePreloader.addPreloader(preloader?preloader:createPreloader(url));
		});
		if(!rangePreloader)
			callback&&callback();
			
	};
	function preloaderDone(e){
		var preloader = e.preloader;
		var url = preloader.getUrl();
		mapUrlToPreloaderPreloading.delete(url);
		preloaded[url]=true;
	}
	function createPreloader(url){
		var preloader = new Preloader({url:url});
		mapUrlToPreloaderPreloading.set(url, preloader);
		return preloader;
	}
	function RangePreloader(params){
		var callback = params.callback;
		var preloaders =[];
		this.addPreloader = function(preloader){
			preloader.addEventListener('done', done);
			preloaders.push(preloader);
		};
		function done(e){
			var preloader = e.preloader;
			remove(preloader);
			if(preloaders.length<1)
				callback&&callback();
		}
		function remove(preloader){
			var index = preloaders.indexOf(preloader);
			if(index<0)return;
			preloaders.splice(index, 1);
		}
	}
	function Preloader(params){
		EventEnabledBuilder(this);
		var self = this;
		var url = params.url;
		var img = E.IMG();
		var successful = false;
		console.log('preloading "'+url+'"');
		img.onload = function(e){
			successful = true;
			dispatchDone();
		};
		img.onerror=function(error){
			console.log(error);
			dispatchDone();
		};
		img.src=url;
		this.getSuccessful = function(){
			return successful;
		};
		function dispatchDone(){
			self.dispatchEvent({type:'done', preloader:self});
		}
	}
})();