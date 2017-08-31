// Author - Renê Alves Barbosa | renealves@lavid.ufpb.br

/* recommended */
// createSessionController.js

'use strict';

app.controller('comparacao2Controller', ['$scope', function ($scope) {

	$scope.arraySortMerge = [];
	$scope.arraySortQuick = [];
	$scope.arraySortHeapk = [];

	var mergeSortTime = 0;
	var quickSortTime = 0;
	var heapSortTime = 0;

	$scope.maxValue = 1000;

	//Merge sort 

	var mergeSort = function (arr){
	    if (arr.length < 2)
	        return arr;
	 
	    var middle = parseInt(arr.length / 2);
	    var left   = arr.slice(0, middle);
	    var right  = arr.slice(middle, arr.length);
	 
	    return merge(mergeSort(left), mergeSort(right));
	}
 
	var merge = function (left, right){
	    var result = [];
	 
	    while (left.length && right.length) {
	        if (left[0] <= right[0]) {
	            result.push(left.shift());
	        } else {
	            result.push(right.shift());
	        }
	    }
	 
	    while (left.length)
	        result.push(left.shift());
	 
	    while (right.length)
	        result.push(right.shift());
	 
	    return result;
	}

	//Quick sort
	var quickSort = function (arr, left, right){
	   var len = arr.length, 
	   pivot,
	   partitionIndex;


	  if(left < right){
	    pivot = right;
	    partitionIndex = partition(arr, pivot, left, right);
	    
	   //sort left and right
	   quickSort(arr, left, partitionIndex - 1);
	   quickSort(arr, partitionIndex + 1, right);
	  }
	  return arr;
	}

	var partition = function (arr, pivot, left, right){
	   	var pivotValue = arr[pivot],
	       partitionIndex = left;

	   	for(var i = left; i < right; i++){
	    	if(arr[i] < pivotValue){
	      		swap(arr, i, partitionIndex);
	     	partitionIndex++;
	    	}
	  }
	  swap(arr, right, partitionIndex);
	  return partitionIndex;
	}

	var swap = function (arr, i, j){
	   var temp = arr[i];
	   arr[i] = arr[j];
	   arr[j] = temp;
	}

	var setTIme = function (){
		$scope.data = [
		    [mergeSortTime], [quickSortTime], [heapSortTime]
		];
	}


	//Heap sort 
	var heapSort = function (arr){
	  var len = arr.length,
	      end = len-1;

	  heapify(arr, len);
	  
	  while(end > 0){
	   swap(arr, end--, 0);
	   siftDown(arr, 0, end);
	  }
	  return arr;
	}

	var heapify = function (arr, len){
	   // break the array into root + two sides, to create tree (heap)
	   var mid = Math.floor((len-2)/2);
	   while(mid >= 0){
	    siftDown(arr, mid--, len-1);    
	  }
	}

	var siftDown = function (arr, start, end){
	   var root = start,
	       child = root*2 + 1,
	       toSwap = root;
	   while(child <= end){
	      if(arr[toSwap] < arr[child]){
	        swap(arr, toSwap, child);
	      }
	      if(child+1 <= end && arr[toSwap] < arr[child+1]){
	        swap(arr, toSwap, child+1)
	      }
	      if(toSwap != root){
	         swap(arr, root, toSwap);
	         root = toSwap;
	      }
	      else{
	         return; 
	      }
	      toSwap = root;
	      child = root*2+1
	  }
	}

	$scope.startMergeSort = function(){
		var t0 = new Date();
		$scope.arraySortMerge = mergeSort($scope.arraySortMerge);
		var tf = new Date(); 
		mergeSortTime = tf - t0;
		setTIme();
	}

	$scope.startQuickSort = function(){
		var t0 = new Date();
		$scope.arraySortQuick = quickSort($scope.arraySortQuick, 0, $scope.maxValue-1);
		var tf = new Date(); 
		quickSortTime = tf - t0;
		setTIme();
	}

	$scope.startHeapSort = function(){
		var t0 = new Date();
		$scope.arraySortHeap = heapSort($scope.arraySortHeap);
		var tf = new Date(); 
		heapSortTime = tf - t0;
		setTIme();
	}

	$scope.sortAll = function(){
		$scope.startMergeSort();
		$scope.startQuickSort();
		$scope.startHeapSort();
	}

	$scope.createArray = function(){
		var arrayAux = [];
		var arrayAux2 = [];
		var arrayAux3 = [];

		for (var i = 0; $scope.maxValue > i ; i++) {
			arrayAux[i] = Math.random()*101|0;
			arrayAux2[i] = arrayAux[i];
			arrayAux3[i] = arrayAux[i];
		}

		$scope.arraySortMerge = arrayAux;
		$scope.arraySortQuick = arrayAux2;
		$scope.arraySortHeap = arrayAux3;
	}

	$scope.labels = ['Tempo(ms) gasto para ordenar'];
	$scope.series = ['Merge Sort', 'Quick Sort', 'Heap Sort'];
	

	$scope.data = [
	    [mergeSortTime], [quickSortTime], [heapSortTime]
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