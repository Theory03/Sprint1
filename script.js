 // script.js
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskInput.value;

        // Add a click event to show task details
        taskItem.addEventListener("click", () => showTaskDetails(taskInput.value));

        taskList.appendChild(taskItem);

        // Clear the input field after adding a task
        taskInput.value = "";
    }
}

function showTaskDetails(taskDetails) {
    const taskDetailsContainer = document.getElementById("taskDetails");
    taskDetailsContainer.textContent = `Selected Task: ${taskDetails}`;
}

// New function to remove tasks
function removeTask() {
    const taskList = document.getElementById("taskList");
    const selectedTask = document.querySelector("li.selected");

    if (selectedTask) {
        taskList.removeChild(selectedTask);
        // Clear task details when a task is removed
        const taskDetailsContainer = document.getElementById("taskDetails");
        taskDetailsContainer.textContent = "";
    }
}

// Add click event to call the removeTask function
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        const clickedElement = event.target;

        if (clickedElement.tagName === "LI") {
            // Deselect previously selected task
            const selectedTask = document.querySelector("li.selected");
            if (selectedTask) {
                selectedTask.classList.remove("selected");
            }

            // Select the clicked task
            clickedElement.classList.add("selected");
        } else {
            // Deselect when clicking outside of tasks
            const selectedTask = document.querySelector("li.selected");
            if (selectedTask) {
                selectedTask.classList.remove("selected");
            }
        }
    });

    // Add a button to remove the selected task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Task";
    removeButton.addEventListener("click", removeTask);

    document.body.appendChild(removeButton);
});

