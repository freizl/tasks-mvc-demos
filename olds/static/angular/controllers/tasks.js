/* global angular:false */

(function (angular, $) {
  'use strict';

  angular.module('mvcDemo')
    .controller('TasksCtrl', ['$scope', function ($scope, guaService) {

      $scope.tasks = [
        {id: 111, name: 11111, description: 11111},
        {id: 222, name: 22222, description: 11111},
        {id: 333, name: 33333, description: 11111}
      ];

      $scope.openAddTaskModal = function () {
        $('#add-task-content').openModal();
      };

    }]);

})(angular, $);
