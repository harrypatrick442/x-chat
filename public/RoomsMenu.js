var RoomsMenu = new (function(){
	var _RoomsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var ui = new UI();
		var mapIdToRoomEntry={};
		var entries =[];
		var usersMenu = params.usersMenu;
		this.getId =function(){return 'RoomsMenu';};
		this.set = function(roomInfos){
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
		this.getVisible = ui.getVisible;
		WindowResizeManager.addEventListener('resized', resized);
		function add(roomInfo){
			var roomEntry = new RoomEntry(roomInfo);
			entries.push(roomEntry);
			mapIdToRoomEntry[roomEntry.getId()]=roomEntry;
			ui.add(roomEntry.getElement());
			var width= ui.getWidth();
			roomEntry.parentWidth(width);
			roomEntry.addEventListener('selected', selected);
			return roomEntry;
		}
		function remove(roomEntry){
			roomEntry.dispose();
			delete mapIdToRoomEntry[roomEntry.getId()];
			entries.splice(entries.indexOf(roomEntry), 1);
			ui.remove(roomEntry.getElement());
		}
		function resized(){
			var width= ui.getWidth();
			each(entries, function(entry){
				if(entry.parentWidth)entry.parentWidth(width);
			});
		}
		function selected(e){
			dispatchShowRoom(e.roomInfo);
		}
		function dispatchShowRoom(roomInfo){
			self.dispatchEvent({type:'showroom', roomInfo:roomInfo});
		}
	};
	return _RoomsMenu;
	function UI(){
		var visible=false;
		var element = E.DIV();
		element.classList.add('rooms-menu');
		this.getElement = function(){
			return element;
		};
		this.getWidth = function(){
			return element.clientWidth;
		};		
		this.add = function(entryElement){element.appendChild(entryElement);};
		this.remove = function(entryElement){element.removeChild(entryElement);};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
	}
})();