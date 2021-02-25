'use strict';

// Promise is a Javascript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
	// doing some heavy work (network, read file)
	console.log('doing something...');
	setTimeout(() => {
		resolve('shock');
		reject(new Error('no network'));
	}, 900);
});

promise
	.then((value) => console.log(value))
	.catch((error) => console.log(error))
	.finally(() => console.log('finally'));

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
	console.log('executor starts');
	setTimeout(() => resolve(1), 1000);
	console.log('executor ends');
});

fetchNumber
	.then((num) => num * 2)
	.then((num) => num * 3)
	.then((num) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num - 1), 1000);
		});
	})
	.then((num) => console.log(num));

console.log(
	fetchNumber.then((num) => {
		num * 2;
		return num * 3;
	})
);
console.clear();
// 4. Error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('🐓'), 1000);
	});
const getEgg = function (hen) {
	new Promise(function (resolve, reject) {
		setTimeout(function () {
			reject(new Error(`error! ${hen} => 🥚`), 1000);
		});
	});
};
const cook = function (egg) {
	new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(`${egg} => 🍳`);
		}, 1000);
	});
};

getHen() //
	.then(getEgg)
	.then(cook)
	.then(console.log)
	.catch(console.log);
