var Set = (function(){
	var _Set = function(params){
		var self = this;
		var getEntryId = params.getEntryId;
		var list =[];
		var mapIdToItem=new Map();
		this.add=function(item){
			if(self.contains(item))return false;
				list.push(item);
			mapIdToItem.set(getEntryId(item), item);
			return true;
		};
		this.remove=function(item){
			if(!self.contains(item)) return;
			list.splice(list.indexOf(item), 1);
			mapIdToItem.delete(getEntryId(item));
			return item;
		};
		this.removeById=function(id){
			var item = self.getById(id);
			if(!item)return;
			list.splice(list.indexOf(item), 1);
			mapIdToItem.delete(id);
			return item;
		};
		this.count = function(){return list.length; };
		this.contains=function(item){
			return mapIdToItem.get(getEntryId(item))?true:false;
		};
		this.getByIndex=function(index){
			return list[index];
		};
		this.getById= function(id){
			return mapIdToItem.get(id);
		};
		this.containsId=function(id){return mapIdToItem.get(id)?true:false;};
		this.getIds = function(){
			return Array.from(mapIdToItem.keys());
		};
		this.getEntries = function(){return list;};
		this.each = function(func){
			each(list, func);
		};	
	};
	return _Set;
})();