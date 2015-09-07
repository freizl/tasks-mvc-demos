// TODO: how to unit test this file?

var express = require('express'),
    router = express.Router();

var ts = require('./tasks/internal.js');

function payload(msg, data) {
  data = data || {};
  return {
    message: msg,
    data: data
  };
}

function error(res, msg, data) {
  res.status(404)
     .json(payload(msg, data));
}

function validate(task) {
  if (!task) {
    return {summary: 'task object is null'};
  } else if (!task.name) {
    return {summary: 'task.name can not be null'};
  } else {
    return null;
  }
}

function getAllTasks(req, res) {
  var xs = ts.all();
  res.json(payload('all tasks', xs));
}

function getTask(req, res) {
  var id = req.params.id,
      x = ts.get(id);
  res.json(payload('get one task', x));
}

function addTask(req, res) {
  var data = req.body,
      validation = validate(data);

  if (!validation) {
    var x = ts.add(data);
    res.json(payload('add one task', x));
  } else {
    error(res, 'failed to add one task', validation);
  }

}

function updateTask(req, res) {
  var data = req.body,
      validation = validate(data);

  if (!validation) {
    var x = ts.update(data);
    res.json(payload('update one task', x));
  } else {
    error(res, 'failed to update one task', validation);
  }
}

function deleteTask(req, res) {
  var id = req.params.id,
      index = ts.del(id);
  if (index >= 0) {
    res.json(payload('delete task', {id: id}));
  } else {
    error(res, 'Can delete task - not found', {});
  }
}

function init(server) {

  server.get('/tasks', getAllTasks);

  server.get('/task/:id', getTask);
  server.post('/task', addTask);
  server.put('/task/:id', updateTask);
  server['delete']('/task/:id', deleteTask);

}

init(router);

module.exports = router;
