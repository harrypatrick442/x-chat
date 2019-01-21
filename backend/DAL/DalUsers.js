exports.dalUsers= new (function(){
	const STORED_PROCEDURE_REGISTER='xchat_register';
	const STORED_PROCEDURE_HASH_GET ='xchat_hash_get';
	const STORED_PROCEDURE_USERNAME_COUNT = 'xchat_username_count';
	const STORED_PROCEDURE_USER_ID_GET_FROM_USERNAME_OR_EMAIL='xchat_user_id_get_from_username_or_email';
	const USER_ID='userId';
	const USERNAME='username';
	const BIRTHDAY='birthday';
	const IS_GUEST='isGuest';
	const GENDER='gender';
	const HASH='hash';
	const EMAIL='email';
    var dalXChat = require('./DalXChat').dalXChat;	
	var sql = require('mssql');
	var User = require('./../User').User;
	this.getHash = function(userId, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_HASH_GET, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int},
			],
			callback:function(result){
				var rows = result.recordsets[0];
				var hash;
				if(rows.length>0){
					hash = rows[0].hash;
				}
				callback(hash);
		}});
	};
	this.usernameIsAvailable = function(username, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_USERNAME_COUNT,
			parameters:[
				{name:USERNAME, value:username, type:sql.VarChar(200)}
			],
			callback:function(result){
				var rows = result.recordsets[0];
				console.log(rows[0].count);
				callback(rows[0].count<1);
		}});
	};
	this.register = function(params, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_REGISTER,parameters:
		[
			{name:EMAIL, value:params.email, type:sql.VarChar(200)},
			{name:USERNAME, value:params.username, type:sql.VarChar(45)},
			{name:HASH,value: params.hash, type:sql.VarChar(100)},
			{name:GENDER, value: params.gender, type:sql.Bit},
			{name:BIRTHDAY, value:formatBirthday(params.birthday), type:sql.DateTime},
			{name:IS_GUEST, value:params.isGuest, type:sql.Bit}
		],
		callback:function(result){
			var rows = result.recordsets[0];
			var user;	
			if(rows.length>0){
				user = User.fromSqlRow(rows[0]);
			}
			callback(user);
		}});
	};
	this.getByUsernameOrEmail=function(username, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_USER_ID_GET_FROM_USERNAME_OR_EMAIL, 
		parameters:[
			{name:USERNAME, value:username, type:sql.VarChar(45)}
		], 
		callback:function(result){
			var rows = result.recordsets[0];
			var user;	
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
