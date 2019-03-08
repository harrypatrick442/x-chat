exports.endpoint = function(app){
	var expressWs = require('express-ws')(app);
	var Mysockets = require('./Mysockets');
	var url = require('url');
	app.get('/endpoint', function(req, res, next){
	  console.log('get route', req.testing);
	  res.end();
	});
	app.ws('/endpoint', function(ws, req) {
		try{
			var parameters = url.parse(req.url, true).query
			var mysocketId = parameters.mysocketId;
			var params = {id:mysocketId, ws:ws};
			var mysocket = Mysockets.getOrCreateWebsocket(params);
			if(!mysocketId)return;
			if(!mysocket){
				console.log('sent it');
				ws.send(JSON.stringify({disposed:true}));
				console.log('sent it');
				return;
			}
			mysocket.setWebsocket(params);
		}catch(ex){console.log(ex);}
	});
};