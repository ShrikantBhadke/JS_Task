let cl = console.log;

function printNum(num) {
  if (num === 1) {
    cl(num);
    return;
  }
  cl(num);
  printNum(num - 1);
}

printNum(10);

// function printfact(num) {
//   let result = 1;
//   for (let i = num; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// }

// cl(printfact(5));

function printfact(num) {
  // if (num === 1) {
  //   return 1;
  // }
  // return num * printfact(num - 1);
  if (num <= 0) {
    alert("Please enter valid Number");
    return;
  }
  return num === 1 ? 1 : num * printfact(num - 1);
}
cl(printfact(5));

let arr = new Array(5).fill(0).map((num, i) => num + i + 1);
cl(arr);
let x = arr.reduce((acc, cv) => {
  return (acc *= cv);
});
cl(x);
