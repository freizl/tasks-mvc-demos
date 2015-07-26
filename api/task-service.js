var uuid = require('node-uuid'),
    R = require('ramda');

var t = {
  // [Task]
  tasks: [],

  all: function () {
    return R.clone(this.tasks);
  },

  get: function (id) {
    return R.find(R.propEq('id', id))(this.tasks);
  },

  add: function (task) {
    task.id = uuid.v4();
    this.tasks.push(task);
    return task;
  },

  update: function (task) {
    // dummy updating: delete old one and add the new one.
    this.del(task.id);
    this.tasks.push(task);
    return task;
  },

  del: function (id) {
    var i = R.findIndex(R.propEq('id', id))(this.tasks);
    if (i >= 0) {
      this.tasks = R.remove(i, i + 1, this.tasks);
    }
    return i;
  }
};


module.exports = t;
