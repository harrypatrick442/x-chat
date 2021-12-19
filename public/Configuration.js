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
	this.getMultimediaBackendDomain=function(){
		if(self.isProduction())
			return 'spaz.chat/multimedia';
		return '127.0.0.1';
	};
	this.getBackendUrl=function(){
		return  ((window.location.protocol==='https:')?'https:':'http:')+'//'+self.getBackendDomain();
	};
	this.getMultimediaBackendUrl=function(){
		return  ((window.location.protocol==='https:')?'https:':'http:')+'//'+self.getMultimediaBackendDomain();
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
	this.getRequestUploadImageUrl=function(){
		return self.getMultimediaBackendUrl()+'/request_upload_image';
	};
	this.getUploadImageUrl=function(){
		return self.getMultimediaBackendUrl()+'/upload_image';
	};
})();