let older = [19,64,42,74,9,35,62,44]
let teenage = [12,3,4,16,17,15,9,8,7,6]
let ages = [45,15,32,67,9,2,84,15,62,34,15]




let ages18 = ages
    .filter(age=>age>=18)
    .map(age=>age*2)
    .some(age=>age>50);
    // .reduce((a1,a2)=>a1+a2)
console.log(ages18)


let oldersome = older.some((age)=> {
    if(age>=18){
        return true
    }else{
       return false
    }
})

console.log(oldersome);

let olderevey = older.every(age=>age>=18);

console.log(olderevey);

let agesome = ages.some(age=>{
    if(age>=18){
        return true
    }else{
        return false
    }
})
console.log(agesome);

let ageevery = ages.every(age=>{
    if(age>=18){
        return true
    }else{
        return false
    }
})

console.log(ageevery);