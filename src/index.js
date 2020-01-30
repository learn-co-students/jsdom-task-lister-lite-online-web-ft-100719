document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let el = document.getElementById('create-task-form')
  el.addEventListener("submit", addToList);
});

function addToList(e){
  e.preventDefault();
  let taskLists= document.getElementById('tasks');
  let li=document.createElement('li');
  li.innerText = e.target.querySelector('input').value;
  taskLists.appendChild(li);
};
