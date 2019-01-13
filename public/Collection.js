var Collection = (function(){
	var _Collection = function(params){
		var self = this;
		var getEntryId = params.getEntryId;
		var list =[];
		var mapIdToItem={};
		this.add=function(item){
			if(self.contains(item))return false;
				list.push(item);
			mapIdToItem[getEntryId(item)]=item;
			return true;
		};
		this.remove=function(item){
			if(!self.contains(item)) return false;
			list.splice(list.indexOf(item), 1);
			delete mapIdToItem[getEntryId(item)];
			return true;
		};
		this.contains=function(item){
			return mapIdToItem[getEntryId(item)]?true:false;
		};
		this.getById= function(id){
			return mapIdToItem[id];
		};
		this.containsEntryId=function(id){return mapIdToItem[id]?true:false;};
		this.getEntryIds = function(){
			return Object.keys(mapIdToItem);
		};
		this.each = function(func){
			each(list, func);
		};	
	};
	return _Collection;
})();