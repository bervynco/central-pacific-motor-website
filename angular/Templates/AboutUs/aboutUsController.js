app.controller('AboutUsController', function ($scope, $rootScope, $interval, DataFactory, $state, $mdDialog) {
    $scope.SVG = $scope.ConfigurableItems.SVG;
    $scope.$parent.ChangeState("aboutus");
    $scope.$parent.ChangeLoadBarState(false);
    
});