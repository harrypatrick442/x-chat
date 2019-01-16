var IgnoreManager = new (function(){
	var _IgnoreManager = function(){
		var self = this;
		var settings = new Settings('ignore');
		var list =settings.get('list');
		if(!list)list=[];
		this.ignoreUser = function(user){
			self.ignoreUserById(user.getId());
		};
		this.ignoreUserById = function(id){
			if(self.userIdIsIgnored(id))return;
			list.push(id);
			save();
		};
		this.unignoreUser=function(user){
			self.unignoreUserById(user.getId());
		};
		this.unignoreUserById=function(id){
			var index = list.indexOf(id);
			if(index<0)_return;
			list.splice(index, 1);
			save();
		};
		this.userIsIgnored=function(user){
			console.log(user);
			return self.userIdIsIgnored(user.getId());
		};
		this.userIdIsIgnored=function(id){
			return list.indexOf(id)>=0;
		};
		function save(){
			settings.set('list', list);
		}
	};
	return _IgnoreManager;
})();