let taskData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const columns = [todo, progress, done];
let dragElem = null;
const tasks = document.querySelectorAll(".task");

function addTask(title, desc, column) {
  const div = document.createElement("div");

  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
                <h2>${title}</h2>
                <p>${desc}</p>
                <button>Delete</button>
            `;
  column.appendChild(div);

  div.addEventListener("dragstart", (e) => {
    dragElem = div;
  });

  const deleteButton = div.querySelector("button");
  deleteButton.addEventListener("click", () => {
    div.remove();
    updateTaskCount();
  });
}

function updateTaskCount() {
  columns.forEach((col) => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");

    taskData[col.id] = Array.from(tasks).map((t) => {
      return {
        title: t.querySelector("h2").innerText,
        desc: t.querySelector("p").innerText,
      };
    });
    localStorage.setItem("tasks", JSON.stringify(taskData));
    count.innerText = tasks.length;
  });
}

if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));
  for (const col in data) {
    const column = document.querySelector(`#${col}`);
    data[col].forEach((task) => {
      addTask(task.title, task.desc, column);
    });
  }
  updateTaskCount();
}

tasks.forEach((task) => {
  task.addEventListener("dragstart", (e) => {
    dragElem = task;
  });
});

function addDragElem(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.appendChild(dragElem);
    column.classList.remove("hover-over");
    updateTaskCount();
  });
}
addDragElem(todo);
addDragElem(progress);
addDragElem(done);

/* Modal toggle logic */
const toggle = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".bg");
const addTaskBtn = document.querySelector("#addNewTask");

toggle.addEventListener("click", (e) => {
  modal.classList.toggle("active");
});

modalBg.addEventListener("click", (e) => {
  modal.classList.remove("active");
});

addTaskBtn.addEventListener("click", () => {
  const titleInput = document.querySelector("#task-title-input");
  const descInput = document.querySelector("#task-desc-input");

  const taskTitle = titleInput.value;
  const taskDesc = descInput.value;

  addTask(taskTitle, taskDesc, todo);

  titleInput.value = "";
  descInput.value = "";

  updateTaskCount();
  modal.classList.remove("active");
});
