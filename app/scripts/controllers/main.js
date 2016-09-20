'use strict';

/**
 * @ngdoc function
 * @name angcoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angcoreApp
 */
angular.module('angcoreApp')
  .controller('MainCtrl', function ($scope, API, CONS_URL) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    
    $scope.listAlldata = function(){
      API.call(CONS_URL.url + 'posts').then(function(response) {
           $scope.results = response.data;
           console.log($scope.results);
      });

    };

    console.log(API.post('Hello', 'New'));

    $scope.listAlldata();
	
  });
