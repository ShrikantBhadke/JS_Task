


function factory(fn,ln,email,contact){
	let obj = {};
	obj.fname = fn;
	obj.lname = ln;
	obj.email = email;
	obj.contact = contact;
	return obj;
}

let stu1 = factory("shri","shri","shri@gmail.com",123456);
console.log(stu1);

function factory(fn,ln,email,contact){
	let obj = new Object();
	obj.fname = fn;
	obj.lname = ln;
	obj.email = email;
	obj.contact = contact;
	return obj;
}

let stu2 = factory("shri","shri","shri@gmail.com",123456);
console.log(stu2);

function Custom_constructer(fn,ln,email,contact){
	this.fname = fn;
	this.lname = ln;
	this.email = email;
	this.contact =contact;
	
}

let std3 = new Custom_constructer("shri2","shri2","shri2@gmail.com",123456);
console.log(std3);

let std4 = new Custom_constructer("shri3","shri3","shri3@gmail.com",123456);
console.log(std4);

let student_list = [
{fname:"Shreeja",
lname:"Bhadke",
age: '2.5years',
gender: "female"},
{fname:"Shreejjvha",
lname:"Bhadke",
age: '2.5years',
gender: "female"},
{fname:"Shrhgfhgeeja",
lname:"Bhadke",
age: '2.5years',
gender: "female"},
{fname:"Shrehhghgeja",
lname:"Bhadke",
age: '2.5years',
gender: "female"}
];


function array_table(array_name,class_name){
	let idfrom_htmlDiv = document.getElementById(class_name);
	
	var result ="";
	array_name.forEach(function(array_atom,i){
		result += `<tr>
					<td>${i+1}</td>
					<td>${array_atom.fname}</td>
					<td>${array_atom.lname}</td>
					<td>${array_atom.age}</td>
					<td>${array_atom.gender}</td>
				  </tr>`
		return result;
		
	});
	
	idfrom_htmlDiv.innerHTML = result;
}

array_table(student_list,"table_student");

let skills = ['HTML5', 'CSS3', 'Angular', 'TypeScript','javaScript','python'];
console.log(skills);
function skills_auto(array,id_name){
	let list_skillDiv = document.getElementById(id_name);
	let result1 = "<ul>";
	
	array.forEach(function(skill){
		result1 += `<li> I like to learn ${skill} </li>`
		return result1;
	})
	list_skillDiv.innerHTML = result1;
	
}

skills_auto(skills,"list_skill");



function Custom_Chemical_list(chemName,chemPrize,chemQuantity,total_prize){
	this.chemicalName = chemName;
	this.chemicalPrize = chemPrize;
	this.chemQuantity = chemQuantity;
	this.total_prize = total_prize;
};


let chem1 = new Custom_Chemical_list('Sulphuric Acid',1542,'5 leters',6128);
console.log(chem1);

function listChem(chemName,chemPrize,chemQuantity,total_prize){
	let obj1 = {};
	obj1.chemicalName = chemName;
	obj1.chemicalPrize = chemPrize;
	obj1.chemQuantity = chemQuantity;
	obj1.total_prize = total_prize;
	return obj1;
}

console.log(listChem('Sulphuric Acid',1542,'5 leters',6128));



let chemical_table =[
{name_chem: 'Sulphuric Acid',
quantity_stock: '2.5 leters',
concentration: '93%',
quantity_issue: '250 ml'},
{name_chem: 'Sodium Carbonat',
quantity_stock: '500 gm',
concentration: '99.9%',
quantity_issue: '7.5gm'},
{name_chem: 'Sodium Chloride',
quantity_stock: '500 gm',
concentration: '99.9%',
quantity_issue: '45 gm'},
{name_chem: 'HCl',
quantity_stock: '2.5 leters',
concentration: '93%',
quantity_issue: '350 ml'},
{name_chem: 'Acetic Acid',
quantity_stock: '2.5 leters',
concentration: '93%',
quantity_issue: '700 ml'},
{name_chem: 'Isopropyle Alcohol',
quantity_stock: '2.5 leters',
concentration: '100%',
quantity_issue: '150 ml'},
{name_chem: 'Sodium Hydroxid',
quantity_stock: '500gm',
concentration: '100%',
quantity_issue: '40gm '}];


function chem_List(array,html_Id){
	let chemical_tableDiv = document.getElementById(html_Id);
	
	let result = `<table>
					<thead>
						<tr>
							<th>Sr.No.</th>
							<th>Chemical Name</th>
							<th>Quantity Stock</th>
							<th>Concentration</th>
							<th>Quantity Issue</th>
						</tr>
					</thead>
					<tbody>`
	array.forEach(function(array_cont, i){
		result += `<tr>
						<td>${i + 1}</td>
						<td>${array_cont.name_chem}</td>
						<td>${array_cont.quantity_stock}</td>
						<td>${array_cont.concentration}</td>
						<td>${array_cont.quantity_issue}</td>
					</tr>`
		return result;
	})
	
	chemical_tableDiv.innerHTML = result;
}

chem_List(chemical_table,"chemical_list");


