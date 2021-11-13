module.exports=function(app){
	var path = require('path');
	var bodyParser = require('body-parser');
	var handler = require('./handler');
	app.use(bodyParser.json());
	app.post('/servlet', function (request, response) {
		var req = request.body;
		var res ={type:'failed'};
		res = handler.process(req);
		response.json(res);
	});
};
