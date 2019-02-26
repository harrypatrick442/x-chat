module.exports=new (function(){
	const URL="/poll/:id";
	var Mysockets = require('./Mysockets');
	var url = require('url');
	var Longpoll = require("express-longpoll");
	this.load = function(app){
		console.log(Longpoll);
		console.log('about to create');
		var longpoll = new Longpoll(app);
		console.log(longpoll);
		longpoll.create(URL, (req,res, next) => {
			var mysocketId = req.params.id;
			req.id=mysocketId;
			console.log('created');
			console.log(this);
			next();
		});
		app.post('/poll', function(req, res, next){
			var data = req.body;
			var mysocketId = data.id;
			var msg = data.msg;
			var mysocket = Mysockets.getOrCreateLongpoll(mysocketId, longpoll, URL);
			mysocket.incomingMessage(msg);
			console.log('end');
			res.send({id:mysocket.getId()});
			res.end();
		});
	};
})();