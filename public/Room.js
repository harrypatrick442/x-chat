var Room = new (function(){
	var _Room = function(params){
		((typeof(params.id)==='string')&&params.id.indexOf('pm')<0)&&shouldBeInt(params.id);
		EventEnabledBuilder(this);
		var MAX_N_MESSAGES=100;
		var self = this;
		var send = params.send;
		var getUserMe = params.getUserMe;
		var getUserById = params.getUserById;
		var getNDevice = params.getNDevice;
		var getSessionId = params.getSessionId;
		var showUsersSearch = params.showUsersSearch;
		var emoticonsParser = params.emoticonsParser;
		var name = params.name;
		var id = params.id;
		var isPm = params.isPm;
		var userTo = params.userTo;
		var videoFeedPm;
		if(isPm){
			videoFeedPm = new VideoFeedPm({userTo:userTo, getSessionId:getSessionId, send:send});
			this.videoOffer = videoFeedPm.incomingOffer;
			this.videoAccept = videoFeedPm.incomingAccept;
			this.videoIceCandidate = videoFeedPm.incomingIceCandidate;
		}
		var ignoreManager = params.ignoreManager;
		var clickMenuUser =params.clickMenuUser;
		var users = new Users({getUserById:getUserById});
		var usersMenu = new UsersMenu({name:params.isPm?'PM with '+params.userTo.getUsername():name+' Users', users:users, id:id, ignoreManager:ignoreManager, clickMenu:clickMenuUser, getUserMe:getUserMe, showUsersSearch:showUsersSearch});
		var buttonSend = new Button({className:'button-send', text:'Send'});
		var buttonEmoticons = new Button({className:'button-emoticons'});
		var buttonExit = new Button({className:'button-exit'});
		var buttonClose = new Button({className:'button-close'});
		var buttonVideoPmStart = isPm?new VideoButton({className:'button-video-pm-start'}):undefined;
		var spinner = new Spinner({});
		spinner.show();
		var ui = new UI({buttonSend:buttonSend, buttonEmoticons:buttonEmoticons, buttonExit:buttonExit, buttonClose:buttonClose,
		buttonVideoPmStart:buttonVideoPmStart, spinner:spinner, videoFeed:videoFeedPm, addMessage:addMessage,
		videoPmOfferRejected:dispatchVideoPmOfferRejected});
		var messages = new Messages({getUserId:getUserIdMe, element:ui.getFeed(), maxNMessages:MAX_N_MESSAGES, ignoreManager:ignoreManager, getNDevice:getNDevice});
		users.addEventListener('missingusers',self.dispatchEvent);
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.getUsersMenu = function(){return usersMenu;};
		this.getUserTo = function(){return params.userTo;};
		this.isPm=function(){return isPm;};
		this.incomingMessage = function(jObjectMessage){
			var scroll = ui.feedIsAtBottom();
			incomingMessage(jObjectMessage);
			if(scroll)
				ui.scrollFeedToBottom();
		};
		this.incomingMessages=function(jArrayMessages){
			var scroll = ui.feedIsAtBottom();
			each(jArrayMessages, function(jObjectMessage){
				incomingMessage(jObjectMessage);
			});
			if(scroll)
				ui.scrollFeedToBottom();
			spinner.hide();
		};
		messages.addEventListener('showpm', function(e){self.dispatchEvent(e);});
		
		this.join=function(user){
			if(users.contains(user))return;
			users.add(user);
		};
		this.leave = function(user){
			if(!users.contains(user))return;
			users.remove(user);
		};
		this.close = close;
		this.getUsers = function(){return users;};
		this.getElement = ui.getElement;
		this.setVisible = function(value){
			var visible = ui.getVisible();
			if(!visible&&value)
				usersMenu.show();
			else
				if(visible&&!value)
					usersMenu.hide();
			ui.setVisible(value);
			if(value)
				new Task(function(){
				ui.resize();
				ui.scrollFeedToBottom();
				}).run();
		};
		this.getVisible = ui.getVisible;
		this.videoOfferFail = function(msg){
			videoFeedPm.stop();
			Dialog.show({message:'Starting video chat with '+userTo.getUsername()+" failed as they are offline!",
			buttons:[{text:'OK'}]});
		};
		this.videoOfferRejected = function(msg){
			videoFeedPm.stop();
			Dialog.show({message:msg.reason,
			buttons:[{text:'OK'}]});
		};
		this.resize=ui.resize;
		buttonSend.addEventListener('click', sendMessage);
		buttonEmoticons.addEventListener('click', dispatchShowEmoticons);
		buttonClose.addEventListener('click', close);
		buttonExit.addEventListener('click', exit);
		if(buttonVideoPmStart)
			buttonVideoPmStart.addEventListener('click', startVideoPm);
		ui.addEventListener('keypress',keyPressed);
		new Task(load).run();
		function load(){
			dipatchGetMessages();
			dispatchGetUserIds();
			if(self.isPm()){
				users.add(params.userTo);
				users.add(getUserMe());
			}
		}
		function incomingMessage(jObjectMessage){
			jObjectMessage.emoticonsParser=emoticonsParser;
			jObjectMessage.clickMenuUser = clickMenuUser;
			jObjectMessage.ignoreManager = ignoreManager;
			jObjectMessage.getUserMe=getUserMe;
			messages.addReceived(Message.fromJSON(jObjectMessage));
		}
		function addMessage(message){
			var scroll = ui.feedIsAtBottom();
			messages.add(message);
			if(scroll)
				ui.scrollFeedToBottom();
		}
		function startVideoPm(){
			videoFeedPm.start();
		}
		function dispose(){
			messages.dispose();
		}
		function exit(){
			dispatchHide();
		}
		function close(){
			dispose();
			dispatchDispose();
		}
		function dispatchHide(){
			self.dispatchEvent({type:'hide', room:self});
		}
		function dipatchGetMessages(){
			self.dispatchEvent(!self.isPm()?{type:'getmessages', roomId:id}:{type:'getpms', userToId:self.getUserTo().getId()});
		}
		function dispatchGetUserIds(){
			self.dispatchEvent({type:'getuserids', roomId:id});
		}
		function sendMessage(){
			var text = ui.getTextValue();
			if(text=='')return;
			var isSpam = TrafficLights.isSpam(text);
			if(isSpam){
				addMessage(Message.error({message:isSpam}));
				ui.clearText();
				return;
			}
			var userMe = getUserMe();
			var messageSending = Message.fromTypedString({str:text, userId:userMe.getId(), username:userMe.getUsername(), uniqueId:messages.nextUniqueId() 
			, emoticonsParser:emoticonsParser, pending:true, clickMenuUser:clickMenuUser, getUserMe:getUserMe, image:userMe.getImage()});
			console.log(messageSending);
			dispatchSendMessage(messageSending);
			messages.addSending(messageSending);
			ui.clearText();
			ui.scrollFeedToBottom();
		}
		function dispatchShowEmoticons(){
			self.dispatchEvent({type:'showemoticons',picked:callbackPicked});
		}
		function dispatchSendMessage(message){
			self.dispatchEvent(!self.isPm()?{type:'sendmessage',message:message, roomId:id}:{type:'sendpm', userToId:self.getUserTo().getId(), message:message});
		}
		function dispatchDispose(){
			self.dispatchEvent({type:'dispose', room:self});
		}
		function getUserIdMe(){
			var user = getUserMe();
			if(user)
				return user.getId();
		}
		function callbackPicked(emoticonInfo){
			ui.insertIntoTextAtCurrentIndex(emoticonInfo.getStringRepresentation());
		}
		function keyPressed(e){
			var keyCode = e.keyCode;
			if (keyCode == '13'){
				sendMessage();
			  return false;
			}
		}
		function dispatchVideoPmOfferRejected(e){
			console.log(e);
			self.dispatchEvent({type:'videopmofferrejected', userToId:userTo.getId(), reason:e.reason});
		}
		
	};
	return _Room;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var visible = false;
		var buttonSend = params.buttonSend;
		var buttonExit = params.buttonExit;
		var buttonEmoticons = params.buttonEmoticons;
		var buttonClose = params.buttonClose;
		var buttonVideoPmStart = params.buttonVideoPmStart;
		var addMessage = params.addMessage;
		var videoFeed = params.videoFeed;
		var videoPmOfferRejected = params.videoPmOfferRejected;
		var spinner = params.spinner;
		var element = E.DIV();
		element.classList.add('room');
		var top = E.DIV();
		top.classList.add('top');
		var bottom = E.DIV();
		bottom.classList.add('bottom');
		var feed = E.DIV();
		feed.classList.add('feed');
		var menu = E.DIV();
		menu.classList.add('menu');
		var text = E.TEXT();
		text.classList.add('text');
		var splitPane;
		var splitPanePanelVideoFeed;
		if(videoFeed){
			var videoFeedUI = new VideoFeedUI(videoFeed);
			splitPane = new SplitPane({nPanelsWidth:1, nPanelsHeight:2, rowProfiles:[{height:'200px'}]});
			var videoFeedPanel = splitPane.getPanelXY(0, 0).getElement();
			splitPanePanelVideoFeed=splitPane.getPanelRow(0);
			videoFeedPanel.classList.add('video-feed-panel');
			videoFeedPanel.appendChild(videoFeedUI.getElement());
			top.appendChild(splitPane.getElement());
			splitPane.getPanelXY(0, 1).getElement().appendChild(feed);
			hideVideoFeed();
			new Task(splitPane.resize).run();
			videoFeedUI.addEventListener('show', showVideoFeed);
			videoFeedUI.addEventListener('hide', hideVideoFeed);
			videoFeedUI.addEventListener('showmessagetouser', onShowMessageToUser);
			videoFeedUI.addEventListener('offerrejected', videoPmOfferRejected);
		}
		else{
			top.appendChild(feed);
		}
		element.appendChild(top);
		element.appendChild(bottom);
		element.appendChild(spinner.getElement());
		bottom.appendChild(text);
		bottom.appendChild(menu);
		menu.appendChild(buttonEmoticons.getElement());
		menu.appendChild(buttonSend.getElement());
		menu.appendChild(buttonExit.getElement());
		menu.appendChild(buttonClose.getElement());
		if(buttonVideoPmStart)
			menu.appendChild(buttonVideoPmStart.getElement());
		text.addEventListener('keypress',dispatchKeyPress);
		this.getElement = function(){
			return element;
		};
		this.getFeed= function(){return feed;};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
		this.getTextValue= function(){return text.value;};
		this.addMessage = function(message){
			feed.appendChild(message.getElement());
		};
		this.removeMessage = function(message){
			feed.removeChild(message.getElement());
		};
		this.insertIntoTextAtCurrentIndex = function(str){
			var selectionStart=text.selectionStart;
			if(!str)return;
			if(selectionStart==undefined){
				text.value+=str;
			}
			else {
				var newIndex = selectionStart+str.length;
				text.value=text.value.splice(selectionStart, 0, str);
				text.selectionStart=text.selectionEnd = newIndex;
			}
			text.focus();
			
		};
	    this.clearText = function(){text.value='';};
		this.scrollFeedToBottom = function(){
			feed.scrollTop = feed.scrollHeight;
		};
		this.feedIsAtBottom = function(){
			return feed.scrollTop >= (feed.scrollHeight - feed.offsetHeight)-10;
		};
		this.resize = resize;
		function dispatchKeyPress(e){
			if (!e) e = window.events
			self.dispatchEvent({type:'keypress', keyCode:e.keyCode||e.which});
		}
		function resize(){
			console.log('Room.UI.resize');
			splitPane&&splitPane.resize();
		}
		function showVideoFeed(value){
			buttonVideoPmStart.setOn(true);
			splitPanePanelVideoFeed.setVisible(true);
		}
		function hideVideoFeed(){
			buttonVideoPmStart.setOn(false);
			splitPanePanelVideoFeed.setVisible(false);
		}
		function onShowMessageToUser(e){
			var message = Message.error({message:e.message});
			addMessage(message);
		}
	}
})();