/* global angular:false, $:false */

(function (angular, $) {
  'use strict';

  angular.module('mvcDemo')
    .factory('guaService', ['$http', function ($http) {

      return {
        getAllTasks: function () {
          return $http.get('/api/tasks')
            .then(function (resp) {
              return resp.data.data;
            });
        },
        createTask: function (task) {
          return $http.post('/api/task', task)
            .then(function (resp) {
              return resp.data.data;
            });
        },

        deleteTask: function (id) {
          return $http.delete('/api/task/' + id);
        }
      };

    }]);

})(angular, $);
