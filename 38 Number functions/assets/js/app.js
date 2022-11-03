let x = "124";

console.log(x, typeof x);

x = Number(x);
console.log(x, typeof x);

x = 12.25;

console.log(x);
x = parseInt(x);

x = parseFloat(x);

console.log(x);
let arr = [12, 12, 54, 32, 65, 84, undefined, 45, 78, null];

arr.forEach((ele, i) => {
  if (!ele) arr.splice(i, 1);
});

console.log(arr);

let ages = [62, 54, 78, 56, 24, 35, 15, 54, 12, 24, 79, 87, 78];

ages.forEach((age, i) => {
  if ((age = age)) {
    ages.shift();
  }
});

console.log(ages);

let c = 5;

let b = ++c + ++c;
console.log(c); //7
console.log(b); //13

// let age45 = ages.some((age)=> age>=45);
// console.log(age45)

// let age45 = ages.some((age) => (age <= 45));
// console.log(age45);

let age45 = ages.every((age) => age <= 45);
console.log(age45);

ages.fill(2, 2, 4);

console.log(ages);
