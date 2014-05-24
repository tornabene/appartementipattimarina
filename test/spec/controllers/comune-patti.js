'use strict';

describe('Controller: ComunePattiCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var ComunePattiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComunePattiCtrl = $controller('ComunePattiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});