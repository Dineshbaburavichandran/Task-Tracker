document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task list item
  const taskList = document.getElementById("tasks");
  const taskItem = document.createElement("li");

  taskItem.innerHTML = `
    ${taskValue} 
    <button class="remove" onclick="removeTask(this)">Remove</button>
  `;
  
  taskList.appendChild(taskItem);
  taskInput.value = ""; // Clear the input field
});

function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}