/* global angular:false */
(function (angular) {
  'use strict';

  angular.module('mvcDemo', [
    'ngRoute'
  ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: '/angular/views/tasks.html',
          controller: 'TasksCtrl'
        })
        .when('/task/:id', {
          templateUrl: '/angular/views/task.html',
          controller: 'TaskCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.hashPrefix('!');

    }])

  ;
})(angular);
