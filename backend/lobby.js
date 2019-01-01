exports.Lobby = new (function(){
	const UNKNOWN_EXCEPTION='Unknown Exception';
	const INVALID_USERNAME_OR_PASSWORD='Invalid Username or Password';
	const USERNAME_NOT_AVAILABLE='Username Not Available';
	const PASSWORD_MUST_BE_AT_LEAST_LONG = 'Password must be at least 7 characters long';
	const AUTHENTICATE= 'authenticate';
	const REGISTER='register';
	var Rooms = require('./Rooms').Rooms;
	var Users = require('./Users').Users;
	var Sessions = require('./Sessions').Sessions;
	var Session = require('./Session').Session;
	var dalUsers = require('./DAL/DalUsers').dalUsers;
	var bcrypt = require('bcryptjs');
	var _Lobby = function(){
		var self = this;
		var rooms = new Rooms();
		var users = new Users();
		var sessions = new Sessions();
		this.getRooms = function(){return rooms;};
		this.getSessions=function(){
			return sessions;
		};
		this.createRoom = function(){
			
		};
		this.register = function(req, callback){
			dalUsers.usernameIsAvailable(req.username, function(usernameIsAvailable){
				if(!usernameIsAvailable){callback({successful:false, error:USERNAME_NOT_AVAILABLE, type:REGISTER});return;}					
				if(req.password.length<7){ callback( {successful:false, error:PASSWORD_MUST_BE_AT_LEAST_LONG, type:REGISTER}); return;}
				var salt = bcrypt.genSaltSync(10);
				var hash = bcrypt.hashSync(req.password, salt);
				dalUsers.register({hash:hash, username:req.username, email:req.email, gender:req.gender, birthday:req.birthday, isGuest:false}, function(user){
					users.add(user);
					var res = createSession(user);
					res.type='register';
					callback(res);
				});
			});
		};
		this.authenticate = function(req, callback){
			(req.isGuest? authenticateGuest: authenticate)(req, callback);
		};
		function authenticateGuest(req, callback){
			dalUsers.usernameIsAvailable(req.username, function(usernameIsAvailable){
			if(!usernameIsAvailable){ callback( {successful:false, error:USERNAME_NOT_AVAILABLE, type:AUTHENTICATE}); return;}
				dalUsers.register(req, function(user){
					users.add(user);
					var res = createSession(user);
					res.type='authenticate';
					callback(res);
				});
			});
		}
		function authenticate(req, callback){
			dalUsers.getByName(req.username, function(user){
				if(!user){return invalidUsernameOrPassword(AUTHENTICATE); return;}
				dalUsers.getHash(user.getId(), function(hash){
					if(!hash){callback({successful:false, error:UNKNOWN_EXCEPTION, type:AUTHENTICATE}); return;}
					if(bcrypt.compareSync("B4c0/\/", hash)){callback( invalidUsernameOrPassword(AUTHENTICATE));return;}
					users.add(user);
					var res = createSession(user);
					res.type='authenticate';
					callback(res);
				});
		    });
		}
		function createSession(user){
			var session = new Session({user:user});
			sessions.add(session);
			return {successful:true, sessionId:session.getId()};
		}
		function invalidUsernameOrPassword(type){return {successful:false, error:INVALID_USERNAME_OR_PASSWORD, type:type};}
	};
	return _Lobby;
})();