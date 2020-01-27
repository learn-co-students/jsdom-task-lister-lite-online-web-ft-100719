document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTask);
});

function addTask(event) {
  event.preventDefault();
  let newTask = document.getElementById('new-task-description');
  
  //let newLI = document.createElement('li', newTask);
  let newLI = document.createElement('li');
  newLI.innerText = newTask.value;

  let taskList = document.getElementById("tasks");

  taskList.appendChild(newLI);

  newTask.value = ""
}





// document.getElementById("form").addEventListener("submit", function(event) {
//   document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//   event.preventDefault();
// }, false);
