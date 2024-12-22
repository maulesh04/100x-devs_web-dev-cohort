let index = 1;
function addToDo() {
  let task = document.querySelector("input").value;
  const newTask = document.createElement("div");
  newTask.setAttribute("id", index);
  newTask.innerHTML = "<div>&#8226;" + task + 
  "<button onclick='deleteToDo("+index+")'>Done</button>        <button onclick='editToDo("+index+")'>Edit</button></div>";
  document.body.appendChild(newTask);
  index += 1;
  document.querySelector("input").value="";
}

function deleteToDo(index) {
  let task = document.getElementById(index);
  task.remove();
}

function editToDo(index){
  let task = document.getElementById(index);
  let newTask = prompt("Enter the new task");
  if(newTask != null){
    task.innerHTML = "<div>&#8226;" + newTask + 
    "<button onclick='deleteToDo("+index+")'>Done</button>      <button onclick='editToDo("+index+")'>Edit</button></div>";
  }
}