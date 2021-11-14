const fs = require('fs');
const User = require('./../User');
const FilePaths = require('./FilePaths');
const mapUserIdToUser = new Map();
const mapTokenToUserId = new Map();
const mapUserIdToToken = new Map();
const mapUsernameNormalizedToUser = new Map();
const mapEmailNormalizedToUser = new Map();
module.exports = new (function(){
	var currentId;
	this.getHash = function(userId, callback){
		const user =mapUserIdToUser.get(userId);
		callback(user?user.getHash():null);
	};
	this.getAuthenticationToken = function(userId, callback){
		callback(mapUserIdToToken(userId));
	};
	this.automaticAuthenticate= function(token, callback){
		const user = mapTokenToUserId.get(token);
		callback(user);
	};
	this.authenticationTokensDelete = function(userId){
		const token = mapUserIdToToken.get(token);
		if(token===undefined&&token===null)return;
		mapUserIdToToken.delete(userId);
		mapTokenToUserId.delete(token);
	};
	this.deleteGuest = function(userId){
		const user = mapUserIdToUser.get(userId);
		if(!user)return;
		if(!user.isGuest())return;
		deleteUser(user);
	};
	this.deleteGuests = function(keepWithToken){
		Array.from(mapUserIdToUser.values()).filter(user=>user.isGuest()).forEach(deleteUser);
	};
	this.usernameAndEmailAreAvailable = function(username, email,
		callback){
		const normalizedUsername = normalize(username);
		const normalizedEmail = normalize(email);
		callback(normalizedUsernameAndNormalizedEmailAreAvailable(normalizedUsername, normalizedEmail));
	};
	this.register = function(params, callback){
		console.log(params);
		const {username, email}= params;
		const normalizedUsername = normalize(username);
		const normalizedEmail = normalize(email);
		/*if(!normalizedUsernameAndNormalizedEmailAreAvailable(normalizedUsername, normalizedEmail))
		{
			callback(null);
			return;
		}*/
		const user = new User(params);
		user.setId(nextId());
		mapEmailNormalizedToUser.set(normalizedEmail, user);
		mapUsernameNormalizedToUser.set(normalizedUsername, user);
		mapUserIdToUser.set(user.getId(), user);
		callback(user);
	};
	this.getByUsernameOrEmail=function(usernameOrEmail, callback){
		const normalizedUsernameOrEmail = normalize(usernameOrEmail);
		let user = mapEmailNormalizedToUser.has(normalizedUsernameOrEmail)
		if(user){
			callback(user);
			return;
		}
		user = mapUsernameNormalizedToUser.get(normalizedUsernameOrEmail);
		callback(user);
	};
	this.setImage = function(userId, image){
		const user = mapUserIdToUser.get(userId);
		if(!user)return;
		user.setImage(image);
	};
	this.getImage = function(userId, callback){
		const user = mapUserIdToUser.get(userId);
		callback(user?user.getImage():null);
	};
	this.search = function(text, callback){
		callback([]);
	};
	this.save = save;
    currentId=load();
	function nextId(){
		return currentId++;
	}
	function save(){
		const jArrayUsers = Array.from(mapUserIdToUser.values()).map(user=>user.toJSON());
		const path = FilePaths.getUsers();
		console.log(`Saving users to ${path}`);
		fs.writeFileSync(path,
			JSON.stringify({users:jArrayUsers, currentId:currentId})
		);
	}
	function load(){
		try{
			const path = FilePaths.getUsers();
			if(!fs.existsSync(path))
				return 0;
			const jObject = JSON.parse(fs.readFileSync(path));
			const users= jObject.users.map(jObjectUser=>User.fromJSON(jObjectUser));
			currentId = jObject.currentId;
			users.forEach(user=>{
				 mapUserIdToUser.set(user.getId(), user);
				 const token = user.getToken();
				 mapUsernameNormalizedToUser.set(normalize(user.getUsername()), user);
				 mapEmailNormalizedToUser.set(normalize(user.getEmail()), user);
				 if(token===undefined&&token===null)return;
				 mapTokenToUserId.set(token, user.getId());
				 mapUserIdToToken.set(user.getId(), token);
			});
		}
		catch(err){
			console.log(err);
			throw new Error('something went wrong loading users');
		}
	}
	function deleteUser(user){
		mapEmailNormalizedToUser.delete(normalize(user.getEmail()));
		mapUsernameNormalizedToUser.delete(normalize(user.getUsername()));
		mapUserIdToToken.delete(user.getId());
		this.authenticationTokensDelete(user.getId());
	}
	function normalizedUsernameAndNormalizedEmailAreAvailable(normalizedUsername, normalizedEmail){
		return mapEmailNormalizedToUser.has(normalizedUsername)
			||mapUsernameNormalizedToUser.has(normalizedUsername)
			||mapEmailNormalizedToUser.has(normalizedEmail)
			||mapUsernameNormalizedToUser.has(normalizedEmail)
	}
	function formatBirthday(birthday){
		if(!birthday) return undefined;
		return new Date(birthday.year, birthday.month, birthday.day, 0, 0, 0);
	}
	function normalize(str){
		if(str===undefined)return null;
		if(str===null)return null;
		return str.toLowerCase();
	}
})();