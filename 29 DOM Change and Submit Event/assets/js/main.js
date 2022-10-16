const submitForm = document.getElementById("submitForm");
const fnameInput = document.getElementById("fname");
const education = document.getElementById("education");
const emailInput = document.getElementById("email");
const paraPrint = document.getElementById("para");
let fname;
let education1;
let email;

const subFormData = (event)=>{
    event.preventDefault();
    console.log(education.children)
    fname = fnameInput.value;
    education1 = education.value;
    email = emailInput.value;
    console.log(fname);
    console.log(education1);
    console.log(email);

    paraPrint.innerHTML = `Full Name :- ${fname} <br> Education:- ${education1} <br> E-mail Id:- ${email}`
// console.log(event.target);
}
//


submitForm.addEventListener("submit",subFormData);
