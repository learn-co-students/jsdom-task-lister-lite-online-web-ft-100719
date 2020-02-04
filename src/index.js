document.addEventListener("DOMContentLoaded", () => {
  handleFormOnSubmit()
});

const form = document.getElementById('create-task-form');

function handleFormOnSubmit() {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let taskName = e.target['new-task-description'].value;
    let tasksDiv = document.getElementById('tasks')
    tasksDiv.innerHTML += `<li>${taskName}</li>`
    form.reset()
  })
}