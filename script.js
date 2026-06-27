  let tasks = [];
  function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value;



    if (taskText === "") {
        alert("Enter a task");
        return;
    }
     
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks))


    let li = document.createElement("li");

    li.innerHTML = `
     <span onclick="toggleTask(this)">
        ${taskText}
     </span>

    <button onclick = "deleteTask(this)">
          Delete
    </button>
 
`;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
 


function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function deleteTask(button) {
    button.parentElement.remove();
}

window.onload = function () {

    let savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {

        tasks = savedTasks;

        savedTasks.forEach(task => {

            let li = document.createElement("li");

            li.innerHTML = `
            <span onclick="toggleTask(this)">
                ${task}
            </span>

            <button onclick="deleteTask(this)">
                Delete
            </button>
            `;

            document.getElementById("taskList").appendChild(li);

        });

    }

} 

function toggleTask(task) {
    if (task.style.textDecoration === "line-through") {
        task.style.textDecoration = "none";
        task.style.color = "black";
    } else {
        task.style.textDecoration = "line-through";
        task.style.color = "green";

         
    }
}