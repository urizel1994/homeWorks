// ������� 1

function addListener(eventName, target, fn) {
	target.addEventListener(eventName, fn);	
}

// ������� 2

function removeListener(eventName, target, fn) {
	target.removeEventListener(eventName, fn);	
}

// ������� 3

function skipDefault(eventName, target) {
	target.addEventListener(eventName, function(event){
		event.preventDefault();
	});
}

// ������� 4

function emulateClick(target) {
	var click = new Event("click");
  	target.dispatchEvent(click);
}

// ������� 5

function delegate(target, fn) {
	target.addEventListener("click", function(event){
		if(event.target.tagName === "BUTTON"){
			return fn(event.target);
		}
	});
}

// ������� 6

function once(target, fn) {


	var eventHasRun = false;
	target.addEventListener("click",function(event){
		if(a === false){
			fn();
			eventHasRun = true;
		} 
	});
}
	



