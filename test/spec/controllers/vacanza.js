'use strict';

describe('Controller: VacanzaCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var VacanzaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VacanzaCtrl = $controller('VacanzaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
