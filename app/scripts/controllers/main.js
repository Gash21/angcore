'use strict';

/**
 * @ngdoc function
 * @name angcoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angcoreApp
 */
angular.module('angcoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
