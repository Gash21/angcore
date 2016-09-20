'use strict';

describe('Controller: EkarouteCtrl', function () {

  // load the controller's module
  beforeEach(module('angcoreApp'));

  var EkarouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EkarouteCtrl = $controller('EkarouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EkarouteCtrl.awesomeThings.length).toBe(3);
  });
});
