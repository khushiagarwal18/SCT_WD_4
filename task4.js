const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const clearCompletedButton = document.getElementById('clearCompleted');

function createTaskElement(taskText, taskTime) {
    const taskItem = document.createElement('li');
    
    taskItem.innerHTML = `
        <span>${taskText} ${taskTime ? `- ${taskTime}` : ''}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="toggleComplete(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    
    return taskItem;
}

function addTask() {
    const text = taskInput.value.trim();
    const time = taskDate.value;

    if (text === '') return;
    
    const taskItem = createTaskElement(text, time);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskDate.value = '';
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const span = taskItem.querySelector('span');
    
    const newText = prompt('Edit task:', span.textContent.split('-')[0].trim());
    if (newText) {
        span.textContent = newText + ' ' + span.textContent.split('-')[1]?.trim();
    }
}

function toggleComplete(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskList.removeChild(taskItem);
}

function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('.task-lists li.completed');
    completedTasks.forEach(task => taskList.removeChild(task));
}

addTaskButton.addEventListener('click', addTask);
clearCompletedButton.addEventListener('click', clearCompletedTasks);