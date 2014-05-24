'use strict';

angular.module('appartamentipattimarinaApp')
.factory('MailService', function ($resource) {
    // Service logic
    // ...https://mandrillapp.com/api/1.0/messages/send.json



    // Public API here
    return $resource('https://mandrillapp.com/api/1.0/messages/send.json', {},
    {
      send: {method: 'POST',isArray: true}
    });
  });
