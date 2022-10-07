

var skillset = ['HTML5','java','python','c','c++','css3'];



function list_array(arr,skill_list){
   var skillsetDiv = document.getElementById(skill_list);
   
   var result = '<ul class="list-group">';
   
   arr.forEach(function(skill){
	   result += `<li class='list-group-item'> I love ${skill} </li>`
   });
   result += '</ul>' 
   skillsetDiv.innerHTML = result;
};

list_array(skillset,'skills_set');