/* global angular:false */

(function (angular) {
  'use strict';

  angular.module('mvcDemo')
    .controller('TaskCtrl', ['$scope', function ($scope, guaService) {

      $scope.task = {id: 111, name: 11111, description: 11111};

    }]);

})(angular);
