'user strict';

// Callback Hell example
class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					(id === 'shock' && password === 'dream') ||
					(id === 'coder' && password === 'academy')
				) {
					resolve(id);
				} else {
					reject(new Error('not found'));
				}
			}, 1000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (user === 'shock') {
					resolve({ name: 'shock', role: 'admin' });
				} else {
					reject(new Error('no access'));
				}
			}, 2000);
		});
	}
}

new UserStorage()
	.loginUser('coder', 'academy')
	.then(new UserStorage().getRoles)
	.then(console.log)
	.catch(console.log);
