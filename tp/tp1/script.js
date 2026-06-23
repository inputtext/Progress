    
const taskInput = document.getElementById("taskInput");
const category = document.getElementById("category");
const addTaskBtn = document.getElementById("addTaskBtn");

const taskList = document.getElementById("taskList");

const searchInput = document.getElementById("searchInput");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const themeBtn = document.querySelector(".theme-btn");

let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

/* ==========================
   ADD TASK
========================== */

addTaskBtn.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if(text === ""){
        alert("Enter Task");
        return;
    }

    const task = {

        id: Date.now(),

        text,

        category: category.value,

        completed: false

    };

    tasks.push(task);

    saveTasks();

    renderTasks();

    taskInput.value = "";

});

/* ==========================
   RENDER TASKS
========================== */

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const card =
        document.createElement("div");

        card.className =
        task.completed
        ? "task-card completed"
        : "task-card";

        card.innerHTML = `

        <div class="task-info">

            <h3>${task.text}</h3>

            <span class="category">
                ${task.category}
            </span>

        </div>

        <div class="actions">

            <button class="complete-btn">
                ✓
            </button>

            <button class="edit-btn">
                ✏
            </button>

            <button class="delete-btn">
                🗑
            </button>

        </div>

        `;

        card.dataset.id = task.id;

        taskList.append(card);

    });

    updateStats();

}

/* ==========================
   EVENT DELEGATION
========================== */

taskList.addEventListener("click",(e)=>{

    const taskCard =
    e.target.closest(".task-card");

    if(!taskCard) return;

    const id =
    Number(taskCard.dataset.id);

    /* DELETE */

    if(e.target.classList.contains("delete-btn")){

        tasks =
        tasks.filter(
            task => task.id !== id
        );

        saveTasks();

        renderTasks();
    }

    /* COMPLETE */

    if(e.target.classList.contains("complete-btn")){

        const task =
        tasks.find(
            task => task.id === id
        );

        task.completed =
        !task.completed;

        saveTasks();

        renderTasks();
    }

    /* EDIT */

    if(e.target.classList.contains("edit-btn")){

        const task =
        tasks.find(
            task => task.id === id
        );

        const newText =
        prompt(
            "Edit Task",
            task.text
        );

        if(newText){

            task.text = newText;

            saveTasks();

            renderTasks();
        }
    }

});

/* ==========================
   SEARCH
========================== */

searchInput.addEventListener("input",()=>{

    const value =
    searchInput.value.toLowerCase();

    const cards =
    document.querySelectorAll(".task-card");

    cards.forEach(card=>{

        const text =
        card.querySelector("h3")
        .textContent
        .toLowerCase();

        card.style.display =
        text.includes(value)
        ? "flex"
        : "none";

    });

});

/* ==========================
   STATS
========================== */

function updateStats(){

    totalTasks.textContent =
    tasks.length;

    const completed =
    tasks.filter(
        task => task.completed
    ).length;

    completedTasks.textContent =
    completed;

    pendingTasks.textContent =
    tasks.length - completed;
}

/* ==========================
   LOCAL STORAGE
========================== */

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}

/* ==========================
   THEME TOGGLE
========================== */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

    document.body.dataset.theme =
    savedTheme;

    themeBtn.textContent =
    savedTheme === "dark"
    ? "☀️"
    : "🌙";
}

themeBtn.addEventListener("click",()=>{

    const isDark =
    document.body.dataset.theme === "dark";

    document.body.dataset.theme =
    isDark
    ? "light"
    : "dark";

    themeBtn.textContent =
    isDark
    ? "🌙"
    : "☀️";

    localStorage.setItem(
        "theme",
        document.body.dataset.theme
    );

});
