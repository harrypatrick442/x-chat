exports.dalUsers= new (function(){
	const STORED_PROCEDURE_REGISTER='xchat_register';
	const STORED_PROCEDURE_GET_HASH ='xchat_get_hash';
	const STORED_PROCEDURE_USERNAME_IS_AVAILABLE = 'xchat_username_is_available';
    var dalXChat = require('./DalXChat').dalXChat;	
	var User = require('./../User').User;
	this.getHash = function(userId){
		var hash;
		dalXChat.query({storedProcedure:STORED_PROCEDURE_GET_HASH, parameters:[userId],
		callbackRead:function(rows){
			if(rows.length>0){
				hash = rows[0].hash;
			}
		}});
		return hash;
	};
	this.usernameIsAvailable = function(username){
		return dalXChat.scalar({storedProcedure:STORED_PROCEDURE_USERNAME_IS_AVAILABLE,parameters:[username]});
	};
	this.register = function(params){
		var user;	
		dalXChat.query({storedProcedure:STORED_PROCEDURE_AUTHENTICATE,parameters:
		[
			params.email, params.username, params.hash, params.gender, formatBirthday(params.birthday), params.isGuest
		],
		callbackRead:function(rows){
			if(rows.length>0){
				user = User.fromSqlRow(rows[0]);
			}
		}});
		return user;
	};
	function formatBirthday(birthday){
		if(!birthday) return undefined;
		return birthday.year+'-'+birthday.month+'-'+birthday.day;
	}
})();
