/* global angular:false */
(function (angular) {
  'use strict';

  angular.module('mvcDemo', [
    'ngRoute'
  ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: '/templates/angular/tasks.html',
          controller: 'TasksCtrl'
        })
        .when('/task/:id', {
          templateUrl: '/templates/angular/task.html',
          controller: 'TaskCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      //$locationProvider.hashPrefix('!');

    }])

  ;
})(angular);
