// const tabHeading = document.querySelectorAll(".tabHeading");
// const tabPara = document.querySelectorAll(".tabs > p");

// // ==========================================================================================================
// const selectTab = (event) => {
//   tabHeading.forEach((head) => {
//     head.classList.remove("active");
//   });
//   event.target.classList.add("active");
//   tabPara.forEach((para) => {
//     para.classList.remove("activepara");
//   });
//   let selectedtab = document.getElementById(event.target.dataset.id);
//   console.log(event.target.dataset)
//   selectedtab.classList.add("activepara");
// };

// // ======================================================================================================

// tabHeading.forEach((head) => {
//   head.addEventListener("click", selectTab);
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const tabHeading = document.querySelectorAll(".tabHeading");
// const tabCont = document.querySelectorAll(".tabCont");

// tabHeading.forEach((heading) => {
//   heading.addEventListener("click", changeTab);
//   function changeTab(event) {
//     // console.log(event.target);
//     tabHeading.forEach((heading)=>{
//       heading.classList.remove("active");
//     })
//     event.target.classList.add("active");
//     tabCont.forEach((para)=>{
//       para.classList.remove("activepara");
//     })
//     document.querySelector("#"+event.target.dataset.id).classList.add("activepara")
//   }
// });

/////////////////////////////////////////////////////////////////////////////////////////////////

// const tabHeading = document.querySelectorAll(".tabHeading");
// const tabCont = document.querySelectorAll(".tabCont");

// tabHeading.forEach((tabselect) => {
//   tabselect.addEventListener("click", tabclick);
// });
// function tabclick(event) {
//   // let heading = event.target
//   selectheading(event.target);
//   selectpara(event.target);
// }

// function selectheading(heading) {
//   tabHeading.forEach((tabhead) => {
//     tabhead.classList.remove("active");
//   });
//   heading.classList.add("active");
// }

// function selectpara(tabhead) {
//   tabCont.forEach((para) => {
//     para.classList.remove("activepara");
//   });
//   document.getElementById(tabhead.dataset.id).classList.add("activepara");
// }

////////////////////////////////////////////////////////////////////////////////////////////

// const tabHeading = document.querySelectorAll(".tabHeading");
// const tabCont = document.querySelectorAll(".tabCont");

// const removeheadtab = (ele) => {
//   tabHeading.forEach((tabhead) => {
//     tabhead.classList.remove("active");
//   });
// };
// const removetabpara = (ele) => {
//   tabCont.forEach((para) => {
//     para.classList.remove("activepara");
//   });
// };
// const onclick = (event) => {
//   removeheadtab();
//   removetabpara();
//   event.target.classList.add("active");
//   document.getElementById(event.target.dataset.id).classList.add("activepara");
// };

// tabHeading.forEach((tabhead) => {
//   tabhead.addEventListener("click", onclick);
// });

//////////////////////////////////////////////////////////////////////////////////////////////

const tabHeading = document.querySelectorAll(".tabHeading");
const tabCont = document.querySelectorAll(".tabCont");

tabHeading.forEach((headEle) => {
  headEle.addEventListener("click", (onclick) => {
    tabHeading.forEach((headingEle) => {
      headingEle.classList.remove("active");
    });
    onclick.target.classList.add("active");
    tabCont.forEach((para) => {
      para.style.display = "none";
    });
    document.getElementById(onclick.target.dataset.id).style.display = "block";
  });
});
