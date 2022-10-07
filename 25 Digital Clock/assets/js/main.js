

// let cl = console.log;


// let str ="i love Javascript";

// function reverseStr(str1){
//     return str1.split("").reverse().join("");
// }

// let r = reverseStr(str);

// console.log(r);


// var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


// let input = "Apr";

// function removeEle(arry,input1){
//     let index = arry.indexOf(input1);
//     return arry.splice(index,1);
// }

// removeEle(mS,input);
// console.log(mS);






let clockDiv = document.getElementById("clock");
function digitalclock(){
    let result = "";
    let date = new Date();
    let hr = date.getHours();
    let time = "PM";
    hr = twoDigit(hr);
    let min = date.getMinutes();
    min = twoDigit(min);
    let sec = date.getSeconds();
    sec = twoDigit(sec);
    if(hr<12){
        time = "AM"
    }
    if(hr>12){
        hr = hr-12;
    }
    result = `${hr}:${min}:${sec} ${time}`;
    setTimeout(digitalclock,1000); 
    clockDiv.innerHTML = result; 
}

digitalclock();

function twoDigit(time_ele){
    if(time_ele<10){
        time_ele = `0${time_ele}`
    }
    return time_ele;
}