function MessageUI(params){
	EventEnabledBuilder(this);
	var self = this;
	var components = params.components;
	var name = params.username;
	var userImage = params.userImage;
	var sentAt = params.sentAt;
	console.log(sentAt);
	console.log(params);
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
	inner.appendChild(userImage.getElement());
	inner.appendChild(usernameAndTimestamp);
	username.innerHTML += (name&&name.length>0?name:'&nbsp;');
	if(sentAt){
		var timestamp = E.DIV();
		timestamp.classList.add('timestamp');
		timestamp .innerHTML=' ('+getFormattedDateTime(sentAt)+')';
		usernameAndTimestamp.appendChild(timestamp);
	}
	each(components, function(component){
		inner.appendChild(component.getElement());
	});
	element.appendChild(inner);
	this.getElement = function(){return element;};
	this.getUsername = function(){return usernameAndTimestamp;};
	this.setVisible=function(value){element.style.display=value?'inline-block':'none';};
	this.hidePending = function(){
		if(pending){element.removeChild(pending);}
	};
	username.addEventListener('click', dispatchShowUserMenu);
	function dispatchShowUserMenu(e){
		self.dispatchEvent({type:'showusermenu', left:e.clientX, top:e.clientY});
	}
	function getFormattedDateTime(sentAt){
		var sentAtLocal = moment.utc(sentAt);
		var now = moment();
		console.log('now is: '+now.format());
		var duration = moment.duration(now.diff(sentAtLocal));
		var midnight = moment().startOf('day');
		console.log(now.hour());
		console.log(now.minute());
		console.log(now.second());
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
		console.log('sentToday: '+sentToday);
		var sentThisYear = sentAtLocal.isSame(new Date(), 'year');
		var dayAndMonth =sentAtLocal.format('Do')+' '+sentAtLocal.format('MMMM');
		if(sentThisYear){
			return dayAndMonth;
		}
		return dayAndMonth+' '+sentAtLocal.year();
		//if today: [Time]
		
		//if within last week[Day of week] at [Time]
		//[int Day Month name] at [Time]
		
		
		if(sentToday){
			return ;
		}
		console.log(sentAtLocal);
		return sentAtLocal.format();
	}
}