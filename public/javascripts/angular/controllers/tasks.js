/* global angular:false, $:false */

(function (angular, $) {
  'use strict';

  angular.module('mvcDemo')
    .controller('TasksCtrl', ['$scope', 'guaService', function ($scope, guaService) {

      function init() {
        guaService.getAllTasks()
          .then(function (resp) {
            $scope.tasks = resp;
          });
      }
      $scope.openAddTaskModal = function () {
        $('#add-task-content').openModal();
      };

      $scope.createTask = function () {
        guaService.createTask($scope.task)
          .then(function (task) {
            $('#add-task-content').closeModal();
            $scope.tasks.push(task);
          });
      };

      $scope.deleteTask = function (id) {
        guaService.deleteTask(id)
          .then(init); // TODO: rm items from $scope.tasks
      };

      init();

    }]);

})(angular, $);
