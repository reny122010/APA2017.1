// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('comparacao1Controller', ['$scope', function ($scope) {

	$scope.arraySortSelection = [];
	$scope.arraySortInsertion = [];

	var insertionSortTime = 0;
	var selectionSortTime = 0;

	$scope.maxValue = 1000;

	//Selection sort 
	var swap = function (items, firstIndex, secondIndex){
	    var temp = items[firstIndex];
	    items[firstIndex] = items[secondIndex];
	    items[secondIndex] = temp;
	}

	var selectionSort = function (items){
	    var len = items.length, min;

	    for (var i=0; i < len; i++){

	        //Insere a posicao minima
	        min = i;

	        //Verifica o resto da matriz para ver se item menor
	        for (var j=i+1; j < len; j++){
	            if (items[j] < items[min]){
	                min = j;
	            }
	        }

	        //Se o mínimo não estiver na posição, troque-o
	        if (i != min){
	            swap(items, i, min);
	        }
	    }	
	}

	//Insertion sort
	var insertionSort = function (items) {  
	    var len = items.length;

	    for (var i = 1; i < len; i++) {
	        var tmp = items[i]; //Copia o elemento

	        //Verifica a parte com o numero do elemento copiado
	        for (var j = i - 1; j >= 0 && (items[j] > tmp); j--) {
	            //Troca o número
	            items[j + 1] = items[j];
	        }
	        //Isere o numero copiado na parte correta. 
	        items[j + 1] = tmp;
	    }
	}

	var setTIme = function (){
		$scope.data = [
		    [insertionSortTime], [selectionSortTime]
		];
	}

	$scope.startSelectionSort = function(){
		var t0 = new Date();
		insertionSort($scope.arraySortSelection);
		var tf = new Date(); 
		selectionSortTime = tf - t0;
		console.log("Selection")
		console.log(selectionSortTime)
		setTIme();
	}

	$scope.startInserionSort = function(){
		var t0 = new Date();
		selectionSort($scope.arraySortInsertion);
		var tf = new Date(); 
		insertionSortTime = tf - t0;
		setTIme();
	}

	$scope.sortAll = function(){
		$scope.startInserionSort();
		$scope.startSelectionSort();
	}

	$scope.createArray = function(){
		var arrayAux = [];
		var arrayAux2 = [];

		for (var i = 0; $scope.maxValue > i ; i++) {
			arrayAux[i] = Math.random()*101|0;


			arrayAux2[i] = arrayAux[i];
		}

		$scope.arraySortSelection = arrayAux;
		$scope.arraySortInsertion = arrayAux2;
	}

	$scope.labels = ['Tempo(ms) gasto para ordenar'];
	$scope.series = ['Insertion Sort', 'Selection Sort'];
	

	$scope.data = [
	    [insertionSortTime], [selectionSortTime]
	];

	$scope.options = {
		legend: {
            display: true,
            labels: {
                fontColor: "#777777",
            }
        },
	    scales: {
	        yAxes: [{
	            ticks: {
	                beginAtZero: true
	            }
	        }]
	    }
	}
	
}]);