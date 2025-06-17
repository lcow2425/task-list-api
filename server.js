const express = require('express');
const tasks = require('./tasks');
const app = express();
const port = 3000;

app.use(express.json());

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks.getAllTasks().map(task => ({ id: task.id, title: task.title, status: task.status })));
});

// Add a task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title || title.length < 3) return res.status(400).json({ error: 'Title must be at least 3 characters' });
  const task = tasks.addTask(title);
  res.status(201).json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const deleted = tasks.deleteTask(parseInt(id));
  if (!deleted) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const updated = tasks.updateTask(parseInt(id), title);
  if (!updated) return res.status(404).json({ error: 'Task not found' });
  res.json(updated);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});