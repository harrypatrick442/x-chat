var lobby;
compatabilityCheck(function(){
	lobby = new Lobby();
	document.body.appendChild(lobby.getElement());
});