// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// main.js

'use strict';

var app = angular.module('apa', ['ngRoute','ngMaterial','chart.js']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/', {
      	templateUrl   : 'partials/inicio.html',
      	title         : 'Trabalho APA',
        controller    : 'comparacao1Controller'
    })
    .when('/comparacao1', {
      	templateUrl   : 'partials/comparacao1.html',
      	title         : 'Trabalho APA Comparacao 1',
        controller    : 'comparacao1Controller'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
