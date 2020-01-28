document.addEventListener("DOMContentLoaded", function(e) {
  handleOnCreateSubmit()
})
function handleOnCreateSubmit() {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let taskName = e.target['new-task-description'].value;
    let tasksDiv = document.getElementById('tasks')
    tasksDiv.innerHTML += `<li>${taskName}</li>`
    form.reset()
  })
}
