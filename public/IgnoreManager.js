var IgnoreManager = new (function(){
	var _IgnoreManager = function(params){
		var IgnoredInfo=(function(){
			var _IgnoredInfo = function(params){
				this.getUsername = function(){return params.username;};
				this.getId=function(){return params.id;};
			};
			_IgnoredInfo.fromUser=function(user){
				return new _IgnoredInfo({id:user.getId(), username:user.getUsername()});
			};
			_IgnoredInfo.fromJSON= function(jObject){
				return new _IgnoredInfo(jObject);
			}
			return _IgnoredInfo;
		})();
		EventEnabledBuilder(this);
		var self = this;
		var getUserById=params.getUserById;
		var settings = new Settings('ignore');
		var list;
		var ignoreInfos;
		this.ignoreUser = function(user){
			var id = user.getId();
			if(self.userIdIsIgnored(id))return;
			ignoreUser(user);
		};
		this.ignoreUserById = function(id){
			if(self.userIdIsIgnored(id))return;
			var user = getUserById(id);
			if(!user)return;
			ignoreUser(user);
		};
		this.unignoreUser=function(user){
			self.unignoreUserById(user.getId());
		};
		this.unignoreUserById=function(id){
			var index = list.indexOf(id);
			if(index<0)_return;
			delete ignoredInfos[id];
			list.splice(index, 1);
			save();
			dispatchUnignored(id);
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
		function dispatchIgnored(userId){
			self.dispatchEvent({type:'ignored', userId:userId});
		}
		function dispatchUnignored(userId){
			self.dispatchEvent({type:'unignored', userId:userId});
		}
		function ignoreUser(user){
			ignoredInfos[user.getId()]=IgnoredInfo.fromUser(user);
			list.push(id);
			save();
			dispatchIgnored(id);
		}
		function load(){
			list =settings.get('list');
			if(!list)list=[];
			var ignoreInfoList = settings.get('ignoreInfos');
			ignoreInfos={};
			each(ignoredInfoList, function(entry){
				
			});
		}
		
	};
	return _IgnoreManager;
})();