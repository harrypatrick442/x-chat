const Configuration = new (function(){
	const self = this;
	this.isProduction=function(){
		return window.environment=='production';
	};
	this.getBackendDomain=function(){
		if(true||self.isProduction())
			return 'backend.spaz.chat';
		return 'localhost';
	};
	this.getBackendUrl=function(){
		return 'https://'+self.getBackendDomain();
	};
	this.getWebsocketUrl=function(surfix){
		var loc = window.location, new_uri;
		const protocol =(true||loc.protocol === "https:")
			? "wss:"
			: "ws:";
		return `${protocol}//${self.getBackendDomain()}/${surfix}`;
	};
	this.getLongpollUrl=function(){
		console.log(`${self.getBackendUrl()}/poll`);
		return `${self.getBackendUrl()}/poll`;
	};
})();