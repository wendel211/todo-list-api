const tasks = [];

function getTasks(req, res) {
  res.json(tasks);
}

module.exports = { getTasks };
