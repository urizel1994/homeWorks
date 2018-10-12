//задание 6 

function deleteTextNodesRecursive(where) {
	var childs = Array.from(where.childNodes);
  	for (var i = 0; i < childs.length; i++) {
    		if(childs[i].nodeType === 3){ 
			where.removeChild(childs[i]);
		} else{
			deleteTextNodesRecursive(childs[i]);
		}
  	}
};

//задание 7 

function collectDOMStat(root) {
	var stat = {};
	stat.tags = {};
	stat.classes = {};
	stat.texts = 0;
	var childs = Array.from(root.childNodes);
  	for (var i = 0; i < childs.length; i++) {
		if(childs[i].nodeType === 3){ 
			stat.texts++;
		} 
		if(childs[i].nodeType === 1){
			var tag = childs[i].tagName;
			var cls = childs[i].classList;
			if(!(tag in stat.tags)){
				stat.tags[tag] = 1;
				
			}
			else if(tag in stat.tags){
				stat.tags[tag]++;
			}
			for(var j = 0;j < cls.length;j++){
				if(!(cls[j] in stat.classes) && cls[j] != false){
					stat.classes[cls[j]] = 1;
				}
				else if(cls[j] in stat.classes && cls[j] != false){
					stat.classes[cls[j]]++;
				}
			}
		}
  	}
	return stat;
}

