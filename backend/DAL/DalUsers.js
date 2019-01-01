exports.dalUsers= new (function(){
	const STORED_PROCEDURE_REGISTER='xchat_register';
	const STORED_PROCEDURE_HASH_GET ='xchat_hash_get';
	const STORED_PROCEDURE_USERNAME_COUNT = 'xchat_username_count';
    var dalXChat = require('./DalXChat').dalXChat;	
	var User = require('./../User').User;
	this.getHash = function(userId, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_HASH_GET, parameters:[userId],
		callbackRead:function(rows){
			var hash;
			if(rows.length>0){
				hash = rows[0].hash;
			}
			callback(hash);
		}});
	};
	this.usernameIsAvailable = function(username, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_USERNAME_COUNT,parameters:[username], callbackRead:function(rows){
			console.log(rows[0].count);
			callback(rows[0].count<1);
		}});
	};
	this.register = function(params, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_REGISTER,parameters:
		[
			params.email, params.username, params.hash, params.gender, formatBirthday(params.birthday), params.isGuest
		],
		callbackRead:function(result){
			var user;	
			var rows =result[0];
			if(rows.length>0){
				user = User.fromSqlRow(rows[0]);
			}
			callback(user);
		}});
	};
	function formatBirthday(birthday){
		if(!birthday) return undefined;
		return birthday.year+'-'+birthday.month+'-'+birthday.day;
	}
})();
