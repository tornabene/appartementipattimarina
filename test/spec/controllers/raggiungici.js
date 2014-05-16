'use strict';

describe('Controller: RaggiungiciCtrl', function () {

  // load the controller's module
  beforeEach(module('appartamentipattimarinaApp'));

  var RaggiungiciCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RaggiungiciCtrl = $controller('RaggiungiciCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
