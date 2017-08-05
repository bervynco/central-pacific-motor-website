app.controller('ContactController', function ($scope, $rootScope, $interval, DataFactory, $state, $mdDialog) {
    $scope.SVG = $scope.ConfigurableItems.SVG;
    $scope.$parent.ChangeState("contacts");
    $scope.$parent.ChangeLoadBarState(false);
    
});