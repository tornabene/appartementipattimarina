'use strict';

describe('Controller: ContattiCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var ContattiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContattiCtrl = $controller('ContattiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
