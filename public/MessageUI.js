function MessageUI(params){
	EventEnabledBuilder(this);
	var self = this;
	var components = params.components;
	var name = params.username;
	var userImage = params.userImage;
	var sentAt = params.sentAt;
	var messageType = params.messageType;
	var element = E.DIV();
	element.classList.add('message');
	var inner = E.DIV();
	inner.classList.add('inner');
	var usernameAndTimestamp = E.DIV();
	usernameAndTimestamp.classList.add('username-and-timestamp');
	var username = E.DIV();
	username.classList.add('username');
	var pending;
	if(params.pending){
		pending = E.DIV();
		pending.classList.add('pending');
		element.appendChild(pending);
	}
	usernameAndTimestamp.appendChild(username);
	var timestamp = E.DIV();
	timestamp.classList.add('timestamp');
	usernameAndTimestamp.appendChild(timestamp);
	switch(messageType){
		case Message.ERROR:
			element.classList.add('error');
			timestamp .innerHTML=' ('+getFormattedDateTime(new Date())+')';
		break;
		default:
		inner.appendChild(userImage.getElement());
		username.innerHTML += (name&&name.length>0?name:'&nbsp;');
		if(sentAt){
			timestamp .innerHTML=' ('+getFormattedDateTime(sentAt)+')';
		}
		break;
	}
	inner.appendChild(usernameAndTimestamp);
	each(components, function(component){
		inner.appendChild(component.getElement());
	});
	element.appendChild(inner);
	this.getElement = function(){return element;};
	this.getUsername = function(){return usernameAndTimestamp;};
	this.setVisible=function(value){ console.log(new Error().stack);element.style.display=value?'inline-block':'none';};
	this.hidePending = function(){
		if(pending){element.removeChild(pending);}
	};
	username.addEventListener('click', dispatchShowUserMenu);
	function dispatchShowUserMenu(e){
		self.dispatchEvent({type:'showusermenu', left:e.clientX, top:e.clientY});
	}
	function getFormattedDateTime(sentAt){
		var sentAtLocal = moment.utc(sentAt).local();
		var now = moment();
		var duration = moment.duration(now.diff(sentAtLocal));
		var midnight = moment().startOf('day');
		var time = sentAtLocal.format('HH:mm:ss');
		var sentToday = sentAtLocal.diff(midnight, 'seconds')>=0?true:false;
		if(sentToday){
			return time;
		}
		var secondsToMidnightSinceSent = midnight.diff(sentAtLocal,'seconds');
		if(secondsToMidnightSinceSent<604800){//seven days since midnight ( can include the day with same name as today!!
			var dayAndTime=sentAtLocal.format('dddd')+' at '+time;
			if(secondsToMidnightSinceSent<518400)//six days since midnight
				return dayAndTime;
			return 'last '+dayAndTime;
		}
		var sentThisYear = sentAtLocal.isSame(new Date(), 'year');
		var dayAndMonth =sentAtLocal.format('Do')+' '+sentAtLocal.format('MMMM');
		if(sentThisYear){
			return dayAndMonth;
		}
		return dayAndMonth+' '+sentAtLocal.year();
	}
}