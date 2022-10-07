

var studentDetails =[
	{
		fname:'sanjay',
		lname:'dutta',
		email:'snajay@gmail.com',
		contact:7458293614
	},
	{
		fname:'sanjay',
		lname:'dutta',
		email:'snajay@gmail.com',
		contact:7458293614
	},
	{
		fname:'sanjay',
		lname:'dutta',
		email:'snajay@gmail.com',
		contact:7458293614
	},
	{
		fname:'sanjay',
		lname:'dutta',
		email:'snajay@gmail.com',
		contact:7458293614
	},
	{
		fname:'sanjay',
		lname:'dutta',
		email:'snajay@gmail.com',
		contact:7458293614
	}
	]
	console.log(studentDetails);
	
	function student_table(array,htmlId){
		var studentDataTbody = document.getElementById(htmlId);
		
		var result = '';
		array.forEach(function(student,i){
			result += `<tr>
							<td>${i + 1}</td>
							<td>${student.fname}</td>
							<td>${student.lname}</td>
							<td>${student.email}</td>
							<td>${student.contact}</td>
							</tr>`;
		});
		studentDataTbody.innerHTML = result;
	};
	
	student_table(studentDetails,'studentData');