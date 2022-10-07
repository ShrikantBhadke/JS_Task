let hideBtn = document.querySelector(".btn");
let boxDiv = document.querySelector(".box");
let flag = true;





hideBtn.addEventListener("click",(function(ele){
    // console.log(ele.type);
    // console.log(ele.target.type);
    if(flag){
        boxDiv.classList.add("box1");
        // ele.target.innerText = "Show";
        hideBtn.innerText = "Show";
        flag = false;
    }else{
        boxDiv.classList.remove("box1");
        // hideBtn.innerText = "Hide";
        ele.target.innerText = "Hide";
        flag = true
    }

}))
// console.log(typeof addition);
console.log(typeof add1);

let addition = function(x,y){
    return x+y;
}

let a = addition(10,75);
console.log(a);

function add1(x,y){
    return x + y;
}
console.log(add1(45,85));


let add2 = x => x * x;

console.log(add2(5));


let add3 = (x,y) => {
    return x + y;
}

console.log(add3(24,96));


// hideBtn.addEventListener("click",(function(ele){
//     if(flag){
//         boxDiv.classList.add("box");
//         hideBtn.innerText = "Show";
//         flag = false;
//     }else{
//         boxDiv.classList.remove("box");
//         ele.target.innerText = "Hide";
//         flag = true
//     }

// }))

let clickBtn = document.querySelector(".btn");
// let demoDiv = document.querySelector(".box");
// let flag = true;


// clickBtn.addEventListener("click",changeColor);


// function changeColor(ele){
//     if(flag){
//         demoDiv.classList.add("box1");
//         clickBtn.innerText = "Show";
//         flag = false;
//     }else{
//         demoDiv.classList.remove("box1");
//         clickBtn.innerText = "Hide";
//         flag = true;
//     }
// }

// // demoDiv.addEventListener("dblclick",changeColor1);

// // function changeColor1(ele){
// //     demoDiv.classList.toggle("box2");
// //     console.log("triger");
// //     // demoDiv.classList.add("box2");
// //     // demoDiv.classList.remove("box");


// // }

// demoDiv.addEventListener("mouseover",onMouse);

// function onMouse(){
//     demoDiv.classList.add("box2");
// }

// demoDiv.addEventListener("mouseout",outMouse);

// function outMouse(){
//  this.classList.remove("box2");
// }

