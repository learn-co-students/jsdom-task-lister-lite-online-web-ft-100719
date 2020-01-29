document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const newTaskForm = document.getElementById("create-task-form");
  
  newTaskForm.addEventListener("submit", addNewTask);
  
});

function addNewTask(e) {
  e.preventDefault();
  const taskUl = document.getElementById("tasks");
  let li = document.createElement("li");
  let newContent = document.createTextNode(e.target.querySelector("#new-task-description").value);
  li.appendChild(newContent);
  taskUl.appendChild(li);
  // let newDescription = `
  //   <li>
  //     ${e.target.querySelector("#new-task-description").value}
  //   </li>
  //   `;
  //   taskUl.innerHTML += newDescription;
  e.target.querySelector("#new-task-description").value = ""
}