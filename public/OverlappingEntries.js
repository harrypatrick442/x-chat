var OverlappingEntries = new (function(){
	var _OverlappingEntries = function(params){
		var self = this;
		var collection=new Collection({getEntryId:getEntryId});
		var element = params.element;
		var name = params.name;
		this.show= function(entryToShow){
			var overlappingEntry = collection.getById(entryToShow.getId());
			if(!overlappingEntry)return;
			overlappingEntry.setIsSetShow(true);
			collection.each(x=>x.setVisible(x==overlappingEntry));
			bringToFront(overlappingEntry);
		};
		this.hide = function(entryToHide){
			var overlappingEntry = collection.getById(entryToHide.getId());
			overlappingEntry.setVisible(false);
			overlappingEntry.setIsSetShow(false);
			showNext(overlappingEntry)
		};
		this.add = function(entry){
			if(collection.containsId(entry.getId()))return;
			entry.addEventListener('show', show);
			entry.addEventListener('show', hide);
			var overlappingEntry = new OverlappingEntry(entry);
			collection.add(overlappingEntry);
			element.appendChild(entry.getElement());
		};
		this.remove = function(entry){
			var overlappingEntry = collection.getById(entry.getId());
			if(!overlappingEntry) return;
			collection.remove(overlappingEntry);
			overlappingEntry.removeElement();
			showNext(overlappingEntry);
		};
		function show(e){
			console.log(name+'show');
			self.show(e.entry);
		}
		function hide(e){
			console.log(name+'hide');
			self.hide(e.entry);
		}
		function bringToFront(overlappingEntry){
			collection.remove(overlappingEntry);
			collection.add(overlappingEntry);
			overlappingEntry.bringElementToFront();
		}
		function showNext(entryToHide){
			var overlappingEntryToShow = getNextToShow(entryToHide);
			if(!overlappingEntryToShow)return;
			overlappingEntryToShow.setVisible(true);
		}
		function getEntryId(entry){
			return entry.getId();
		}
		function getNextToShow(){
			var str=name+' ';
			return collection.getEntries().slice().reverse().where(x=>x.getIsSetShow()).firstOrDefault();
		}
		function OverlappingEntry(entry){
			var isSetShow = false;
			if(entry.getVisible())isSetShow = true;
			this.getId= function(){return entry.getId();};
			this.getIsSetShow = function(){return isSetShow;};
			this.setIsSetShow=function(value){
				isSetShow = value;
			};
			this.setVisible = function(value){
				entry.setVisible(value);
			};
			this.bringElementToFront=function(){
				var element = entry.getElement();
				var parent = element.parentNode;
				parent.removeChild(element);
				parent.appendChild(element);
			};
			this.removeElement = function(){
				var element = entry.getElement();
				element.parentNode.removeChild(element);
			};
			this.getString = function(){return (entry.getName?entry.getName():'')+isSetShow ;};
		}
	};
	return _OverlappingEntries;
})();