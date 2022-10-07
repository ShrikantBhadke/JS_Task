//x = 7 , y =3//

for(var i=0; i<=50; i++){
	if (i%7===0 && i%3===0){
		document.write("Fizzbuzz<br>");
		console.log("Fizzbuzz");
	}else if(i%7===0){
		document.write("buzz<br>");
		console.log("buzz");
	}else if(i%3===0){
		document.write("fizz<br>");
		console.log("Fizz");
	}else{
		document.write(i + "<br>");
		console.log(i);
	}
}