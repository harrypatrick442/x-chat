module.exports= function(app, server){
	const expressWs = require('express-ws')(app, server);
	const ChannelType = require('./ChannelType');
	const Mysockets = require('./Mysockets');
	const url = require('url');
	app.get('/endpoint', function(req, res, next){
	  res.end();
	});
	app.ws('/endpoint', function(ws, req) {
		try{
			var parameters = url.parse(req.url, true).query;
			var mysocketId = parameters.mysocketId;
			var params = {id:mysocketId, ws:ws};
			var mysocket = Mysockets.getOrCreateWebsocket(params);
			if(!mysocket){
				if(mysocketId){
					ws.send(JSON.stringify({disposed:true, callstack:new Error().stack}));
				}
				return;
			}
		}catch(ex){console.log(ex);}
	});
};