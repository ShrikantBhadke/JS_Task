

let ages =[ 12,45,62,87,32,97,25,75,23,9,7,4,15];
console.log(ages);

// let doubAges =[];

// ages.forEach(age=>doubAges.push(age*2));
// console.log(doubAges);

let doubAges = ages.map(age=>age*2);
console.log(doubAges);

// let squrDubAge = [];

// ages.forEach(age=>squrDubAge.push(Math.sqrt(age*2)))
// console.log(squrDubAge);

let squrDubAge = ages.map(age=>Math.sqrt(age*2));
console.log(squrDubAge);

let companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];


  let startcomp = companies.map(comp=>({CompName:comp.name,StartYear:comp.start}));
  console.log(startcomp);

  let durationComp = companies.map(comp=>({companyName:comp.start,Duration:comp.end-comp.start}));
  console.log(durationComp);

