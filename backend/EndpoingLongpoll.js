module.exports=new (function(){
	var Mysockets = require('./Mysockets');
	var url = require('url');
	this.load = function(app){
		var longpoll = require("express-longpoll")(app);
		console.log(longpoll);
		longpoll.create("/poll/:id", (req,res, next) => {
			var mysocketId = req.params.id;
			req.id=mysocketId;
			next();
		});
		app.post('/poll', function(req, res, next){
			var data = req.body;
			var mysocketId = data.id;
			var msg = data.msg;
			var mysocket = Mysockets.getOrCreateLongpoll({id:mysocketId, longpoll:longpoll});
			mysocket.incomingMessage(msg);
			res.end();
		});
	};
})();