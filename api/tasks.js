// TODO: how to unit test this file?

var ts = require('./tasks/internal.js');

function success(msg, data) {
  data = data || {};
  return {
    message: msg,
    data: data
  };
}

function getAllTasks(req, res, next) {
  var xs = ts.all();
  res.json(success('all tasks', xs));
  return next();
}

function getTask(req, res, next) {
  var id = req.params.id,
      x = ts.get(id);
  res.json(success('get one task', x));
  return next();
}

function addTask(req, res, next) {
  var x = ts.add(req.body);
  res.json(success('add one task', x));
  return next();
}

function updateTask(req, res, next) {
  var x = ts.update(req.body);
  res.json(success('update one task', x));
  return next();
}

function deleteTask(req, res, next) {
  var id = req.params.id,
      index = ts.del(id);
  if (index >= 0) {
    res.json(success('delete task', {id: id}));
    res.send(200);
  } else {
    res.send(400, 'Can delete task - not found');
  }
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
