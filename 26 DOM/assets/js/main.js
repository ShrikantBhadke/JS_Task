


// let boxId = document.getElementById("box");
// console.log(boxId.innerHTML);
// console.log(boxId.innerText);
// console.log(boxId);
// boxId.style.backgroundColor = "red";//not work

// let demo = document.getElementsByClassName("box");
// demo[2].style.backgroundColor = "green";
//demo.style.backgroundColor = "green";// undefine
// console.log(demo);
// demo = Array.from(demo);
// console.log(demo);

// demo.forEach(function(ele){
//     ele.style.backgroundColor = "gold";
// })

// demo[2].style.backgroundColor ="aqua";

// demo.pop();
// console.log(demo);

// let gettag = document.getElementsByTagName("li");
// console.log(gettag);
// gettag[2].style.backgroundColor = "pink";
// gettag = Array.from(gettag);
// console.log(gettag);
// // gettag[2].style.backgroundColor = "pink";

// gettag.forEach(function(ele){
//     ele.style.backgroundColor = "yellow";
// })


// let boxId = document.querySelector("#box :nth-child(2)");
// let boxId = document.querySelector("#box");
let boxId = document.querySelector(".navbar");


console.log(boxId);
// let btnDiv = document.querySelector(".btn");
// let demoDiv = document.querySelector(".demo");
// let removDiv = document.querySelector(".btn1");
// let toggleDiv = document.querySelector(".btn2");

// // btnDiv.addEventListener("click",function(ele){
// //     demoDiv.style.backgroundColor = "skyblue";
// // })

// btnDiv.addEventListener("click",function(ele){
//     demoDiv.classList.add("demo1");
// })

// removDiv.addEventListener("click",function(ele){
//     demoDiv.classList.remove("demo1");
// })

// toggleDiv.addEventListener("click",function(ele){
//     demoDiv.classList.toggle("demo1");
// })





// let demoDiv = document.querySelector(".demo");
// let addBtn = document.querySelector(".btn");
// let removeBtn = document.querySelector(".btn1");
// let toogleDiv = document.querySelector(".btn2");


// addBtn.addEventListener("click",function(ele){
//     demoDiv.classList.add("demo1");
// });

// removeBtn.addEventListener("click", function(ele){
//     demoDiv.classList.remove("demo1");
// });

// toogleDiv.addEventListener("click",function(ele){
//     demoDiv.classList.toggle("demo1");
// })


let onoffBtn = document.querySelector(".btn");
let bulbDiv = document.querySelector(".bulb1");


onoffBtn.addEventListener("click",function(ele){
    bulbDiv.classList.toggle("bulb");
})





let googleEle = document.querySelector(".link");

let googleAtt = googleEle.getAttribute("href");
console.log(googleAtt);

googleEle.setAttribute("target","_self");

let imgNew ="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

let changeBtn = document.querySelector(".btn");
let heroImg = document.querySelector(".heroImg");
let list_ul = document.querySelector(".list_ul");
changeBtn.addEventListener("click",function(event){
    heroImg.setAttribute('src',imgNew);
})


let x = list_ul.parentNode;
let y = list_ul.parentElement;
console.log(x);
console.log(y);

// heroImg.setAttribute("src",imgNew);

























