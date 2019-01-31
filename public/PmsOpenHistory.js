function PmsOpenHistory(params){
		const LIST_USERS = 'listUsers';
		const PMS_OPEN_HISTORY='PmsOpenHistory_';
		var id = PMS_OPEN_HISTORY+userMeId;
		var userMeId = params.userMeId;
		var tabPortal = new TabPortal({id:id});
		var settings = new Settings(getId);
		var set = new Set({getEntryId:getEntryId});
		var tabPortal = new TabPortal({id:id});
		this.add= function(user){
			add(user);
			sendAddToOtherTabs(user);
		};
		this.remove = function(user){
			remove(user);
			sendRemoveToOtherTabs(user);
		};
		this.getUsers = set.getEntries;
		load();
		function add(user){
			set.add(user);
			save();
		}
		function getEntryId(user){
			return user.getId();
		}
		function load(){
			var listUsers = settings.get(LIST_USERS);
			if(!listUsers){
				listUsers=[];
				return
			}
			each(listUsers, function(user){
				user = User.fromJSON(user);
				set.add(user);
			});
		}
		function save(){
			var listUsers =[];
			each(set.getEntries(), function(user){
				console.log(user);
				listUsers.push(user.toJSON());
			});
			settings.set(LIST_USERS, listUsers);
		}
		function sendAddToOtherTabs(user){
			tabPortal.sendMessage({type:'add', user: user.toJSON()});
		}
		function sendRemoveToOtherTabs(user){
			tabPortal.sendMessage({type:'remove', user: user.toJSON()});
		}
		function sendRemoveToOtherTabs(user){
			tabPortal.sendMessage({type:'remove', user: user.toJSON()});
		}
	}