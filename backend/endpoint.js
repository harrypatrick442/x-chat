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
		console.log('created endpoint');
	  var mysocket = Mysocket.fromWebsocket(ws);
	  (function(mysocket){
		  ws.on('message', function(msg) {
			  console.log(msg);
			handler.process(JSON.parse(msg), mysocket, function(res){ws.send(JSON.stringify(res));});
		  });
	  })(mysocket);
	  console.log('socket', req.testing);
		}catch(ex){console.log(ex);}
	});
};