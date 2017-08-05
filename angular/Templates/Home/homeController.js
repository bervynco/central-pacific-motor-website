app.controller('HomeController', function ($scope, $rootScope, $interval, DataFactory, $state) {
	// $scope.$parent.CheckSessionData('home');
	$scope.$parent.ChangeLoadBarState(false);
	$scope.homeState = 'landing'
	$scope.StartNow = function(state){
		$scope.homeState = state;
	}
});