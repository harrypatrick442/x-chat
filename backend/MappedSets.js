module.exports=(function (){
	var _MappedSets = function(){
		var map =new Map();
		this.add = function(id, item){
			if(!item)return false;
			var items = map.get(id);
			if(!items){
				map.set(id, new Items(item));
				return true;
			}
			return items.add(item);
		};
		this.remove= function(id, item){
			var items = map.get(id);
			if(!items){
				return false;
			}
			if(!item){
				map.delete(id);
				return true;
			}
			var removed = items.remove(item);
			if(!removed) return false;
			if(items.count()<1)
				map.delete(id);
			return true;
		};
		this.contains=function(id, item){
			var items = map.get(id);
			if(!items)return false;
			if(!item)return true;
			return items.contains(item);
		};
		this.getList = function(id){
			var items = map.get(id);
			if(!items)return;
			return items.getList();
		};
	};
	return _MappedSets;
	function Items(item){
		var self = this;
		var list =[item];
		this.add = function(item){
			if(self.contains(item))return false;
			list.push(item);
			return true;
		};
		this.remove = function(item){
			var index = list.indexOf(item);
			if(index<0)return false;
			list.splice(index, 1);
		};
		this.contains = function(item){
			return list.indexOf(item)>=0;
		};
		this.getList=function(){
			return list;
		};
		this.count = function(){ return list.length;};
	}
})();