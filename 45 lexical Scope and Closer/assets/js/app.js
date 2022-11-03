let cl = console.log;

// let x = 10;

// function add1() {
//   let y = 20;
//   function add2() {
//     let z = 30;
//     return x + y + z;
//   }
//   return add2;
// }
// let result = add1();
// cl(result);
// cl(result());

// function outerfunction() {
//   let x = 10;
//   function innerfunction() {
//     x++;
//     return x;
//   }
//   return innerfunction;
// }

// let result = outerfunction();
// cl(result);

// let result2 = result();
// cl(result2);
// let result3 = result();
// cl(result3);

// function p(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }

let p = (x) => (y) => (z) => x + y + z;

let result10 = p(100)(200)(300);
cl(result10);
// let result5 = p(100);
// cl(result5);
// let r4 = result5(200);
// cl(r4);
// cl(r4(300));
