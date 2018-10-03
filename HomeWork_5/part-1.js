/*Задание 1 */

let returnFirstArgument = a => a; 

/*Задание 2 */

let sumWithDefaults = (a, b = 100) => a + b;

/*Задание 3 */

function returnFnResult(fn) {
	return fn;
}

/*Задание 4 */

function returnCounter(num) {
	function getCount(){
		return ++num;
	}
	return getCount();
}

/*Задание 5 */

let returnArgumentsArray = (...args) => args;

/*Задание 6 */

let bindFunction = (fn, ...args) => fn.bind(bindFunction,...args)(args);



