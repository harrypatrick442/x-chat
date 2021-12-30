let instance = null;
const dalNotifications = require('../DAL/DalNotifications');
const dalRooms = require('../DAL/DalRooms');
const dalMessages = require('../DAL/DalMessages');
const dalUsers = require('../DAL/DalUsers');
const dalPms = require('../DAL/DalPms');
const ShutdownManager = function(params){
	const self = this;
	const {server} = params;
	process.on('SIGINT', function(){
		const whenShutEverythingDown = (err)=>{
			if(err)console.error(err);
			process.exit();
		};
		self.shutdown().then(whenShutEverythingDown)
		.catch(whenShutEverythingDown);
	});
	this.shutdown = function(){
		return new Promise((resolve, reject)=>{
			try{
				const promises = [];
				console.log('Shutting down');
				server.close();
				promises.push(dalUsers.save());
				promises.push(dalRooms.save());
				promises.push(dalMessages.save());
				promises.push(dalPms.save());
				promises.push(dalNotifications.save());
				Promise.allSettled(promises)
				.then(()=>{
					console.log('Successfully saved everything');
					resolve();
				}).catch(reject);
			}
			catch(err){reject(err);};
		});
	};
	
};
ShutdownManager.initialize=function(params){
	if(instance)throw new Error('Already initialized');
	instance = new ShutdownManager(params);
};
ShutdownManager.getInstance=function(params){
	if(instance===null)throw new Error('Not initialized');
	return instance;
};
module.exports = ShutdownManager;