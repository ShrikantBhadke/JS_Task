let cl = console.log;

let fn = {
  fname: "jhon",
};

let ln = {
  lname: "Doe",
};

let person = {
  ...fn,
  ...ln,
  age: 25,
};

cl(person);

let runner = ["jhon", 454, 545, 45, 45, 45];

let [runnerName, runerid, ...times] = runner;

cl(runnerName, runerid, times);

let getheding = document.querySelector(".jump");
let text = [...getheding.textContent.trim()];
let maped = text.map((ele) => {
  return `<span>${ele}</span>`;
});

getheding.innerHTML = maped.join("");
// let getspan = text.split("").map((ele) => `<span>${ele}</span>`);
