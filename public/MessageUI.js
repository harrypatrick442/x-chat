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
	var username = E.DIV();
	username.classList.add('username');
	var innerUsername = E.DIV();
	var pending;
	if(params.pending){
		pending = E.DIV();
		pending.classList.add('pending');
		element.appendChild(pending);
	}
	username.appendChild(innerUsername);
	inner.appendChild(userImage.getElement());
	inner.appendChild(username);
	innerUsername.innerHTML += (name&&name.length>0?name:'&nbsp;')+(sentAt?getFormattedDateTime(sentAt):'');
	each(components, function(component){
		inner.appendChild(component.getElement());
	});
	element.appendChild(inner);
	this.getElement = function(){return element;};
	this.getUsername = function(){return username;};
	this.setVisible=function(value){element.style.display=value?'inline-block':'none';};
	this.hidePending = function(){
		if(pending){element.removeChild(pending);}
	};
	innerUsername.addEventListener('click', dispatchShowUserMenu);
	function dispatchShowUserMenu(e){
		self.dispatchEvent({type:'showusermenu', left:e.clientX, top:e.clientY});
	}
	function getFormattedDateTime(sentAt){
		var now = moment();
		var ducation = moment.duration(now.diff(sentAt));
		console.log(duration.asHours());
		return sentAt.format();
	}
}