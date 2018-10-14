//задание 1

function createDivWithText(text) {
	var div = document.createElement('div');
	div.innerHTML = text;
	return div;
}

//задание 2

var prepend = (what, where) => where.appendChild(what);

//задание 3

function findAllPSiblings(where) {
	var result = [];
	for(var i = 0; i < where.children.length - 1; i++){
		if(where.children[i].nextElementSibling.tagName === "P"){
			result.push(where.children[i]);
		}
	}
	return result;
}

//задание 4

function findError(where) {
    var result = [];
    for (var child of where.children) {
    	if(child.innerText){
        	result.push(child.innerText);
        }
    }
    return result;
}

//задание 5

function deleteTextNodes(where) {
	for (var child of where.childNodes) {
    	if(child.nodeType === 3){
        	where.removeChild(child);
        }
    }
    console.log(where.childNodes);
    return where.childNodes;
}

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

//задание 8

function observeChildNodes(where,fn) {
	var nodeInfo = {};
	var observer = new MutationObserver(function(mutations) {
 		mutations.forEach(function(mutation) {
    		console.log(mutation.type);
    		if(mutation.addedNodes.length){
   				nodeInfo['type'] = 'insert';
   				nodeInfo['nodes'] = Array.from(mutation.addedNodes);
   			}	
   			else if(mutation.removedNodes.length){
   				nodeInfo['type'] = 'remove';
   				nodeInfo['nodes'] = Array.from(mutation.removedNodes);
   			}
   			fn(nodeInfo);
  		});    
	});
	var config = {childList: true, subtree: true};
	observer.observe(where, config);
}

observeChildNodes(document.body, function(obj){
	console.log(obj);
});
 


