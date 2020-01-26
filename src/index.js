document.addEventListener("DOMContentLoaded", () => {


  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById("tasks")
  //listen for submit event, and tel it what to do(callback function)
  form.addEventListener('submit', function (event) { 
    event.preventDefault()

    //have user input
    const newTask = document.getElementById('new-task-description').value 

    //add it on the document
    const taskItem = document.createElement("li")
    taskItem.innerText = newTask
    taskList.appendChild(taskItem)

    //another way to append newTask, directly manipulates the DOM
    //taskList.innerHTML += `<li> ${newTask} </li>`

    //reset form description box after submit
    form.reset()

    })
    
    //event delegation
    taskList.addEventListener("click", function(event) {
      event.preventDefault
    })
});




