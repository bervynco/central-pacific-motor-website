app.controller('OfferingController', function ($scope, $rootScope, $interval, DataFactory, $state, $mdDialog) {
    $scope.SVG = $scope.ConfigurableItems.SVG;
    $scope.$parent.ChangeState("offerings");
    $scope.$parent.ChangeLoadBarState(false);
    $scope.currentPage = 1;
    $scope.divCount = 0;
    $scope.hoverEdit = false;
    DataFactory.GetData().success(function(response){
        $scope.offeringList = response;
        $scope.divCount = ($scope.offeringList.length / 4);
        console.log(response);
    }).error(function(error){

    });
    // $scope.offeringList = [1,2,3,4,5,6,7,8,9,0];

    $scope.search = JSON.parse(localStorage.getItem("search"));
    $scope.ChangePage = function(i){
    }
    $scope.NextPage = function(i){

        if(($scope.currentPage + 1 ) <= $scope.offeringList.length + 1){
            $scope.currentPage = $scope.currentPage + 1;
        }
        
    }
    $scope.PreviousPage = function(i){
        if($scope.currentPage != 1){
            $scope.currentPage = $scope.currentPage - 1;
        }
    }

    $scope.hoverIn = function(){
        $scope.hoverEdit = true;
    }

    $scope.hoverOut = function(){
        $scope.hoverEdit = false;
    }
});