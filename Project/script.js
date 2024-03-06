let taskId = 1;

function addTask() {
  const taskText = document.getElementById('newTask').value;

  if (taskText.trim() !== '') {
    const taskList = document.getElementById('taskList');
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '&#10008;'; // Крестик в виде символа Unicode
    deleteBtn.classList.add('delete-btn');
    deleteBtn.setAttribute('onclick', 'removeTask(this.parentNode)');
    
    taskElement.appendChild(deleteBtn);

    taskElement.setAttribute('onclick', 'completeTask(this)');
    taskElement.setAttribute('data-id', taskId++);
    taskList.appendChild(taskElement);

    document.getElementById('newTask').value = '';
  }
}
function completeTask(taskElement) {
  taskElement.classList.add('completed');
  taskElement.setAttribute('onclick', 'removeTask(this)');
}

function removeTask(taskElement) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(taskElement);
}
function completeTask(taskElement) {
  taskElement.classList.add('completed');
  const checkbox = document.createElement('span');
  checkbox.innerHTML = '&#x2713;'; // Галочка в виде символа Unicode
  checkbox.classList.add('checkbox');
  taskElement.appendChild(checkbox);
}
// Новая функция для удаления задачи
function removeTask(taskElement) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(taskElement);
}
function removeTask(taskElement) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(taskElement);
}