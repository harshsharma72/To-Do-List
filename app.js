let btn = document.querySelector("#add");
let text = document.querySelector("#text");
let list_container = document.querySelector("#list-container"); 
btn.addEventListener("click", () => {
    if(text.value === ""){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = text.value;
        list_container.appendChild(li);
    }
    text.value = "";
})