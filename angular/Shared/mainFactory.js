/* Factory */
var mainFactory = angular.module('Main-Factory', []); //
mainFactory.factory('DataFactory', ['$http', function ($http) {
    var pre = "";

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < 3; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    return {
        //Samples
        SampleGET: function () {
            return $http({
                url: "url/sampleget",
                method: 'GET', cache: false
            });
        },
        SamplePOST: function (obj) {
            return $http({
                method: "POST",
                url: "url/samplepost",
                data: obj,
            });
        },

        /* Login */
        RequestAccess: function(user){
            return $http({
                method: "POST",
                url: "UserManagement/requestAccess",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: user
            });
        },
        SignIn: function(user){
            return $http({
                method: "POST",
                url: "UserManagement/login",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: user
            });
        },
        GetRegistrationList: function(){
            return $http({
                url: "UserManagement/getRegistrationList",
                method: 'GET', cache: false
            });
        },
        GrantUserAccess: function(registration_id, name, email){
            return $http({
                method: "POST",
                url: "UserManagement/grantUserAccess",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {'registration_id': registration_id, 'name': name, 'email': email}
            });
        },
        RejectUserAccess: function(registration_id, reason){
            return $http({
                method: "POST",
                url: "UserManagement/denyUserAccess",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {'registration_id': registration_id, 'comment': reason}
            });
        },
        GetAccountList: function(){
            return $http({
                url: "AccountManagement/selectAllAccount",
                method: 'GET', cache: false
            });
        },
        GetAccountSegmentList: function(account_id){
            return $http({
                url: "AccountManagement/selectSegmentByAccountId",
                method: 'GET', cache: false,
                data: {'account_id': account_id}
            });
        },
        GetAccountTeamList: function(segment_id){
            return $http({
                url: "AccountManagement/selectSegmentByAccountId",
                method: 'GET', cache: false,
                data: {'segment_id': segment_id}
            });
        },
        AssignUserToAccount: function(user_id, account_id){
            return $http({
                method: "POST",
                url: "AccountManagement/assignUserToAccount",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {'user_id': user_id, 'account_id': account_id}
            });

        }
        /* End of Login */
    }

}]);