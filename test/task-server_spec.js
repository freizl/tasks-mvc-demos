var assert = require('chai').assert,
    R = require('ramda');

var service = require('../api/task-service.js');

describe('API - Task Service', function () {

  beforeEach(function () {
    service._reset();
  });

  it('shall add an new task', function () {
    var t = createTask();

    t = service.add(t);

    assert.isDefined(t.id);

    var ts = service.all();
    assert.equal(ts.length, 1);

  });

  it('shall update an existing task', function () {
    var t1 = createTask(),
        t2;

    t1 = service.add(t1);
    t2 = R.merge(t1, {
      description: 'updateed desc 111',
      deadline: '09/10/2015'
    });

    service.update(t2);

    var ts = service.all();

    assert.equal(ts.length, 1);
    assert.deepEqual(t2, ts[0]);

  });

  it('shall add an new task', function () {
    var t = service.add(createTask());
    var t2 = service.get(t.id);

    assert.equal(t, t2);

  });

  it('shall get all existing tasks', function () {
    service.add(createTask());
    service.add(createTask('Task2'));
    service.add(createTask('Task3'));

    var ts = service.all();
    assert.equal(ts.length, 3);

  });

  it('shall delete an existing task', function () {
    var t1 = service.add(createTask());
    service.add(createTask('Task2'));

    var ts = service.all();
    assert.equal(ts.length, 2);

    service.del(t1.id);
    assert.equal(service.all().length, 1);

  });

  function createTask(name) {
    name = name || 'Task1';
    return {
      name: name,
      description: 'desc 111',
      priority: 2,
      deadline: '08/10/2015',
      textMessage: false,
      tag: [],
      storyPoint: 3
    };
  }

});
