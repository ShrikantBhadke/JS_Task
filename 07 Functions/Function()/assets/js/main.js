for (var i=1; i<=50; i=i+1){
	if(i%5 === 0 && i%7 === 0){
		document.write("FizzBuzz<br>");
	}else if(i%7 === 0){
		document.write("Buzz<br>");
	}else if(i%5 === 0){
		document.write("Fizz<br>");
	}else{
		document.write(i + "<br>")
	}
}

for (var i=1; i<=100; i=i+1){
	if(i%11 === 0 && i%2===0 && i%5 ===0){
		document.write("The Number is divisibal by 2,5 and 11<br>");
	}else if(i%5===0 && i%2===0){
		document.write("The Number is Divisible by onle 2 and 5<br>");
	}else if(i%11===0 && i%5===0){
		document.write("The number is Divisibel by 11 and 5<br>");
	}else {
		document.write(i+"<br>");
	}
};

function add(x,y){
	return x+y;
}
var additionTwo = add(10,75);
console.log(additionTwo);

function multi(a,b){
	console.log(a*b);
}
multi(5,7);

function pytha(a,b){
	return a*a+2*a*b+b*b;
}
console.log(pytha(5,5));
var para1 = pytha(47,92);
console.log(para1);

function areaCircle(r){
	return (3.14*r*r);
}
console.log(areaCircle(10));
document.write("Area of Circle having redius 10 is "+ areaCircle(10)+" <br>");

function circumfarance(r){
	return (2*3.14*r);
}
document.write("Circumfarance of Circle having Redius 48 = " + circumfarance(48));