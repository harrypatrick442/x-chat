MappedLists=(function (){
	var _MappedLists = function(){
		var map ={};
		this.add = function(id, item){
			if(!item)return false;
			var items = map[id];
			if(!items){
				map[id]=new Items(item);
				return true;
			}
			return items.add(item);
		};
		this.remove= function(id, item){
			var items = map[id];
			if(!items){
				return false;
			}
			if(!item){
				delete map[id];
				return true;
			}
			var removed = items.remove(item);
			if(!removed) return false;
			if(items.count()<1)
				delete map[id];
			return true;
		};
		this.contains=function(id, item){
			var items = map[id];
			if(!items)return false;
			if(!item)return true;
			return items.contains(item);
		};
		this.getList = function(id){
			var items = mapIdToInstance[id];
			if(!items)return;
			return items.getList();
		};
	};
	return _MappedLists;
	function Items(item){
		var self = this;
		var list =[];
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