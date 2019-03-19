function RoomCreationMenuUI(roomCreationMenu){
		EventEnabledBuilder(this);
		var self = this;
		var standardMenu = new window['StandardMenu']({'title':'Create Room', 'classNames':['room-creation-menu']});
		var spinner = new window['Spinner']({'preventInterraction':true});
		var element = standardMenu['getElement']();
		var E = window['E'];
		var name = E['TEXT']();
		var error = E['DIV']();
		var buttonCreate = new window['Button']({'className':'button-create', 'text':'Create'});
		name['placeholder']='Name';
		name.classList.add('name');
		error.classList.add('error');
		var entries = standardMenu['getEntries']();
		entries.appendChild(name);
		entries.appendChild(buttonCreate['getElement']());
		entries.appendChild(error);
		element.appendChild(spinner['getElement']());
		this.show = standardMenu.show;
		buttonCreate.addEventListener('click', callbackCreate);
		roomCreationMenu.addEventListener('created', callbackCreated);
		roomCreationMenu.addEventListener('failed', callbackFailed);
		function callbackCreate(e){
			roomCreationMenu['create']({'name':name['value']});
		}
		function callbackCreated(e){
			standardMenu.hide();
		}
		function callbackFailed(e){
			setError(e.message);
		}
		function setError(message){
			error.style.display=message?'block':'none';
			error.innerHTML = message;
		}
}
