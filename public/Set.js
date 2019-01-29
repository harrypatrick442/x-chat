var Set = (function(){
	var _Set = function(params){
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
			if(!self.contains(item)) return;
			list.splice(list.indexOf(item), 1);
			delete mapIdToItem[getEntryId(item)];
			return item;
		};
		this.removeById=function(id){
			var item = self.getById(id);
			if(!item)return;
			list.splice(list.indexOf(item), 1);
			delete mapIdToItem[id];
			return item;
		};
		this.contains=function(item){
			return mapIdToItem[getEntryId(item)]?true:false;
		};
		this.getById= function(id){
			return mapIdToItem[id];
		};
		this.containsId=function(id){return mapIdToItem[id]?true:false;};
		this.getIds = function(){
			return Object.keys(mapIdToItem);
		};
		this.getEntries = function(){return list;};
		this.each = function(func){
			each(list, func);
		};	
	};
	return _Set;
})();