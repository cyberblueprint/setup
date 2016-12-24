angular.module('app', [])
.controller('mainCtrl', function($scope){
	$scope.todo = function(){
		console.log('Clicked');
	}
})