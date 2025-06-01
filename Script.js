function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <i class="fas fa-trash delete-btn"></i>
  `;

  // Mark as completed
  li.addEventListener("click", function (e) {
    if (!e.target.classList.contains("delete-btn")) {
      li.classList.toggle("completed");
    }
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
    updateTaskCount();
  });

  taskList.appendChild(li);
  input.value = "";
  updateTaskCount();
}

function updateTaskCount() {
  const count = document.querySelectorAll("#taskList li").length;
  document.getElementById("taskCount").textContent = `Tasks: ${count}`;
}
