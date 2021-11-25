var lobby;
Raven.config("https://d676acb9c5e841e4862cb8e21d93b280@o447115.ingest.sentry.io/6080158").install();
Raven.context(function(){
	compatabilityCheck(function(){
			lobby = new Lobby();
			document.body.appendChild(lobby.getElement());
	}, 
	function(){
		window.location.href="https://www.google.com/chrome/";
	});
});