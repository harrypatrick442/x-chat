function RoomCreationMenuUI(roomCreationMenu){
		EventEnabledBuilder(this);
		var self = this;
		var standardMenu = new window['StandardMenu']({'title':'Create Room', classNames:'room-creation-menu'});
		var spinner = new window['Spinner']({'preventInterraction':true});
		var element = standardMenu['getElement']();
		var E = window['E'];
		var name = E['TEXT']();
		var buttonCreate = new window['Button']({className:'button-create'});
		name.classList.add('name');
		element.appendChild(name);
		element.appendChild(buttonCreate['getElement']());
		element.appendChild(spinner['getElement']());
		this.show = standardMenu.show;
		buttonCreate.addEventListener('click', callbackCreate);
		function callbackCreate(e){
			roomCreationMenu['create']({'name':name['value']});
		}
}
