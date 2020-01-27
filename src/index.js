document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form')
  const taskDescription = document.getElementById('new-task-description')
  let tasks = document.getElementById('tasks')
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let newTask = document.createElement('li')
    newTask.innerHTML = taskDescription.value
    tasks.appendChild(newTask)
    e.target.reset()
  })
});
