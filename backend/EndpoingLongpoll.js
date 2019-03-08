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
			var mysocketId = data.id	
			var msg = data.msg;
			var longpoll;
			if(mysocketId){
				longpoll= longpolls.getById(mysocketId);
			}
			if(!longpoll)
			{	
				var mysocket = Mysockets.getOrCreateLongpoll(mysocketId, function(id){
					longpoll = new Longpoll({app:app, id:id, url:URL});
					longpolls.add(longpoll);
					setTimeout(function(){
						
						longpoll.dispose();
					}, 10000);
					return longpoll;
				});
				if(!mysocket)
				{
					res.json({disposed:true});
					return;
				}
				mysocketId = mysocket.getId();
			}
			console.log(msg);
			longpoll.incomingMessage(msg);
			res.send({id:mysocketId});
		});
	};
})();