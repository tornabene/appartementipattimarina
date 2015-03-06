'use strict';

angular.module('appartamentipattimarinaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'angular-carousel',
  'angular-loading-bar',
  'slick'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/vacanza', {
    templateUrl: 'views/vacanza.html',
    controller: 'VacanzaCtrl'
  })
  .when('/tariffe', {
    templateUrl: 'views/tariffe.html',
    controller: 'TariffeCtrl'
  })
  .when('/raggiungici', {
    templateUrl: 'views/raggiungici.html',
    controller: 'RaggiungiciCtrl'
  })
  .when('/contatti', {
    templateUrl: 'views/contatti.html',
    controller: 'ContattiCtrl'
  })
  .when('/mare-spiaggia', {
    templateUrl: 'views/mare-spiaggia.html',
    controller: 'MareSpiaggiaCtrl'
  })
  .when('/tindari', {
    templateUrl: 'views/tindari.html',
    controller: 'TindariCtrl'
  })
  .when('/isole-eolie', {
    templateUrl: 'views/isole-eolie.html',
    controller: 'IsoleEolieCtrl'
  })
  .when('/villa-romana', {
    templateUrl: 'views/villa-romana.html',
    controller: 'VillaRomanaCtrl'
  })
  .when('/comune-patti', {
    templateUrl: 'views/comune-patti.html',
    controller: 'ComunePattiCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.config(['$locationProvider', function($location) {
  $location.hashPrefix('!');
}]);