/* For Authentication and UI-Router */
var mainRouter = angular.module('Main-Router', ["ui.router"]); //
mainRouter.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('site', {
            'abstract': true,
            template: '<div ui-view layout flex/>'
        })
        //LoginMain Page
        .state('home', {
            parent: 'site',
            data: {
                roles: []
            },
            url: "/home",
            templateUrl: "./angular/Templates/Home/home.html",
            controller: "HomeController"
        })
        .state('offerings', {
            parent: 'site',
            data: {
                roles: []
            },
            url: "/offerings",
            templateUrl: "./angular/Templates/Offerings/offerings.html",
            controller: "OfferingController"
        })
        .state('contacts', {
            parent: 'site',
            data: {
                roles: []
            },
            url: "/contacts",
            templateUrl: "./angular/Templates/Contacts/contact.html",
            controller: "ContactController"
        })
        .state('aboutus', {
            parent: 'site',
            data: {
                roles: []
            },
            url: "/aboutus",
            templateUrl: "./angular/Templates/AboutUs/aboutus.html",
            controller: "AboutUsController"
        })
        // .state('home', {
        //     parent: 'site',
        //     data: {
        //         roles: []
        //     },
        //     url: "/home",
        //     templateUrl: "./angular/Templates/Home/home.html",
        //     controller: "HomeController"
        // })
        // .state('reports', {
        //     parent: 'site',
        //     data: {
        //         roles: []
        //     },
        //     url: "/reports",
        //     templateUrl: "./angular/Templates/Reports/reports.html",
        //     controller: "ReportsController"
        // })
        // .state('help', {
        //     parent: 'site',
        //     data: {
        //         roles: []
        //     },
        //     url: "/help",
        //     templateUrl: "./angular/Templates/Help/help.html",
        //     controller: "HelpController"
        // })
}]);