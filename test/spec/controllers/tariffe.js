'use strict';

describe('Controller: TariffeCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var TariffeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TariffeCtrl = $controller('TariffeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
