'user strict';

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
