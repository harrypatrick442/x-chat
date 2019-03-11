var RoomsMenu = new (function(){
	var _RoomsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var showRoomsSearch = params.showRoomsSearch;
		var mapIdToRoomEntry={};
		var entries =[];
		var ui = new UI({entries:entries, showRoomsSearch:showRoomsSearch});
		var usersMenu = params.usersMenu;
		var spinner = new Spinner({});
		//spinner.show();
		this.getId =function(){return 'RoomsMenu';};
		this.set = function(roomInfos){
			//spinner.hide();
			var ids=[];
			each(roomInfos, function(roomInfo){
				var roomEntry = mapIdToRoomEntry[roomInfo.id];
				if(!roomEntry) roomEntry = add(roomInfo);
				ids.push(roomEntry.getId());
			});
			for(var id in mapIdToRoomEntry){
				if(ids.indexOf(id)<0)
				{
					remove(mapIdToRoomEntry[id]);
				}
			}
			ui.resize();
		};
		this.getName = function(){
			return 'roomsmenu';
		};
		this.getElement = ui.getElement;
		this.setVisible = function(value){
			
			var visible = ui.getVisible();
			if(!visible&&value)
				usersMenu.show();
			else
				if(visible&&!value)
					usersMenu.hide();
			ui.setVisible(value);
		};
		this.clear=function(){
			for(var id in mapIdToRoomEntry){
				remove(mapIdToRoomEntry[id]);
			}
		};
		this.getVisible = ui.getVisible;
		this.resize = ui.resize;
		function add(roomInfo){
			console.log('add');
			var roomEntry = new RoomEntry(roomInfo);
			entries.push(roomEntry);
			mapIdToRoomEntry[roomEntry.getId()]=roomEntry;
			ui.add(roomEntry.getElement());
			roomEntry.addEventListener('selected', selected);
			return roomEntry;
		}
		function remove(roomEntry){
			roomEntry.dispose();
			delete mapIdToRoomEntry[roomEntry.getId()];
			entries.splice(entries.indexOf(roomEntry), 1);
			ui.remove(roomEntry.getElement());
		}
		function selected(e){
			dispatchShowRoom(e.roomInfo);
		}
		function dispatchShowRoom(roomInfo){
			self.dispatchEvent({type:'showroom', roomInfo:roomInfo});
		}
	};
	return _RoomsMenu;
	function UI(params){
		var entries = params.entries;
		var showRoomsSearch= params.showRoomsSearch;
		var visible=false;
		var element = E.DIV();
		element.classList.add('rooms-menu');
		var buttonSearch = new Button({className:'button-search'});
		element.appendChild(buttonSearch.getElement());
		buttonSearch.addEventListener('click', showRoomsSearch);
		this.getElement = function(){
			return element;
		};
		this.add = function(entryElement){element.appendChild(entryElement);};
		this.remove = function(entryElement){element.removeChild(entryElement);};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
		this.resize = function(){
			var width= element.clientWidth;
			each(entries, function(entry){
				entry.parentWidth&&entry.parentWidth(width);
			});
		};
	}
})();