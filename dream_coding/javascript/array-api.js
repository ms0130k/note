// Q1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	console.log(fruits.toString());
	console.log(fruits.join());
	console.log(fruits.join('|'));
}

// Q2. make an array out of a string
{
	const fruits = '사과,배,감,귤';
	console.log(fruits.split(','));
	console.log(fruits.split(',', 2));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	console.log(array.reverse());
	console.log(array);
}

// Q4. make new array without the first two elements
{
	const array = [1, 2, 3, 4, 5];
	console.log(array.slice(2, 5));
	console.log(array);
	console.log(array.splice(2, 3, '삼', '사'));
	console.log(array);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}
const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 90),
];

// Q5. find a student with the score 90
{
	console.log(students.filter((student) => student.score === 90));
	console.log(students.find((student) => student.score === 90));
}

// Q6. make an array of enrolled students
{
	console.log(students.filter((student) => student.enrolled === true));
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	console.log(students.map((student) => student.score));
}

// Q8. check if there is a student with the score lower than 50
{
	console.log(students.some((student) => student.score < 50));
	console.log(!students.every((student) => student.score >= 50));
}

console.clear();
// Q9. compute students' average score
{
	const what = students.reduce((prev, curr, idx) => {
		console.log(idx, prev, curr);
		return prev + curr.score;
	}, 0);
	console.log(`what: ${what / students.length}`);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	console.log(students.map((student) => student.score).join());
	console.log(
		students
			.map((student) => student.score)
			.filter((score) => score >= 50)
			.join()
	);
}

console.clear();
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
	console.log(
		students
			.map((student) => student.score)
			.sort()
			.join()
	);
	console.log(
		students
			.map((student) => student.score)
			.sort((a, b) => b - a)
			.join()
	);
}
