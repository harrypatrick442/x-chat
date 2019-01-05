var EmoticonsParser = new (function(){
	var _EmoticonsParser = function(params){
		var emoticonsLibrary = params.emoticonsLibrary;
		var searchTree = {};
		this.pipe = function(component, callback){
			if(component.type!=MessageComponents.Text.TYPE){callback(component);return;}
			var str = component.getString();
			var subTree = searchTree;
			var i={value:0};
			var length = str.length;
			var startIndex=0;
			while(i.value<length){
				var sub =searchTree[str[i]];
				if(sub){
					var matchStartIndex =i.value;
					var emoticonInfo = matching(i, length, str, sub);
					if(emoticonInfo){
						if(matchStartIndex>startIndex)
							callback(new MessageComponents.Text(str.substring(startIndex, matchStartIndex)));
						callback(new MessageComponents.Emoticon(emoticonInfo));
						startIndex=i;
					}
				}
				else 
					i.value++;
			}
			if(i>startIndex)
				callback(new MessageComponents.Text(str.substring(startIndex, i.value)));
		};
		function matching(i, length, str, sub){
			var latestMatch;
			while(true){
					i.value++;
					if(sub.emoticonInfo)latestMatch = sub.emoticonInfo;
					if(i>=length) return latestMatch;
					sub = sub[str[i.value]];
					if(!sub) return latestMatch;
			}
		}
		function populateSearchTree(emoticonLibrary){
			var emoticons = emoticonLibrary;
			each(emoticons, function(emoticon){
				var emoticonInfo = new EmoticonInfo(emoticon);
				each(emoticon.strings, function(str){
					createBranch(str, emoticonInfo);
				});
			});
		}
		function createBranch(str, emoticonInfo){
			if(str.length<1)return;//avoiding the potential for an emoticon coded for by an empty string.
			var subTree = searchTree;
			each(str, function(c){
				var existingSubTree = subTree[c];
				if(existingSubTree)subTree=existingSubTree;
				else{
					var newSubTree = {};
					subTree[c]=newSubTree;
					subTree=newSubTree;
				}
			});
			subTree.emoticonInfo = emoticonInfo;
		}
	}
	return _EmoticonsParser;
})();