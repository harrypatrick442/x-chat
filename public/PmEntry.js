var PmEntry= new (function(){
	var _PmEntry = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var userTo = params.userTo;
		var buttonClose = new Button({className:'button-close', preventPropagation:true});
		var userImage = new UserImage({userId:userTo.getId(), username:userTo.getUsername()});
		var ui = new UI({userImage:userImage, name:userTo.getUsername(), buttonClose:buttonClose});
		this.getId = function(){
			return userTo.getId();
		};
		this.getUsername=function(){return userTo.getUsername();};
		this.getElement = ui.getElement;
		this.setVisible = ui.setVisible;
		this.parentWidth = ui.parentWidth;
		this.dispose = userImage.dispose;
		ui.addEventListener('click',dispatchShowPm);
		buttonClose.addEventListener('click', dispatchClosePm);
		function dispatchShowPm(){
			self.dispatchEvent({
				type:'showpm', user:userTo
			});
		}
		function dispatchClosePm(){
			self.dispatchEvent({
				type:'closepm', user:userTo, pmEntry:self
			});
		}
	};
	return _PmEntry;
	function UI(params){
		EventEnabledBuilder(this);
		var self = this;
		var userImage = params.userImage;
		var buttonClose = params.buttonClose;
		var element = E.DIV();
		element.classList.add('pm-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		element.appendChild(inner);
		var username=E.DIV();
		username.classList.add('username');
		inner.appendChild(userImage.getElement());
		inner.appendChild(username);
		inner.appendChild(buttonClose.getElement());
		username.innerHTML=params.name;
		this.getElement=function(){return element;};
		this.parentWidth = function(clientWidth){
			if(clientWidth<200){
				element.style.width='100%';
				return;
			}
			if(clientWidth<=400)
			{
				element.style.width = '50%';
				return;
			}
			if(clientWidth<= 600){
				element.style.width = '33.3%';
				return;
			}
			element.style.width = '25%';
		};
		inner.addEventListener('click', dispatchClick);
		function dispatchClick(){
			self.dispatchEvent({type:'click'});
		}
	}
})();