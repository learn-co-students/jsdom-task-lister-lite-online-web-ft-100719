document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form#create-task-form").addEventListener("submit", function (event) {
    let taskDescription = document.getElementById("new-task-description").value;
    taskList = document.getElementById("tasks")
    taskList.innerHTML += `\n<li id="${taskDescription}">${taskDescription}<button data-description="${taskDescription}">X</button></li>`;
    document.querySelector(`[data-description="${taskDescription}"]`).addEventListener("click", function (e) {
      taskList.removeChild(document.getElementById(taskDescription));
    });
    event.preventDefault();
  }, false);
});
