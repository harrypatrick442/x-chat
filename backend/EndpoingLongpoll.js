module.exports=new (function(){
	const URL="/poll";
	var Mysockets = require('./Mysockets');
	var url = require('url');
	var Longpolls = require("./Longpolls");
	var Longpoll = require("./Longpoll");
	this.load = function(app){
		var longpolls = new Longpolls();
		app.post('/poll', function(req, res, next){
			var data = req.body;
			var mysocketId = data.id;
			var msg = data.msg;
			var longpoll;
			if(mysocketId)
				longpoll= longpolls.getById(mysocketId);
			else
				mysocketId = Mysockets.getNewId();
			if(!longpoll)
			{
				longpoll = new Longpoll({app:app, id:mysocketId, url:URL});
				longpolls.add(longpoll);
				var mysocket = Mysockets.getOrCreateLongpoll(mysocketId, longpoll);
				mysocketId = mysocket.getId();
			}
			longpoll.incomingMessage(msg);
			res.send({id:mysocketId});
		});
	};
})();