'use strict';

/**
 * @ngdoc overview
 * @name angcoreApp
 * @description
 * # angcoreApp
 *
 * Main module of the application.
 */
angular
  .module('angcoreApp', [
    'ui.materialize',
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ngTouch'
  ])
  .constant("CONS_URL", {
        "url": "http://localhost:3000/"
  })
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ekaRoute', {
        templateUrl: 'views/ekaroute.html',
        controller: 'EkarouteCtrl',
        controllerAs: 'ekaRoute'
      })
      .when('/dropdep', {
        templateUrl: 'views/dropdep.html',
        controller: 'DropdepCtrl',
        controllerAs: 'dropdep'
      })
      .when('/toast-template', {
        templateUrl: 'views/toast-template.html',
        controller: 'ToastTemplateCtrl',
        controllerAs: 'toastTemplate'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
