let tasks = [];
let nextId = 1;

function getAllTasks() {
  return tasks;
}

function addTask(title) {
  const task = { id: nextId++, title, createdAt: new Date() };
  tasks.push(task);
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

module.exports = { getAllTasks, addTask, deleteTask };