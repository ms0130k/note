// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict';

// 2. Variable
// let (added in ES6)
let globalStr = 'global str';
{
	let str = 'shock';
	console.log(str);
	str = 'hello';
	console.log(str);
}
// console.log(str);
console.log(globalStr);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
{
	age = 4;
	var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
