var ts = require('./task-service');

function success(msg, data) {
  data = data || {};
  return {
    message: msg,
    data: data
  };
}

function getAllTasks(req, res, next) {
  var xs = ts.getAllTasks();
  res.json(success('all tasks', ['a', 'b', 'c']));
  return next();
}

function getTask(req, res, next) {
  var x = ts.getTask();
  res.json(success('get one task', ['a']));
  return next();
}

function addTask(req, res, next) {
  var x = ts.addTask();
  res.json(success('add one task', ['a']));
  return next();
}

function updateTask(req, res, next) {
  var x = ts.updateTask();
  res.json(success('update one task', ['a']));
  return next();
}

function deleteTask(req, res, next) {
  //ts.deleteTask();
  res.send(204);
  res.json(success('delete one task'));
  return next();
}

function init(server) {

  server.get('/api/tasks', getAllTasks);

  server.get('/api/task/:id', getTask);
  server.post('/api/task', addTask);
  server.put('/api/task/:id', updateTask);
  server.del('/api/task/:id', deleteTask);

}

module.exports = init;
