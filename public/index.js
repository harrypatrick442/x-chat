var lobby;
compatabilityCheck(function(){
	lobby = new Lobby();
	document.body.appendChild(lobby.getElement());
}, 
function(){
	window.location.href="https://www.google.com/chrome/";
});