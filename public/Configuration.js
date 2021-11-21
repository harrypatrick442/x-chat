const Configuration = new (function(){
	const self = this;
	this.isProduction=function(){
		return window.environment=='production';
	};
	this.getBackendDomain=function(){
		if(self.isProduction())
			return 'spaz.chat';
		return '127.0.0.1';
	};
	this.getBackendUrl=function(){
		return  ((window.location.protocol==='https:')?'https:':'http:')+'//'+self.getBackendDomain();
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