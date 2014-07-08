'use strict';

angular.module('appartamentipattimarinaApp')
.controller('VacanzaCtrl', function ($scope, $rootScope) {

	$scope.photos = [
		{src: '/images/galleria/gazebo.jpg', desc: 'Gazebo e piscina'},
		{src: '/images/galleria/angolo-cottura.jpg', desc: 'Angolo cottura'},
		{src: '/home/tino/Desktop/appa/bagno.jpg', desc: 'Bagno doccia'},
		{src: '/images/galleria/cameretta.jpg', desc: 'Cameretta'},
		{src: '/images/galleria/piscina.jpg', desc: 'Piscina'},
		{src: 'images/galleria/salone-cucina.jpg', desc: 'Salone cucina'},
		{src: '/images/galleria/stanxa-da-letto.jpg', desc: 'Stanza da letto matrimoniale'},
		{src: '/images/galleria/terrazzo.jpg', desc: 'Terrazzo'},
		{src: '/home/tino/Desktop/appa/soggiorno.jpg', desc: 'Soggiorno'}

	];
	
	$rootScope.status = 'ready';
	$rootScope.title = 'Foto Appartamenti';
	$rootScope.showCaousel = false;


});