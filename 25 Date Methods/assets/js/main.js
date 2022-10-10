let date = new Date();
date.setHours(22);
date.setFullYear(2024);

console.log(date);




let digitalclockDiv = document.getElementById("digitalclock")
function digitalClock(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = "AM";
    if(hr<=12){
        time = "AM";
    }else{
        time = "PM";
    }
    hr = twoDig(hr);
    min = twoDig(min);
    sec= twoDig(sec);
    let result = `${hr}:${min}:${sec} ${time}`;
    digitalclockDiv.innerHTML = result;
    setTimeout(digitalClock,1000)
}

digitalClock();

function twoDig(time){
    if(time < 10){
        time = "0" + time;
    }
    return time;
}