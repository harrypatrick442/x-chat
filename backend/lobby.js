module.exports = new (function(){
	const UNKNOWN_EXCEPTION='Unknown Exception';
	const INVALID_USERNAME_OR_PASSWORD='Invalid Username or Password';
	const USERNAME_NOT_AVAILABLE='Username Not Available';
	const EMAIL_NOT_AVAILABLE='Email Not Available';
	const USERNAME_AND_EMAIL_NOT_AVAILABLE='Username and Email are Available';
	const PASSWORD_MUST_BE_AT_LEAST_LONG = 'Password must be at least 7 characters long';
	const MIN_USERNAME_LENGTH= 2;
	const MAX_USERNAME_LENGTH= 40;
	const USERNAME_TOO_SHORT='Username must be at least '+MIN_USERNAME_LENGTH+' characters long!';
		const USERNAME_TOO_LONG='Username can be nomore than '+MAX_USERNAME_LENGTH+' characters long!';
		const AUTHENTICATE= 'authenticate';
	const AUTOMATIC_AUTHENTICATE='automatic_authenticate';
	const REGISTER='register';
	const SEND_USER_IDS_MAX_N_DELAYS=5;
	const SEND_USER_IDS_DELAY=1000;
	var Rooms = require('./Rooms');
	var Pms = require('./Pms');
	var Users = require('./Users');
	var Notifications = require('./Notifications');
	var TemporalCallback=require('./TemporalCallback');
	var videoOfferRejectedReasons=require('./VideoOfferRejectedReasons');
	var Device=require('./Device');
	var Sessions = require('./Sessions');	
	var Session = require('./Session');
	var dalUsers = require('./DAL/DalUsers');
	var dalRooms = require('./DAL/DalRooms');
	var ListedRooms = require('./ListedRooms');
	var bcrypt = require('bcryptjs');
	var _Lobby = function(){
		dalUsers.deleteGuests(true);			
		var lobbyId = new Date().getTime();
		var self = this;
		var nDeviceCount=0;
		var rooms = new Rooms();
		var listedRooms = new ListedRooms({rooms:rooms});
		var users = new Users();
		var notifications = new Notifications();
		var pms = new Pms({users:users, rooms:rooms});
		var sessions = new Sessions();
		var temporalCallbackSendUserIds = new TemporalCallback({maxNDelays:SEND_USER_IDS_MAX_N_DELAYS/*if keeps being reset within delay, will wait up to this total amount of time*/
												, delay:SEND_USER_IDS_DELAY, callback:callbackSendUserIds});
		this.getRooms = function(){return rooms;};
		this.getListedRooms = function(){
			return listedRooms;
		};
		this.getPms = function(){return pms;};
		this.getNotifications= function(){return notifications;};
		this.getSessions=function(){
			return sessions;
		};
		this.createRoom = function(user, msg, callback){
			dalRooms.createRoom(msg.name, function(res){
				if(typeof(res)=='string'){
						callback({type:'create_room', successful:false, message:res});
					return;
				}
				var roomInfo = res.getInfo();
				callback({type:'create_room', successful:true, room:roomInfo});
				users.sendMessage({type:'new_room', room:roomInfo});
			});
		};
		this.register = function(req, mysocket, callback){
			if(!usernameAcceptible(req.username, callback))return;
			dalUsers.usernameAndEmailAreAvailable(req.username, req.email, function(available){
				if(available!=''){ 
					callback(getUnavailableResponse(available));
					return;
				}					
				if(req.password.length<7){ callback( {successful:false, error:PASSWORD_MUST_BE_AT_LEAST_LONG, type:REGISTER}); return;}
				var salt = bcrypt.genSaltSync(10);
				var hash = bcrypt.hashSync(req.password, salt);
				dalUsers.register({hash:hash, username:req.username, email:req.email, gender:req.gender, birthday:req.birthday, isGuest:false}, function(user){
					user.addDevice(new Device({mysocket:mysocket, user:user}));
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
						user.setToken(token);
						callback(res);
					});
				});
			});
		};
		this.authenticate = function(req, mysocket, callback){
			(req.isGuest? authenticateGuest: authenticate)(req, mysocket, callback);
		};
		this.signOut = function(req, mysocket, callback){
			var user = getUserFromSessionId(req.sessionId);
			if(!user)return;
			dalUsers.authenticationTokensDelete(user.getId());
			user.setToken(null);
			user.dispose();
		};
		this.deviceLeaving = function(req, mysocket, callback){
			var user = getUserFromSessionId(req.sessionId);
			if(!user)return;
			var device = user.getDevices().getById(mysocket.getId());
			if(!device)return;
			device.close();
		};
		this.automaticAuthenticate= function(req, mysocket, callback){
			var token = req.token;
			if(!token){ callback({type:AUTOMATIC_AUTHENTICATE, successful:false}); return;}
			dalUsers.automaticAuthenticate(token, function(user){
				if(!user){ callback({type:AUTOMATIC_AUTHENTICATE, successful:false}); return;}
				user.addDevice(new Device({mysocket:mysocket, user:user}));
				var res = createSession(user);
				res.type='automatic_authenticate';
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
						user.setToken(token);
						callback(res);
					});
				});
			});
		};
		/*
		this.setImageForUser = function(sessionId, image){//image is the first part of the file name (without _32-32.jpeg).
			var user = getUserFromSessionId(sessionId);
			if(!user)return;
			ImageMaintenance.deleteUserImageFiles(user.getId(), function(){
				user.setImage(image);
				dalUsers.setImage(user.getId(), image);
				users.sendMessage({type:'user_image_set', userId:user.getId(), image:image});
			});
		};*/
		this.pmVideoOffer= function(req, callback){
			var userMe = getUserFromSessionId(req.sessionId);
			if(!userMe)return;
			var userTo = users.getById(req.userToId);
			if(!userTo) {
				callback({type:'pm_video_offer_fail', userToId:req.userToId, successful:false, message:'The user is not online!'});
				return;
			}
			userTo.sendMessage({type:'pm_video_offer', userFromId:userMe.getId(), offer:req.offer});
		};
		this.pmVideoAccept = function(req, callback){
			var userMe = getUserFromSessionId(req.sessionId);
			if(!userMe)return;
			var userTo = users.getById(req.userToId);
			if(!userTo) {
				callback({type:'pm_video_accept_fail', userToId:req.userToId, successful:false, message:'The user is no longer online!'});
				return;
			}
			userTo.sendMessage({type:'pm_video_accept', userFromId:userMe.getId(), accept:req.accept});
		};
		this.pmVideoIceCandidate = function(req, callback){
			var userMe = getUserFromSessionId(req.sessionId);
			if(!userMe)return;
			var userTo = users.getById(req.userToId);
			if(!userTo){
				return;
			}
			userTo.sendMessage({type:'pm_video_ice_candidate', userFromId:userMe.getId(), candidate:req.candidate});
		};
		this.pmVideoOfferRejected = function(user, userToId, reason){
			var userTo = users.getById(userToId);
			if(!userTo)return;
			userTo.sendMessage({type:'pm_video_offer_rejected', userFromId:user.getId(), reason:getVideoRejectionReasonString(reason, user)});
		};
		this.roomsSearch = function(user, text, callback){
			dalRooms.search('%'+text+'%', function(roomInfos){
				callback({type:'rooms_search', rooms:roomInfos});
			});
		};
		this.usersSearch = function(user, text, callback){
			dalUsers.search('%'+text+'%', function(userInfos){
				callback({type:'users_search', users:userInfos});
			});
		};
		function usernameAcceptible(username, callback){
			if(username.length<MIN_USERNAME_LENGTH){callback( {successful:false, error:USERNAME_TOO_SHORT, type:REGISTER}); return;}
			if(username.length>MAX_USERNAME_LENGTH){callback( {successful:false, error:USERNAME_TOO_LONG, type:REGISTER}); return;}
			return true;
		}
		function getVideoRejectionReasonString(reason, userTo){
			switch(reason){
				case videoOfferRejectedReasons.PM_NOT_OPEN:
					return userTo.getUsername()+' does not have a pm open with you so you can\'t video PM invite them. Try messaging them.';
				case videoOfferRejectedReasons.DECLINED:
					return userTo.getUsername()+' rejected your video PM invite!';
				default:
					return 'An error prevented '+userTo.getUsername()+' from accepting your video PM invite.';
				return '';
			}
		}
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
			if(!usernameAcceptible(req.username, callback))return;
			dalUsers.usernameAndEmailAreAvailable(req.username, req.username, function(usernameIsAvailable){
			if(usernameIsAvailable!=''){ callback( {successful:false, error:USERNAME_NOT_AVAILABLE, type:AUTHENTICATE}); return;}
				dalUsers.register(req, function(user){
					user.addDevice(new Device({mysocket:mysocket, user:user}));
					var res = createSession(user);
					res.type='authenticate';
					res.users = users.toJSON();
					res.nDevice = getNextNDevice();
					users.add(user);
					sendJoin(user);
					user.addEventListener('dispose', userDispose);
					if(!req.staySignedIn){ callback(res);return;}
					dalUsers.getAuthenticationToken(user.getId(), function(token){
						res.token = token;
						user.setToken(token);
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
					if(!bcrypt.compareSync(req.password, hash)){invalidUsernameOrPassword(AUTHENTICATE, callback);return;}
					user.addDevice(new Device({mysocket:mysocket, user:user}));
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
							user.setToken(token);
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
			if(user.isGuest()&&!user.getToken())
			{
				dalUsers.deleteGuest(user.getId());
				ImageMaintenance.deleteUserImageFiles(user.getId());
			}
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
			if(!session) return;
			return session.getUser();
		}
		function invalidUsernameOrPassword(type, callback){callback({successful:false, error:INVALID_USERNAME_OR_PASSWORD, type:type});}
	};
	var lobby = new _Lobby();
	return lobby;
})();