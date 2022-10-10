let older = [19,64,42,74,9,35,62,44]
let teenage = [12,3,4,16,17,15,9,8,7,6]
let ages = [45,15,32,67,9,2,84,15,62,34,15]



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