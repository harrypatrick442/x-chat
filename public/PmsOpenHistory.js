function PmsOpenHistory(params){
		const LIST_USERS = 'listUsers';
		const PMS_OPEN_HISTORY='PmsOpenHistory_';
		var id = PMS_OPEN_HISTORY+userMeId;
		var userMeId = params.userMeId;
		var settings = new Settings(id);
		var set = new Set({getEntryId:getEntryId});
		var tabPortal = new TabPortal({id:id});
		this.add= function(user){
			add(user);
		};
		this.remove = function(user){
			remove(user);
		};
		this.getUsers = set.getEntries;
		load();
		function add(user){
			set.add(user);
			save();
		}
		function remove(user){
			set.remove(user);
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
	}