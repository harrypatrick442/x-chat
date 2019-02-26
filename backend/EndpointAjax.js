module.exports=new (function(){
	var Mysockets = require('./Mysockets');
	var url = require('url');
	this.load = function(app){
		var longpoll = require("express-longpoll")(app);
		longpoll.create("/endpoint_ajax/:mysocketId", (req,res, next) => {
			console.log('got request');
			console.log(params);
			var mysocketId = req.params.mysocketId;
			var mysocket = Mysockets.getOrCreateAjax(mysocketId);
			next();
		});
		/*app.post('/endpoint_ajax', function(req, res, next){
			console.log('got request');
			var params = req.body;
			var mysocketId = params.mysocketId;
			console.log(mysocket);
			console.log('endpoint_ajax');
			res.end();
		});*/
	};
})();