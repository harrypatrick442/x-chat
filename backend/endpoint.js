exports.endpoint = function(app){
	var handler = require('./handler').handler;
	var expressWs = require('express-ws')(app);
	console.log('doing endpoint');
	app.get('/endpoint', function(req, res, next){
	  console.log('get route', req.testing);
	  res.end();
	});
	app.ws('/endpoint', function(ws, req) {
		console.log('created endpoint');
	  ws.on('message', function(msg) {
		handler.process(JSON.parse(msg), function(res){ws.send(JSON.stringify(res));});
	  });
	  console.log('socket', req.testing);
	});
};