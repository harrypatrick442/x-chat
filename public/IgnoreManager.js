var IgnoreManager = new (function(){
	var _IgnoreManager = function(){
		var self = this;
		var settings = new Settings('ignore');
		var list =settings.get('list');
		if(!list)list=[];
		this.addUserId = function(id){
			if(self.userIsIgnored(id))return;
			list.push(id);
			save();
		};
		this.removeUserId=function(){
			var index = list.indexOf(id);
			if(index<0)_return;
			list.splice(index, 1);
			save();
		};
		this.userIsIgnored=function(user){
			return self.userIdIsIgnored(user.getId());
		};
		this.userIdIsIgnored=function(){
			return list.indexOf(id)>=0;
		};
		function save(){
			settings.set('list', list);
		}
	};
	return _IgnoreManager;
})();