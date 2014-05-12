'use strict';

describe('Directive: ganttChart', function () {

  // load the directive's module
  beforeEach(module('someTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gantt-chart></gantt-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ganttChart directive');
  }));
});
