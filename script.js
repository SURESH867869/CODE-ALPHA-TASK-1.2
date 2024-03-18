document.getElementById("addTaskBtn").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput").value;
    var timeInput = document.getElementById("timeInput").value;
    if (taskInput.trim() === "" || timeInput.trim() === "") {
        alert("Please enter both task and time!");
        return;
    }
    addTask(taskInput, timeInput);
    document.getElementById("taskInput").value = "";
    document.getElementById("timeInput").value = "";
});

function addTask(task, time) {
    var todoList = document.getElementById("todo-list");
    var taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
        <input type="text" value="${task}" readonly>
        <input type="text" value="${time}" readonly>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(taskElement);

    var editBtn = taskElement.querySelector(".edit-btn");
    var deleteBtn = taskElement.querySelector(".delete-btn");

    editBtn.addEventListener("click", function() {
        taskElement.querySelector("input[type='text']").removeAttribute("readonly");
        taskElement.querySelector("input[type='text']").focus();
    });

    deleteBtn.addEventListener("click", function() {
        taskElement.remove();
    });
}
