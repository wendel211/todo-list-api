let tasks = [];
let nextId = 1;

// Listar todas as tarefas
function getTasks(req, res) {
  res.json(tasks);
}

// Criar nova tarefa
function createTask(req, res) {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = { id: nextId++, title, done: false };
  tasks.push(newTask);

  res.status(201).json(newTask);
}

// Atualizar tarefa
function updateTask(req, res) {
  const { id } = req.params;
  const { title, done } = req.body;

  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (title !== undefined) task.title = title;
  if (done !== undefined) task.done = done;

  res.json(task);
}

// Excluir tarefa
function deleteTask(req, res) {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(index, 1);
  res.status(204).send();
}

module.exports = { getTasks, createTask, updateTask, deleteTask };
