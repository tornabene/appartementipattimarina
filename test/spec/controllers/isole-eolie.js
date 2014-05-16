'use strict';

describe('Controller: IsoleEolieCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var IsoleEolieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IsoleEolieCtrl = $controller('IsoleEolieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
