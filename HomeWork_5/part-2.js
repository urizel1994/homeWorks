/*Задание 1 */

function forEach(array, fn) {
	for (var i = 0; i < array.length; i++) {
    	fn(array[i], i, array);
  	}
};

/*Задание 2 */

function map(array, fn) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
    	result.push(fn(array[i], i, array));
  	}
  	return result;
};

var a = [1,2,4,10,20];

/*Задание 3 */

function reduce(array, fn, initial) {
	result = initial;
  	for (i = 0; i < array.length; i++) {
   		result = fn(result, array[i], i, array);
  	}
  	return result;
}

/*Задание 4 */

function upperProps(obj) {
	var result = [];
	for(var key in obj){
		result.push(key.toUpperCase());
	}
	return result;
}

/*Задание 5 */

function slice(array, from = 0, to = array.length) { 
	var result = []; 
	if(from < 0){
		from = array.length - (from*(-1));
	}
	if(to < 0){
		to = array.length - (to*(-1));
	}
	if(to > array.length){
		to = array.length;
	}
	for(i = from; i < to; i++){ 
		result.push(array[i]); 
	} 
	return result; 
}



