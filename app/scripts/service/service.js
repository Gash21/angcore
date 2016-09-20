"use strict";
angular.module('angcoreApp')
.factory('API', function($q, $http) {

   var APIService = {};
   APIService.call = function(path, postdata, methods) {
       postdata = postdata || {};
       methods = methods || 'GET';
       var promise = $http({
               url: path,
               method: methods,
               data: postdata,
               headers: {
                   'Content-Type': 'application/x-www-form-urlencoded'
               }
           })
           .success(function(data, status, headers, config) {
               return data;
           }).error(function(data, status, headers, config) {
           	  console.log(data);
           });

       return promise;
   };

   APIService.post = function(params, params2){
   		
   }
   return APIService;
})

.directive('myButtonCustom', function(){
	return {
		restrict: 'EA',
		template: '<button ng-click="alert()" class="btn btn-warning">Testing Button</button>',
		controller: function($scope){
			$scope.counter = 0;
			$scope.alert = function(){
				$scope.counter += 1;
				console.log($scope.counter);
			}

			$scope.$watch('counter', function(newD, old){
				console.log('this is new -> ' + newD);
				console.log('this is old -> ' + old);
			})
		}
	}
})



