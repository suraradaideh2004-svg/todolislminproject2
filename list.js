// document.addEventListener("DOMContentLoaded",() =>{
//   const inputtext = document.getElementById("inputtext").value.trim();
//   const addbtn = document.getElementById("addbtn");
//   const listUL = document.getElementById("listUL");
// function addBTN() {

// if (inputtext === ""){
// alert("Please write something!");
//     return;
// }

// else{
//     let li =document.createElement("li");
//     li.innerHTML=inputtext.value;
//     //listUL.appendChild(li);

// const deletbtn=document.createElement("button");
// deletbtn.textContent="delete";

// deletbtn.addEventListener("click",()=>{
// listUL.removeChild(li);
// });

// li.appendChild(deletbtn);
//     listUL.appendChild(li);


// inputtext.value = "";
//     inputtext.focus();
// }
// addbtn.addEventListener("click", addBTN);

// });
document.addEventListener("DOMContentLoaded", () => {
    const inputtext = document.getElementById("inputtext");
    const addbtn = document.getElementById("addbtn");
    const listUL = document.getElementById("listUL");

    function addBTN() {
        if (inputtext.value.trim() === "") {
        alert("Please write something!");
        return;
        }

        const li = document.createElement("li");
        const deletebtn = document.createElement("button");
        const span = document.createElement("span");
        const checkbox = document.createElement("input");

checkbox.type="checkbox";
span.textContent=inputtext.value;
deletebtn.textContent = "Delete";
span.classList.add("task-text");

checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.classList.add("checked");
        } else {
            span.classList.remove("checked");
        }
    });

        deletebtn.addEventListener("click", () => {
        listUL.removeChild(li);
        });

    
    
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deletebtn);
        listUL.appendChild(li);

        inputtext.value = "";
        inputtext.focus();
    }

    addbtn.addEventListener("click", addBTN);
    });






