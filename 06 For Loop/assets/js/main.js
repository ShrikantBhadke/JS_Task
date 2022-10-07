for (i=1; i<=50; i++){
	if(i%3 === 0 && i%5 === 0){
		console.log("FireBuzz");
	}
	else if (i%5 === 0){
		console.log("Fire");
	}
	else if (i%3 === 0){
		console.log("Buzz");
	}
	else{
		console.log(i)
	}
}

for(i=0; i<=50;i=i+2){
	
		console.log("The numbers "+ i + " even ");
		
}
for(s=1; s<=9;s++){
	  console.log(s)
  
}

var listOfFruits = ['apple','banana','orange','watermelon','custerdapple']

for (a=0;a<listOfFruits.length; a++){
	console.log("I Like "+ listOfFruits[a]);
}

var chemicalList = ['HCl', 'Sulphuric Acid','Sodium Hydroxide','Sodium Chloride','Calcium', 'Magnesium']

for (a=0; a<chemicalList.length;a++){
	document.write("The Chemical Name is "+ chemicalList[a] + "<br>"+"<hr>");
	
}