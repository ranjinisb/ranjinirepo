let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const categorySelect = document.getElementById("categorySelect");

  const taskText = taskInput.value.trim();
  const category = categorySelect.value;

  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false,
    category: category
  };

  tasks.push(task);
  taskInput.value = "";
  categorySelect.value = "";

  renderTasks();
}

function renderTasks(filter = "All") {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks
    .filter(task => filter === "All" || task.category === filter)
    .forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = `${task.text} (${task.category || "No Category"})`;
      li.className = task.completed ? "completed" : "";
      li.onclick = () => toggleTask(index);
      taskList.appendChild(li);
    });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function filterTasks(category) {
  renderTasks(category);
}
