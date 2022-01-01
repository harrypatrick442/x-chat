let instance = null;
const ShutdownManager = function(){
	const self = this;
	const registereds =[];
	process.on('SIGINT', function(){
		const whenShutEverythingDown = (err)=>{
			if(err)console.error(err);
			process.exit();
		};
		self.shutdown().then(whenShutEverythingDown)
		.catch(whenShutEverythingDown);
	});
	this.register = function(func){
		registereds.push(func);
	};
	this.shutdown = function(){
		return new Promise((resolve, reject)=>{
			try{
				const promises = registereds.
					map(registered=>registered());
				Promise.allSettled(promises)
				.then((results)=>{
					results.forEach(result=>{
						if(result.status!=='rejected')return;
						console.error(result.reason);
					});
					resolve();
				}).catch(console.error);
			}
			catch(err){reject(err);};
		});
	};
	
};
ShutdownManager.getInstance=function(params){
	if(instance===null)
		instance = new ShutdownManager(params);
	return instance;
};
module.exports = ShutdownManager;