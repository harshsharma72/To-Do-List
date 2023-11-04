let input = document.querySelector("#text");
let btn = document.querySelector("#add");
let listContainer = document.querySelector("#list-container");
btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerText = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.appendChild(li);
  }
  input.value = "";
});
