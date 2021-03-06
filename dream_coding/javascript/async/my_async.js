'use strict';
// https://ms0130k.github.io/plays.json
const url1 = 'plays.json';
const url2 = 'invoices.json';
const urlE = '';

function doAjax(url, success, error) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === xhr.DONE && xhr.status === 200) {
			success(xhr.responseText);
		} else if (xhr.readyState === xhr.DONE) {
			error(new Error(`status: ${xhr.status}`));
		}
	};
	xhr.open('GET', url);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(null);
}

function getData() {
	return new Promise((resolve, reject) => {
		doAjax(url1, resolve, reject);
	});
}

async function process() {
	const data = await getData();
	const dataObj = JSON.parse(data);

	return dataObj;
}

process().then(console.log);
