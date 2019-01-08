var OverlappingEntries = new (function(){
	
	var _OverlappingEntries = function(params){
		var entries=[];
		var element = params.element;
		this.show= function(entryToShow){
			each(entries, function(entry){
				entry.setVisible(entry==entryToShow);
			});
		};
		this.add = function(entry){
			if(contains(entry))return;
			entries.push(entry);
			element.appendChild(entry.getElement());
		};
		this.remove = function(entry){
			var index = entries.indexOf(entry);
			if(index<0)return;
			entries.splice(index, 1);
			element.removeChild(entry.getElement());
		};
		function contains(entry){
			return entries.indexOf(entry)>=0;
		}
	};
	return _OverlappingEntries;
})();