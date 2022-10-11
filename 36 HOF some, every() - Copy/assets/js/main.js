let ages = [12,45,62,35,12,84,51,[12,545,656,23,32],[12,45,87,[78,78,7,87]]]

ages.forEach(age => {
    // console.log(age);
    if(Array.isArray(age)){
        age.forEach(a=>console.log(a))
    }else{
        console.log(age);
    }
});

let ageEle = ages.flat(Infinity);

console.log(ageEle)

let agefill = ageEle.fill(0);
console.log(agefill)



let count100 = [];

for(i=1; i<=100;i++){
    count100.push(i);
}
// console.log(count100);


function creatrangeArray(num){
    return new Array(num).fill(0).map((ele,i)=>ele + i +1)
}

console.log(creatrangeArray(100));