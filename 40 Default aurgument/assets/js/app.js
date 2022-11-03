let cl = console.log;

function add(x, y) {
  if (y) {
    return x + y;
  } else {
    y = 25;
    return x + y;
  }
}

cl(add(20, 10));
cl(add(20));

function addNew(x, y = 25) {
  return x + y;
}

cl(addNew(100,200));


function calculateBill(total,tax,tip){
  if(!tax){
    tax = .14;
  }
  if(!tip){
    tip = .1
  }
  return total + (total* tax)+(total * tip)
}

cl(calculateBill(25000))


let person = {
  fname: 'jhon',
  lname: 'Doe',
  age:35
}

// let fname = person.fname;
// let lname = person.lname;
// let age = person.age;

let {fname,lname,age} = person;

cl(fname,lname,age);


let person1 = {
  firstName: "Shrikant",
  lastName: "Bhadke",
  link:{
    social:{
      facebook:"https://facebook.com",
      twitter: "https://twitter.com",
    },
    web:{
      blog:"https://medium.com",
      traning:"https://theultimatecoders.com"
    },
  },
};

// let facebook = person1.link.social.facebook;


let {facebook:fb,twitter:tw} = person1.link.social;

cl(fb,tw);


let cssSettings = {
  width : 300,
  color: 'skyblue'
}

let {width:w = 200,height=100,color:clr,fontsize ="14px"} = cssSettings


cl(w,clr,height,fontsize);