
var FancyTextTranslator = new(function(){
	var smallBold = {' ':' ','!':'!','"':'"','#':'#','$':'$','%':'%','&':'&','\'':'\'','(':'(',')':')','*':'*','+':'+',',':',','-':'-','.':'.','/':'/','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',':':':',';':';','<':'<','=':'=','>':'>','?':'?','@':'@','A':'ᴀ','B':'ʙ','C':'ᴄ','D':'ᴅ','E':'ᴇ','F':'ғ','G':'ɢ','H':'ʜ','I':'ɪ','J':'ᴊ','K':'ᴋ','L':'ʟ','M':'ᴍ','N':'ɴ','O':'ᴏ','P':'ᴘ','Q':'ǫ','R':'ʀ','S':'s','T':'ᴛ','U':'ᴜ','V':'ᴠ','W':'ᴡ','X':'x','Y':'ʏ','Z':'ᴢ','[':'[','\\':'\\',']':']','^':'^','_':'_','`':'`','a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ғ','g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ','s':'s','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'ʏ','z':'ᴢ','{':'{','|':'|','}':'}','~':'~','':'',};
	var scifi = {' ':' ','!':'!','"':'"','#':'#','$':'$','%':'%','&':'&','\'':'\'','(':'(',')':')','*':'*','+':'+',',':',','-':'-','.':'.','/':'/','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',':':':',';':';','<':'<','=':'=','>':'>','?':'?','@':'@','A':'ᗩ','B':'ᗷ','C':'ᑕ','D':'ᗞ','E':'ᕮ','F':'ᖴ','G':'Ꮆ','H':'ᕼ','I':'Ꮖ','J':'ᒍ','K':'Ꮶ','L':'ᒪ','M':'ᗰ','N':'ᑎ','O':'ⵔ','P':'Ꮲ','Q':'ⵕ','R':'Ꮢ','S':'ᔕ','T':'Ꭲ','U':'ᑌ','V':'Ꮩ','W':'ᗯ','X':'᙭','Y':'Ꭹ','Z':'ᘔ','[':'[','\\':'\\',']':']','^':'^','_':'_','`':'`','a':'ᗩ','b':'ᗷ','c':'ᑕ','d':'ᗞ','e':'ᕮ','f':'ᖴ','g':'Ꮆ','h':'ᕼ','i':'Ꮖ','j':'ᒍ','k':'Ꮶ','l':'ᒪ','m':'ᗰ','n':'ᑎ','o':'ⵔ','p':'Ꮲ','q':'ⵕ','r':'Ꮢ','s':'ᔕ','t':'Ꭲ','u':'ᑌ','v':'Ꮩ','w':'ᗯ','x':'᙭','y':'Ꭹ','z':'ᘔ','{':'{','|':'|','}':'}','~':'~','':''};
	this.scifi = function(str){
		return translate(scifi, str);
	};
	this.smallBold = function(str){
		return translate(smallBold, str);
	};
	function translate(map, str){
		var s ='';
		for(var i=0; i<str.length; i++){
			var o = str[i];
			var n = map[o];
			s+=(n==undefined?o:n);
		}
		return s;
	}
})();/*var specials =[' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','ᴀ','ʙ','ᴄ','ᴅ','ᴇ','ғ','ɢ','ʜ','ɪ','ᴊ','ᴋ','ʟ','ᴍ','ɴ','ᴏ','ᴘ','ǫ','ʀ','s','ᴛ','ᴜ','ᴠ','ᴡ','x','ʏ','ᴢ','[','\\',']','^','_','`','ᴀ','ʙ','ᴄ','ᴅ','ᴇ','ғ','ɢ','ʜ','ɪ','ᴊ','ᴋ','ʟ','ᴍ','ɴ','ᴏ','ᴘ','ǫ','ʀ','s','ᴛ','ᴜ','ᴠ','ᴡ','x','ʏ','ᴢ','{','|','}','~',''];
	var normal = [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','[','\\',']','^','_','`','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','{','|','}','~',''];
	var mapStr = 'var map = {';
	console.log(normal);
	for(var i=0; i<normal.length; i++){
		var key = normal[i];
		var value = specials[i];
		console.log(i);
		mapStr+="'"+(key=="'"||key=='\\'?'\\'+key:key)+"':'"+(key=="'"||key=='\\'?'\\'+value:value)+"',";
	console.log(mapStr);
	}
	mapStr+='};';
	console.log(mapStr);*/