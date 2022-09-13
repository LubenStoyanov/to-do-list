// const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.querySelector("#task-list");
const taskName = document.querySelector("#task-name");

// const loadTasks = () => {
//   tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//   if (tasks.length === 0) {
//   }
// };

// window.addEventListener("load", () => {
//   loadTasks();
// });

let tasks = [];

const createDiv = (task) => {
  const taskDiv = document.createElement("div");
  taskList.appendChild(taskDiv);
  addTaskToList(taskDiv, task);
};

const addRemove = (taskDiv, task) => {
  const removeBtn = document.querySelector(`#btn-${task}`);
  removeBtn.addEventListener("click", () => taskDiv.remove());
};

const addTaskToList = (taskDiv, task) => {
  taskDiv.innerHTML += `<input type="checkbox" name="task" id="task"/>
    <label for="${task}">${task}</label>
    <button id="btn-${task}">X</button>
    `;
  addRemove(taskDiv, task);
};

const addTask = () => {
  const task = taskName.value;
  createDiv(task);
  tasks.push(task);
  taskName.value = "";
};

taskName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// renderTasks(e.target.id.split("-")[0]);

window.addEventListener("unload", () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
});
