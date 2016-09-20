'use strict';

describe('Controller: EkaCtrl', function () {

  // load the controller's module
  beforeEach(module('angcoreApp'));

  var EkaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EkaCtrl = $controller('EkaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EkaCtrl.awesomeThings.length).toBe(3);
  });
});
