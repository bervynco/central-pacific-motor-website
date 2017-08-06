app.controller('ContactController', function ($scope, $rootScope, $interval, DataFactory, $state, $mdDialog) {
    $scope.SVG = $scope.ConfigurableItems.SVG;
    $scope.$parent.ChangeState("contacts");
    $scope.$parent.ChangeLoadBarState(false);
    $scope.contactState = false;
    $scope.ChangeContactState = function(){
       $scope.contactState = true;
    } 
    function myMap(){
        var mapProp= {
            center:new google.maps.LatLng(14.632866,121.044560),
            zoom:5,
        };
        var map=new google.maps.Map(document.getElementById("map"),mapProp);
    }
});