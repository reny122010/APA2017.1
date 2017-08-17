// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('globalController', ['$scope','$location', function ($scope, $location) {

	$scope.activities = [
		{
			name: 'Inicio ',
			link: ''
		},
		{
			name: 'Comparação 1',
			link: 'comparacao1'
		}
	];

	$scope.changeLink = function(selected){
		$location.path(selected);
	};

	
}]);