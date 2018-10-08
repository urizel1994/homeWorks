// задание 1
function isAllTrue(array, fn) {
	if(!Array.isArray(array)||array.length === 0){
		throw new Error("empty array");
	}
	else if(typeof(fn) !== "function"){
		throw new Error("fn is not a function");
	}
	else {
		var result;
		for(var i = 0; i < array.length; i++){
			if(fn(array[i]) === false){
				result = false;
				break;
			} else{
				result = true;	
			}	
		}
		return result;
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
		var result;
		for(var i = 0; i < array.length; i++){
			if(fn(array[i]) === true){
				result = true;
				break;
			} else{
				result = false;	
			}	
		}
		return result;
	}	
}

// задание 3

function returnBadArguments(fn,...args) {
	if(typeof(fn) !== "function"){
		throw new Error("fn is not a function");
	} else {
		var badArgs = [];
		for(var i = 0; i < args.length; i++){
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
function isNumber(n) {
  return (n instanceof Number||typeof n === 'number') && !isNaN(n);
}

function calculator(number = 0) {
	if(!isNumber(number)){
		throw new Error("number is not a number");
	} else {
		return {
			sum: function(...args){
				let result = number;
				for(var i = 0; i < args.length; i++){
					result += args[i];
				}
				return result;
			},
			dif: function(...args){
				let result = number;
				for(var i = 0; i < args.length; i++){
					result -= args[i];
				}
				return result;
			},
			div: function(...args){
				let result = number;
				for(var i = 0; i < args.length; i++){
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
				for(var i = 0; i < args.length; i++){
					result *= args[i];
				}
				return result;
			}
		}	
	}	
}

alert(calculator("3").sum(2,3));