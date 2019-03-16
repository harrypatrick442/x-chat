var OverlappingEntries = new (function(){
	var _OverlappingEntries = function(params){
		var self = this;
		var set=new Set({getEntryId:getEntryId});
		var element = params.element;
		var name = params.name;
		this.show= function(entryToShow){
			var overlappingEntry = set.getById(entryToShow.getId());
			if(!overlappingEntry)return;
			overlappingEntry.setIsSetShow(true);
			set.each(function(x){ return x.setVisible(x==overlappingEntry);});
			bringToFront(overlappingEntry);
		};
		this.hide = function(entryToHide){
			var overlappingEntry = set.getById(entryToHide.getId());
			overlappingEntry.setVisible(false);
			overlappingEntry.setIsSetShow(false);
			var nextToShow = showNext(overlappingEntry);
			if(!nextToShow)return;
			bringToFront(nextToShow);
		};
		this.add = function(entry){
			if(set.containsId(entry.getId()))return;
			entry.addEventListener('show', show);
			entry.addEventListener('show', hide);
			var overlappingEntry = new OverlappingEntry(entry);
			set.add(overlappingEntry);
			element.appendChild(entry.getElement());
		};
		this.remove = function(entry){
			var overlappingEntry = set.getById(entry.getId());
			if(!overlappingEntry) return;
			set.remove(overlappingEntry);
			overlappingEntry.removeElement();
			showNext(overlappingEntry);
		};
		this.getTopEntry = function(){
			return set.getByIndex(set.count()-1);
		};
		function show(e){
			self.show(e.entry);
		}
		function hide(e){
			self.hide(e.entry);
		}
		function bringToFront(overlappingEntry){
			set.remove(overlappingEntry);
			set.add(overlappingEntry);
			overlappingEntry.bringElementToFront();
		}
		function showNext(entryToHide){
			var overlappingEntryToShow = getNextToShow(entryToHide);
			if(!overlappingEntryToShow)return;
			overlappingEntryToShow.setVisible(true);
			return overlappingEntryToShow;
		}
		function getEntryId(entry){
			return entry.getId();
		}
		function getNextToShow(){
			var str=name+' ';
			return set.getEntries().slice().reverse().where(function(x){ return x.getIsSetShow();}).firstOrDefault();
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
			this.getEntry = function(){return entry; };
		}
	};
	return _OverlappingEntries;
})();