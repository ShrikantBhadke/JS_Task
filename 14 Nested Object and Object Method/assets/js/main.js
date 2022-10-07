var studentData = {
	fname:"Rahul",
	lname:"Jagtap",
	education: "PHD",
	salary:"12 lac",
	child:{
		fname:"smita",
		lname:"jagtap",
		age:"7 year",
		nativ:"nagpur",
		grandparent:{
			fname:"narsing",
			lname:"patil",
			age: 74,
			education: "B.Ed.",
			ocupation: "teacher"
		}
	}
};

console.log(studentData.child.grandparent);

var grand ={
	fname:"narsing",
	lname:"patil",
	age: 74,
	education: "B.Ed.",
	ocupation: "teacher"
}
var studentData = {
	fname:"Rahul",
	lname:"Jagtap",
	education: "PHD",
	salary:12 ,
	child:{
		fname:"smita",
		lname:"jagtap",
		age:"7 year",
		nativ:"nagpur",
		grandparent: function(){
			return(studentData.fname +" " + studentData.salary)
		}
	}
};


console.log(studentData.child.grandparent());


var studentData = {
	fname:"Rahul",
	lname:"Jagtap",
	education: "PHD",
	salary:"12 lac",
	fullname: function(){
		return( studentData.fname + " "+ studentData.lname);
			},
	child : {
	fname:"smita",
	lname:"jagtap",
	age:"7 year",
	nativ:"nagpur",
	fullname:function(){
		return(this.fname + " " + this.lname);
	},
	grandparent:{
			fname:"narsing",
			lname:"patil",
			age: 74,
			education: "B.Ed.",
			ocupation: "farmar",
			fullname: function(){
				return(this.fname + " " + this.lname)
			}
		}
	}
};

console.log(studentData.child.grandparent.fullname());
console.log(studentData.child.fullname());
