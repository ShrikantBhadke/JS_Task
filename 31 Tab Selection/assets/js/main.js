let liEle = Array.from(document.querySelectorAll(".tapHeading li"));
let paraEle = Array.from(document.querySelectorAll(".contPara p"));



liEle.forEach((li)=>{
  li.addEventListener("click",function(selectTab){
    // console.log(selectTab.target.innerText)
    let liselect = "#" + selectTab.target.innerText;
    // let liselect = selectTab.target.innerText;

    liEle.forEach((ele)=>{
      ele.classList.remove("active");
    })
    li.classList.add("active");
    let selectPara = document.querySelector(liselect);
    // let selectPara = document.getElementById(liselect);
    console.log(selectPara);
    paraEle.forEach((ele)=>{
      ele.classList.remove("activePara")
    })
    selectPara.classList.add("activePara")
  })
})





// liEle.forEach((ele)=>{
//   ele.addEventListener("click",function(onclick){
//     // console.log(onclick.target.innerText)
//     let tabLi = '#' + onclick.target.innerText;
//     liEle.forEach(function(ele){
//       ele.classList.remove("active");
//     })
//     this.classList.add("active"); 
//     let result = document.querySelector(tabLi);
//     console.log(result);
//     paraEle.forEach((para)=>{
//         para.classList.remove("activePara");
//     })
//     result.classList.add("activePara")
//   })
// })



// liEle.forEach((ele) => {
//   ele.addEventListener("click", function (onclick) {
//     console.log(this.innerText)
//     selectLi(this)
//     selectpara(this)
//   })
// })

// function selectLi(li) {
//   liEle.forEach(function (ele) {
//     ele.classList.remove("active");
//   })
//   li.classList.add("active");
// }
// function selectpara(para) {
//   let tabLi = '#' + para.innerText;
//   let result = document.querySelector(tabLi);
//   // console.log(result);
//   paraEle.forEach((para1) => {
//     para1.classList.remove("activePara");
//   })
//   result.classList.add("activePara")
// }