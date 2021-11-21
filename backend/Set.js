module.exports = (function(){
	var _Set = function(params){
		var self = this;
		var getEntryId = params.getEntryId;
		var list =[];
		const mapIdToItem=new Map();
		this.add=function(item){
			if(self.contains(item))return false;
			list.push(item);
			mapIdToItem.set(getEntryId(item), item);
			return true;
		};
		this.getById= function(id){
			return mapIdToItem.get(id);
		};
		this.remove=function(item){
			if(!self.contains(item)) return false;
			list.splice(list.indexOf(item), 1);
			mapIdToItem.delete(getEntryId(item));
			return true;
		};
		this.contains=function(item){
			return mapIdToItem.get(getEntryId(item))?true:false;
		};
		this.getById= function(id){
			return mapIdToItem.get(id);
		};
		this.getEntries = function(){return list;};
		this.getEntryIds = function(){
			return Array.from(mapIdToItem.keys());
		};
		this.count = function(){
			return list.length;
		};
		this.each = function(func){
			list.forEach(func);
		};
		this.clear = function(){
			list =[];
			mapIdToItem.clear();
		};
	};
	return _Set;
})();