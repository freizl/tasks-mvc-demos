/**
 * TODO: validation when add/update.
 */

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
    task = this._defaultTask(task);
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
    var i = this._findTask(id);
    this.tasks = R.remove(i, i + 1, this.tasks);
    return i;
  },

  _reset: function () {
    this.tasks = [];
  },

  _findTask: function (id) {
    var i = R.findIndex(R.propEq('id', id))(this.tasks);

    if (i < 0) {
      throw new Error('Can not find task ' + id + ' - not found');
    }

    return i;
  },

  _defaultTask: function (task) {
    return R.merge({
      name: 'default Task',
      description: '',
      priority: 3,
      deadline: '12/30/9999',
      textMessage: false,
      tag: [],
      storyPoint: 1
    }, task);
  }
};


module.exports = t;
