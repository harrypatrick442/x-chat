var lobby = require('./lobby');
exports.handler = new (function(){
		this.process = function(req){
			var res = {};
			console.log('doing');
			console.log(req.type);
			switch(req.type){
				case 'test':
				console.log('was test');
					res = test(req);
				break;
				case 'authenticate':
					res = lobby.authenticate(req);
				break;
				case 'room_join':
					res = lobby.getRooms().getRoom(req.roomUuid).join();
				break;
				case 'room_send_message':
					lobby.getRooms().getRoom(req.roomUuid).sendMessage(req.message);
				break;
				case 'room_get_users':
					res = lobby.getRoom(req).getUsers();
				break;
			}
			return JSON.stringify(res);
		};
		function test(jObject){
			return {type:'response',received:jObject};
		}
})();