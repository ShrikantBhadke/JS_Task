let student = "shrikant";

switch (student) {
  case "rahul":
    console.log("rahul is present");
    break;
  case "pravin":
    console, log("pravin is present");
    break;
  case "shrikant":
    console.log("shrikant is present");
    break;
  default:
    console.log("student is not present");
}

let date = new Date().getDay();

switch (date) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("Tusday");
    break;
  case 3:
    console.log("Wensday");
    break;
}

var companies = [
  { name: "company-one", id: "1", category: "finance", start: 1982, end: 2011 },
  {
    name: "company-two",
    id: "2",
    category: "software",
    start: 1983,
    end: 2010,
  },
  {
    name: "company-three",
    id: "3",
    category: "hardware",
    start: 1984,
    end: 2013,
  },
  { name: "company-four", id: "4", category: "steel", start: 1995, end: 2051 },
  {
    name: "company-five",
    id: "5",
    category: "consultancy",
    start: 1996,
    end: 2020,
  },
  { name: "company-six", id: "6", category: "gold", start: 1987, end: 2012 },
  {
    name: "company-seven",
    id: "7",
    category: "sports",
    start: 1998,
    end: 2013,
  },
  {
    name: "company-eight",
    id: "8",
    category: "agreeculture",
    start: 1999,
    end: 2017,
  },
  {
    name: "company-nine",
    id: "9",
    category: "hospitality",
    start: 1982,
    end: 2018,
  },
  {
    name: "company-ten",
    id: "10",
    category: "finance",
    start: 1972,
    end: 2018,
  },
];

let finance = [];
let sports = [];

companies.forEach((ele) => {
  switch (ele.category) {
    case "finance":
      finance.push(ele);
      break;
    case "sports":
      sports.push(ele);
      break;
  }
});

console.log(finance);
console.log(sports);
let newarray = [];

companies.forEach((ele) => {
  let diff = ele.end - ele.start;
  switch (true) {
    case diff > 20:
      newarray.push(diff);
      break;
  }
});

console.log(newarray);
