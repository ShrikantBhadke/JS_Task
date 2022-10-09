let ages = [12,89,45,79,56,78,42,53,15,78,15];

let companies = [
  { name: "Company One",id:1, category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two",id:2, category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three",id:3, category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four",id:4, category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five",id:5, category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six",id:6, category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven",id:7, category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight",id:8, category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine",id: 9 , category: "Retail", start: 1981, end: 1989 }
];
let findId = 4;
let compId = companies.find((comp)=>comp.id === findId);
console.log(compId);

// let findId9 = 9;
// let compId9 = companies.find((comp)=> +comp.id === findId9)
// console.log(compId9)

let findId9 = "9";
let compId9 = companies.find((comp)=> comp.id === +findId9)
console.log(compId9)
let findIndex5 = 5
let indexid5 = companies.findIndex((comp)=> comp.id === findIndex5)
console.log(indexid5);


let sumAge = ages.reduce((preVal,currVal)=>(preVal+=currVal),0)
console.log(sumAge);

let Multge = ages.reduce((preVal,currVal)=>(preVal*=currVal),1)
console.log(Multge);