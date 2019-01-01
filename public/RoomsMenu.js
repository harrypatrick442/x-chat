var RoomsMenu = new (function(){
	var _RoomsMenu = function(){
		EventEnabledBuilder(this);
		var self = this;
		var ui = new UI();
		var mapIdToRoomEntry={};
		var entries =[];
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
		this.setVisible = ui.setVisible;
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
		window.addEventListener("resize", resize);
		function resize(){
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
			element.style.display=value?'block':'none';
		};
	}
})();