var skilles = ["HTML","JavaScripe","Angular","React","CSS","Python","node js"];

var skillDiv = document.getElementById("listSkill");
var result= "";

skilles.forEach(function(skill, i){
	result += "<li> I love "+ [i + 1] +" " +skill +"</li>"
});

skillDiv.innerHTML = result;

var student_marks =[
{roll_no: 01,
name :"Raj",
english: 77,
science:87,
computer_science:92,
social_studies:95},
{roll_no: 02,
name :"Sachin",
english: 77,
science:87,
computer_science:92,
social_studies:95},
{roll_no: 03,
name :"Santosh",
english: 77,
science:87,
computer_science:92,
social_studies:95},
{roll_no: 04,
name :"Vishwanath",
english: 77,
science:87,
computer_science:92,
social_studies:95},
{roll_no: 05,
name :"Bhaurao",
english: 77,
science:87,
computer_science:92,
social_studies:95},
{roll_no: 06,
name :"Laxmikant",
english: 77,
science:87,
computer_science:92,
social_studies:95	
}
]

var studentListTab = document.getElementById("studentList")

var result1 = "";

student_marks.forEach(function(marks){
	result1 += "<tr>"
	result1 += "<td>" + marks.roll_no + "</td>"
	result1 += "<td>" + marks.name + "</td>"
	result1 += "<td>" + marks.english + "</td>"
	result1 += "<td>" + marks.science + "</td>"
	result1 += "<td>" + marks.computer_science + "</td>"
	result1 += "<td>" + marks.social_studies + "</td>"
	result1 += "</tr>"
});

studentListTab.innerHTML = result1;