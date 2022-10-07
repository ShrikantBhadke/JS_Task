let person = {
	fname: 'shrikant',
	lname: 'Bhadke',
	age: 34,
	fullname: function(){
		return `${this.fname}${this.lname}`
	}
}

console.log(person.age);
console.log(person['age']);


for (let key in person){
	console.log(key);
	console.log(person[key]);
}

function Circle (radius){
	this.radius = radius;
	this.drow = function(){
		console.log(`circle in drown with radius ${radius}`);
	}
}
let c1 =new Circle(10);

for (let k in c1){
	console.log(c1[k]);
}


let keysInPerson = Object.keys(person);
console.log(keysInPerson);
console.log(keysInPerson.length);

if ('age' in person){
	console.log(`His age is sufficent`);
}
