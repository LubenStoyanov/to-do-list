const taskList = document.querySelector("#task-list");
const taskName = document.querySelector("#task-name");
const taskArray = [];

const createDiv = (task) => {
  const taskDiv = document.createElement("div");
  taskList.appendChild(taskDiv);
  addTaskToList(taskDiv, task);
};

const addTaskToList = (taskDiv, task) => {
  taskDiv.innerHTML += `<input type="checkbox" name="task" id="task"/>
    <label for="${task}">${task}</label>
    <button id="btn-${task}">X</button>
    `;
};

const addTask = () => {
  const task = taskName.value;
  createDiv(task);
  taskArray.push(task);
  taskName.value = "";
};

taskName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// renderTasks(e.target.id.split("-")[0]);

window.addEventListener("unload", function (event) {
  //when the window is closed
  localStorage.setItem("pickColor", "meep"); // save selected color to localStorage
  let sending = browser.runtime.sendMessage({
    message: "color set done",
  });
  console.log("message sent");
});
