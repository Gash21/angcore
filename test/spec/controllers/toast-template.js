'use strict';

describe('Controller: ToastTemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('angcoreApp'));

  var ToastTemplateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToastTemplateCtrl = $controller('ToastTemplateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ToastTemplateCtrl.awesomeThings.length).toBe(3);
  });
});
