var RoomEntry = new (function(){
	var _RoomEntry = function(params){
		shouldBeInt(params.id);
		EventEnabledBuilder(this);
		var self = this;
		var roomImage = new RoomImage();
		var ui = new UI({name:params.name, roomImage:roomImage, nUsers:params.nUsers});
		this.getId = function(){return params.id;};
		this.getName = function(){return params.name;};
		this.getElement = ui.getElement;
		this.parentWidth=ui.parentWidth;
		ui.getElement().addEventListener('click', dispatchSelected);
		this.dispose = roomImage.dispose;
		this.update = ui.update;
		function dispatchSelected(){
			self.dispatchEvent({type:'selected',roomInfo:params});
		}
	};
	return _RoomEntry;
	function UI(params){
		var element = E.DIV();
		element.title = params.name;
		element.classList.add('room-entry');
		var inner = E.DIV();
		inner.classList.add('inner');
		inner.appendChild(params.roomImage.getElement());
		element.appendChild(inner);
		var name = E.DIV();
		name.classList.add('name');
		name.innerHTML = params.name;
		inner.appendChild(name);
		var nUsers = E.DIV();
		nUsers.classList.add('n-users');
		name.appendChild(nUsers);
		setNUsers(params.nUsers);
		this.update = function(roomInfo){
			setNUsers(roomInfo.nUsers);
		};
		this.getElement = function(){return element;};
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
		function setNUsers(value){
			nUsers.innerHTML = '('+(value?value:0)+')';
		}
	}
})();