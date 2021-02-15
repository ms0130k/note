'use strict';

// Array🎈

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🎆', '🎇'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
console.log(typeof fruits);
console.clear();
for (const key in fruits) {
	console.log(typeof key);
	console.log(key);
	console.log(fruits[key]);
}
console.clear();
for (const value of fruits) {
	console.log(value);
}
fruits.forEach((val, idx, what) => {
	console.log(idx, val, what);
	console.log('what: ', what);
	console.log('this: ', this);
}, 'this');

console.clear();

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🎋', '🎄');
console.log(fruits);

// pop: remove an item from the end

console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🎀');
console.log(fruits);

// shift: remove an item from the beginning
console.log(fruits.shift());
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
console.clear();
fruits.push('🍺', '🥗', '🌭');
console.log(fruits);
console.log(fruits.splice(1, 1));
console.log(fruits);
fruits.splice(1, 0, '추', '가');
console.log(fruits);

// combine two arrays
const fruits2 = ['쇽', '쇽쇽'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('추'));
console.log(fruits.indexOf('가'));
console.log(fruits.indexOf('🥗'));
console.log(fruits.indexOf('🥡'));

// includes
console.log(fruits.includes('추'));
console.log(fruits.includes('쇽'));

// lastIndexOf
console.clear();
fruits.push('추');
console.log(fruits);
console.log(fruits.indexOf('추'));
console.log(fruits.lastIndexOf('추'));
console.log(fruits.toString());
console.log(fruits.toLocaleString());
