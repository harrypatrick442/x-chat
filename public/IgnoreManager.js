var IgnoreManager = new (function(){
	const IGNORES='ignores';
	var _IgnoreManager = function(params){
		EventEnabledBuilder(this);
		var tabPortal = new TabPortal({});
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
			var ignored = Ignored.fromJSON(params);
			if(!collection.add(ignored))return;
			save();
			dispatchIgnored(params.id, ignored);
		};
		this.unignoreUser=function(user){
			self.unignoreUserById(user.getId());
		};
		this.unignoreUserById=function(id){
			var ignored = collection.removeById(id);
			if(!ignored)return;
			save();
			dispatchUnignored(id, ignored);
		};
		this.userIsIgnored=function(user){
			console.log(user);
			return self.userIdIsIgnored(user.getId());
		};
		this.userIdIsIgnored=function(id){
			return collection.containsId(id);
		};
		load();
		this.getIgnores=function(){return collection.getEntries();};
		this.clearSave=function(){	
			settings.set('ignores', []);
		};
		function save(){
			settings.set('ignores', collection.getEntries().select(x=>x.toJSON()).toList());
		}
		function dispatchIgnored(userId, ignored){
			self.dispatchEvent({type:'ignored', userId:userId, ignored:ignored});
		}
		function dispatchUnignored(userId, ignored){
			self.dispatchEvent({type:'unignored', userId:userId, ignored:ignored});
		}
		function getEntryId(ignored){
			return ignored.getId();
		}
		function ignoreUser(user){
			console.log('ignore uer');
			var ignored = Ignored.fromUser(user);
			if(!collection.add(ignored))return;
			console.log('done');
			save();
			dispatchIgnored(user.getId(), ignored);
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