'use strict';

describe('Controller: TindariCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var TindariCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TindariCtrl = $controller('TindariCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
