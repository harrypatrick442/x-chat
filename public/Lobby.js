var Lobby = (function(){
	var IMAGE_WIDTH_SMALL=32;
	var IMAGE_WIDTH_LARGE=256;
	var IMAGE_UPLOADER_URL='/image_uploader';
	
	
	ImagePreloader.preloadRange([
	'/images/close.jpg', 
	'/images/close-hover.jpg'
	]);
	var _Lobby = function(){
		var self = this;
		var sessionId;
		var nDevice;
		var userMe;
		var url = '/servlet';
		var authenticate = new Authenticate({callbackRegister:callbackRegister, callbackSignIn:callbackSignIn, callbackGuest:callbackGuest});
		var users = new Users({});
		var ignoreManager = new IgnoreManager({getUserById:getUserById, getUserMe:getUserMe});
		var clickMenu = new ClickMenu({});
		var mainMenu = new ClickMenu({});
		var usersMenu= new UsersMenu({name:'All Users (Lobby)', users:users, id:'UsersMenuLobby', ignoreManager:ignoreManager, getUserMe:getUserMe, clickMenu:clickMenu});
		var missingUsersManager = new MissingUsersManager();
		var mysocket = new Mysocket({url:'poll', urlWebsocket:getWebsocketUrl('endpoint')});
		if(window.debug)debug.setMysocket(mysocket);
		var automaticAuthentication = new AutomaticAuthentication({send:mysocket.send});
		new Task(authenticateAutomatically).run();
		var seenNotificationsManager = new SeenNotificationsManager({getSessionId:getSessionId, mysocket:mysocket});
		var usersMenues = new UsersMenues({ignoreManager:ignoreManager});
		usersMenues.add(usersMenu);
	    var rooms = new Rooms({getUserMe:getUserMe, getUserById:getUserById, ignoreManager:ignoreManager, clickMenu:clickMenu, usersMenuAll:usersMenu,
		getNDevice:getNDevice, getSessionId:getSessionId, send:mysocket.send});
		var imageUploader = new ImageUploader({getSessionId:getSessionId, aspectRatio:1, profiles:[
		{desiredWidth:IMAGE_WIDTH_SMALL, aspectRatio:1, name:UserImage.SMALL}, 
		{desiredWidth:IMAGE_WIDTH_LARGE, aspectRatio:1, name:UserImage.LARGE}
		], url:IMAGE_UPLOADER_URL});
		var pms = new Pms({rooms:rooms, getUserById:users.getById});
		var pmsMenu = new PmsMenu({pms:pms});
		 //var mainMenu = new MainMenu({});
		var notifications = new Notifications({});
		var notificationsMenu = new NotificationsMenu({notifications:notifications, pms:pms, seenNotificationsManager:seenNotificationsManager});
		var buttonUsers = new Button({toggle:!isMobile, classNames:['button-users'], classNameToggled:'button-users-hide'});
		var buttonPms = new Button({toggle:!isMobile, classNames:['button-pms'], classNameToggled:'button-pms-hide'});
		var buttonProfilePicture = new Button({ classNames:['button-profile-picture']});
		var buttonNotifications = new NotificationsButton({notifications:notifications});
		var buttonMenu = new Button({classNames:['button-menu']});
		var ui = new UI({rooms:rooms, buttonUsers:buttonUsers, buttonPms:buttonPms, buttonProfilePicture: buttonProfilePicture,
		buttonNotifications:buttonNotifications, pmsMenu:pmsMenu, usersMenues:usersMenues, notificationsMenu:notificationsMenu,
		buttonMenu:buttonMenu, mainMenu:mainMenu});
		mysocket.addEventListener('onmessage', onMessage);
		mysocket.addEventListener('onopen', onOpen);
		mysocket.send({type:'test'});
		buttonProfilePicture.addEventListener('click', showImageUploaderForProfilePicture);
		buttonNotifications.addEventListener('click', showNotifications);
		buttonMenu.addEventListener('click', showMenu);
		if(!isMobile)
		{
			buttonPms.addEventListener('toggled', onToggleButtonPms);
			buttonUsers.addEventListener('toggled', onToggleButtonUsers);
		}
		else
		{
			buttonPms.addEventListener('click', pmsMenu.show);
			buttonUsers.addEventListener('click', function(){usersMenues.show();});
		}
		rooms.addEventListener('sendmessage', sendMessage);	
		rooms.addEventListener('getmessages', getMessages);
		rooms.addEventListener('getpms', getPms);
		rooms.addEventListener('getuserids', getUserIds);
		rooms.addEventListener('createdroom', createdRoom);
		rooms.addEventListener('destroyedroom', destroyedRoom);
		rooms.addEventListener('roomsinchanged', callbackRoomsInChanged);
		rooms.addEventListener('sendpm', sendPm);
		usersMenues.addEventListener('showpm', showPm);
		notificationsMenu.addEventListener('showpm', showPm);
		pms.addEventListener('addnotification', addNotification);
		this.getElement = ui.getElement;
		function onOpen(){ }
		function onMessage(e){
			var msg = e.msg;
			console.log(msg);
			switch(msg.type){
				case 'test':
					console.log(msg);
					break;
				case 'join':
					join(msg);
					break;
				case 'users':
					users.update(msg.users);//and the above carry with them the full user information. this isnt needed for leaving, hence userids is used. this also ensures other missed user leaves are accounted for. A missed user join will be accounted for when userids causes MissingUsersManager to get the missing information.
					break;
				case 'authenticate':
					authenticateResponse(msg);
					break;
				case 'automatic_authenticate':
					automaticAuthenticateResponse(msg);
					break;
				case 'register':
					registerResponse(msg);
					break;
				case 'rooms':
					rooms.set(msg.rooms);
					break;
				case 'room_userids':
					roomUserIds(msg);//sends a complete list of users who should be in the room. Ids only. it is expected the user can be acquired from the lobby, unless they are missing in which case the missingusersmanager handles that.
					break;
				case 'message':
					rooms.incomingMessage(msg);
					break;
				case 'pm_message':
					pms.incomingMessage(msg);
					break;
				case 'messages':
					rooms.incomingMessages(msg);
					break;
				case 'pm_messages':
					pms.incomingMessages(msg);
					break;
				case 'userids':
					updateUserIdsLobby(msg.userIds);//is used for leave.
					break;
				case 'pm_video_offer_fail':
					pms.videoOfferFail(msg);
					break;
				case 'pm_video_offer':
					pms.videoOffer(msg);
					break;
				case 'pm_video_accept_fail':
					pms.videoAcceptFail(msg);
					break;
				case 'pm_video_accept':
					pms.videoAccept(msg);
					break;
				case 'pm_video_ice_candidate':
					pms.videoIceCandidate(msg);
					break;
				case 'user_image_set':
					console.log(msg);
					UserImage.update(msg.userId, msg.image);
					var user = users.getById(msg.userId);
					if(user)
						user.setImage(msg.image);
				break;
			}
		}
		function roomUserIds(msg){
			var room = rooms.getById(msg.roomId);
			if(!room)return;
			roomUserIds_Join(room, msg.userIds);
			roomUserIds_Leave(room, msg.userIds);
		}
		function authenticateAutomatically(){
			if(!automaticAuthentication.authenticate()){showAuthentication();return;}
			ui.setSpinnerAutomaticAuthenticationVisible(true);
		}
		function showAuthentication(){
			authenticate.show();
		}
		function showMenu(){
			ui.showMainMenu({options:[{text:'Sign Out ', callback:signOut}]});
		}
		function signOut(){
			mysocket.send({type:'sign_out', sessionId:sessionId});
			sessionId=null;
			rooms.clear();
			automaticAuthentication.clear();
			users.clear();
			notifications.clear();
			pmsMenu.clear();
			showAuthentication();
		}
		function showNotifications(){
			console.log('showing notifications');
			notificationsMenu.show();
		}
		function roomUserIds_Join(room, userIds){
			each(userIds, function(userId){
				var user = users.getById(userId);
				if(user)
					room.join(user);
				else
					missingUsersManager.get(userId);
			});
		}
		function roomUserIds_Leave(room, userIds){
			var usersToRemove = room.getUsers().getEntries().where(function(x){ return userIds.indexOf(x.getId())<0;}).toList();
			each(usersToRemove, function(userToRemove){
				console.log(userToRemove.getId());
				room.leave(userToRemove);
			});
		}
		function onToggleButtonUsers(e){
			ui.setLeftVisible(e.toggled);
		}
		function onToggleButtonPms(e){
			ui.setPmsMenuVisible(e.toggled);
		}
		function callbackRegister(obj){
			obj.type='register';
			mysocket.send(obj);
		}
		function callbackSignIn(obj){
			obj.type='authenticate';
			mysocket.send(obj);
		}
		function callbackGuest(obj){
			obj.type='authenticate';
			obj.isGuest=true;	
			mysocket.send(obj);
		}
		function callbackRoomsInChanged(e){
			mysocket.send({type:'rooms_in_changed', sessionId:sessionId, roomIds:e.roomIds});
		}
		function authenticateResponse(msg){
			authenticateRegisterResponse(msg);
			loadNotifications(msg);
		}
		function automaticAuthenticateResponse(msg){
			ui.setSpinnerAutomaticAuthenticationVisible(false);
			if(!msg.successful){showAuthentication();return;}
			authenticateRegisterResponse(msg);
			loadNotifications(msg);
		}
		function registerResponse(msg){
			authenticateRegisterResponse(msg);
		}
		function loadNotifications(msg){
			if(msg.pmNotifications){
				each(msg.pmNotifications, function(pmNotification){
					notifications.add(Notification.pmNotificationFromJSON(pmNotification));
				});
			}
		}
		function updateUserIdsLobby(userIds){
		    userIds.where(function(x){ return !users.containsId(x);}).each(function(x){ return missingUsersManager.get(x);});
		    var toRemove = users.getIds().where(function(x){ return userIds.indexOf(x)<0;}).each(function(userId){
				var user = users.getById(userId);
				if(user)user.left();
			});
		}
		function authenticateRegisterResponse(msg){
			if(msg.successful){
				sessionId = msg.sessionId;
				if(msg.token)automaticAuthentication.setToken(msg.token);
				nDevice = msg.nDevice;
				users.add(User.fromJSON(msg.user));
				userMe = users.getById(msg.user.id);
				msg.users.select(function(x){ return User.fromJSON(x);}).each(function(x){ return users.add(x);});
				authenticate.hide();
				getRooms();
				pms.load(userMe.getId());
				ignoreManager.load(userMe.getId());
				return;
			}
			authenticate.setError(msg.error);
		}
		function getRooms(){
			mysocket.send({type:'rooms_get', sessionId:sessionId});
		}
		function getMessages(e){
			mysocket.send({type:'room_messages_get', roomId:e.roomId, sessionId:sessionId});
		}
		function getPms(e){
			console.log('get pms');
			mysocket.send({type:'pm_messages_get', userToId:e.userToId, sessionId:sessionId});
		}
		function getUserIds(e){
			mysocket.send({type:'room_userids_get', roomId:e.roomId, sessionId:sessionId});
		}
		function getUserById(userId){
			return users.getById(userId);
		}
		function getUserMe(){
			return userMe;
		}
		function getSessionId(){
			return sessionId;
		}
		function sendMessage(e){
			var jObject = e.message.toJSON();
			jObject.roomId = e.roomId;
			jObject.type='room_message_send';
			jObject.sessionId=sessionId;
			mysocket.send(jObject);
		}
		function sendPm(e){
			var jObject = e.message.toJSON();
			jObject.userToId = e.userToId;
			jObject.type='room_pm_send';
			jObject.sessionId=sessionId;
			mysocket.send(jObject);
		}
		function addNotification(e){
			notifications.add(e.notification);
		}
		function createdRoom(e){
			var room = e.room;
			usersMenues.add(room.getUsersMenu());
			mysocket.send({type:'room_join', sessionId:sessionId, roomId:room.getId()});
		}
		function destroyedRoom(e){
			console.log('removing from user menues');
			usersMenues.remove(e.room.getUsersMenu());
			mysocket.send({type:'room_leave', sessionId:sessionId, roomId:e.room.getId()});
		}
		function join(msg){
			var user = User.fromJSON(msg.user);
			if(!users.contains(user))
				users.add(user);
			var userIds = msg.userIds;
			if(!userIds)return;
			updateUserIdsLobby(userIds);
		}
		function showPm(e){
			pms.showPmWithUser(e.user);
		}
		function showImageUploaderForProfilePicture(){
			imageUploader.show();
		}
		function getNDevice(){
			return nDevice;
		}
		
	};
	function UI(params){
		var rooms = params.rooms;
		var pmsMenu = params.pmsMenu;
		var mainMenu = params.mainMenu;
		var buttonUsers = params.buttonUsers;
		var buttonPms = params.buttonPms;
		var buttonProfilePicture = params.buttonProfilePicture;
		var buttonNotifications = params.buttonNotifications;
		var buttonMenu = params.buttonMenu;
		var notificationsMenu = params.notificationsMenu;
		var spinnerAutomaticAuthentication = new Spinner({preventInterraction:true});
		var divButtonShowHideWrapper = E.DIV();
		
		var usersMenues = params.usersMenues;
		var element = E.DIV();
		var right = E.DIV();
		var rightInner = E.DIV();
		var divButtonShowHideWrapper = E.DIV();
		element.classList.add('lobby');
		right.classList.add('right');
		rightInner.classList.add('right-inner');
		divButtonShowHideWrapper.classList.add('button-show-hide-wrapper');
		var rightTopRow;
		if(!isMobile){
			var left = E.DIV();
			left.classList.add('left');
			var leftInner = E.DIV();
			leftInner.classList.add('left-inner');
			element.appendChild(left);
			left.appendChild(leftInner);
			var logo = new Logo();	
			leftInner.appendChild(logo.getElement());
			leftInner.appendChild(usersMenues.getElement());
			
			
			var splitPane = new SplitPane({nPanelsWidth:1, nPanelsHeight:2, rowProfiles:[{height:'120px', minHeight:'60px'}, {minHeight:'60px'}]});
			rightTopRow= splitPane.getPanelRow(0);
			var rightTopPanel = splitPane.getPanelXY(0, 0);
			var rightBottomPanel = splitPane.getPanelXY(0, 1);
			var rightTop = rightTopPanel.getElement();
			var rightBottom = rightBottomPanel.getElement();
			rightTop.appendChild(pmsMenu.getElement());
			rightBottom.appendChild(divButtonShowHideWrapper);
			rightBottom.appendChild(rooms.getElement());
			rightInner.appendChild(splitPane.getElement());
			rightInner.appendChild(notificationsMenu.getElement());
			new Task(splitPane.resize).run();
			logo.addEventListener('click', rooms.showMenu);
			buttonUsers.addEventListener('click', onResized);
			ResizeManager.add({element:element, onResized:onResized});
		}
		else
		{
			rightInner.appendChild(pmsMenu.getElement());
			rightInner.appendChild(divButtonShowHideWrapper);
			rightInner.appendChild(rooms.getElement());
			document.body.appendChild(notificationsMenu.getElement());
		}
		element.appendChild(right);
		right.appendChild(rightInner);
		document.documentElement.appendChild(spinnerAutomaticAuthentication.getElement());
		
		divButtonShowHideWrapper.appendChild(buttonUsers.getElement());
		divButtonShowHideWrapper.appendChild(buttonPms.getElement());
		divButtonShowHideWrapper.appendChild(buttonMenu.getElement());
		divButtonShowHideWrapper.appendChild(buttonNotifications.getElement());
		divButtonShowHideWrapper.appendChild(buttonProfilePicture.getElement());
		this.getElement = function(){return element;};
		this.showMainMenu = function(options){
			console.log(getAbsolute(buttonProfilePicture.getElement()).right);
			mainMenu.show(options);
			mainMenu.setPosition({right:6,top:getAbsolute(buttonProfilePicture.getElement()).bottom+3});
		};
		this.setPmsMenuVisible= function(value){
			console.log(value);
			rightTopRow.setVisible(value);
		};
		this.setLeftVisible = function(value){
			left.style.display=value?'block':'none';
		};
		this.setSpinnerAutomaticAuthenticationVisible=spinnerAutomaticAuthentication.setVisible;
		//pmsMenu.addEventListener('resized', pmsMenuResized);
		//function pmsMenuResized(){
		//	rooms.resize();
		//}
		function onResized(){
			console.log('click');
			new Task(
			splitPane.resize).run();
		}
		
	}
	return _Lobby;
})();