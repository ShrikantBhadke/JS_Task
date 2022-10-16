const submitForm = document.getElementById("submituserdata");
const nameinput = document.getElementById("name");
const emailinput = document.getElementById("email");
const formtable = document.getElementById("formtable");
const maleradioBtn = document.getElementById("male");
const femaleradioBtn = document.getElementById("female");
const terms_and_condition = document.getElementById("terms_and_condition");
const education = document.getElementById("education")
let namearr = [];

const onSubmitBtn = (e) => {
  e.preventDefault();

  let obj = {
    fname: nameinput.value,
    email: emailinput.value,
    gender: getGender(),
    terms: getTermsandCondition(),
    // education: education.value
    education:education.options[education.selectedIndex].text
  };

  if (!obj.gender) {
    alert("Please check your gender");
  } else {
    namearr.push(obj);
    localStorage.setItem("formdata", JSON.stringify(namearr));
    creatformfirst(obj);
    e.target.reset();
  }
};


function creatformfirst(formdata) {
  let row = document.createElement("tr");
  row.innerHTML = `
        <td>${namearr.length}</td>
        <td>${formdata.fname}</td>
        <td>${formdata.email}</td>
        <td>${formdata.gender}</td>
        <td>${formdata.education}</td>
        <td>${getTermsandConditionValue(formdata.terms)}</td>
      `;
  formtable.appendChild(row);
}

function formCreating(arr) {
  let result = "";
  arr.forEach((ele, i) => {
    result += `
      <tr>
      <td>${i + 1}</td>
      <td>${ele.fname}</td>
      <td>${ele.email}</td>
      <td>${ele.gender}</td>
      <td>${ele.education}</td>
      <td>${getTermsandConditionValue(ele.terms)}</td>
      </tr> 
      `;
  });
  formtable.innerHTML = result;
}

function getGender() {
  let value;
  if (maleradioBtn.checked) {
    value = maleradioBtn.value;
  }
  if (femaleradioBtn.checked) {
    value = femaleradioBtn.value;
  }
  return value;
}

function getTermsandCondition() {
  let check = false;
  if(terms_and_condition.checked){
    check = true;
  }return check;
}

function getTermsandConditionValue(terms_and_condition) {
  let val = `<i class="fa-solid fa-xmark"></i>`;
  if (terms_and_condition === true) {
    val = `<i class="fa-solid fa-check"></i>`;
  }
  return val;
}
if (localStorage.getItem("formdata")) {
    namearr = JSON.parse(localStorage.getItem("formdata"));
    formCreating(namearr);
  }
  submitForm.addEventListener("submit", onSubmitBtn);