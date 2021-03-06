exports.dalUsers= new (function(){
	const STORED_PROCEDURE_REGISTER='xchat_register';
	const STORED_PROCEDURE_HASH_GET ='xchat_hash_get';
	const STORED_PROCEDURE_USERNAME_OR_EMAIL_TAKEN = 'xchat_username_or_email_taken';
	const STORED_PROCEDURE_USER_GET_FROM_USERNAME_OR_EMAIL='xchat_user_get_from_username_or_email';
	const STORED_PROCEDURE_USER_IMAGE_SET='xchat_user_image_set'
	const STORED_PROCEDURE_AUTHENTICATION_TOKEN_GET = 'xchat_authentication_token_get';
	const STORED_PROCEDURE_AUTOMATIC_AUTHENTICATE='xchat_automatic_authenticate';
	const STORED_PROCEDURE_AUTHENTICATION_TOKENS_DELETE='xchat_authentication_tokens_delete';
	const STORED_PROCEDURE_GUEST_DELETE='xchat_guest_delete';
	const STORED_PROCEDURE_GUESTS_DELETE='xchat_guests_delete';
	const STORED_PROCEDURE_SEARCH_USERS = 'xchat_users_search';
	const STORED_PROCEDURE_USER_IMAGE_GET = 'xchat_user_image_get';
	const USERNAME_OR_EMAIL= 'usernameOrEmail';
	const USER_ID='userId';
	const USERNAME='username';
	const BIRTHDAY='birthday';
	const IS_GUEST='isGuest';
	const GENDER='gender';
	const HASH='hash';
	const EMAIL='email';
	const IMAGE='image';
	const TOKEN='token';
	const ID ='id';
	const TEXT='text';
	const KEEP_WITH_TOKEN='keepWithToken';
    const dalXChat = require('./DalXChat').dalXChat;	
	const sql = require('mssql');
	const User = require('./../User').User;
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
	this.getAuthenticationToken = function(userId, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_AUTHENTICATION_TOKEN_GET, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int},
			],
			callback:function(result){
				var rows = result.recordsets[0];
				var token;
				if(rows.length>0){
					token= rows[0].token;
				}
				callback(token);
		}});
	};
	this.automaticAuthenticate= function(token, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_AUTOMATIC_AUTHENTICATE,
			parameters:[
				{name:TOKEN, value:token, type:sql.VarChar},
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
	this.authenticationTokensDelete = function(userId){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_AUTHENTICATION_TOKENS_DELETE, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int}
			]});
			
	};
	this.deleteGuest = function(userId){
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_GUEST_DELETE, 
			parameters:[
				{name:USER_ID, value:parseInt(userId), type:sql.Int}
			]});
			
	};
	this.deleteGuests = function(keepWithToken){
		if(!keepWithToken)keepWithToken=false;
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_GUESTS_DELETE, 
			parameters:[
				{name:KEEP_WITH_TOKEN, value:keepWithToken, type:sql.Bit}
			]});
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
		dalXChat.nonQuery({storedProcedure:STORED_PROCEDURE_USER_IMAGE_SET, 
		parameters:[
			{name:ID, value:id, type:sql.Int},
			{name:IMAGE, value:image, type:sql.VarChar}
		]});
	};
	this.getImage = function(id, callback){
		console.log(id);
		dalXChat.query({storedProcedure:STORED_PROCEDURE_USER_IMAGE_GET,
		parameters:[
			{name:ID, value:parseInt(id), type:sql.Int}
		],
		callback:function(result){
			console.log(result);
			if(result.recordset)
			{
				var recordSet = result.recordset[0];
				console.log(recordSet);
				if(recordSet&&recordSet.image){
					callback(result.recordset[0].image);
					return;
				}
			}
			callback();
		}});
	};
	this.search = function(text, callback){
		dalXChat.query({storedProcedure:STORED_PROCEDURE_SEARCH_USERS,
		parameters:[
			{name:TEXT, value:text, type:sql.Text}],
			callback:function(result){
				var rows = result.recordsets[0];
				callback(rows);
		}});
	};
	function formatBirthday(birthday){
		if(!birthday) return undefined;
		return new Date(birthday.year, birthday.month, birthday.day, 0, 0, 0);
	}
})();
