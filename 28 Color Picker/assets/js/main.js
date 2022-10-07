let boxDiv = document.querySelector(".box");
let redInput = document.querySelector(".red");
let greenInput = document.querySelector(".green");
let blueInput = document.querySelector(".blue");
let paraDiv = document.querySelector("#para");
let red;
let green;
let blue;

boxDiv.addEventListener("mousemove", onmousemove);
function onmousemove(ele){
    
    // console.log(ele.offsetX,ele.offsetY);
    
    red = ele.offsetX;
    green = ele.offsetY;
    blue =ele.offsetX + 20;
    boxDiv.style.backgroundColor = `rgb(${red},${green},${blue})`;
    // console.log(ele.clientX,ele.clientY,blue);
}

boxDiv.addEventListener("click", onClick);
function onClick(ele){
    redInput.value = red;
    greenInput.value = green;
    blueInput.value = blue;
    paraDiv.innerText = `rgb(${red},${green},${blue})`
}