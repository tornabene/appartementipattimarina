'use strict';

angular.module('appartamentipattimarinaApp')
.controller('ContattiCtrl', function ($scope, $http, $rootScope,MailService) {
	
	$scope.success = false;
	$scope.httpError = false;


	$scope.email = {  };
	$scope.send = function() {

		var testo = 'Appartamenti patti marina\n Nome:'+$scope.contact.nome +	'\n Cognome:'+$scope.contact.cognome+	'\n Email: '+$scope.contact.email+'\n Città:'+$scope.contact.citta+		'\n NumeroOspiti:'+$scope.contact.numeroOspiti+	'\n messagio:'+$scope.contact.messagio;
		var subject =  'Appartamenti patti marina Info - '+$scope.contact.nome + ' '+$scope.contact.nome;
		var name = $scope.contact.nome + ' '+$scope.contact.cognome;


		$scope.email = {
			'key': '3MK6koq2JE5q75xytmAKag',
			'message': {
				'text' : testo,
				'subject' : subject,
				'from_email' : $scope.contact.email,
				'from_name': name,
				'to': [
					{
						'email' : 'segreto.nicolo@gmail.com',
						'name' : 'Segreto Nicolo',
						'type' : 'to'
					}
				]
			}
		};

		MailService.send($scope.email ,
			function(data){
				$scope.success = true;
				$scope.msg = {data:data};
			},
			function(data){
				$scope.httpError = true;
				$scope.error = {data:data};
			});
	};

	$rootScope.title = 'Contatti Appartamenti';
	$rootScope.showCaousel = false;

	$rootScope.status = 'ready';

});
