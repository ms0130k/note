'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}
const shock = { name: 'shock', age: 4 };
print(shock);

// with JavaScript maigc (dynamically typed language)
// can add properties later
shock.hasJob = true;
console.log(shock.hasJob);

delete shock.hasJob;
console.log(shock.hasJob);

// 2. Computed properties
// key should be always string
console.log(shock.name);
console.log(shock['name']); // runtime
shock['hasJob'] = true;
console.log(shock.hasJob);

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(shock, 'name');
printValue(shock, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('shock', 37);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
	this.name = name;
	this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in shock);
console.log('age' in shock);
console.log('random' in shock);
console.log(shock.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in shock) {
	console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}
for (value of array) {
	console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, boj3...])
const user = { name: 'shock', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
	user3[key] = user[key];
}
user3.name = 'heater';
console.log(`user.name: ${user.name}, user3.name: ${user3.name}`);

Object.assign(user3, user);
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
