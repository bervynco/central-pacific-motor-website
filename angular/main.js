/* MAIN MODULE */
var app = angular.module('MainApplication', [
    "ds.clock",
    "Main-Factory",
    "Main-Directives",
    "Main-Router",
    "Main-ContentManager",
    'ngSanitize',
    'ngAnimate',
    "ngMaterial",
    "jQueryScrollbar",
    "LocalStorageModule"]); //
app.controller('MainController', function ($mdDialog, $mdToast, $state, $mdSidenav, $rootScope, $scope, $log, DataFactory, ConfigurableItems) {
    $scope.Date = {
        'weekday': moment().format('dddd'),
        'day': moment().format('Day'),
        'month': moment().format('MMMM'),
        'year': moment().format('YYYY'),
        'time': moment().format("h:mm:ss a")
    }

    $scope.ConfigurableItems = ConfigurableItems;  
    $scope.SVG = $scope.ConfigurableItems.SVG;
    $scope.loadstate = true;

    

    $scope.GetMainState = function () {
        return $scope.MainState;
    }
    $scope.ChangeState = function (num) {
        console.log(num);
        $state.go(num);
        $scope.MainState = num;
        $scope.ChangeLoadBarState(true);
    }
    $scope.ChangeLoadBarState = function(loading){
        $scope.loadstate = loading
    }


    $scope.ToggleSideNav = function (cid) {
        $mdSidenav(cid).toggle();
    }

    $scope.Threads = [];
    
    $scope.KillThreads = function () {
        angular.forEach($scope.Threads, function (o) {
            clearInterval(o);
        });
        $scope.Threads = [];
    }
    
});