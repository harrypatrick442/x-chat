@@ -4,21 +4,35 @@ var OverlappingEntries = new (function(){
		var self = this;
		var collection=new Collection({getEntryId:getEntryId});
		var element = params.element;
		var name = params.name;
		this.show= function(entryToShow){
			console.log(name+'.show');
			var overlappingEntry = collection.getById(entryToShow.getId());
			if(!overlappingEntry)return;
			overlappingEntry.setIsSetShow(true);
			collection.each(x=>x.setVisible(x==overlappingEntry));
			bringToFront(overlappingEntry);
			var str=name+' ';
			each(collection.getEntries(), function(oe){
				str+=oe.getString()+',';
			});
			console.log(str);
		};
		this.hide = function(entryToHide){
			console.log(name+'.hide');
			console.log(entryToHide);
			var overlappingEntry = collection.getById(entryToHide.getId());
			overlappingEntry.setVisible(false);
			overlappingEntry.setIsSetShow(false);
			showNext(overlappingEntry)
			showNext(overlappingEntry);
			var str=name+' ';
			each(collection.getEntries(), function(oe){
				str+=oe.getString()+',';
			});
			console.log(str);
		};
		this.add = function(entry){
			console.log(name+'.add');
			if(collection.containsId(entry.getId()))return;
			entry.addEventListener('show', show);
			entry.addEventListener('show', hide);
@ -27,6 +41,7 @@ var OverlappingEntries = new (function(){
			element.appendChild(entry.getElement());
		};
		this.remove = function(entry){
			console.log('.remove');
			var overlappingEntry = collection.getById(entry.getId());
			if(!overlappingEntry) return;
			collection.remove(overlappingEntry);
@ -34,17 +49,22 @@ var OverlappingEntries = new (function(){
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
			console.log(name+'bringToFront');
			console.log(overlappingEntry.getString());
			collection.remove(overlappingEntry);
			collection.add(overlappingEntry);
			overlappingEntry.bringElementToFront();
		}
		function showNext(entryToHide){
			console.log(name+'showNext');
			var overlappingEntryToShow = getNextToShow(entryToHide);
			if(!overlappingEntryToShow)return;
			overlappingEntryToShow.setVisible(true);
			var OverlappingEntries = new (function(){
			return entry.getId();
		}
		function getNextToShow(){
			return collection.getEntries().reverse().where(x=>x.getIsSetShow()).firstOrDefault();
			var str=name+' ';
			var r = collection.getEntries().reverse();
			each(r, function(oe){
				str+=oe.getString()+',';
			});
			console.log(str);
			return r.where(x=>x.getIsSetShow()).firstOrDefault();
		}
		function OverlappingEntry(entry){
			var isSetShow = false;
			var OverlappingEntries = new (function(){
				var element = entry.getElement();
				element.parentNode.removeChild(element);
			};
			this.getString = function(){return (entry.getName?entry.getName():'')+isSetShow ;};
		}
	};
	return _OverlappingEntries;