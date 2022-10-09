const tabHeading = document.querySelectorAll(".tabHeading");
const tabPara = document.querySelectorAll(".tabs > p");

// ==========================================================================================================
const selectTab = (event) => {
  tabHeading.forEach((head) => {
    head.classList.remove("active");
  });
  event.target.classList.add("active");
  tabPara.forEach((para) => {
    para.classList.remove("activepara");
  });
  let selectedtab = document.getElementById(event.target.dataset.id);
  console.log(event.target.dataset)
  selectedtab.classList.add("activepara");
};

// ======================================================================================================

tabHeading.forEach((head) => {
  head.addEventListener("click", selectTab);
});
