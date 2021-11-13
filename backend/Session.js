var uuid = require('uuid');
var EventEnabledBuilder = require('./EventEnabledBuilder');
module.exports = function(params){
	EventEnabledBuilder(this);
	var self = this;
	var id = uuid.v4();
	var user = params.user;
	this.getUser = function(){return user;};
	this.getId = function(){ return id;};
	user.addEventListener('dispose', dispatchDispose);
	function dispatchDispose(){
		self.dispatchEvent({type:'dispose', session:self});
	}
};