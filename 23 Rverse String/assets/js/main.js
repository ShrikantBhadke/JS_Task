let cl = console.log;

let str = "I Love JavaScript";

cl(str);

let arry_str = str.split(" ");

cl(arry_str);

let revercearray = arry_str.reverse();

cl(revercearray);

let arry1 = revercearray.reverse();
cl(arry1);

let arry_string = arry1.join(" ");

cl(arry_string);

/* function string_reverse(str){
	return str.split("").reverse().join("");
}

let result = string_reverse(arry_string);

cl(result); */

// let str3 = "I Love JavaScript";

// function string_reverse(str){
// 	let arry_str = str.split("");
// 	cl(arry_str);
// 	let arry_reverse = arry_str.reverse();
// 	cl(arry_reverse);
// 	let result = arry_reverse.join("");
// 	return result;
// }

let result = string_reverse(str3);
cl(result);
// var cl = console.log;
// let str = "I love angular";

let str1 = str.length
cl(str1);

let skills = "html, css3, angular, css3, javascript, css3, angular";
let str2 = skills.length
cl(str2);

let str3 = skills.indexOf("css3");
cl(str3);

let str4 = skills.lastIndexOf("angular");
cl(str4);

let str5 = skills.indexOf("css3",str3 + 1);
cl(str5);

let str6 = skills.lastIndexOf("css3", str5 + 1);
cl(str6);

skills = "html, css3, angular, Css3, javascript, css3, angular";

let rep1 = skills.replace("css3", "ExpressJS");
cl(rep1);

let rep2 = skills.replace(/css3/g, "ExpressJS");
cl(rep2);

let rep3 = skills.replace(/css3/gi, "ExpressJS");
cl(rep3);

let rep4 = rep3.replace(/angular/gi, 'reactJS');
cl(rep4);

let list = " I like fruits having sweetness";
cl(list);
let list1 = list.toUpperCase();
cl(list1);

let list2 = list.toLowerCase();
cl(list2);


let x = "     Hallo Friends    ";
cl(x);
let x2 = x.length;
cl(x2);
let x1 = x.trim().length;
cl(x1);

let call = "   yes passed    ";

if(call.length == 10){
    cl('Next Round');
}else{
    cl("you failed");
};


if(call.trim().length == 10){
    cl("Next Round");
}else{
    cl("you failed");
}


let greet1 = "hello";
let greet2 = "JavaScript";

cl(greet1 + " " + greet2);
cl(`${greet1} ${greet2}`);

// greet1 += " " + greet2;
// cl(greet1);

let greet = greet1.concat(" ", greet2);

cl(greet);