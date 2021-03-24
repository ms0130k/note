'use strict';
const big = document.getElementById('big');
const mid = document.getElementById('mid');
const small = document.getElementById('small');

big.addEventListener('click', function (e) {
	console.log(e.target);
	console.log(e.currentTarget);
	if (e.target.closest('.mid')) console.log('green');
});
// mid.addEventListener('click', function (e) {
// 	console.log(e.target);

// 	console.log(e.currentTarget);
// });
// small.addEventListener('click', function (e) {
// 	console.log(e.target);

// 	console.log(e.currentTarget);
// });
