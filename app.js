let addTaskBtn = document.getElementById("addTaskBtn");
let tasksSection = document.getElementById("tasks");
let taskTitle = document.getElementById("taskTitle");

let counter = 1; // Maintain the global counter for new tasks

function addTask() {
     if (taskTitle.value === "") {
        window.alert("Please enter your task");
    } else {
        // Create new elements
        let newTask = document.createElement("li");
        let task = document.createElement("h4");
        let removeBtn = document.createElement("button");
        let completedBtn = document.createElement("button");
        let taskNumber = document.createElement("h4");

        // Append elements to the DOM
        tasksSection.appendChild(newTask);
        newTask.appendChild(taskNumber);
        newTask.appendChild(completedBtn);
        newTask.appendChild(task);
        newTask.appendChild(removeBtn);

        // Add class to newTask
        newTask.classList.add("newTask");

        // Style removeBtn
        removeBtn.style.backgroundColor = "red";
        removeBtn.innerText = "Remove Task";

        // Add class to completedBtn
        completedBtn.classList.add("completeBtn");
        completedBtn.addEventListener("click", () => {
            // Toggle the completed state
            if (completedBtn.classList.contains("completed")) {
                completedBtn.classList.remove("completed");
                newTask.style.textDecoration = "none";
                newTask.style.opacity = "1";
            } else {
                completedBtn.classList.add("completed");
                newTask.style.textDecoration = "line-through";
                newTask.style.opacity = "0.5";

            }
        });

        // Set task text and clear input
        task.innerText = taskTitle.value;
        taskTitle.value = "";

        // Set task number
        taskNumber.innerText = counter + "-";
        counter++; // Increment counter for the next task

        // Removing the task
        removeBtn.classList.add("removeBtn");
        removeBtn.addEventListener("click", () => {
            newTask.remove();
    updateTaskNumbers(); // Update numbers after removing a task

        });
    }
    updateTaskNumbers(); // Update numbers after removing a task
}


addTaskBtn.addEventListener("click", () => {
   addTask(); 
});

taskTitle.addEventListener("keypress",(e) =>{
    if (e.key === "Enter") {
        e.preventDefault();
        addTask(); 
    }

})



function updateTaskNumbers() {
    let tasks = tasksSection.querySelectorAll("li");
    tasks.forEach((task, index) => {
        let taskNumber = task.querySelector("h4");
        taskNumber.innerText = (index + 1) + "-";
    });}


