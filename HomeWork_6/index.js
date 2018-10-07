// задание 1
function isAllTrue(array, fn) {
	if(!Array.isArray(array)||array.length === 0){
		throw new Error("empty array");
	}
	else if(typeof(fn) !== "function"){
		throw new Error("fn is not a function");
	}
	else {
		var count = 0;
		for(i = 0; i < array.length; i++){
			if(fn(array[i]) === true){
				count++;
			}
		}
		if(count === array.length){
			return true;
		} else {
			return false;
		}
	}	
}

// задание 2

function isSomeTrue(array, fn) {
	if(!Array.isArray(array)||array.length === 0){
		throw new Error("empty array");
	}
	else if(typeof(fn) !== "function"){
		throw new Error("fn is not a function");
	} else {
		var count = 0;
		for(i = 0; i < array.length; i++){
			if(fn(array[i]) === true){
				count++;
			}
		}
		if(count > 0){
			return true;
		} else {
			return false;
		}
	}	
}

// задание 3

function returnBadArguments(fn,...args) {
	if(typeof(fn) !== "function"){
		throw new Error("fn is not a function");
	} else {
		var badArgs = [];
		for(i = 0; i < args.length; i++){
			try {
				fn(args[i]);
			}
			catch(e) {
				badArgs.push(args[i]);
			}
		}
		return badArgs;
	}
}


// задание 4

//проверка на число
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function calculator(number = 0) {
	if(!isNumeric(number)){
		throw new Error("number is not a number");
	} else {
		return {
			sum: function(...args){
				let result = number;
				for(i = 0; i < args.length; i++){
					result += args[i];
				}
				return result;
			},
			dif: function(...args){
				let result = number;
				for(i = 0; i < args.length; i++){
					result -= args[i];
				}
				return result;
			},
			div: function(...args){
				let result = number;
				for(i = 0; i < args.length; i++){
					if(args[i] === 0){
						throw new Error("division by 0");
					} else{
						result /= args[i];
					}
				}
				return result;
			},
			mul: function(...args){
				let result = number;
				for(i = 0; i < args.length; i++){
					result *= args[i];
				}
				return result;
			}
		}	
	}	
}

