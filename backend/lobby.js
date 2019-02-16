exports.lobby = (function(){
	const UNKNOWN_EXCEPTION='Unknown Exception';
	const INVALID_USERNAME_OR_PASSWORD='Invalid Username or Password';
	const USERNAME_NOT_AVAILABLE='Username Not Available';
	const EMAIL_NOT_AVAILABLE='Email Not Available';
	const USERNAME_AND_EMAIL_NOT_AVAILABLE='Username and Email are Available';
	const PASSWORD_MUST_BE_AT_LEAST_LONG = 'Password must be at least 7 characters long';
	const AUTHENTICATE= 'authenticate';
	const AUTOMATIC_AUTHENTICATE='automatic_authenticate';
	const REGISTER='register';
	const SEND_USER_IDS_MAX_N_DELAYS=5;
	console.log('created lobby');
	const SEND_USER_IDS_DELAY=1000;
	var Rooms = require('./Rooms').Rooms;
	var Pms = require('./Pms').Pms;
	var Users = require('./Users').Users;
	var Notifications = require('./Notifications').Notifications;
	var TemporalCallback=require('./TemporalCallback').TemporalCallback;
	var Sessions = require('./Sessions').Sessions;
	var Session = require('./Session').Session;
	var dalUsers = require('./DAL/DalUsers').dalUsers;
	var bcrypt = require('bcryptjs');
	var _Lobby = function(){
		var lobbyId = new Date().getTime();
		var self = this;
		var nDeviceCount=0;
		var rooms = new Rooms();
		var users = new Users();
		var notifications = new Notifications();
		var pms = new Pms({users:users, rooms:rooms});
		var sessions = new Sessions();
		var temporalCallbackSendUserIds = new TemporalCallback({maxNDelays:SEND_USER_IDS_MAX_N_DELAYS/*if keeps being reset within delay, will wait up to this total amount of time*/
																			, delay:SEND_USER_IDS_DELAY, callback:callbackSendUserIds});
		this.getRooms = function(){return rooms;};
		this.getPms = function(){return pms;};
		this.getNotifications= function(){return notifications;};
		this.getSessions=function(){
			return sessions;
		};
		this.createRoom = function(){
			
		};
		this.register = function(req, mysocket, callback){
			dalUsers.usernameAndEmailAreAvailable(req.username, req.email, function(available){
				if(available!=''){ callback(getUnavailableResponse(available)); return; }					
				if(req.password.length<7){ callback( {successful:false, error:PASSWORD_MUST_BE_AT_LEAST_LONG, type:REGISTER}); return;}
				var salt = bcrypt.genSaltSync(10);
				var hash = bcrypt.hashSync(req.password, salt);
				dalUsers.register({hash:hash, username:req.username, email:req.email, gender:req.gender, birthday:req.birthday, isGuest:false}, function(user){
					user.addMysocket(mysocket);
					var res = createSession(user);
					res.type='register';
					res.users = users.toJSON();
					res.nDevice = getNextNDevice();
					users.add(user);
					sendJoin(user);
					user.addEventListener('dispose', userDispose);
					if(!req.staySignedIn){ callback(res);return;}
					dalUsers.getAuthenticationToken(user.getId(), function(token){
						res.token = token;
						callback(res);
					});
				});
			});
		};
		this.authenticate = function(req, mysocket, callback){
			(req.isGuest? authenticateGuest: authenticate)(req, mysocket, callback);
		};
		this.automaticAuthenticate= function(req, mysocket, callback){
			var token = req.token;
			if(!token){ callback({type:AUTOMATIC_AUTHENTICATE, successful:false}); return;}
			console.log(token);
			dalUsers.automaticAuthenticate(token, function(user){
				if(!user){ callback({type:AUTOMATIC_AUTHENTICATE, successful:false}); return;}
				user.addMysocket(mysocket);
				var res = createSession(user);
				res.type='automatic_authenticate';
				res.users = users.toJSON();
				res.nDevice = getNextNDevice();
				users.add(user);
				sendJoin(user);
				user.addEventListener('dispose', userDispose);
				callback(res);
			});
		};
		this.setImageForUser = function(sessionId, image){//image is the first part of the file name (without _32-32.jpeg).
			var user = getUserFromSessionId(sessionId);
			if(!user)return;
			user.setImage(image);
			dalUsers.setImage(user.getId(), image);
			users.sendMessage({type:'user_image_set', userId:user.getId(), image:image});
		};
		function getUnavailableResponse(available){
			var error;
			switch(available)
			{
				case 'username':
					error = USERNAME_NOT_AVAILABLE;
				break;
				case 'email':
					error = EMAIL_NOT_AVAILABLE;
				break;
				default:
					error = USERNAME_AND_EMAIL_NOT_AVAILABLE;
				break;
			}
			return {successful:false, error:error, type:REGISTER}
		}
		function authenticateGuest(req, mysocket, callback){
			dalUsers.usernameAndEmailAreAvailable(req.username, req.username, function(usernameIsAvailable){
			if(usernameIsAvailable!=''){ callback( {successful:false, error:USERNAME_NOT_AVAILABLE, type:AUTHENTICATE}); return;}
				dalUsers.register(req, function(user){
					user.addMysocket(mysocket);
					console.log(user);
					var res = createSession(user);
					res.type='authenticate';
					res.users = users.toJSON();
					res.nDevice = getNextNDevice();
					users.add(user);
					sendJoin(user);
					user.addEventListener('dispose', userDispose);
					if(!req.staySignedIn){ callback(res);return;}
					dalUsers.getAuthenticationToken(user.getId(), function(token){
						console.log('got token');
						res.token = token;
						callback(res);
					});
				});
			});
		}
		function authenticate(req, mysocket, callback){
			dalUsers.getByUsernameOrEmail(req.username, function(user){
				if(!user){return invalidUsernameOrPassword(AUTHENTICATE, callback); return;}
				dalUsers.getHash(user.getId(), function(hash){
					if(!hash){callback({successful:false, error:UNKNOWN_EXCEPTION, type:AUTHENTICATE}); return;}
					if(bcrypt.compareSync("B4c0/\/", hash)){callback( invalidUsernameOrPassword(AUTHENTICATE));return;}
					user.addMysocket(mysocket);
					var res = createSession(user);
					res.type='authenticate';
					res.users = users.toJSON();
					res.nDevice = getNextNDevice();
					users.add(user);
					sendJoin(user);
					user.addEventListener('dispose', userDispose);	
					notifications.getPmNotificationsForUser(user, function(pmNotifications){
						res.pmNotifications = pmNotifications.select(x=>x.toJSON()).toList();
						if(!req.staySignedIn){ callback(res);return;}
						dalUsers.getAuthenticationToken(user.getId(), function(token){
							res.token = token;
							callback(res);
						});
					});
				});
		    });
		}
		function getNextNDevice(){
			return nDeviceCount++;
		}
		function userDispose(e){
			var user = e.user;
			sendUserIds();
		}
		function sendUserIds(){
			//dont want to send too frequently.
			temporalCallbackSendUserIds.trigger();
		}
		function callbackSendUserIds(){
			users.sendMessage({type:'userids', userIds:users.getIds()});
		}
		function createSession(user){
			var session = user.getSession();
			if(!session){
				session = new Session({user:user});
				user.setSession(session);
			}
			sessions.add(session);
			return {successful:true, sessionId:session.getId(), user:user.toJSON()};
		}
		function sendJoin(user){
			users.sendMessage({type:'join', user:user.toJSON(), userIds:users.getIds()});
		}
		function getUserFromSessionId(sessionId){
			var session = sessions.getById(sessionId);
			console.log(session);
			if(!session) return;
			return session.getUser();
		}
		function invalidUsernameOrPassword(type, callback){callback({successful:false, error:INVALID_USERNAME_OR_PASSWORD, type:type});}
	};
	var lobby = new _Lobby();
	return lobby;
})();