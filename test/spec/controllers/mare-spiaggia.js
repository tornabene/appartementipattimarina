'use strict';

describe('Controller: MareSpiaggiaCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var MareSpiaggiaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MareSpiaggiaCtrl = $controller('MareSpiaggiaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
