const taskList = document.querySelector("#task-list");
const taskName = document.querySelector("#task-name");
const taskArray = [];

taskName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const task = taskName.value;
    taskArray.push(task);
    taskList.innerHTML += `<li>${task}</li>`;
    taskName.value = "";
  }
});

// renderTasks(e.target.id.split("-")[0]);
