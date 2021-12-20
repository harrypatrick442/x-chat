const fs = require('fs');
const Arguments = require('./Arguments');
const FilePaths = require('./FilePaths');
module.exports=new (function(){
	const self = this;
	const jObject = JSON.parse(fs.readFileSync(FilePaths.getConfiguration()));
	this.getDevelopment= function(){
		return jObject.development;
	};
	this.getUseHttps= function(){
		return jObject.useHttps;
	};
	this.isProduction=function(){
		return !Arguments.has('--development');;
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
		return  (self.isProduction()?'https:':'http:')
			+'//'+self.getBackendDomain();
	};
	this.getMultimediaBackendUrl=function(){
		return  (self.isProduction()?'https:':'http:')
			+'//'+self.getMultimediaBackendDomain();
	};
	this.getUsePrecompiledFrontend = function(){
		return jObject.usePrecompiledFrontend;
	};
	this.isMultimediaBackend=function(){
		return Arguments.has('--multimedia');
	};
	this.isMainBackend=function(){
		return !self.isMultimediaBackend||Arguments.has('--main');
	};
})();
