'user strict';

// JavaScript is synchronous.
// Excute the code block by order after hoisting
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
	print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

console.clear();
// Callback Hell example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === 'shock' && password === 'dream') ||
				(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 1000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if (user === 'shock') {
				onSuccess({ name: 'shock', role: 'admin' });
			} else {
				onError(new Error('no access'));
			}
		}, 2000);
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your  password');
userStorage.loginUser(
	id,
	password,
	(user) => {
		userStorage.getRoles(
			user,
			(userWithRole) =>
				alert(`name: ${userWithRole.name + ' ' + userWithRole['name']}`),
			(error) => console.log(error)
		);
	},
	(error) => console.log(error)
);
