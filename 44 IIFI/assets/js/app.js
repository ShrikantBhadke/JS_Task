// let demo = (function () {
//   console.log("IIFI Demo");
//   return "somthing!!";
// })();
import { fetchData } from "./allfunc";

// (function () {
//   console.log("IIFI Demo");
//   return "somthing!!";
// })();
(function () {
  var x = 10;
  fetchData();
  function add() {
    let y = 20;
    return function add2() {
      let z = 30;
      return x + y + z;
    };
    // return add2;
  }

  let r = add();
  console.log(r);
  let r1 = r();
  console.log(r1);

  let incriment = function () {
    let x = 10;
    function add1() {
      return ++x;
    }
    return add1;
  };
  let p = incriment();
  console.log(p());

  let p1 = p();
  console.log(p1);

  let y = 50;
  function substract() {
    let y1 = 10;
    function sub() {
      let y2 = 10;
      function sub1() {
        let y3 = 10;
        return y - y1 - y2 - y3;
      }
      return sub1;
    }
    return sub;
  }

  let a = substract();

  console.log(a());

  let a1 = a();

  console.log(a1());
});
