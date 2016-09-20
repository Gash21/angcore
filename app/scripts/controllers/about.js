'use strict';

/**
 * @ngdoc function
 * @name angcoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angcoreApp
 */
angular.module('angcoreApp')
  .controller('AboutCtrl', function ($scope, $mdToast, $filter) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

  	$scope.select = {
	    value: "Option1",
	    choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
	};

	$scope.getCountryStates = function(countryId) {
      $scope.states = ($filter('filter')($scope.statelist, function(s) {
        return s.countryId === countryId;
      }));
      $scope.candidateData.PermanentAddress.State = null;
      $scope.hasStates = $scope.states && $scope.states.length > 0;
    };

    $scope.statelist = [{
      "Id": 4,
      "state": "New Brunswick",
      "countryId": 2
    }, {
      "Id": 5,
      "state": "Manitoba",
      "countryId": 2
    }, {
      "Id": 6,
      "state": "Delhi",
      "countryId": 3
    }, {
      "Id": 7,
      "state": "Bombay",
      "countryId": 3
    }, {
      "Id": 8,
      "state": "Calcutta",
      "countryId": 3
    }, {
      "Id": 9,
      "state": "Johor",
      "countryId": 145
    }, {
      "Id": 10,
      "state": "Kedah",
      "countryId": 145
    }, {
      "Id": 11,
      "state": "Kelantan",
      "countryId": 145
    }, {
      "Id": 12,
      "state": "Labuan",
      "countryId": 145
    }, {
      "Id": 13,
      "state": "Melaka",
      "countryId": 145
    }, {
      "Id": 14,
      "state": "Negeri Sembilan",
      "countryId": 145
    }, {
      "Id": 15,
      "state": "Pahang",
      "countryId": 145
    }, {
      "Id": 16,
      "state": "Perak",
      "countryId": 145
    }, {
      "Id": 17,
      "state": "Perlis",
      "countryId": 145
    }, {
      "Id": 18,
      "state": "Pulau Pinang",
      "countryId": 145
    }, {
      "Id": 19,
      "state": "Sabah",
      "countryId": 145
    }, {
      "Id": 20,
      "state": "Sarawak",
      "countryId": 145
    }, {
      "Id": 21,
      "state": "Selangor",
      "countryId": 145
    }, {
      "Id": 22,
      "state": "Terengganu",
      "countryId": 145
    }, {
      "Id": 23,
      "state": "Wilayah Persekutuan",
      "countryId": 145
    }];

    $scope.countrylist = [{
      "id": 1,
      "country": "USA"
    }, {
      "id": 2,
      "country": "Canada"
    }, {
      "id": 3,
      "country": "India"
    }, {
      "id": 4,
      "country": "Malaysia"
    }];


  $scope.showCustomToast = function() {
        $mdToast.show({
          hideDelay   : 3000,
          position    : 'top right',
          controller  : 'ToastCtrl',
          templateUrl : '../views/toast-template.html'
        });
      };
  })
  .controller('ToastCtrl', function($scope, $mdToast, $mdDialog) {
  	var isDlgOpen;

      $scope.closeToast = function() {
        if (isDlgOpen) return;

        $mdToast
          .hide()
          .then(function() {
            isDlgOpen = false;
          });
      };

      $scope.openMoreInfo = function(e) {
        if ( isDlgOpen ) return;
        isDlgOpen = true;

        $mdDialog
          .show($mdDialog
            .alert()
            .title('More info goes here.')
            .textContent('Something witty.')
            .ariaLabel('More info')
            .ok('Got it')
            .targetEvent(e)
          )
          .then(function() {
            isDlgOpen = false;
          })
      };


    });
