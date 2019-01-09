exports.servlet=function(app){
	var dal = require('./dal');
	var path = require('path');
	var bodyParser = require('body-parser');
	var handler = require('./handler').handler;
	app.use(bodyParser.json());
	app.post('/servlet', function (request, response) {
		var req = request.body;
		var res ={type:'failed'};
		res = handler.process(req);
		response.json(res);
	});
};
