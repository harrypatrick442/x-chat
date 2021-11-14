const fs = require('fs');
module.exports=new (function(){
	this.makeDirectoryIfDoesntExist = function(dir){
		if (!fs.existsSync(dir)){
			fs.mkdirSync(dir, { recursive: true });
		}
	};
})();