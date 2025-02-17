document.addEventListener('DOMContentLoaded',() => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
        addTask();
     }    
 });

 function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

   const li = document.createElement('li');
   li.textContent = taskText;
   
   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   deleteBtn.className = 'delete-btn';
   deleteBtn.onclick = () => {
      taskList.removeChild(li);
   };

   li.appendChild(deleteBtn);
   li.onclick = () => {
     li.classList.toggle('completed');
   };

   taskList.appendChild(li);
   taskInput.value = '' ;
 }

});