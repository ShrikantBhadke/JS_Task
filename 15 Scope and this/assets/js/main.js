alert('This');

var cl = console.log;


var person ={
	firstName : 'anirudh',
	lname : 'chavan',
	email : 'ani@gmail.com',
	age : 55,
	salary : '60k',
	skills : ['typeScript','HTML','css','js','angular'],
	fullName: function(){
		console.log(this)
		
		/*return person.firstName + " " + person.lname;*/
		return this.email + " " + this.salary;
	},
	
	child : {
		
	firstName : 'rudra',
	lname : 'chavan',
	email : 'ani@gmail.com',
	age : 25,
	salary : '40k',
	skills : ['HTML','css','js','angular'],
	
	fullName : function(){
		console.log(this);
		return this.firstName + " " + this.skills;
		
	},
	child : {
		
	firstName : 'mudra',
	lname : 'chavan',
	email : 'm@gmail.com',
	age : 2,
	salary : '10k',
	skills : ['LKG','UKG'],
	
	fullName : function(){
		console.log(this);
		return this.firstName + " " + this.lname;
		
	},
	
	child3 : {
		
	firstName : 'shiv',
	lname : 'chavan',
	email : 's@gmail.com',
	age : 10,
	salary : '20k',
	skills : ['10th','12th'],
	
	fullName : function(){
		console.log(this);
		return this.firstName + " " + this.email;
		
	},
	
	child4 : {
		
	  //key       value
		
	firstName : ' shree',
	lname : 'chavan',
	email : 's@gmail.com',
	age : 12,
	salary : '15k',
	skills : ['10th','12th'],
	
	fullName : function(){
		console.log(this);
		return this.firstName + " " + this.email;
		
	},
	
	child5 : {
		
	firstName : 'jay',
	lname : 'chavan',
	email : 'j@gmail.com',
	age : 20,
	salary : '28k',
	skills : ['10th','12th'],
	
	fullName : function(){
		cl(this);
		return this.firstName + " " + this.email;
		
	},
	
	},
	
	},
	
	
	},
},

},

};
console.log(person.firstName);

//console.log(person.child.age);

/*var getfullName = person.firstName + " " + person.lname;*/

/*console.log(getfullName);*/

console.log(person.fullName());

console.log(person.child.fullName());

console.log(person.child.child.fullName());

console.log(person.child.child.child3.fullName());

console.log(person.child.child.child3.child4.fullName());

console.log(person.child.child.child3.child4.child5.fullName());



