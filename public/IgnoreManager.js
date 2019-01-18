var IgnoreManager = new (function(){
	const IGNORES='ignores';
	var _IgnoreManager = function(params){
		EventEnabledBuilder(this);
		var self = this;
		var getUserById=params.getUserById;
		var settings = new Settings('ignore');
		var collection=new Collection({getEntryId:getEntryId});
		this.ignoreUser = function(user){
			ignoreUser(user);
		};
		this.ignoreUserById = function(id){
			if(self.userIdIsIgnored(id))return;
			console.log(id);
			var user = getUserById(id);
			if(!user)return;
			ignoreUser(user);
		};
		this.ignoreUserByIdAndUsername=function(params){
			if(!collection.add(Ignored.fromJSON(params)))return;
			save();
			dispatchIgnored(params.id);
		};
		this.unignoreUser=function(user){
			self.unignoreUserById(user.getId());
		};
		this.unignoreUserById=function(id){
			if(!collection.removeById(id))return;
			save();
			dispatchUnignored(id);
		};
		this.userIsIgnored=function(user){
			console.log(user);
			return self.userIdIsIgnored(user.getId());
		};
		this.userIdIsIgnored=function(id){
			return collection.containsId(id);
		};
		load();
		function save(){
			settings.set('ignores', collection.getEntries());
		}
		function dispatchIgnored(userId){
			self.dispatchEvent({type:'ignored', userId:userId});
		}
		function dispatchUnignored(userId){
			self.dispatchEvent({type:'unignored', userId:userId});
		}
		function getEntryId(ignored){
			return ignored.getId();
		}
		function ignoreUser(user){
			console.log('ignore uer');
			if(!collection.add(Ignored.fromUser(user)))return;
			console.log('done');
			save();
			dispatchIgnored(user.getId());
		}
		function load(){
			var list = settings.get(IGNORES);
			if(!list)return;
			each(list, function(ignored){
				collection.add(Ignored.fromJSON(ignored));
			});
		}
		
	};
	return _IgnoreManager;
})();