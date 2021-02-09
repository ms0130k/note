// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

// 2. Parameters
// premative parameters: passed by value
// object parameters: passed by reference

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
	for (const arg of args) {
		console.log(arg);
	}
	args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'shock');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
	let message = 'hello';
	console.log(message);
	console.log(globalMessage);
	function printAnother() {
		console.log(message);
		let childMessage = 'hello';
	}
	// console.log(childMessage); // error
	// return undefined; 가 생략되어 있음
}
printMessage();
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

console.log('hoisting:', sum(10, 12));
// 6. Return a value
function sum(a, b) {
	return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// long upgrade logic...
	}
}

// good
function upgradeUser(user) {
	if (user.point <= 10) {
		return;
	}
	// long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// print(); // error, is not hoisted
const print = function () {
	// anonymous function
	console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}
// anonymous function
const printYes = function () {
	console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
	console.log('no!');
	// printNo();
	// print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
// 	console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
console.log(add(1, 3));

// IIFE: Immediately Invoked Function Expression
(function hello() {
	console.log('IIFE');
})();

// Fun quiz time
// Function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder, square

const calculate = (command, a, b) => {
	switch (command) {
		case 'add':
			return a + b;
		case 'subtract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remiander':
			return a % b;
		case 'square':
			return a ** b;
		default:
			throw Error('unknown command');
	}
};

console.log(calculate('squar', 2, '4'));
