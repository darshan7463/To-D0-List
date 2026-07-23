let todo = [];

let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

function addTask() {
  let task = input.value;

  if (task === "") return;

  todo.push(task);

  let li = document.createElement("li");
  li.innerText = task;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";

  delBtn.addEventListener("click", function () {
    li.remove();
  });
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
