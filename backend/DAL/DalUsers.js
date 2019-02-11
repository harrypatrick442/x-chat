exports.dalUsers= new (function(){
	const STORED_PROCEDURE_REGISTER='xchat_register';
	const STORED_PROCEDURE_HASH_GET ='xchat_hash_get';
	const STORED_PROCEDURE_USERNAME_OR_EMAIL_TAKEN = 'xchat_username_or_email_taken';
	const STORED_PROCEDURE_USER_GET_FROM_USERNAME_OR_EMAIL='xchat_user_get_from_username_or_email';
	const STORED_PROCEDURE_USER_IMAGE_SET='xchat_user_image_set'
	const USERNAME_OR_EMAIL= 'usernameOrEmail';
	const USER_ID='userId';
	const USERNAME='username';
	const BIRTHDAY='birthday';
	const IS_GUEST='isGuest';
	const GENDER='gender';
	const HASH='hash';
	const EMAIL='email';
	const IMAGE='image';
	const ID ='id';
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
	this.usernameAndEmailAreAvailable = function(username, email, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_USERNAME_OR_EMAIL_TAKEN,
			parameters:[
				{name:USERNAME, value:username, type:sql.VarChar(45)},
				{name:EMAIL, value:email, type:sql.VarChar(200)}
			],
			callback:function(result){
				callback(result.recordset[0].available);
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
	this.getByUsernameOrEmail=function(usernameOrEmail, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_USER_GET_FROM_USERNAME_OR_EMAIL, 
		parameters:[
			{name:USERNAME_OR_EMAIL, value:usernameOrEmail, type:sql.VarChar(45)}
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
	this.setImage = function(id, image){
		console.log('b');
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_USER_IMAGE_SET, 
		parameters:[
			{name:ID, value:id, type:sql.Int},
			{name:IMAGE, value:image, type:sql.VarChar}
		]});
	};
	function formatBirthday(birthday){
		if(!birthday) return undefined;
		return new Date(birthday.year, birthday.month, birthday.day, 0, 0, 0);
	}
})();
