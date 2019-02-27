module.exports=new (function(){
	const URL="/poll";
	var Mysockets = require('./Mysockets');
	var url = require('url');
	var Longpolls = require("Longpolls");
	var Longpoll = require("Longpoll");
	this.load = function(app){
		var longpolls = new Longpolls();
		app.post('/poll', function(req, res, next){
			var data = req.body;
			var mysocketId = data.id;
			var msg = data.msg;
			var longpoll = longpolls.getById(mysocketId);
			if(!longpoll)
			{
				longpoll = new Longpoll({app:app, id:mysocketId, url:URL});
				Mysockets.getOrCreateLongpoll(mysocketId, longpoll);
			}
			longpoll.incomingMessage(msg);
			res.send({id:mysocket.getId()});
		});
	};
})();