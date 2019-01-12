exports.endpoint = function(app){
	var handler = require('./handler').handler;
	var expressWs = require('express-ws')(app);
	var Mysocket = require('./Mysocket').Mysocket;
	app.get('/endpoint', function(req, res, next){
	  console.log('get route', req.testing);
	  res.end();
	});
	app.ws('/endpoint', function(ws, req) {
		try{
	  (function(mysocket){
		  ws.on('message', function(msg) {
				handler.process(JSON.parse(msg), mysocket, function(res){ws.send(JSON.stringify(res));});
		  });
		  ws.on('close', function(){
				mysocket.close();
		  });
	  })(Mysocket.fromWebsocket(ws));
	  console.log('socket', req.testing);
		}catch(ex){console.log(ex);}
	});
};