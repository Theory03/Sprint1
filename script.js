// Function to add a new task
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

// Function to display task details
function showTaskDetails(taskDetails) {
    const taskDetailsContainer = document.getElementById("taskDetails");
    taskDetailsContainer.textContent = `Selected Task: ${taskDetails}`;
}

// Function to remove tasks
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

    // Function to change the theme
    function changeTheme() {
        const themeSelect = document.getElementById("themeSelect");
        const selectedTheme = themeSelect.value;

        // Change the theme based on the selected option
        document.body.className = selectedTheme;
    }

    // Function to change the font
    function changeFont() {
        const fontSelect = document.getElementById("fontSelect");
        const selectedFont = fontSelect.value;

        // Change the font family based on the selected option
        document.body.style.fontFamily = selectedFont;
    }

    // Function to integrate calendar functionality
    function integrateCalendar() {
        // Your code to integrate the calendar functionality goes here
        // This function should initialize and display the calendar as needed
        // You may use external libraries such as FullCalendar.js to achieve this
    }

    // Function to provide collaborative features
    function provideCollaborativeFeatures() {
        // Your code to provide collaborative features goes here
        // This function should implement any collaborative features you want to add
        // For example, you can add real-time editing or sharing capabilities
    }

    // Call functions to integrate calendar and provide collaborative features
    integrateCalendar();
    provideCollaborativeFeatures();
});
