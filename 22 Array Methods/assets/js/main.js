let cl = console.log;


let ages = [47,85,65,25,36,95];

let a = ages.length;
console.log(a);

ages.push(74);
console.log(ages);
console.log(ages.length);


let new5 = 24;
ages.push(new5);
cl(ages);


let addnumber = 51;
ages.push(addnumber);

cl(ages);


ages.pop();


cl(ages);

ages.shift();
cl(ages);


ages.shift();

cl(ages);

let new3 = 78;

ages.unshift(new3);
cl(ages);


let person = [
{
	fname: "jhon",
	age: 45
},
{
	fname: "ram",
	age: 26
},
{
	fname: "sham",
	age: 78
},
{
	fname: "radha",
	age: 98
},
{
	fname: "jen",
	age: 77
}
]

cl(person);

let newAge = {
	fname: "anande",
	age: 58
}

/* person.push(newAge);
cl(person);
// person.push(1000);
// cl(person);

let lastObject = person.pop();
cl(lastObject);
cl(person);
 */
 
 
 
 
/*  person = [
{
	fname: "jhon",
	age: 45
},
{
	fname: "ram",
	age: 26
},
{
	fname: "sham",
	age: 78
},
{
	fname: "radha",
	age: 98
},
{
	fname: "jen",
	age: 77
}
] */

let firstElement = person.shift();
 cl(person);
 cl(firstElement);
 
let x = person.unshift(newAge);
cl(person);