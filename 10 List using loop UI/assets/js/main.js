
var skillsetDiv =document.getElementById('skillSet');
console.log(skillsetDiv);
var skills = ["HTML5", "CSS3", "SASS", "JavaScript", "Typescript", "Angular"];

var result="<ul>";

for(var i=0; i<skills.length; i++){
	result +='<li><a href="#" class="menu">'+ skills[i] +'</a></li>'
	
}
result += '</ul>'
console.log(result);

skillsetDiv.innerHTML = result;