let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");
let button = document.querySelector("button");
button.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});
listContainer.addEventListener(
  "click",
  (el) => {
    if (el.target.tagName === "LI") {
      el.target.classList.toggle("checked");
    } else if ((el.target.tagName = "SPAN")) {
      el.target.parentElement.remove();
    }
  },
  false
);
