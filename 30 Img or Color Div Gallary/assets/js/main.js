const selectColor = document.getElementById("selectColor");
const selectAllDiv = Array.from(document.querySelectorAll(".all"));

const selectDivColor=(event)=>{
    // console.log(event.target.value);
    let colorDiv = "."+ event.target.value;
    console.log(colorDiv);
    selectAllDiv.forEach((ele)=>{
        ele.classList.add("d-none");
        
    })
    let color = Array.from(document.querySelectorAll(colorDiv));
color.forEach((color)=>{
    color.classList.remove("d-none");
})
    // console.log(color)
}


selectColor.addEventListener("change",selectDivColor)