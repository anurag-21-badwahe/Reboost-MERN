// document.getElementById("red").style.backgroundColor = "red"


// PROBLEM STATEMENT

// BY USING QUERY SELECTOR DO COLOR OF ALL BOXES TO AQUA

// let boxes = document.querySelectorAll(".box").style.backgroundColor = "aqua";
//THE ABOVE METHOD WILL NOT WORK BECAUSE QUERY SELECTOR ALL RETURN ARRAY


let boxes = document.querySelectorAll(".box");
boxes.forEach((e)=>{
    e.style.backgroundColor = "aqua";
})

