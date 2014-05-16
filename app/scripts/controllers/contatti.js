'use strict';

angular.module('appartamentipattimarinaApp')
.controller('ContattiCtrl', function ($scope, $http, $rootScope) {
	
	$scope.success = false;
	$scope.httpError = false;

	$scope.send = function() {
		var job = { job: { klass: 'msg', args: [$scope.msg]}};
		$http.post('/contact',job).
		success(function(data){
			$scope.success = true;
			$scope.msg = {data:data};
		}).
		error(function(data){
			$scope.httpError = true;
			$scope.error = {data:data};
		});
	};
	$rootScope.status = 'ready';
});
