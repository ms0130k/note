// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
	return 'shock';
}

const user = fetchUser();
user.catch(console.log);

// 2. await
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(500);
	return '사과';
}

async function getBanana() {
	await delay(500);
	return '바나나';
}
function pickFruits() {
	return getApple().then((apple) =>
		getBanana().then((banana) => `${apple} + ${banana}`)
	);
}

pickFruits().then(console.log);
const param = () => '냐항';
const test = () => param();
console.log(test());

async function pickFruitsA() {
	const apple = await getApple();
	const banana = await getBanana();
	console.log(`${apple} + ${banana}`);
	return `${apple} + ${banana}`;
}

pickFruitsA();
function testFunc() {
	console.log('머야이건');
}
new Promise((resolve) => setTimeout(resolve, 500)).then(testFunc);

// 3. useful APIs
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()]).then((fruits) =>
		fruits.join(' + ')
	);
}

pickAllFruits().then(console.log);
