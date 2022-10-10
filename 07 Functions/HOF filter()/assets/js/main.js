let ages = [12, 45, 62, 87, 32, 97, 25, 75, 23, 9, 7, 4, 15];
console.log(ages);

// let evenage = [];
// ages.forEach(age=>{
//   if(age%2 === 0){
//     evenage.push(age);
//   }
// })
// console.log(evenage);

// let evenages = ages.filter(age=>age%2 === 0);
// console.log(evenages);

// let oddages =[];
// ages.forEach(age=>{
//   if(age%2 !== 0){
//     oddages.push(age);
//   }
// })
// console.log(oddages);

// let oddages = ages.filter(age=>age %2 !==0);
// console.log(oddages);

let driveAge = [];

ages.forEach((age) => {
  if (age >= 18) {
    driveAge.push(age);
  }
});
console.log(driveAge);

// let driveAge = ages.filter(age=>age>=18);
// console.log(driveAge);

let companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// let compDevration = [];

// companies.forEach(comp=>{
//   if(comp.end - comp.start >= 10){
//     compDevration.push(comp);
//   }
// })

// console.log(compDevration);

let compDevration = companies.filter((comp) => comp.end - comp.start >= 10);
console.log(compDevration);

let newcompdev = companies
  .filter((comp) => comp.category.trim().toLowerCase() === "retail")
  .map((comp) => ({
    companyName: comp.name,
    durationWork: comp.end - comp.start,
  }));

console.log(newcompdev);

let startbef1990 = companies.filter((comp) => comp.start <= 1990);
console.log(startbef1990);
