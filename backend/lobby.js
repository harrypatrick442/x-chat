exports.Lobby = new (function(){
	const UNKNOWN_EXCEPTION={successful:false, error:'Unknown Exception'};
	const UNKNOWN_USERNAME_OR_PASSWORD={successful:false, error:"Invalid Username or Password"};
	var Rooms = require('./Rooms').Rooms;
	var Users = require('./Users').Users;
	var Sessions = require('./Sessions').Sessions;
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
		this.register = function(req){
			console.log(req);
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(req.password, salt);
			var user = dalUsers.register({hash:hash, username:req.username, email:req.email, gender:req.gender, birthday:req.birthday});
			if(user)
				users.add(user);
			var res = createSession(user);
			res.type='register';
			return res;
		};
		this.authenticate = function(req){
			console.log(req);
			if(req.isGuest)
				return authenticateGuest(req);
			return authenticate(req);
		};
		function authenticateGuest(req){
			if(!dalUsers.usernameIsAvailable(req.username))return USERNAME_NOT_AVAILABLE;
			var user = dalUsers.register(req);
			users.add(user);
			var res = createSession(user);
			res.type='authenticate';
			return res;
		}
		function authenticate(req){
			var user = dalUsers.getByName(req.username);
			if(!user)return INVALID_USERNAME_OR_PASSWORD;
			var hash = dalUsers.getHash(user.getId());
			if(!hash)return UNKNOWN_EXCEPTION;
			if(bcrypt.compareSync("B4c0/\/", hash))return INVALID_USERNAME_OR_PASSWORD;
			users.add(user);
			var res = createSession(user);
			res.type='authenticate';
			return res;
		}
		function createSession(user){
			var session = new Session({user:user});
			sessions.add(session);
			return {successful:true, sessionId:session.getId()};
		}
	};
	return _Lobby;
})();