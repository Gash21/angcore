'use strict';

/**
 * @ngdoc directive
 * @name angcoreApp.directive:ekaDirective
 * @description
 * # ekaDirective
 */
angular.module('angcoreApp')
  .directive('ekaDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ekaDirective directive');
      }
    };
  });
