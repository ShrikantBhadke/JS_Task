
var cl = console.log;

let str = "i love angular, Angular a framework for javascript language angular is single page framework."

let str1 = str.slice(7, 14);
cl(str1);

let str2 = str.slice(-22,-15);
cl(str2);

let str3 = str.slice(16, 24);
cl(str3);

let sub1 = str.substring( 2, 6);
cl(sub1);

let sub2 = str.replace(/angular/gi,"java")
cl(sub2);

let sub3 = sub2.substring(7, 11);
cl(sub3);

let s = sub3.includes("java");
cl(s);

let sub4 = sub2.substr(20, 9);
cl(sub4);
let sub5 = sub2.substr(7 , 4);
cl(sub5);
