// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Adding event listener to the "Add Task" button
addTaskBtn.addEventListener("click", function() {
    // Get the value of the task input
    const taskText = taskInput.value.trim();

    // If the input is not empty
    if (taskText !== "") {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input
        taskInput.value = "";

        // Add event listener to mark task as completed when clicked
        listItem.addEventListener("click", function() {
            listItem.classList.toggle("completed");
        });
    } else {
        alert("Please enter a task!");
    }
});
