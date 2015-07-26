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

  /**
   * TODO:
   * 1. validation
   */
  add: function (task) {
    task.id = uuid.v4();
    this.tasks.push(task);
    return task;
  },

  update: function (task) {
    // dummy updating: delete old one and add the new one.
    var i = this.del(task.id);
    if (i >= 0) {
      this.tasks.push(task);
    } else {
      throw new Error('Can not delete task ' + task.id + ' - not found');
    }
    return task;
  },

  del: function (id) {
    var i = this._findTask(id);
    if (i >= 0) {
      this.tasks = R.remove(i, i + 1, this.tasks);
    }
    return i;
  },

  _reset: function () {
    this.tasks = [];
  },

  _findTask: function (id) {
    return R.findIndex(R.propEq('id', id))(this.tasks);
  },

  _defaultTask: function (task) {
    return R.mixin({
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
