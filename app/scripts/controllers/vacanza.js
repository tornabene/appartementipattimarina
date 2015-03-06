'use strict';

angular.module('appartamentipattimarinaApp')
.controller('VacanzaCtrl', function ($scope, $rootScope) {

	$scope.photos = [
		{src: '/images/galleria/gazebo.jpg', desc: 'Gazebo e piscina'},
		{src: '/images/galleria/angolo-cottura.jpg', desc: 'Angolo cottura'},
		{src: '/images/galleria/bagno.jpg', desc: 'Bagno doccia'},
		{src: '/images/galleria/cameretta.jpg', desc: 'Cameretta'},
		{src: '/images/galleria/piscina.jpg', desc: 'Piscina'},
		{src: 'images/galleria/salone-cucina.jpg', desc: 'Salone cucina'},
		{src: '/images/galleria/stanxa-da-letto.jpg', desc: 'Stanza da letto matrimoniale'},
		{src: '/images/galleria/terrazzo.jpg', desc: 'Terrazzo'},
		{src: '/images/galleria/soggiorno.jpg', desc: 'Soggiorno'},
		{src: '/images/galleria/angolo-cottura.jpg', desc: 'Angolo cottura'},
		{src: '/images/galleria/annuncio2.jpg', desc: 'Piscina'},
		{src: '/images/galleria/bagno.jpg', desc: 'Bagno'},
		{src: '/images/galleria/bagno-doccia.jpg', desc: 'Bagno doccia'},
		{src: '/images/galleria/big_piscina_201.jpg', desc: 'Piscina'},
		{src: '/images/galleria/camera_letto.jpg', desc: 'Camera letto'},
		{src: '/images/galleria/gazebo.jpg', desc: 'Gazebo '},
		{src: '/images/galleria/piscina.jpg', desc: 'Piscina'},
		{src: '/images/galleria/residence.jpg', desc: 'Il residence'},
		{src: '/images/galleria/salone-cucina.jpg', desc: 'Salone cunina'},
		{src: '/images/galleria/soggiorno.jpg', desc: 'Soggiorno'},
		{src: '/images/galleria/stanxa-da-letto.jpg', desc: 'Stanza da letto'},
		{src: '/images/galleria/Strand-Meer.jpg', desc: 'Vista mare'},
		{src: '/images/galleria/terrazzo.jpg', desc: 'Terrazzo'}
	];
	$rootScope.status = 'ready';
	$rootScope.title = 'Foto Appartamenti';
	$rootScope.showCaousel = false;


});