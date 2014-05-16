'use strict';

describe('Directive: angularLazy', function () {

  // load the directive's module
  beforeEach(module('appartamentipattimarinaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<angular-lazy></angular-lazy>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the angularLazy directive');
  }));
});
