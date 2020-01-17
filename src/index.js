//Setting up the DOM elements.
document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks');

  //Calling the createNewTask const on submit
  newTaskForm.addEventListener("submit", createNewTask);
});

//Syntax: declaration and association. 'event' is equal to the resulting set.
const createNewTask = event => {
  //stop form from "posting"
  event.preventDefault();

  //grabbing description, creating a new li, and set the innerText to the descr.
  const newTaskDescription = document.getElementById('new-task-description');
  const newTask = document.createElement('li');
  newTask.innerText = newTaskDescription.value;

  //call appendNewTask passing the task 
  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
}
