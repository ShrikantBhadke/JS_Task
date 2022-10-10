const boxDiv = document.getElementById("box")


// let ul = document.createElement("ul");
// let li = document.createElement("li");
// let li1 = document.createElement("li");

// let liNode = document.createTextNode("Hallo World");
// let liEle = li.appendChild(liNode);
// let liEle1 = li1.appendChild(liNode);
// ul.appendChild(liEle)
// ul.appendChild(liEle1);
// boxDiv.appendChild(ul);

// let para = document.createElement("p")
// para.innerHTML = "I love Javascript";
// boxDiv.appendChild(para);
// document.querySelector("body").appendChild(para);

// let heading = document.createElement("h1");
// heading.innerHTML = "angular";
// document.getElementById("box").appendChild(heading);
// console.log(document.querySelector("body").children)

let newDiv = document.createElement("div");
let heading = document.createElement("h1");
heading.innerText = " Angular ";
newDiv.appendChild(heading);
let para = document.createElement("p");
para.innerText =" I Love JavaScript";
let ul = document.createElement("ul");
let li = document.createElement("li");

li.innerHTML = "CSS";

newDiv.appendChild(para);
ul.appendChild(li);
newDiv.appendChild(ul);

boxDiv.appendChild(newDiv);
console.log(newDiv);