const makeError = async () => {
	throw new Error('에러 발생');
};

const withTryCatch = async () => {
	try {
		console.log('try-catch 를 이용한 async');
		const result = await makeError();
		// const result = '성공 withTryCatch';
		console.log('실행 안 되겠지');
		return result;
	} catch (err) {
		throw err;
	}
};

const withoutTryCatch = async () => {
	console.log('try-catch 없는 async');
	const result = await makeError();
	// const result = '성공 without';
	console.log('실행 안 되겠지');
	return result;
};

withTryCatch()
	.then((res) => console.log(`with TryCatch: ${res}`))
	.catch((err) => console.log(`실패 ${err}`));

withoutTryCatch()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
