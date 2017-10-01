app.controller('HomeController', function ($scope, $rootScope, $interval, DataFactory, $state) {
	// $scope.$parent.CheckSessionData('home');
	$scope.$parent.ChangeState('home');
	$scope.$parent.ChangeLoadBarState(false);
	$scope.search = {
		manufacturer: '',
		model: '',
		minimum: '',
		maximum: ''
	}

	$scope.SearchNow = function(){
		localStorage.setItem("search", JSON.stringify($scope.search));
		$scope.$parent.ChangeState("offerings");
	}
});