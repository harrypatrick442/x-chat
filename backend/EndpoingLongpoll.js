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
			console.log('mysocket id is: '+mysocketId);
			var msg = data.msg;
			var longpoll;
			if(mysocketId){console.log('getting by id');
				longpoll= longpolls.getById(mysocketId);
			}
			else
			{
				mysocketId = Mysockets.getNewId();
				console.log('new id');
			}
			console.log('longpoll is: ');
			console.log(longpoll);
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