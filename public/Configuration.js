const Configuration = new (function(){
	const self = this;
	this.isProduction=function(){
		return window.environment=='production';
	};
	this.getBackendUrl=function(){
		if(self.isProduction())
			return 'http://backend.spaz.chat';
		return 'http://localhost';
	};
})();