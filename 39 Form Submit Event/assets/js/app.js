const submitForm = document.getElementById("submituserdata");
const nameinput = document.getElementById("name");
const emailinput = document.getElementById("email");
const formtable = document.getElementById("formtable");
let namearr = [];

const onSubmitBtn = (e) => {
  e.preventDefault();
  let obj = {
    fname: nameinput.value,
    email: emailinput.value
  };
  console.log(namearr)
  namearr.push(obj);
  let result = "";
  namearr.forEach((ele) => {
      result += `
      <tr>
      <td>${ele.fname}</td>
      <td>${ele.email}</td>
      </tr> 
      `;
      formtable.innerHTML = result;
    });
    e.target.reset();
};

submitForm.addEventListener("submit", onSubmitBtn);
