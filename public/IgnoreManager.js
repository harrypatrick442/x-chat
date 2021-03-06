var IgnoreManager = new (function(){
	var IGNORES='ignores';
	var _IgnoreManager = function(params){
		EventEnabledBuilder(this);
		var tabPortal = new TabPortal({id:'IgnoreManager'});
		var self = this;
		var getUserById=params.getUserById;
		var getUserMe = params.getUserMe;
		var settings = new Settings('ignore');
		var set=new Set({getEntryId:getEntryId});
		this.ignoreUser = function(user){
			ignoreUser(user);
		};
		this.ignoreUserById = function(id){
			if(self.userIdIsIgnored(id))return;
			var user = getUserById(id);
			if(!user)return;
			ignoreUser(user);
		};
		this.ignoreUserByIdAndUsername=function(params){
			var ignored = Ignored.fromJSON(params);
			ignore(ignored);
		};
		this.unignoreUser=function(user){
			self.unignoreUserById(user.getId());
		};
		this.unignoreUserById=function(id){
			var ignored = set.removeById(id);
			if(!ignored)return;
			dispatchUnignored(ignored.getId(), ignored);
			sendUnignoredToOtherTabs(ignored);
		};
		this.userIsIgnored=function(user){
			return self.userIdIsIgnored(user.getId());
		};
		this.userIdIsIgnored=function(id){
			return set.containsId(id);
		};
		this.getIgnores=function(){return set.getEntries();};
		this.clearSave=function(){	
			settings.set('ignores', []);
		};
		this.load = function(){
			var list = settings.get(IGNORES);
			if(!list)return;
			each(list, function(ignored){
				set.add(Ignored.fromJSON(ignored));
			});
		};
		tabPortal.addEventListener('message', messageFromAnotherTab);
		function save(){
			settings.set('ignores', set.getEntries().select(function(x){ return x.toJSON();}).toList());
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
			var ignored = Ignored.fromUser(user);
			ignore(ignored);
		}
		function ignore(ignored){
			if(!set.add(ignored))return;
			save();
			dispatchIgnored(ignored.getId(), ignored);
			sendIgnoredToOtherTabs(ignored);
		}
		function messageFromAnotherTab(e){
			var ignored = Ignored.fromJSON(e.message.ignored);
			switch(e.message.type){
				case 'ignore':
					incomingIgnored(ignored);
				break;
				case 'unignore':
					incomingUnignored(ignored);
				break;
			}
			
		}
		function incomingIgnored(ignored){
			if(ignored.getId()==getUserMe().getId())return ;
			if(!set.add(ignored))return;
			save();
			dispatchIgnored(ignored.getId(), ignored);
		}
		function incomingUnignored(ignored){
			if(!set.remove(ignored))return;
			save();
			dispatchUnignored(ignored.getId(), ignored);
		}
		function sendIgnoredToOtherTabs(ignored){
			tabPortal.sendMessage({type:'ignore', ignored: ignored.toJSON()});
		}
		function sendUnignoredToOtherTabs(ignored){
			tabPortal.sendMessage({type:'unignore', ignored: ignored.toJSON()});
		}
	};
	return _IgnoreManager;
})();