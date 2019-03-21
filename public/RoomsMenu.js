var RoomsMenu = new (function(){
	var _RoomsMenu = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var showRoomsSearch = params.showRoomsSearch;
		var showRoomCreationMenu= params.showRoomCreationMenu;
		var ui = new UI({getEntries:getEntries, showRoomsSearch:showRoomsSearch, showRoomCreationMenu:showRoomCreationMenu});
		var sortedFilteredEntries = new SortedFilteredEntries({getEntryId:getEntryId, compare:compare, element:ui.getElement()	 });
		var usersMenu = params.usersMenu;
		var spinner = new Spinner({});
		//spinner.show();
		this.getId =function(){return 'RoomsMenu';};
		this.set = function(roomInfos){
			//spinner.hide();
			var ids=[];
			each(roomInfos, function(roomInfo){
				var roomEntry = sortedFilteredEntries.getByEntryId(roomInfo.id);
				if(!roomEntry){
					roomEntry = add(roomInfo);
				}
				else{
					roomEntry.update(roomInfo);
				}
				ids.push(roomEntry.getId());
			});
			each(sortedFilteredEntries.getEntries().slice(), function(entry){
				var id = entry.getId();
				if(ids.indexOf(id)<0)
					remove(id);
			});
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
		this.clear=sortedFilteredEntries.clear;
		this.getVisible = ui.getVisible;
		this.resize = ui.resize;
		this.add = function(roomInfo){
			if(sortedFilteredEntries.containsEntryId(roomInfo.id))return;
			add(roomInfo);
		};
		function getEntries(){
			return sortedFilteredEntries.getEntries();
		}
		function getEntryId(roomEntry){
			return roomEntry.getId();
		}
		function compare(roomEntryA, roomEntryB){
			
		}
		function add(roomInfo){
			var roomEntry = new RoomEntry(roomInfo);
			sortedFilteredEntries.addEntry(roomEntry);
			ui.add(roomEntry);
			roomEntry.addEventListener('selected', selected);
			return roomEntry;
		}
		function remove(id){
			var roomEntry = sortedFilteredEntries.getByEntryId(id);
			if(!roomEntry)return;
			roomEntry.dispose();
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
		var getEntries = params.getEntries;
		var showRoomsSearch= params.showRoomsSearch;
		var showRoomCreationMenu = params.showRoomCreationMenu;
		var visible=false;
		var element = E.DIV();
		element.classList.add('rooms-menu');
		var buttonSearch = new Button({className:'button-search'});
		var buttonCreate = new Button({className:'button-create'});
		element.appendChild(buttonCreate.getElement());
		element.appendChild(buttonSearch.getElement());
		buttonSearch.addEventListener('click', showRoomsSearch);
		buttonCreate.addEventListener('click', showRoomCreationMenu);
		this.getElement = function(){
			return element;
		};
		this.add = function(roomEntry){
			element.appendChild(roomEntry.getElement());
			roomEntry.parentWidth&&roomEntry.parentWidth(element.clientWidth);
		};
		this.remove = function(entryElement){element.removeChild(entryElement);};
		this.setVisible = function(value){
			visible = value;
			element.style.display=value?'block':'none';
		};
		this.getVisible = function(){return visible;};
		this.resize = function(){
			var width= element.clientWidth;
			each(getEntries(), function(entry){
				entry.parentWidth&&entry.parentWidth(width);
			});
		};
	}
})();