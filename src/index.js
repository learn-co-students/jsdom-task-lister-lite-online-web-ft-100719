document.addEventListener("DOMContentLoaded", () => {

  const createTaskForm = document.querySelector("#create-task-form");
  const newTaskDescription = document.querySelector("#new-task-description");
  const newTaskPriority = document.querySelector("#new-task-priority");
  const tasks = document.querySelector("#tasks");

  const deleteTask = task => {
    tasks.removeChild(task);
  };

  const prioritizeTask = (priority,task) => {
    if (priority == "high") {
      task.style.color = "red";
    } else if (priority == "medium") {
      task.style.color = "yellow";
    } else if (priority == "low") {
      task.style.color = "green";
    }
  }

  const editTask = (priority,task) => {
    const TaskDescription = task.querySelector("span");
    const editTaskDescription = document.createElement("input");
    const updateTaskButton = document.createElement("button");

    editTaskDescription.type = "text";
    editTaskDescription.value = TaskDescription.innerText;

    task.innerHTML = "";
    task.append(editTaskDescription);
    task.append(updateTaskButton);

    updateTaskButton.innerText = "Update";
    updateTaskButton.addEventListener("click", function(event) {
      render(priority, task, editTaskDescription.value);
    });
  }

  const createTask = () => {
    const priority = newTaskPriority.value;
    const task = document.createElement("li");

    tasks.appendChild(task);
    render(priority,task,newTaskDescription.value);
  };

  const render = (priority,task,taskDescription) => {
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    task.innerHTML = `<span>${taskDescription}</span>`;
    task.append(editButton);
    task.append(deleteButton);
    prioritizeTask(priority, task);

    editButton.innerText = "Edit";
    editButton.addEventListener("click", function(event) {
      editTask(priority, task);
    });

    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function(event) {
      deleteTask(task);
    });
  }

  createTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createTask();
    event.target.reset();
  });
});