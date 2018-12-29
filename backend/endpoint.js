var handler = require('./handler').handler;
exports.endpoint = function(app){
	var expressWs = require('express-ws')(app);
	console.log('doing endpoint');
	app.get('/endpoint', function(req, res, next){
	  console.log('get route', req.testing);
	  res.end();
	});
	app.ws('/endpoint', function(ws, req) {
		console.log('created endpoint');
	  ws.on('message', function(msg) {
		ws.send(handler.process(JSON.parse(msg)));
	  });
	  console.log('socket', req.testing);
	});
};