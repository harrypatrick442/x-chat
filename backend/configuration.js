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
