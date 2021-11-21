const fs = require('fs');
const FilePaths = require('./FilePaths');
module.exports=new (function(){
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
})();
