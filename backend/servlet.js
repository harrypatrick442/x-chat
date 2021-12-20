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
	var lobby =require('./lobby');
	var sessions = lobby.getSessions();
	app.post('/get_user_id_from_session_id', (request, response)=>{
		const req = request.body;
		console.log('got request');
		console.log(req);
		console.log(typeof(req));
		const session = sessions.getById(req.sessionId);
		console.log(session);
		if(session===undefined||session===null){
			response.json({userId:null});
			return;
		}
		console.log('got a session');
		const userId = session.getUser().getId();
		console.log('userId: '+userId);
		response.json({userId:userId});
	});
};
