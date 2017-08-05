app.controller('OfferingController', function ($scope, $rootScope, $interval, DataFactory, $state, $mdDialog) {
    $scope.SVG = $scope.ConfigurableItems.SVG;
    $scope.$parent.ChangeState("offerings");
    $scope.$parent.ChangeLoadBarState(false);
   
});