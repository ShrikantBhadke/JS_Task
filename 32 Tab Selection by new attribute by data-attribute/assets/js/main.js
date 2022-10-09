const liEle = Array.from(document.querySelectorAll(".tapHeading li"));
const paraEle = Array.from(document.querySelectorAll(".contPara p"));
// ==========================================================================================
// const selectedTab = (event) =>{
//   console.log(event.target);
//   liEle.forEach((li)=>{
//     li.classList.remove("active");
// })
//   event.target.classList.add("active")
// paraEle.forEach((para)=>{
//   para.style.display = "none";
// })
//  document.getElementById(event.target.dataset.id).style.display = "block";
// }

// liEle.forEach((li)=>{
//   li.addEventListener("click",selectedTab)
// })
// ==========================================================================================

// const selectedTab = (event) => {
//   // console.log(event.target);
//   liEle.forEach((li) => li.classList.remove("active"));
//   event.target.classList.add("active");
//   paraEle.forEach((para) => (para.style.display = "none"));
//   document.getElementById(event.target.dataset.id).style.display = "block";
// };

// liEle.forEach((li) => li.addEventListener("click", selectedTab));
// ==========================================================================================





const selectedli = (getli) =>{
  liEle.forEach((li)=>{
    li.classList.remove("active")
  })
  getli.classList.add("active");
}
const selectpara = (getli) =>{
  paraEle.forEach((para)=>{
    para.classList.remove("activePara");
  })
  let selectedtabpara = document.getElementById(getli.dataset.id);
  selectedtabpara.classList.add("activePara")
}

const selectTab = (event) =>{
  // let liEle = event.target;
  // console.log(liEle);
  selectedli(event.target)
  selectpara(event.target)

}

liEle.forEach((li)=>{
  li.addEventListener("click", selectTab)
})
// ==========================================================================================





// const selectTab =(event) =>{
//   let liselect = event.target
//     console.log(liselect);

//   paraEle.forEach((para)=>{
//     para.classList.remove("activePara")
//     // console.log(para)
//   })
//   let selectedli = document.getElementById(event.target.dataset.id)
//   // console.log(selectedli)
//   selectedli.classList.add("activePara");
//   liEle.forEach((li)=>{
//     li.classList.remove("active")
//   })
//   liselect.classList.add("active")

// }

// liEle.forEach((li)=>{
//   li.addEventListener("click",selectTab)
// })
// ==========================================================================================




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


// ==========================================================================================



// liEle.forEach((ele)=>{
//     ele.addEventListener("click",function(onclick){
//       console.log(this.innerText)

//       selectLi(this)
//       selectpara(this)
//     })
//   })

//   function selectLi(li){
//     liEle.forEach(function(ele){
//       ele.classList.remove("active");
//     })
//     li.classList.add("active");
//   }
//   function selectpara(para){
//     let tabLi = '#' + para.innerText;
//     let result = document.querySelector(tabLi);
//       // console.log(result);
//       paraEle.forEach((para1)=>{
//           para1.classList.remove("activePara");
//       })
//       result.classList.add("activePara")
//   }
