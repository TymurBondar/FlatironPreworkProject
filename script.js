function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("tasks");
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
        <label>${taskText}</label>
        <button class="complete-button" onclick="completeTask(this)">✅</button>
    `; 

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function completeTask(button) {
    const taskList = document.getElementById("tasks");
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}