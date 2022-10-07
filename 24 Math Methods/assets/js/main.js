let cl = console.log;

// let r = 2.75;
// cl(r);
// r = Math.round(r);
// cl(r);

// const pi = Math.PI;
// cl(pi);


// r = 4.58;
// r = Math.ceil(r);
// cl(r);

// r = 4.58; 
// r = Math.floor(r);
// cl(r);

// let r1 = Math.pow(5,2);

// cl(r1);

// r = 81;
// let r2 = Math.sqrt(r);
// cl(r2);

// let r3 = Math.round(Math.random());

// cl(r3);

// let input_value = "head";

let num = Math.random();

// let find5_7Ran = Math.ceil(num * 3) + 4;
 
 // cl(find5_7Ran);

// let find5_7Ran = Math.floor(num * 3) + 5;
 
 // cl(find5_7Ran);

// let find5_20 = Math.ceil(num * 16) + 4;

// cl(find5_20);

// let find5_20 = Math.floor(num * 16) + 5;

// cl(find5_20);


// function randomNo5_7(){
// 	return Math.floor(num * 3) + 5;
// }

// let r = randomNo5_7();

// cl(r);

//---------------------New Code---------------------------

function findRandomNo(min,max){
	if(min<max){
		return Math.floor(Math.random() * (max-min + 1 )) +min;
	}else{
		return("Enter min no first.");
	}
}

let r = findRandomNo(8,9);
cl(r);


//---------------------New Code---------------------------

function find_random_num(min,max){
	if(min<max){
		return Math.ceil(Math.random() * (max-min+1))+(min-1);
	}else{
		return("Enter min no first.");
	}
}

let r1 = find_random_num(5,7);
cl(r1);

// ------------------------New Code------------------------

let arry = [4,65,7,25,9,42,63,100,75];

let max = Math.max(...arry);
cl(max);
max = Math.min(...arry);
cl(max);



let r2 = Date();
cl(r2);

r2 = new Date(1988,08,11);
cl(r2);
let jan01_1970 = new Date(0);
cl(jan01_1970);

let Jan02_1970 = new Date(86400000);
cl(Jan02_1970);

let Dec31_1969 = new Date(-86400000);
cl(Dec31_1969);

let date = new Date("2017-01-26");
cl(date);

date = new Date(2011,0,1,2,3,4,567);
cl(date);
date = new Date();

cl(date.getSeconds());

cl(jan01_1970.getMilliseconds());
cl(date.getFullYear());

cl(new Date().getTime());

cl(new Date(0).getFullYear());

date = new Date("jun 02 2016");
cl(date);
// cl(------------------------New Code--------------------------);
// let str = "I Love JavaScript";

// function reverseStr(str1){
// 	return str1.split("").reverse().join("");
// }

// let r3 = reverseStr(str);
// cl(r3);


// cl("------------------------New Code--------------------------");
// let str = "I Love JavaScript";

// function reverseStr(str1){
// 	let result = "";
// 	for(let i=0; i<str1.length; i++){
// 		result = str1.charAt(i) + result;
// 	}
// 	return result;
// };

// let r3 = reverseStr(str);
// cl(r3);


// cl("------------------------New Code--------------------------");

// let str1 = "I Love JavaScript";

// function reverse_Str(str){
// 	let result  = "";
// 	for(let i=str.length-1; i>=0 ; i--){
// 		result +=  str.charAt(i);
// 	};
// 	return result;
// };

// let r3 = reverse_Str(str1);
// cl(r3);


