var studentList = [
	{
		fname:'shri',
		lname:'bhadke',
		email:'sh121ri@gmail.com',
		contact:15142
	},
	{
		fname:'shri',
		lname:'bhadke',
		email:'sh12ri@gmail.com',
		contact:15142
	},
	{
		fname:'shrdfsi',
		lname:'bhadke',
		email:'sh12ri@gmail.com',
		contact:15142
	}
	]
	console.log(studentList)
	var tableDiv = document.getElementById("table");
	
	var result = "";
	
	for(var i=0; i<studentList.length; i++){
		result += "<tr>"
		result += "<td>" + (i + 1) + "</td>"
		result += "<td>" + studentList[i].fname + "</td>"
		result += "<td>" + studentList[i].lname + "</td>"
		result += "<td>" + studentList[i].email + "</td>"
		result += "<td>" + studentList[i].contact + "</td>"
		result += "</tr>"
	}
	console.log(result);
	
	
	tableDiv.innerHTML =(result);