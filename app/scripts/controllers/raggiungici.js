'use strict';

angular.module('appartamentipattimarinaApp')
.controller('RaggiungiciCtrl', function ($scope, $rootScope) {

	$scope.map = {
		center: {
			latitude: 38.149885,
			longitude: 14.964258
		},
		zoom: 8
	};

	$rootScope.status = 'ready';
});
