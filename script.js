let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    console.log("User input:", taskText);
    if (taskText !== "") {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    } else {
        alert('Please enter your task in todo...');
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTask = prompt("Update task:", tasks[index]);
    
    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        renderTasks();
    } else {
        alert('Please enter your task in todo...');
    }
}

function renderTasks() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        
        todoList.appendChild(li);
    });
}
