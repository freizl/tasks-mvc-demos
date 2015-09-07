// TODO: how to unit test this file?

var express = require('express'),
    router = express.Router();

var ts = require('./tasks/internal.js');

function success(msg, data) {
  data = data || {};
  return {
    message: msg,
    data: data
  };
}

function getAllTasks(req, res) {
  var xs = ts.all();
  res.json(success('all tasks', xs));
}

function getTask(req, res) {
  var id = req.params.id,
      x = ts.get(id);
  res.json(success('get one task', x));
}

function addTask(req, res) {
  var x = ts.add(req.body);
  res.json(success('add one task', x));
}

function updateTask(req, res) {
  var x = ts.update(req.body);
  res.json(success('update one task', x));
}

function deleteTask(req, res) {
  var id = req.params.id,
      index = ts.del(id);
  if (index >= 0) {
    res.json(success('delete task', {id: id}));
    res.send(200);
  } else {
    res.send(400, 'Can delete task - not found');
  }
}

function init(server) {

  server.get('/tasks', getAllTasks);

  server.get('/task/:id', getTask);
  server.post('/task', addTask);
  server.put('/task/:id', updateTask);
  //server.del('/task/:id', deleteTask);

}

init(router);

module.exports = router;
