'use strict';
// simplest data interchange format 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일 포맷
// lightweight text-based structure
// easy to read
// key-value pairs
// used for serialization and transmission of data between the network the network connection
// independent programming language and platform

// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);
json = JSON.stringify(['apple', 'banana'], (str) => str, 1);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	jump: function () {
		console.log(`${this.name} can jump!`);
	},
	rabbit: {
		name: 'tori',
		color: 'white',
		size: null,
		birthDate: new Date(),
		jump: function () {
			console.log(`${this.name} can jump!`);
		},
	},
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['rabbit', 'name', 1, 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
let obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birthDate' ? new Date() : value;
});
// console.log(new Date().getDate());
console.log(obj);
rabbit.jump();
// obj.jump();
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// JSON Diff checker: http://www.jsondiff.com/​
// JSON Beautifier/editor: https://jsonbeautifier.org/​
// JSON Parser: https://jsonparser.org/​
// JSON Validator: https://tools.learningcontainer.com/json-validator/
