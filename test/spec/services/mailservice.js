'use strict';

describe('Service: MailService', function () {

  // load the service's module
  beforeEach(module('appartamentipattimarinaApp'));

  // instantiate service
  var MailService;
  beforeEach(inject(function (_MailService_) {
    MailService = _MailService_;
  }));

  it('should do something', function () {
    expect(!!MailService).toBe(true);
  });

});
