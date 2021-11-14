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
		self.shutdown();
		process.exit();
	});
	this.shutdown = function(){
        try{
			console.log('Shutting down');
			server.close();
			dalUsers.save();
			dalRooms.save();
			dalMessages.save();
			dalPms.save();
			dalNotifications.save();
		}
		catch(err){console.error(err);}
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